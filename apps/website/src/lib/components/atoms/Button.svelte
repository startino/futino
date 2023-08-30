<script lang="ts">
	export let href: string = '';
</script>

{#if href != ''}
	<a
		{href}
		class="{$$props.class} flex relative border-2 border-primary-dark justify-center tracking-wide items-center py-3 my-1 px-6 font-bold rounded-md shadow-2xl group hover:text-primary-container-on-dark hover:bg-primary-container-dark/60 transition-all duration-300 hover:scale-[103%] {$$props.secondary
			? ' text-primary-dark bg-surface-dark'
			: 'text-primary-on-dark bg-primary-dark'}">
		<span class="relative z-0">
			<slot />
		</span></a>
{:else}
	<button
		on:click={$$props.onClick}
		class="{$$props.class} flex relative border-2 border-primary-dark justify-center tracking-wide items-center py-3 my-1 px-6 font-bold rounded-md shadow-2xl group hover:text-primary-container-on-dark hover:bg-primary-container-dark/60 transition-all duration-300 hover:scale-[103%] {$$props.secondary
			? ' text-primary-dark bg-surface-dark'
			: 'text-primary-on-dark bg-primary-dark'}">
		<span class="relative z-0">
			<slot />
		</span>
	</button>
{/if}
