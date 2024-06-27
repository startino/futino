<script lang="ts">
	import { CalendarDate, getLocalTimeZone, parseDate, today } from '@internationalized/date';

	import DataTable from './data-table.svelte';
	import { getReportRows } from '$lib/utils';
	import { DateInput } from '$lib/components/ui/date-input';

	export let data;

	let selectedPeriod = today(getLocalTimeZone());

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
