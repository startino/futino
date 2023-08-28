<script lang="ts">
	export let href: string = '#';
</script>

<a
	on:click={$$props.click}
	{href}
	class="{$$props.class} flex relative bg-surface-dark justify-center items-center py-3 px-6 font-bold rounded-md shadow-2xl group hover:text-primary-container-on-dark transition-all duration-300 {$$props.secondary
		? 'outline-4 hover:outline-0 outline-primary-dark text-primary-dark '
		: 'text-primary-on-dark tracking-wide'}">
	{#if !$$props.secondary}
		<span
			class="absolute inset-0 w-full h-full bg-primary-dark rounded-md opacity-100 transition duration-300 ease-in-out group-hover:opacity-0" />
	{/if}
	<span
		class="absolute inset-0 w-full h-full bg-primary-container-dark/50 border-2 border-primary-dark rounded-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100" />
	<span class="relative z-0">
		<slot />
	</span></a>
