<script lang="ts">
	import { onMount } from 'svelte';

	// Types to get TailwindCSS Intellisense
	import type { CssClasses } from '../../types.ts';
	import { inview } from 'svelte-inview';

	// Props (base styles)
	/** Provide classes to set background color. */
	export let background: CssClasses = '';
	/** Provide classes to set border styles. */
	export let border: CssClasses = '';
	/** Provide classes to set padding. */
	export let padding: CssClasses = '';
	/** Provide classes to define a box shadow. */
	export let shadow: CssClasses = '';
	/** Provide classes to set base styling for gap spacing. */
	export let gap: CssClasses = 'gap-6';
	/** Provide classes to set the base typography styling.*/
	export let typography: CssClasses = '';

	export let useInview: boolean = false;

	let scrollY;
	export let scrollEnterHeight: number;
	export let onInviewEnter: () => () => {};

	function setScrollEnterHeight() {
		scrollEnterHeight = scrollY;
	}

	// Reactive Classes
	$: classesBase = `grid place-items-center relative
   ${background} ${border} ${padding} ${shadow} ${typography} ${$$props.class}`;

	let mounted = false;
	onMount(() => {
		mounted = true;
		console.log('section mounted');
	});
</script>

<svelte:window bind:scrollY />

<section
	use:inview
	on:inview_enter={(event) => {
		setScrollEnterHeight();
		if (onInviewEnter) {
			onInviewEnter();
		}
	}}
	class={classesBase}
	style={$$props.style}
	id={$$props.id}
>
	<slot />
</section>
