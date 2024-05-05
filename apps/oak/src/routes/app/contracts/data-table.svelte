<script lang="ts">
	import { writable } from 'svelte/store';
	import { ArrowUpDown, Search } from 'lucide-svelte';

	import { createTable, Subscribe } from '$lib/svelte-headless-table';
	import { addPagination, addTableFilter, addSortBy } from '$lib/svelte-headless-table/plugins';
	import { Render } from '$lib/svelte-render';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { cn, formatAmount, getContext } from '$lib/utils';
	import type { ContractDatableRow } from '$lib/types';
	import { goto } from '$app/navigation';

	export let data: ContractDatableRow[];

	export let userPendingApprovalsMode: boolean;
	export let userPendingApprovalsCount: number;

	const currentProfile = getContext('currentProfile');

	const table = createTable(writable(data), {
		page: addPagination(),
		sort: addSortBy(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLocaleLowerCase())
		})
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'number',
			header: 'Number',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: 'owner',
			header: 'Owner',
			plugins: {
				filter: {
					getFilterValue: (value) => value.full_name
				},
				sort: {
					disable: true
				}
			},
			cell: ({ value }) => value.full_name
		}),
		table.column({
			accessor: 'vendor',
			header: 'Vendor',
			plugins: {
				filter: {
					getFilterValue: (value) => value.name
				},
				sort: {
					disable: true
				}
			},
			cell: ({ value }) => value.name
		}),
		table.column({
			accessor: 'description',
			header: 'Description',
			plugins: {
				sort: {
					disable: true
				}
			}
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
			accessor: 'status',
			header: 'Status'
		}),
		table.column({
			accessor: 'created_at',
			header: 'Created At',
			cell: ({ value }) => new Date(value).toDateString()
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
				placeholder="Filter numbers, owners, vendors, description, status..."
				type="text"
				bind:value={$filterValue}
			/>
		</div>

		{#if $currentProfile.role !== 'admin' && userPendingApprovalsCount > 0}
			<div class="flex items-center space-x-2">
				<Switch id="user-pending-approvals" bind:checked={userPendingApprovalsMode} />
				<Label for="user-pending-approvals" class="text-sm text-primary">Pending approvals</Label>
			</div>
		{/if}
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
				{#each $pageRows as row, i (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row
							{...rowAttrs}
							class={cn('cursor-pointer')}
							on:click={() => goto(`/app/contracts/${data[i].id}`)}
						>
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
