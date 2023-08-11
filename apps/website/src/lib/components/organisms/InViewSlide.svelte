<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, slide, type FadeParams } from 'svelte/transition';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	export let rootMargin = '-10%';
	export let unobserveOnEnter = false;
	export let delay = 200;
	export let duration: number = 700;

	let isInView: boolean;
	let scrollDirection;
	const options: Options = {
		rootMargin: rootMargin,
		unobserveOnEnter: unobserveOnEnter,
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		console.log('handling change.');

		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div in:slide={{ duration: duration, delay: delay }} out:fade class={$$props.class}>
			<slot />
		</div>
	{:else}
		<div />
	{/if}
</div>
