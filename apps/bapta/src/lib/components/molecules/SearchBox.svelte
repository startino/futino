<script lang="ts">
	export let searchInput: string;
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<label for="search-field" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
	>Search</label>
<div class="relative {$$props.class}">
	<input
		type="text"
		id="search-field"
		bind:value={searchInput}
		class="block p-4 pl-6 w-full title-medium text-surface-on-light dark:text-surface-on-dark bg-surface-light rounded-lg border border-outline-light dark:border-outline-dark focus:ring-tertiary-light focus:border-tertiary-light dark:bg-surface-dark dark:placeholder-surface-on-dark dark:focus:ring-tertiary-dark dark:focus:border-tertiary-dark"
		placeholder="Find an answer to your question..."
		on:input />
	<!-- <button
		type="submit"
		class="absolute right-2.5 bottom-2.5 bg-primary-light dark:bg-primary-dark hover:bg-tertiary-light focus:ring-4 focus:outline-none focus:ring-tertiary-light font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-tertiary-dark dark:focus:ring-tertiary-dark"
	>
		<Icon icon="search" />
	</button> -->
</div>
