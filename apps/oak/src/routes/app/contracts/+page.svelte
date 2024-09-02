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
	import type { ContractDatableRow } from '$lib/types';

	export let data;

	const iam = getContext('iam');
	const currentProfile = getContext('currentProfile');

	let formOpen = false;
	let sendingReviews = false;
	let contracts = { ...data.contracts };
	let userPending = data.contracts.filter(
		(c) => c.approver_id === $currentProfile.id && c.status === 'pending approval'
	);
	let userPendingApprovalsMode = false;
	let contractReviewsMode = false;
	let selectVendorId: string | null = null;

	const handleReviews = async (e) => {
		const reviewContracts = e.detail.contracts as ContractDatableRow[];

		const contractIds = reviewContracts.map((c) => c.id);
		sendingReviews = true;

		const response = await fetch('/api/request-reviews', {
			method: 'POST',
			body: JSON.stringify({ reviewContracts }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { error, message } = await response.json();

		if (error) {
			toast.error(error);
			sendingReviews = false;
			return;
		}

		toast.success(message);

		contracts = contracts.filter((c) => !contractIds.includes(c.id));

		data.contracts = data.contracts.map((c) => {
			if (contractIds.includes(c.id)) {
				return { ...c, status: 'under review' };
			}
			return c;
		});

		sendingReviews = false;
	};

	$: if (userPendingApprovalsMode) {
		contracts = userPending;
	} else if (contractReviewsMode) {
		contracts = data.contracts.filter((c) => c.status === 'active');
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
			bind:contractReviewsMode
			userPendingApprovalsCount={userPending.length}
			bind:sendingReviews
			on:request-reviews={handleReviews}
		>
			<svelte:fragment slot="entry-form">
				{#if !iam.isAllowedTo('contracts.create')}
					<AlertDialog.Root>
						<AlertDialog.Trigger>
							<Button><Plus />Add</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Not allowed</AlertDialog.Title>
								<AlertDialog.Description>
									Only users with "employee" roles can add contracts. Please reach out to your admin
									to update your role if necessary.
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
									To add a contract, reach out to your admin to get assigned an approver
									(supervisor).
								</AlertDialog.Description>
							</AlertDialog.Header>
							<AlertDialog.Footer>
								<AlertDialog.Action>OK</AlertDialog.Action>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
				{:else}
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
