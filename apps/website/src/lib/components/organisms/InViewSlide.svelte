<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, slide, type FadeParams } from 'svelte/transition';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	export let top = '0%';
	export let bottom = '0%';
	export let once = false;
	export let delay = 200;
	export let duration: number = 700;

	let inView: boolean;
	let scrollDirection;
	const options: Options = {
		rootMargin: `${top} 0px ${bottom} 0px`,
		threshold: 0.5,
		unobserveOnEnter: once,
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		inView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if inView}
		<div in:slide={{ duration: duration, delay: delay }} out:fade class={$$props.class}>
			<slot />
		</div>
	{:else}
		<div />
	{/if}
</div>
