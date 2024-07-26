<script lang="ts">
	import { writable } from 'svelte/store';
	import { ChevronDown, ArrowUpDown } from 'lucide-svelte';

	import { createTable, Subscribe } from '$lib/svelte-headless-table';
	import {
		addPagination,
		addHiddenColumns,
		addTableFilter,
		addSortBy
	} from '$lib/svelte-headless-table/plugins';
	import { Render } from '$lib/svelte-render';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { roundToPenny, toDateString } from '$lib/utils';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Input } from '$lib/components/ui/input';
	import type { ReportDataTableRow } from '$lib/types';

	export let data: ReportDataTableRow[];

	const table = createTable(writable(data), {
		page: addPagination(),
		hide: addHiddenColumns(),
		sort: addSortBy(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLocaleLowerCase())
		})
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'vendor',
			header: 'Vendor',
			cell: ({ value }) => value.name,
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'parent',
			header: 'Parent Contract',
			cell: ({ value }: { value: { number: number } }) => {
				return value.number;
			},
			plugins: {
				sort: {
					getSortValue: (value) => value.number
				},
				filter: {
					getFilterValue: (value) => value.number
				}
			}
		}),
		table.column({
			accessor: 'number',
			header: 'Contract'
		}),
		table.column({
			accessor: 'description',
			header: 'Description',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'start_date',
			header: 'Start Date',
			cell: ({ value }) => toDateString(new Date(value)),
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'end_date',
			header: 'End Date',
			cell: ({ value }) => toDateString(new Date(value)),
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'amount',
			header: 'Amount'
		}),
		table.column({
			accessor: 'account',
			header: 'Account',
			cell: ({ value }) => value.number,
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'department',
			header: 'Department',
			cell: ({ value }) => `${value.number} - ${value.name}`,
			plugins: {
				filter: {
					getFilterValue: (value) => `${value.number} - ${value.name}`
				}
			}
		}),
		table.column({
			accessor: 'project',
			header: 'Project',
			cell: ({ value }) => value.name,
			plugins: {
				filter: {
					getFilterValue: (value) => value.name
				}
			}
		}),
		table.column({
			accessor: 'category',
			header: 'Category',
			cell: ({ value }) => value.name,
			plugins: {
				filter: {
					getFilterValue: (value) => value.name
				}
			}
		}),
		table.column({
			accessor: 'billedAmount',
			header: 'Billed Amount'
		}),
		table.column({
			accessor: 'accrualBalance',
			cell: ({ value }) => roundToPenny(value),
			header: 'Accrual Balance'
		}),
		table.column({
			accessor: 'openAmount',
			header: 'Open Amount'
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { hiddenColumnIds } = pluginStates.hide;
	const { filterValue } = pluginStates.filter;

	const ids = flatColumns.map((col) => col.id);
	let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	const hidableCols = $headerRows[0].cells.map((r) => r.id);
</script>

<div>
	<div class="flex items-center py-4">
		<Input
			class="max-w-sm"
			placeholder="Filter contract numbers..."
			type="text"
			bind:value={$filterValue}
		/>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" class="ml-auto" builders={[builder]}>
					Columns <ChevronDown class="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each flatColumns as col}
					{#if hidableCols.includes(col.id)}
						<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
							{col.header}
						</DropdownMenu.CheckboxItem>
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
<div class="rounded-md border">
	<Table.Root {...$tableAttrs}>
		<Table.Header>
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
								<Table.Head {...attrs}>
									{#if ['amount', 'billedAmount', 'accrualBalance', 'openAmount', 'number', 'parent'].includes(cell.id)}
										<div class="text-right">
											<Render of={cell.render()} />
										</div>
									{:else if ['parent', 'number'].includes(cell.id)}
										<Button variant="ghost" on:click={props.sort.toggle}>
											<Render of={cell.render()} />
											<ArrowUpDown class={'ml-2 h-4 w-4'} />
										</Button>
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
									{#if ['amount', 'billedAmount', 'accrualBalance', 'openAmount', 'number', 'parent'].includes(cell.id)}
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
