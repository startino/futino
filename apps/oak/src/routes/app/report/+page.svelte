<script lang="ts">
	import { CalendarDate, getLocalTimeZone, parseDate, today } from '@internationalized/date';

	import DataTable from './data-table.svelte';
	import type { ReportContracts, ReportDatableRow } from '$lib/types';
	import { getMonthsDifference } from '$lib/utils';
	import { DateInput } from '$lib/components/ui/date-input';

	export let data;

	let selectedPeriod = today(getLocalTimeZone());

	const getReportRows = (data: ReportContracts, period: CalendarDate): ReportDatableRow[] => {
		return data
			.filter((c) => period.compare(parseDate(c.start_date)) >= 0)
			.map((c) => {
				const billedAmount = c.bills.reduce((prev, curr) => {
					const postingPeriod = parseDate(curr.posting_period);
					if (postingPeriod.compare(period) > 0) return prev;
					return prev + curr.amount;
				}, 0);

				let elapsedMonths: number;

				if (
					period.compare(parseDate(c.end_date)) <= 0 &&
					period.compare(parseDate(c.start_date)) >= 0
				) {
					elapsedMonths = getMonthsDifference(c.start_date, period.toString());
				} else if (period.compare(parseDate(c.end_date)) > 0) {
					elapsedMonths = getMonthsDifference(c.start_date, c.end_date);
				} else {
					elapsedMonths = 0;
				}

				const totalMonths = getMonthsDifference(c.start_date, c.end_date);

				let accrualBalance = 0;

				accrualBalance = (elapsedMonths / totalMonths) * c.amount - billedAmount;

				return { ...c, billedAmount, accrualBalance, openAmount: c.amount - billedAmount };
			});
	};

	$: rows = getReportRows(data.contracts, selectedPeriod);
</script>

<h1 class="mb-10 text-3xl">Report</h1>

<div class="mb-4">
	<DateInput bind:value={selectedPeriod} />
</div>

{#key selectedPeriod}
	{#if rows.length > 0}
		<DataTable data={rows} />
	{:else}
		<p class="text-muted-foreground">No data available for this period</p>
	{/if}
{/key}
