<script lang="ts">
	import DataTable from './data-table.svelte';

	export let data;

	let bills = data.bills;
</script>

<h1 class="mb-10 text-3xl">Bills</h1>

<DataTable data={bills} />
