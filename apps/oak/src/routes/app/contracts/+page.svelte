<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { getContext } from '$lib/utils';
	import DataTable from './data-table.svelte';
	import { FormDialog } from '$lib/components/ui/form-dialog';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import ContractForm from './contract-form.svelte';

	export let data;

	const iam = getContext('iam');
	const currentProfile = getContext('currentProfile');

	let formOpen = false;
	let contracts = data.contracts;
	let userPending = data.contracts.filter(
		(c) => c.approver_id === $currentProfile.id && c.status === 'pending approval'
	);
	let userPendingApprovalsMode = false;
	let selectVendorId: string | null = null;

	$: if (userPendingApprovalsMode) {
		contracts = userPending;
	} else {
		contracts = data.contracts;
	}

	$: parentContracts = data.contracts.filter((c) => c.vendor_id === selectVendorId);
</script>

<h1 class="text-3xl">Contracts</h1>

<div class="container mx-auto py-10">
	{#key contracts}
		<DataTable
			data={contracts}
			bind:userPendingApprovalsMode
			userPendingApprovalsCount={userPending.length}
		>
			<svelte:fragment slot="entry-form">
				{#if iam.isAllowedTo('contracts.create') && !iam.isAllowedTo('contracts.sign') && !$currentProfile.approver_id}
					<AlertDialog.Root>
						<AlertDialog.Trigger>
							<Button><Plus />Add</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Approver required</AlertDialog.Title>
								<AlertDialog.Description>
									To add a contract, reach out to your admin to get assigned an approver
									(supervisor).
								</AlertDialog.Description>
							</AlertDialog.Header>
							<AlertDialog.Footer>
								<AlertDialog.Action>OK</AlertDialog.Action>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
				{/if}

				{#if (iam.isAllowedTo('contracts.create') && $currentProfile.approver_id) || iam.isAllowedTo('contracts.sign')}
					<FormDialog bind:open={formOpen} title="Add contract">
						<svelte:fragment slot="trigger">
							<Dialog.Trigger>
								<Button><Plus />Add</Button>
							</Dialog.Trigger>
						</svelte:fragment>
						<ContractForm
							data={data.form}
							{parentContracts}
							onVendorSelect={(id) => (selectVendorId = id)}
							onSuccess={() => {
								toast.success('Contract successfully created!');
								formOpen = false;
							}}
						/>
					</FormDialog>
				{/if}
			</svelte:fragment>
		</DataTable>
	{/key}
</div>
