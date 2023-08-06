<script context="module" lang="ts">
	// Want to try using this instead of props in the future to improve it.
	export type TransitionOptions = {
		top?: number;
		bottom?: number;
		once?: boolean;
		animation?: Animation | string;
		delay?: number;
		duration?: number;
		x?: number;
		y?: number;
		axis?: 'x' | 'y';
	};

	export enum Animation {
		SlideIn,
		SomeOtherAnimation,
	}
</script>

<script lang="ts">
	import { updated } from '$app/stores';

	import { onDestroy, onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';

	// Individual Options.
	export let animation: Animation | undefined;
	export let once: boolean | undefined = undefined;
	export let top: number | undefined = undefined;
	export let bottom: number | undefined = undefined;
	export let x: number | undefined = undefined;
	export let y: number | undefined = undefined;
	export let duration: number | undefined = undefined;
	export let delay: number | undefined = undefined;
	export let axis: 'x' | 'y' | undefined = undefined;

	let defaultOptions: TransitionOptions = {
		once: false, // Later on this should be true, but for testing it's easier to have it as false.
		animation: 'fade',
		top: 0,
		bottom: 0,
		delay: 100,
		duration: 1000,
		x: 0,
		y: 0,
		axis: 'y',
	};
	export let presetOptions: TransitionOptions = defaultOptions;
	// This is the formatted version of the given prompts.
	let propOptions: TransitionOptions = {
		...defaultOptions,
		once: once,
		bottom: bottom,
		delay: delay,
		duration: duration,
		top: top,
		x: x,
		y: y,
		animation: animation,
		axis: axis,
	};
	// Setup the finalizedOptions based on priority.
	let finalizedOptions = {
		top: propOptions.top || presetOptions.top || defaultOptions.top,
		bottom: propOptions.bottom || presetOptions.bottom || defaultOptions.bottom,
		once: propOptions.once || presetOptions.once || defaultOptions.once,
		animation: propOptions.animation || presetOptions.animation || defaultOptions.animation,
		delay: propOptions.delay || presetOptions.delay || defaultOptions.delay,
		duration: propOptions.duration || presetOptions.duration || defaultOptions.duration,
		x: propOptions.x || presetOptions.x || defaultOptions.x,
		y: propOptions.y || presetOptions.y || defaultOptions.y,
		axis: propOptions.axis || presetOptions.axis || defaultOptions.axis,
	};

	let element: Element;
	let observer: IntersectionObserver;
	let inView: boolean = false;

	const rootMargin: string = `${finalizedOptions.top}px 10000px ${finalizedOptions.bottom}px 10000px`;
	const options = { rootMargin, threshold: 0.5 };

	const handleIntersect = (entry: IntersectionObserverEntry[]) => {
		console.log('handle');
		if (entry[0].isIntersecting) {
			inView = true;
		} else {
			if (finalizedOptions.once == true && inView) {
				observer.unobserve(element);
			}
			inView = false;
		}
	};

	onMount(() => {
		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element);
	});
	onDestroy(() => {});
</script>

<div
	bind:this={element}
	id="visible"
	class:fade-in={!inView}
	class="{$$props.class} transition-all duration-500 delay-200"
	style={!inView ? `transform: translate(${finalizedOptions.x}px, ${finalizedOptions.y}px)` : ''}>
	<slot />
</div>

<style>
	.fade-in {
		@apply opacity-0;
	}

	.slide-from-right {
		@apply translate-x-110;
	}
	.slide-from-left {
		@apply -translate-x-110;
	}

	.slide-from-top {
		@apply translate-y-20;
	}
	.slide-from-bottom {
		@apply -translate-y-20;
	}
	.post-animation {
		opacity: 1;
		transform: translate(0px, 0px);
	}

	.stuff {
		transform: translateX(440px);
	}
</style>
