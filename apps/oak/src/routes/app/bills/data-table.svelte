<script lang="ts">
	import { writable } from 'svelte/store';
	import { ArrowUpDown, Search } from 'lucide-svelte';

	import { createTable, Subscribe } from '$lib/svelte-headless-table';
	import { addPagination, addTableFilter, addSortBy } from '$lib/svelte-headless-table/plugins';
	import { Render } from '$lib/svelte-render';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { cn, formatAmount } from '$lib/utils';
	import type { BillDatableRow } from '$lib/types';
	import { goto } from '$app/navigation';

	export let data: BillDatableRow[];

	const table = createTable(writable(data), {
		page: addPagination(),
		sort: addSortBy(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLocaleLowerCase())
		})
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'contract',
			header: 'Contract',
			cell: ({ value }) => `#${value.number} ${value.vendor.name}`,
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			id: 'contract-owner',
			accessor: 'contract',
			header: 'Owner',
			plugins: {
				filter: {
					getFilterValue: (value) => value.full_name
				},
				sort: {
					disable: true
				}
			},
			cell: ({ value }) => value.owner.full_name
		}),
		table.column({
			accessor: 'invoice_date',
			header: 'Invoice date',
			cell: ({ value }) => new Date(value).toLocaleDateString('en-us')
		}),
		table.column({
			accessor: 'due_date',
			header: 'Due date',
			cell: ({ value }) => new Date(value).toLocaleDateString('en-us')
		}),
		table.column({
			accessor: 'amount',
			header: 'Amount',
			cell: ({ value }) => formatAmount(value),
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'accrual_period',
			header: 'Accrual period',
			cell: ({ value }) => new Date(value).toLocaleDateString('en-us')
		}),
		table.column({
			accessor: 'posting_period',
			header: 'Posting period',
			cell: ({ value }) => new Date(value).toLocaleDateString('en-us')
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;
</script>

<div>
	<div class="flex items-center gap-4 py-4">
		<div class="flex items-center gap-2">
			<Search />
			<Input
				class="w-[400px]"
				placeholder="Filter by term..."
				type="text"
				bind:value={$filterValue}
			/>
		</div>

		<span class="flex-grow" />
		<slot name="entry-form" />
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
										{#if cell.id === 'amount'}
											<div class="text-right">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'status'}
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
										{#if cell.id === 'amount'}
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
</div>
