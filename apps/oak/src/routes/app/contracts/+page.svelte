<script lang="ts">
	import DataTable from './data-table.svelte';

	export let data;
</script>

<h1 class="text-3xl">Contracts</h1>

<div class="container mx-auto py-10">
	<DataTable data={data.contracts} />
</div>
