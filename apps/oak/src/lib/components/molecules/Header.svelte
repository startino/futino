<script lang="ts">
	import Logo from '../atoms/Logo.svelte';
	import { onMount } from 'svelte';
	import Icon from '../atoms/Icon.svelte';
	import { fade, slide } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';

	// Types to get TailwindCSS Intellisense
	import type { CssClasses, StyleVariants } from '../../types.ts';

	// Props
	/**Provide the list of page links you'd like to put in the header.
	 * @remarks
	 * Type must be { name: string; href: string }[].
	 * @example
	 * [{
	 * name: 'Home',
	 * href: '/home',
	 * }]
	 * */
	export let pages: { [key: string]: string }[] = [
		{
			name: "Home",
      href: '/'
		},
    {
      name: "About",
      href: '/about'
    }
	];
	/** Labels and hrefs of CTA buttons on the hero. Recommended 1-2.*/
	export let CTAButtons: {
		[label: string]: { href: string; highlight: boolean };
	} = {};
	/**Property to determine if the class 'fixed' is applied to the header.*/
	export let sticky: boolean = true;
	/**Provide the company's name as text. If the name */
	export let companyName: string = 'Company Name';

	export let logoPos: 'leading' | 'center' | 'trailing' = 'leading';

	// Constant Classes
	/** Default header class; user hasn't scrolled */
	let largeHeaderClass = `py-4 px-4 bg-card`;
	/** Class for when user has scrolled;  collapsed header */
	let miniHeaderClass = `py-2 px-2 md:py-4 md:px-4 bg-card`;

	// Variables
	let activeheaderClass = largeHeaderClass;
	let menuOpen = false;
	let flyAmount: number;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			activeheaderClass = window.scrollY > 12 && sticky ? miniHeaderClass : largeHeaderClass;
		});
	});
</script>

{#if menuOpen}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- Background Blurr -->
	<div transition:fade class="fixed inset-0 z-50">
		<div on:click={toggleMenu} class="absolute h-screen w-screen bg-black/50 backdrop-blur-sm" />
		<!-- Menu Card -->
		<div
			in:slide={{ delay: 200, duration: 300 }}
			out:slide
			class="bg-surface absolute bottom-0 left-0 right-0 top-0 z-50 mx-auto my-auto flex h-fit w-full max-w-xs flex-col items-center gap-4 rounded-lg p-12 shadow-lg md:max-w-xl"
		>
			<!-- Nav Elements -->
			<nav class="headline-medium flex flex-col gap-6 text-center">
				{#each pages as {name, href}}
					<a
						class="text-foreground hover:text-tertiary transition duration-200 hover:scale-105"
						{href}
						on:click={toggleMenu}
					>
						{name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<header
	id="header"
	class=" {sticky ? 'fixed' : ''} 
 duration-400 z-40 w-full justify-items-center transition"
	bind:clientHeight={flyAmount}
>
	<div class="{activeheaderClass} rounded-3xl max-w-7xl mx-auto mt-8 duration-400 relative z-40 transition text-foreground">
		<div
			class="z-50 mx-auto flex w-full max-w-7xl items-center justify-center px-6 md:grid md:grid-cols-5"
		>
			{#if logoPos == 'leading'}
				<a class="not-prose mr-auto flex gap-3 justify-self-start" href="/">
					<Logo />
					<p class="my-auto hidden text-xl sm:flex">{companyName}</p>
				</a>
			{:else}
				<a class="not-prose mr-auto flex gap-3 justify-self-start md:hidden" href="/">
					<Logo height="h-10" />
					<p class="my-auto hidden text-xl sm:flex">{companyName}</p>
				</a>
			{/if}

			<!-- Justify-between Header -->
			<!-- Loading classes for dynamic tw building of variable col number: grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 -->
			<nav
				class="hidden {logoPos == 'center'
					? `col-span-5 h-full w-full place-items-center justify-between md:grid grid-cols-${
							Object.entries(pages).length + 1
						}`
					: `col-span-3 md:flex `} mx-auto gap-2 justify-self-center"
			>
				{#each pages as {name, href}, i}
					<a class="text-center" {href}>
						<h6 class="m-0 sm:m-0">
							{name}
						</h6>
					</a>
					<!-- Places the logo in the middle of the page items. Will only look good if there's an even number of pages!-->
					{#if logoPos == 'center' && i == Object.entries(pages).length / 2 - 1}
						<a class="not-prose flex gap-3" href="/">
							<Logo height="h-10" />
							<p class="my-auto hidden text-xl sm:flex">{companyName}</p>
						</a>
					{/if}
				{/each}
			</nav>

			<div
				class="grid hidden md:flex grid-cols-{Object.entries(CTAButtons)
					.length} w-fit place-items-center gap-4 justify-self-end md:gap-6"
			>
				{#each Object.entries(CTAButtons) as [label, { href, highlight }]}
					<Button class="w-full" {highlight} {href}>
						{label}
					</Button>
				{/each}
			</div>
			{#if logoPos == 'trailing'}
				<a class="not-prose flex gap-3" href="/">
					<Logo />
					<p class="my-auto hidden text-xl sm:flex">{companyName}</p>
				</a>
			{/if}

			<button class="stroke-primary hover:stroke-tertiary flex md:hidden" on:click={toggleMenu}>
				<Icon height="32" width="32" fill={'none'} icon={menuOpen ? 'cross' : 'burger'} />
			</button>
		</div>
	</div>
</header>
