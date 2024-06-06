<script lang="ts">
	import { writable } from 'svelte/store';

	import { createTable, Subscribe } from '$lib/svelte-headless-table';
	import { addPagination } from '$lib/svelte-headless-table/plugins';
	import { Render } from '$lib/svelte-render';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { toDateString } from '$lib/utils';
	import type { ReportDataTableRow } from '$lib/types';

	export let data: ReportDataTableRow[];

	const table = createTable(writable(data), {
		page: addPagination()
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'vendor',
			header: 'Vendor',
			cell: ({ value }) => value.name
		}),
		table.column({
			accessor: 'parent',
			header: 'Parent Contract',
			cell: ({ value }) => (value[0] ? value[0].number : 'none')
		}),
		table.column({
			accessor: 'number',
			header: 'Contract'
		}),
		table.column({
			accessor: 'description',
			header: 'Description'
		}),
		table.column({
			accessor: 'start_date',
			header: 'Start Date',
			cell: ({ value }) => toDateString(new Date(value))
		}),
		table.column({
			accessor: 'end_date',
			header: 'End Date',
			cell: ({ value }) => toDateString(new Date(value))
		}),
		table.column({
			accessor: 'amount',
			header: 'Amount'
		}),
		table.column({
			accessor: 'account',
			header: 'Account',
			cell: ({ value }) => value.number
		}),
		table.column({
			accessor: 'department',
			header: 'Department',
			cell: ({ value }) => `${value.number} - ${value.name}`
		}),
		table.column({
			accessor: 'project',
			header: 'Project',
			cell: ({ value }) => value.name
		}),
		table.column({
			accessor: 'category',
			header: 'Category',
			cell: ({ value }) => value.name
		}),
		table.column({
			accessor: 'billedAmount',
			header: 'Billed Amount'
		}),
		table.column({
			accessor: 'accrualBalance',
			header: 'Accrual Balance'
		}),
		table.column({
			accessor: 'openAmount',
			header: 'Open Amount'
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
</script>

<div class="rounded-md border">
	<Table.Root {...$tableAttrs}>
		<Table.Header>
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
								<Table.Head {...attrs}>
									{#if ['amount', 'billedAmount', 'accrualBalance', 'openAmount'].includes(cell.id)}
										<div class="text-right">
											<Render of={cell.render()} />
										</div>
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Head>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Header>
		<Table.Body {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<Table.Cell {...attrs}>
									{#if ['amount', 'billedAmount', 'accrualBalance', 'openAmount'].includes(cell.id)}
										<div class="text-right">
											<Render of={cell.render()} />
										</div>
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Cell>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Body>
	</Table.Root>
</div>

<div class="flex items-center justify-end space-x-4 py-4">
	<Button
		variant="outline"
		size="sm"
		on:click={() => ($pageIndex = $pageIndex - 1)}
		disabled={!$hasPreviousPage}>Previous</Button
	>
	<Button
		variant="outline"
		size="sm"
		disabled={!$hasNextPage}
		on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
	>
</div>
