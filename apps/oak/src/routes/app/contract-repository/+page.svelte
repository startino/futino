<script lang="ts">
	import { Render, createRender } from '$lib/svelte-render';
	import { createTable, Subscribe } from '$lib/svelte-headless-table';
	import {
		addSortBy,
		addPagination,
		addTableFilter,
		addSelectedRows,
		addHiddenColumns
	} from '$lib/svelte-headless-table/plugins';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import Actions from '$lib/components/ui/data-table/data-table-actions.svelte';
	import { Button } from '$lib/components/ui/button';
	// TODO: Replace radix with lucide icons, radix hasn't had an update in 2 years
	import { CaretSort, ChevronDown } from 'radix-icons-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
	import { Input } from '$lib/components/ui/input';
	import DataTableCheckbox from '$lib/components/ui/data-table/data-table-checkbox.svelte';

	type Contract = {
		id: string;
		amount: number;
		status: 'Pending' | 'Active' | 'Paid' | 'Partially';
		department: 'Accounting' | 'IT' | 'Legal';
		startDate: string;
		endDate: string;
		spendCategory: 'Testing' | 'Manufacturing' | 'Legal';
		attachment: string;
		projectCode: number;
		creator: string;
		approver: string;
		description: string;
		vendorName: string;
	};

	const data: Contract[] = [
		{
			id: '1',
			amount: 1000,
			status: 'Pending',
			department: 'Accounting',
			startDate: '2024-01-01',
			endDate: '2024-02-01',
			spendCategory: 'Testing',
			attachment: 'contract_1.pdf',
			projectCode: 123,
			creator: 'John Doe',
			approver: 'Jane Smith',
			description: 'This is the description for contract 1.',
			vendorName: 'ABC Corporation'
		},
		{
			id: '2',
			amount: 2000,
			status: 'Active',
			department: 'IT',
			startDate: '2024-02-01',
			endDate: '2024-03-01',
			spendCategory: 'Manufacturing',
			attachment: 'contract_2.pdf',
			projectCode: 456,
			creator: 'Alice Johnson',
			approver: 'Bob Brown',
			description: 'This is the description for contract 2.',
			vendorName: 'XYZ Tech Solutions'
		},
		{
			id: '3',
			amount: 1500,
			status: 'Paid',
			department: 'Legal',
			startDate: '2024-03-01',
			endDate: '2024-04-01',
			spendCategory: 'Legal',
			attachment: 'contract_3.pdf',
			projectCode: 789,
			creator: 'Charlie Williams',
			approver: 'David Davis',
			description: 'This is the description for contract 3.',
			vendorName: 'Legal Services Inc.'
		},
		{
			id: '4',
			amount: 3000,
			status: 'Partially',
			department: 'Accounting',
			startDate: '2024-04-01',
			endDate: '2024-05-01',
			spendCategory: 'Testing',
			attachment: 'contract_4.pdf',
			projectCode: 101,
			creator: 'Eva Taylor',
			approver: 'Frank White',
			description: 'This is the description for contract 4.',
			vendorName: 'Test Solutions Ltd.'
		},
		{
			id: '5',
			amount: 2500,
			status: 'Active',
			department: 'IT',
			startDate: '2024-05-01',
			endDate: '2024-06-01',
			spendCategory: 'Manufacturing',
			attachment: 'contract_5.pdf',
			projectCode: 202,
			creator: 'Grace Miller',
			approver: 'Harry Hall',
			description: 'This is the description for contract 5.',
			vendorName: 'Manufacturing Innovations LLC'
		},
		{
			id: '6',
			amount: 1800,
			status: 'Pending',
			department: 'Legal',
			startDate: '2024-06-01',
			endDate: '2024-07-01',
			spendCategory: 'Legal',
			attachment: 'contract_6.pdf',
			projectCode: 303,
			creator: 'Ivy Turner',
			approver: 'John Jackson',
			description: 'This is the description for contract 6.',
			vendorName: 'Legal Solutions Co.'
		},
		{
			id: '7',
			amount: 2200,
			status: 'Paid',
			department: 'Accounting',
			startDate: '2024-07-01',
			endDate: '2024-08-01',
			spendCategory: 'Testing',
			attachment: 'contract_7.pdf',
			projectCode: 404,
			creator: 'Kevin Harris',
			approver: 'Laura Lewis',
			description: 'This is the description for contract 7.',
			vendorName: 'Accounting Solutions Ltd.'
		},
		{
			id: '8',
			amount: 2800,
			status: 'Partially',
			department: 'IT',
			startDate: '2024-08-01',
			endDate: '2024-09-01',
			spendCategory: 'Manufacturing',
			attachment: 'contract_8.pdf',
			projectCode: 505,
			creator: 'Mia Moore',
			approver: 'Nathan Nelson',
			description: 'This is the description for contract 8.',
			vendorName: 'Tech Innovators Inc.'
		},
		{
			id: '9',
			amount: 1600,
			status: 'Active',
			department: 'Legal',
			startDate: '2024-09-01',
			endDate: '2024-10-01',
			spendCategory: 'Legal',
			attachment: 'contract_9.pdf',
			projectCode: 606,
			creator: 'Oliver Olson',
			approver: 'Patricia Parker',
			description: 'This is the description for contract 9.',
			vendorName: 'Legal Advisors Ltd.'
		},
		{
			id: '10',
			amount: 2400,
			status: 'Pending',
			department: 'Accounting',
			startDate: '2024-10-01',
			endDate: '2024-11-01',
			spendCategory: 'Testing',
			attachment: 'contract_10.pdf',
			projectCode: 707,
			creator: 'Quinn Quinn',
			approver: 'Robert Roberts',
			description: 'This is the description for contract 10.',
			vendorName: 'ABC Testing Solutions'
		}
	];

	const table = createTable(readable(data), {
		sort: addSortBy({ disableMultiSort: true }),
		page: addPagination(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.includes(filterValue)
		}),
		select: addSelectedRows(),
		hide: addHiddenColumns()
	});

	const columns = table.createColumns([
		table.column({
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select;
				return createRender(DataTableCheckbox, {
					checked: allPageRowsSelected
				});
			},
			accessor: 'id',
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select;
				const { isSelected } = getRowState(row);

				return createRender(DataTableCheckbox, {
					checked: isSelected
				});
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: 'Status',
			accessor: 'status',
			plugins: { sort: { disable: true }, filter: { exclude: true } }
		}),
		table.column({
			header: 'Department',
			accessor: 'department',
			plugins: { sort: { disable: true }, filter: { exclude: true } }
		}),
		table.column({
			header: 'Description',
			accessor: 'description',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				}
			}
		}),
		table.column({
			header: 'Amount',
			accessor: 'amount',
			cell: ({ value }) => {
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(value);
				return formatted;
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: 'Start Date',
			accessor: 'startDate',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				}
			}
		}),
		table.column({
			header: 'End Date',
			accessor: 'endDate',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				}
			}
		}),
		table.column({
			header: 'Project Code',
			accessor: 'projectCode'
		}),
		table.column({
			header: 'Vendor Name',
			accessor: 'vendorName',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				}
			}
		}),
		table.column({
			header: 'Creator',
			accessor: 'creator',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				}
			}
		}),
		table.column({
			header: 'Approver',
			accessor: 'approver',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				}
			}
		}),
		table.column({
			header: 'Attachement',
			accessor: 'attachment',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				}
			}
		}),
		table.column({
			header: '',
			accessor: ({ id }) => id,
			cell: (item) => {
				return createRender(Actions, { id: item.value });
			},
			plugins: {
				sort: {
					disable: true
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, flatColumns, pluginStates, rows } =
		table.createViewModel(columns);

	const { sortKeys } = pluginStates.sort;

	const { hiddenColumnIds } = pluginStates.hide;
	const ids = flatColumns.map((c) => c.id);
	let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;

	const { selectedDataIds } = pluginStates.select;

	const hideableCols = ['status', 'amount'];
</script>

<div class="w-full">
	<div class="mb-4 flex items-center gap-4">
		<Input
			class="max-w-sm"
			placeholder="Filter vendor names..."
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
					{#if hideableCols.includes(col.id)}
						<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
							{col.header}
						</DropdownMenu.CheckboxItem>
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
									<Table.Head {...attrs} class={cn('[&:has([role=checkbox])]:pl-3')}>
										{#if cell.id === 'amount'}
											<div class="text-right">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'email'}
											<Button variant="ghost" on:click={props.sort.toggle}>
												<Render of={cell.render()} />
												<CaretSort
													class={cn(
														$sortKeys[0]?.id === cell.id && 'text-foreground',
														'ml-2 h-4 w-4'
													)}
												/>
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
						<Table.Row {...rowAttrs} data-state={$selectedDataIds[row.id] && 'selected'}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell class="[&:has([role=checkbox])]:pl-3" {...attrs}>
										{#if cell.id === 'amount'}
											<div class="text-right font-medium">
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
	<div class="flex items-center justify-end space-x-2 py-4">
		<div class="flex-1 text-sm text-muted-foreground">
			{Object.keys($selectedDataIds).length} of{' '}
			{$rows.length} row(s) selected.
		</div>
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
</div>
