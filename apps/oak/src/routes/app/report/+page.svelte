<script lang="ts">
	import { getLocalTimeZone, parseDate, today } from '@internationalized/date';
	import DataTable from './data-table.svelte';
	import type { ReportContracts, ReportDatableRow } from '$lib/types';
	import { getMonthsDifference } from '$lib/utils';

	export let data;

	const selectedPeriod = today(getLocalTimeZone());

	const getReportRows = (data: ReportContracts): ReportDatableRow[] => {
		return data.map((c) => {
			const billedAmount = c.bills.reduce((prev, curr) => {
				const postingPeriod = parseDate(curr.posting_period);
				if (postingPeriod.compare(selectedPeriod) > 0) return prev;
				return prev + curr.amount;
			}, 0);

			const elapsedMonths = getMonthsDifference(c.start_date, selectedPeriod.toString());
			const totalMonths = getMonthsDifference(c.start_date, c.end_date);

			let accrualBalance = 0;

			accrualBalance = (elapsedMonths / totalMonths) * c.amount - billedAmount;

			return { ...c, billedAmount, accrualBalance, openAmount: c.amount - billedAmount };
		});
	};

	const rows = getReportRows(data.contracts);
</script>

<h1 class="mb-10 text-3xl">Report</h1>

<DataTable data={rows} />
