<script lang="ts">
	import DataTable from './data-table.svelte';

	export let data;

	let bills = data.bills;
</script>

<h1 class="text-3xl">Bills</h1>

<div class="container mx-auto py-10">
	<DataTable data={bills} />
</div>
