<script lang="ts">
	export let searchInput;
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<label for="search-field" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
	>Search</label>
<div class="relative">
	<input
		type="text"
		id="search-field"
		bind:value={searchInput}
		class="block p-4 pl-6 w-full title-medium  dark:text-surface-on-dark  rounded-lg border  dark:border-outline-dark focus: focus: dark:bg-surface-dark dark:placeholder-surface-on-dark dark:focus:ring-tertiary-dark dark:focus:border-tertiary-dark"
		placeholder="Search Name, Date, Album..."
		on:input />
	<!-- <button
		type="submit"
		class="absolute right-2.5 bottom-2.5  dark:bg-primary-dark focus:ring-4 focus:outline-none focus: font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-tertiary-dark dark:focus:ring-tertiary-dark"
	>
		<Icon icon="search" />
	</button> -->
</div>
