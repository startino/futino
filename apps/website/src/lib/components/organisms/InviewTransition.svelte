<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, type FadeParams } from 'svelte/transition';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';
	import { debug } from 'svelte/internal';
	import { e } from 'vitest/dist/index-5aad25c1';

	export let rootMargin = '20%';
	export let unobserveOnEnter = true;
	export let delay = 0;
	export let duration: number = 200;

	let isInView: boolean;
	let scrollDirection;
	const options: Options = {
		rootMargin: rootMargin,
		unobserveOnEnter: unobserveOnEnter
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		console.log('handling change.');

		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div in:fade={{ duration: duration, delay: delay }}>
			<slot />
		</div>
	{:else}
		<div>
			<slot />
		</div>
	{/if}
</div>
