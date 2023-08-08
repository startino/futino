<script lang="ts">
	export let searchInput: string;
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<label for="search-field" class=" sr-only">Search</label>
<div
	class="relative {$$props.class} flex flex-row items-center rounded-lg border border-outline-variant-dark bg-surface-dark placeholder-surface-on-dark">
	<Icon
		icon="search"
		class="px-4 absolute my-auto h-fit pointer-events-none"
		fillColor="transparent" />

	<input
		type="text"
		id="search-field"
		bind:value={searchInput}
		class="block p-4 pl-12 w-full title-medium text-secondary-dark bg-surface-dark rounded-lg focus:ring-tertiary-dark focus:border-tertiary-dark"
		placeholder="Find an answer to your question..."
		on:input />
</div>
