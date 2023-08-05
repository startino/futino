<script context="module" lang="ts">
	// Want to try using this instead of props in the future to improve it.
	export type TransitionOptions = {
		top?: number;
		bottom?: number;
		once?: boolean;
		transition?: String;
		delay?: number;
		duration?: number;
		x?: number;
		y?: number;
		axis?: 'x' | 'y';
	};
</script>

<script lang="ts">
	import { updated } from '$app/stores';

	import { onDestroy, onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	const marginTop: number = -10;
	const marginBottom: number = -10;
	const rootMargin: string = `${marginTop}% 0% ${marginBottom}% 0%`;
	const options = { rootMargin, threshold: 0.2 };

	let element: Element;
	let invisibleElement: Element;
	let observer: IntersectionObserver;
	let inView: boolean = true;

	const handler = (entries: IntersectionObserverEntry[]) => {
		inView = entries[0].isIntersecting;
		console.log('inView = ', inView);
		console.log('target: ', entries[0].target);
		if (inView) {
			//setObserver();
		}
	};

	const setObserver = () => {
		observer = new IntersectionObserver(handler, options);
		observer.observe(element);
	};

	onMount(() => {
		setObserver();
	});
	onDestroy(() => {
		console.log('on destroy	');
	});

	function restart() {
		inView = !inView;
		console.log(inView);
		console.log(element);
	}
</script>

{#key inView}
	<div class="fixed top-1/2 left-1/2">
		{inView}
	</div>
{/key}

<div
	class:visible={inView}
	class:invisible={!inView}
	in:fade
	bind:this={element}
	id="visible"
	class={$$props.class}>
	<slot />
</div>
