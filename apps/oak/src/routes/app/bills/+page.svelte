<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	import DataTable from './data-table.svelte';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import BillForm from './bill-form.svelte';

	export let data;

	let formOpen = false;
</script>

<h1 class="mb-10 text-3xl">Bills</h1>
{#key data.bills}
	<DataTable data={data.bills}>
		<svelte:fragment slot="entry-form">
			<FormDialog bind:open={formOpen} title="Add bill">
				<svelte:fragment slot="trigger">
					<Dialog.Trigger>
						<Button><Plus />Add</Button>
					</Dialog.Trigger>
				</svelte:fragment>
				<BillForm
					data={data.form}
					onSuccess={() => {
						toast.success('Bill successfully created!');
						formOpen = false;
					}}
				/>
			</FormDialog>
		</svelte:fragment>
	</DataTable>
{/key}
