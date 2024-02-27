<script lang="ts">
	export let searchInput: string;
	import Icon from './Icon.svelte';
</script>

<label for="search-field" class=" sr-only">Search</label>
<div
	class="relative max-w-3xl {$$props.class} bg-surface drop-shadow-glow-sm placeholder-surface-on flex flex-row items-center rounded-lg border border-primary"
>
	<Icon
		icon="search"
		class="pointer-events-none absolute my-auto h-fit px-4"
		fillColor="transparent"
	/>

	<input
		type="text"
		id="search-field"
		bind:value={searchInput}
		class="placeholder:title-medium md:placeholder:title-large placeholder:text-surface-on bg-surface focus:ring-tertiary focus:border-tertiary block w-full rounded-lg py-3 pl-12 md:py-6"
		placeholder="Find an answer to your question..."
		on:input
	/>
</div>
