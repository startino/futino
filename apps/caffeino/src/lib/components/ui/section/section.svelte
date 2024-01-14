<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let useInview: boolean = false;
	export let scrollEnterHeight: number;
	export let onInviewEnter: () => void = () => {};

	let scrollY: number;

	onMount(() => {
		console.log('section mounted');
	});
</script>

<svelte:window bind:scrollY />

<section
	use:inview
	on:inview_enter={(event) => {
		scrollEnterHeight = scrollY;
		if (onInviewEnter) {
			onInviewEnter();
		}
	}}
	class={cn(
		'py-20 grid place-items-center relative px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-18 max-w-9xl w-full',
		className
	)}
	{...$$restProps}
>
	<slot />
</section>
