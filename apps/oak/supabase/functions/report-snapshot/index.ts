// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />
import { createClient, type SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { today, getLocalTimeZone, parseDate } from 'npm:@internationalized/date';

export const toDateString = (date: Date) => date.toLocaleDateString('en-us');

const getMonthsDifference = (startStr: string, endStr: string) => {
	let start = parseDate(startStr);
	let end = parseDate(endStr);
	let multiplier: 1 | -1 = 1;

	if (start.compare(end) > 0) {
		multiplier = -1;
		[start, end] = [end, start];
	}

	const yearDifference = end.year - start.year;
	const monthDifference = end.month - start.month;

	let difference = (yearDifference * 12 + monthDifference) * multiplier;

	if (start.year === end.year && start.month === end.month) {
		const lastDayOfMonth = new Date(end.year, end.month, 0).getDate();
		if (start.day === 1 && end.day === lastDayOfMonth) {
			difference = multiplier;
		}
	}

	return difference;
};

const arrayToCSV = (data: any[]) => {
	const csvRows = [];
	const headers = Object.keys(data[0]);
	csvRows.push(headers.join(','));

	for (const row of data) {
		const values = headers.map((header) => {
			const escaped = ('' + row[header]).replace(/"/g, '\\"');
			return `"${escaped}"`;
		});
		csvRows.push(values.join(','));
	}

	return csvRows.join('\n');
};

const getReportRows = (data: ReportContracts, period: CalendarDate): ReportDataTableRow[] => {
	return data
		.filter((c) => period.compare(parseDate(c.start_date)) >= 0)
		.map((c) => {
			const billedAmount = c.bills
				.filter(
					(b) =>
						b.posting_period &&
						parseDate(b.posting_period).compare(period) <= 0 &&
						b.status === 'approved'
				)
				.reduce((prev, curr) => prev + curr.amount, 0);

			let elapsedMonths: number;

			if (
				period.compare(parseDate(c.end_date)) <= 0 &&
				period.compare(parseDate(c.start_date)) >= 0
			) {
				elapsedMonths = getMonthsDifference(c.start_date, period.toString());
			} else if (period.compare(parseDate(c.end_date)) > 0) {
				elapsedMonths = getMonthsDifference(c.start_date, c.end_date);
				elapsedMonths === 0 && (elapsedMonths = 1);
			} else {
				elapsedMonths = 0;
			}

			const totalMonths = getMonthsDifference(c.start_date, c.end_date);

			let accrualBalance = 0;

			accrualBalance =
				(elapsedMonths / (totalMonths === 0 ? 1 : totalMonths)) * c.amount - billedAmount;

			return { ...c, billedAmount, accrualBalance, openAmount: c.amount - billedAmount };
		});
};

const getReportContracts = async ({ supabase, orgId }: Option) =>
	await supabase
		.from('contracts')
		.select(
			`
    *,
    parent:parent_contract_id (*),
    bills (*),
    vendor:vendors (name),
    department:departments (number, name),
    account:accounts (number),
    project:projects (name),
    category:spend_categories (name)
  `
		)
		.eq('organization_id', orgId)
		.eq('signed', true);

export interface ReportDataTableRow extends ReportContractsItem {
	billedAmount: number;
	accrualBalance: number;
	openAmount: number;
}

type Option = {
	supabase: SupabaseClient;
	orgId: string;
};
type QueryResult = ReturnType<typeof getReportContracts> extends Promise<infer R> ? R : never;
export type ReportContracts = QueryResult extends { data: infer D } ? D : never;
type ReportContractsItem = ReportContracts extends (infer U)[] ? U : never;

Deno.serve(async (req) => {
	const supabase = createClient(
		Deno.env.get('SUPABASE_URL'),
		Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
	);

	let period = today(getLocalTimeZone());
	let orgToCSV: Record<string, Blob> = {};

	const { data: organizations } = await supabase.from('organizations').select();

	if (!organizations)
		return new Response('OK', { headers: { 'Content-Type': 'application/json' } });

	for (const org of organizations) {
		const { data: reportContracts } = await getReportContracts({ supabase, orgId: org.id });
		const reportRows = getReportRows(reportContracts, period);
		const csvData = reportRows.map((row) => ({
			Vendor: row.vendor.name,
			'Parent contract': row.parent.number,
			Contract: row.number,
			Description: row.description,
			'Start Date': toDateString(new Date(row.start_date)),
			'End Date': toDateString(new Date(row.end_date)),
			Amount: row.openAmount,
			Department: `${row.department.number} - ${row.department.name}`,
			Project: row.project.name,
			Category: row.category.name,
			'Billed Amount': row.billedAmount,
			'Accrual Balance': row.accrualBalance,
			'Open Amount': row.openAmount
		}));

		if (csvData[0]) {
			orgToCSV[org.id] = new Blob([arrayToCSV(csvData)], { type: 'text/csv' });
		}
	}

	for (const [orgId, csv] of Object.entries(orgToCSV)) {
		const path = `/${orgId}/${period} ${crypto.randomUUID()}`;

		const { error } = await supabase.storage.from('report-snapshots').upload(path, csv, {
			cacheControl: '3600',
			upsert: false
		});
	}

	return new Response('OK', { headers: { 'Content-Type': 'application/json' } });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/report-snapshot' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
