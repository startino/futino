<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides content on the left end of the bar, e.g. a logo.
	 * @slot pages - Provides the list of page links on the header, e.g. Home, About, Pricing, etc.
	 * @slot trail - Provides content on the right end of the bar, e.g. navigation elements.
	 */

	import ThemeButton from '../atoms/ThemeButton.svelte';
	import Logo from '../atoms/Logo.svelte';
	import { onMount } from 'svelte';

	// Props (presets)
	export let centerHeader: boolean = false;

	// Props (base)
	/** Provide classes to set background color. */
	export let background: string = 'bg-surface-100-800-token';
	/** Provide classes to set border styles. */
	export let border: string = '';
	/** Provide classes to set padding. */
	export let padding: string = 'p-4';
	/** Provide classes to define a box shadow. */
	export let shadow: string = '';
	/** Provide classes to set the vertical spacing between rows. */
	export let spacing: string = 'space-y-4';
	/** Provide classes to set grid columns for the main row. */
	export let gridColumns: string = 'grid-cols-[auto_1fr_auto]';
	/** Provide classes to set gap spacing for the main row. */
	export let gap: string = 'gap-4';

	// Props (regions)
	/** Provide arbitrary classes to style the top (main) row. */
	export let regionRowMain: string = '';
	/** Provide arbitrary classes to style the bottom (headline) row. */
	export let regionRowHeadline: string = '';

	// Props (slots)
	/** Classes to apply to the lead slot container element */
	export let slotLead: string = '';
	/** Classes to apply to the default slot container element */
	export let slotDefault: string = '';
	/** Classes to apply to the trail slot container element */
	export let slotTrail: string = '';

	// Base Classes
	const cBase = 'flex flex-col';
	// ---
	const cRowMain = 'grid items-center'; //  bg-blue-500
	const cRowHeadline = ''; //  bg-green-500
	// ---
	const cSlotLead = 'flex-none flex justify-between items-center';
	const cSlotDefault = 'flex-auto items-center';
	const cSlotTrail = 'flex-none flex items-center space-x-4';

	// Reactive Classes
	$: classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${
		$$props.class ?? ''
	}`;
	$: classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
	$: classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
	$: classesSlotLead = `${cSlotLead} ${slotLead}`; // bg-red-500
	$: classesSlotDefault = `${cSlotDefault} ${slotDefault}`; // bg-blue-500
	$: classesSlotTrail = `${cSlotTrail} ${slotTrail}`; // bg-green-500

	let largeHeaderClass = 'fixed py-12';
	let activeheaderClass = largeHeaderClass;
	let miniHeaderClass =
		'fixed py-3 border-b bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur';

	let menuOpen = false;
	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			activeheaderClass = window.scrollY > 12 ? miniHeaderClass : largeHeaderClass;
		});
	});
</script>

{#if menuOpen}
	<!-- Background Blurr -->
	<div class="z-50 fixed inset-0 light bg-surface-dark backdrop-blur-sm">
		<!-- Menu Card -->
		<div
			class="absolute top-6 right-6 p-6 w-full max-w-xs bg-primary-container-light dark:bg-primary-container-dark rounded-lg shadow-lg">
			<!-- Close Menu Button -->
			<button
				class="absolute top-6 right-6 w-7 h-7 flex items-center justify-center stroke-primary-light hover:stroke-tertiary-light dark:stroke-primary-dark dark:hover:stroke-tertiary-dark"
				on:click={toggleMenu}>
				<svg viewBox="0 0 10 10" class="w-3 h-3 overflow-visible"
					><path
						d="M0 0L10 10M10 0L0 10"
						fill="none"
						stroke-width="2"
						stroke-linecap="round" /></svg>
			</button>

			<!-- Nav Elements -->
			<nav class="text-left flex flex-col gap-6 text-lg">
				<div class={classesSlotDefault}><slot name="pages" /></div>
			</nav>
		</div>
	</div>
{/if}

<header
	id="header"
	class="{$$props.class} {activeheaderClass} text-primary-light dark:text-primary-dark border-secondary-light/10 dark:border-secondary-dark/10 top-0 z-40 w-full transition-all duration-400">
	<div class="flex relative px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto">
		<!-- Slot: lead -->
		{#if $$slots.lead}
			<div class="app-bar-slot-lead {classesSlotLead}"><slot name="lead" /></div>
		{/if}
		{#if centerHeader}
			<!-- Slot: Pages -->
			<nav class=" {classesSlotDefault}"><slot name="pages" /></nav>

			<!-- Slot: trail -->
			{#if $$slots.trail}
				<div class="ml-auto {classesSlotTrail}"><slot name="trail" /></div>
			{/if}
		{:else}
			<!-- Slot: Pages -->
			<div class="flex gap-6 ml-auto justify-self-end place-items-center">
				<nav class="gap-4 {classesSlotDefault}"><slot name="pages" /></nav>
				<!-- Slot: trail -->
				{#if $$slots.trail}
					<div class=" {classesSlotTrail}"><slot name="trail" /></div>
				{/if}
			</div>
		{/if}
	</div>
</header>
