<script lang="ts">
	import DataTable from './data-table.svelte';
	import { getContext } from '$lib/utils';

	export let data;

	let contracts = data.contracts;

	const currentProfile = getContext('currentUser');
	let userPendingApprovalsMode = false;

	$: contracts = data.contracts.filter((c) => {
		if (userPendingApprovalsMode) {
			return (
				(($currentProfile.role === 'employee' && c.current_approver_id === $currentProfile.id) ||
					$currentProfile.role === 'signer') &&
				!c.signed
			);
		} else {
			return true;
		}
	});
</script>

<h1 class="text-3xl">Contracts</h1>

<div class="container mx-auto py-10">
	{#key contracts}
		<DataTable data={contracts} bind:userPendingApprovalsMode />
	{/key}
</div>
