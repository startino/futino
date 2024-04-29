<script lang="ts">
	import { getContext } from '$lib/utils';
	import DataTable from './data-table.svelte';

	const profiles = getContext('profiles');
</script>

<h1 class="text-3xl">Users</h1>

<div class="container mx-auto py-10">
	<DataTable data={$profiles} />
</div>
