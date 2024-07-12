import { today, getLocalTimeZone } from '@internationalized/date';

import { arrayToCSV, getReportRows, toDateString } from '$lib/utils';
import { getReportContracts } from '$lib/server/db/report';
import { json } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase } }) => {
	let period = today(getLocalTimeZone());
	let orgToCSV: Record<string, Blob> = {};

	const { data: organizations } = await supabase.from('organizations').select();

	for (const org of organizations) {
		const { data: reportContracts } = await getReportContracts({ supabase, orgId: org.id });
		const reportRows = getReportRows(reportContracts, period);
		const csvData = reportRows.map((row) => ({
			Vendor: row.vendor.name,
			'Parent contract': row.parent.number ?? row.number,
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
		const path = `/${orgId}/${period}-${crypto.randomUUID()}`;

		const { error } = await supabase.storage.from('report-snapshots').upload(path, csv, {
			cacheControl: '3600',
			upsert: false
		});
	}

	return json('Ok', { status: 200 });
};
