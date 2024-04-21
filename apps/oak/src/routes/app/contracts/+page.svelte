<script lang="ts">
	import DataTable from './data-table.svelte';
	import { getContext } from '$lib/utils';

	export let data;
	const currentProfile = getContext('currentProfile');

	let contracts = data.contracts;
	let userPending = data.contracts.filter(
		(c) =>
			(($currentProfile.role === 'employee' && c.current_approver_id === $currentProfile.id) ||
				$currentProfile.role === 'signer') &&
			!c.signed
	);

	let userPendingApprovalsMode = false;

	$: if (userPendingApprovalsMode) {
		contracts = userPending;
	} else {
		contracts = data.contracts;
	}
</script>

<h1 class="text-3xl">Contracts</h1>

<div class="container mx-auto py-10">
	{#key contracts}
		<DataTable
			data={contracts}
			bind:userPendingApprovalsMode
			userPendingApprovalsCount={userPending.length}
		/>
	{/key}
</div>
