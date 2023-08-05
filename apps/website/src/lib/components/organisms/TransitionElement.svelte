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
	const marginTop: number = 0;
	const marginBottom: number = 0;
	const rootMargin: string = `${marginTop}% 1000% ${marginBottom}% 1000%`;
	const options = { rootMargin, threshold: 0.5 };

	let element: Element;
	let invisibleElement: Element;
	let observer: IntersectionObserver;
	let inView: boolean = false;
	let inProgress: boolean = false;

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	const handleIntersect = (entry: IntersectionObserverEntry[]) => {
		console.log('handle');
		if (entry[0].isIntersecting) {
			inView;
			entry[0].target.classList.add('post-animation');
		} else {
			entry[0].target.classList.remove('post-animation');
		}
	};

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element);
	});
	onDestroy(() => {
		console.log('on destroy	');
	});
</script>

<div
	bind:this={element}
	id="visible"
	class="{$$props.class} transition-all duration-500 delay-200 slide-in fade-in">
	<slot />
</div>

<style>
	.fade-in {
		opacity: 0;
	}
	.slide-in {
		transform: translateX(200px);
	}
	.post-animation {
		opacity: 1;
		transform: translateX(0px);
	}
</style>
