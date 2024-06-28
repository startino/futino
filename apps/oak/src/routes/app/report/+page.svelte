<script lang="ts">
	import { getLocalTimeZone, today } from '@internationalized/date';

	import DataTable from './data-table.svelte';
	import { getReportRows } from '$lib/utils';
	import { DateInput } from '$lib/components/ui/date-input';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import { Button } from '$lib/components/ui/button';
	import { Trigger } from '$lib/components/ui/dialog';

	export let data;

	let selectedPeriod = today(getLocalTimeZone());

	$: rows = getReportRows(data.contracts, selectedPeriod);
</script>

<h1 class="mb-10 text-3xl">Report</h1>

<div class="mb-4 flex items-center justify-between">
	<DateInput bind:value={selectedPeriod} />

	<FormDialog title="Monthly Report Snapshots">
		<svelte:fragment slot="trigger">
			<Trigger>
				<Button>Show Report Snapshots</Button>
			</Trigger>
		</svelte:fragment>

		{#if data.snapshots.length === 0}
			<p>No report snapshots for now</p>
		{:else}
			<ul class=" grid list-disc gap-2 px-2">
				{#each data.snapshots as snapshot}
					<li>
						<a href={snapshot.url} download class="text-primary hover:text-accent"
							>{snapshot.label}</a
						>
					</li>
				{/each}
			</ul>
		{/if}
	</FormDialog>
</div>

{#key selectedPeriod}
	{#if rows.length > 0}
		<DataTable data={rows} />
	{:else}
		<p class="text-muted-foreground">No data available for this period</p>
	{/if}
{/key}
