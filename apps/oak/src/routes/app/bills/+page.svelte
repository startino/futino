<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import DataTable from './data-table.svelte';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import BillForm from './bill-form.svelte';
	import { getContext } from '$lib/utils';

	export let data;

	const iam = getContext('iam');
	const currentProfile = getContext('currentProfile');

	let formOpen = false;
</script>

<h1 class="mb-10 text-3xl">Bills</h1>
{#key data.bills}
	<DataTable data={data.bills}>
		<svelte:fragment slot="entry-form">
			{#if !iam.isAllowedTo('bills.create')}
				<AlertDialog.Root>
					<AlertDialog.Trigger>
						<Button><Plus />Add</Button>
					</AlertDialog.Trigger>
					<AlertDialog.Content>
						<AlertDialog.Header>
							<AlertDialog.Title>Not allowed</AlertDialog.Title>
							<AlertDialog.Description>
								Only users with finance roles can add bills. Please reach out to your admin to
								update your role if necessary.
							</AlertDialog.Description>
						</AlertDialog.Header>
						<AlertDialog.Footer>
							<AlertDialog.Action>OK</AlertDialog.Action>
						</AlertDialog.Footer>
					</AlertDialog.Content>
				</AlertDialog.Root>
			{:else if !$currentProfile.approver_id}
				<AlertDialog.Root>
					<AlertDialog.Trigger>
						<Button><Plus />Add</Button>
					</AlertDialog.Trigger>
					<AlertDialog.Content>
						<AlertDialog.Header>
							<AlertDialog.Title>Approver required</AlertDialog.Title>
							<AlertDialog.Description>
								To add a bill, reach out to your admin to get assigned an approver (supervisor).
							</AlertDialog.Description>
						</AlertDialog.Header>
						<AlertDialog.Footer>
							<AlertDialog.Action>OK</AlertDialog.Action>
						</AlertDialog.Footer>
					</AlertDialog.Content>
				</AlertDialog.Root>
			{:else}
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
			{/if}
		</svelte:fragment>
	</DataTable>
{/key}
