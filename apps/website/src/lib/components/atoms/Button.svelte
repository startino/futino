<script lang="ts">
	export let href: string = '#';
</script>

<a
	on:click={$$props.click}
	{href}
	class="{$$props.class} flex overflow-hidden relative bg-surface-dark justify-center items-center py-3 px-6 font-bold rounded-md shadow-2xl group border-primary-dark {$$props.secondary
		? 'border-2 text-primary-dark'
		: 'text-primary-on-dark hover:text-secondary-dark'}">
	{#if !$$props.secondary}
		<span
			class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark opacity-100 transition duration-300 ease-out group-hover:opacity-0" />
		<span
			class="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary-light to-primary-light opacity-0 transition duration-300 ease-out group-hover:opacity-100" />
	{/if}
	<span class="relative z-0">
		<slot />
	</span></a>
