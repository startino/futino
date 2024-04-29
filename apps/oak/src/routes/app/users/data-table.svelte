<script lang="ts">
	import { writable } from 'svelte/store';
	import { ArrowUpDown, Search } from 'lucide-svelte';

	import { createTable, Subscribe } from '$lib/svelte-headless-table';
	import { addPagination, addTableFilter } from '$lib/svelte-headless-table/plugins';
	import { Render } from '$lib/svelte-render';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { cn, formatAmount, getContext } from '$lib/utils';
	import type { JoinedProfile } from '$lib/types';
	import { goto } from '$app/navigation';

	export let data: JoinedProfile[];

	const currentProfile = getContext('currentProfile');

	const table = createTable(writable(data), {
		page: addPagination(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLocaleLowerCase())
		})
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'full_name',
			header: 'Name'
		}),
		table.column({
			accessor: 'approval_threshold',
			header: 'Approval Threshold',
			cell: ({ value }) => formatAmount(value),
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'approver',
			header: 'Supervisor',
			plugins: {
				filter: {
					getFilterValue: (value) => (value ? value.full_name : 'none')
				}
			},
			cell: ({ value }) => (value ? value.full_name : 'none')
		}),
		table.column({
			accessor: 'role',
			header: 'Role'
		}),
		table.column({
			accessor: 'created_at',
			header: 'Created At',
			cell: ({ value }) => new Date(value).toDateString(),
			plugins: {
				filter: {
					exclude: true
				}
			}
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
			<Input class="w-[400px]" placeholder="Filter names and roles" bind:value={$filterValue} />
		</div>

		<span class="flex-grow" />

		{#if $currentProfile.role === 'admin'}
			<slot name="entry-form" />
		{/if}
	</div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
									<Table.Head {...attrs}>
										{#if cell.id === 'approval_threshold'}
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
										{#if cell.id === 'approval_threshold'}
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
