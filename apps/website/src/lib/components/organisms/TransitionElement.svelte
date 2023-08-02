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
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';

	export let animation = 'none';
	export let animation_out = 'none; opacity: 0';
	export let css_animation = '';

	// Individual Options.
	export let once: boolean | undefined = undefined;
	export let transition: String | undefined = undefined;
	export let top: number | undefined = undefined;
	export let bottom: number | undefined = undefined;
	export let duration: number | undefined = undefined;
	export let delay: number | undefined = undefined;
	export let axis: 'x' | 'y' | undefined = undefined;

	let defaultOptions: TransitionOptions = {
		once: true, // Later on this should be true, but for testing it's easier to have it as false.
		transition: 'fade',
		top: 0,
		bottom: 0,
		delay: 100,
		duration: 1000,
		x: 0,
		y: 0,
		axis: 'y'
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
		transition: transition,
		axis: axis
	};

	// Setup the finalizedOptions based on priority.
	let finalizedOptions = {
		top: propOptions.top || presetOptions.top || defaultOptions.top,
		bottom: propOptions.bottom || presetOptions.bottom || defaultOptions.bottom,
		once: propOptions.once || presetOptions.once || defaultOptions.once,
		transition: propOptions.transition || presetOptions.transition || defaultOptions.transition,
		delay: propOptions.delay || presetOptions.delay || defaultOptions.delay,
		duration: propOptions.duration || presetOptions.duration || defaultOptions.duration,
		x: propOptions.x || presetOptions.x || defaultOptions.x,
		y: propOptions.y || presetOptions.y || defaultOptions.y,
		axis: propOptions.axis || presetOptions.axis || defaultOptions.axis
	};

	// True if the element being observed is in the viewport
	let inView = false;

	// Generates a random ID to identify the element. There's probaby a better solution.
	let element: Element;

	function handler() {
		const rect = element.getBoundingClientRect();
		inView =
			rect.top - finalizedOptions.top! < window.innerHeight &&
			rect.left - finalizedOptions.bottom! < window.innerWidth;

		if (inView && once) {
			window.removeEventListener('scroll', handler);
		}
	}

	function verify_intersection() {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${finalizedOptions.bottom!}px 0px ${finalizedOptions.top!}px 0px`;

			const observer = new IntersectionObserver(
				(entries) => {
					inView = entries[0].isIntersecting;
					if (inView && once) {
						observer.unobserve(element);
					}
				},
				{
					rootMargin
				}
			);

			observer.observe(element);
			return () => observer.unobserve(element);
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handler);
		verify_intersection();
		//console.log(finalizedOptions);
		return () => window.removeEventListener('scroll', handler);
	});
</script>

{#if inView}
	{#if finalizedOptions.transition == 'fade'}
		<div
			bind:this={element}
			in:fade={{ duration: finalizedOptions.duration, delay: finalizedOptions.delay }}
			style="animation: {animation}; {css_animation}"
			class={$$props.class}
		>
			<slot />
		</div>
	{:else if finalizedOptions.transition == 'fly'}
		<div
			bind:this={element}
			in:fly={{
				x: finalizedOptions.x,
				y: finalizedOptions.y,
				duration: finalizedOptions.duration,
				delay: finalizedOptions.delay
			}}
			style="animation: {animation}; {css_animation}"
			class={$$props.class}
		>
			<slot />
		</div>
	{:else if finalizedOptions.transition == 'slide'}
		<div
			bind:this={element}
			in:slide={{
				axis: finalizedOptions.axis,
				duration: finalizedOptions.duration,
				delay: finalizedOptions.delay
			}}
			style="animation: {animation}; {css_animation}"
			class={$$props.class}
		>
			<slot />
		</div>
	{/if}
{:else}
	<div
		bind:this={element}
		style="animation: {animation_out}; {css_animation}"
		class={$$props.class}
	>
		<slot />
	</div>
{/if}
