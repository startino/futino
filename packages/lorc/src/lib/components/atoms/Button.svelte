<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let href: string = '';
	export let onClick: MouseEventHandler<HTMLAnchorElement> = () => {};
</script>

<a
	{href}
	on:click={onClick}
	class="{$$props.class} flex relative border-2 border-primary-dark hover:translate-y-1 place-items-center py-3 px-6 font-bold rounded-md group hover:text-primary-container-on-dark hover:bg-primary-container-dark/60 transition-all duration-300 hover:scale-[97%] {$$props.secondary
		? ' text-primary-dark bg-surface-dark'
		: 'text-primary-on-dark bg-primary-dark'}">
	<span class="relative z-0 uppercase">
		<slot />
	</span></a>
