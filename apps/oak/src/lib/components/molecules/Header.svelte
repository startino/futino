<script lang="ts">
	import Logo from '../atoms/Logo.svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
  import ThemeToggle from '$lib/components/atoms/ThemeToggle.svelte';

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
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
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

<header class="bg-card text-card-foreground rounded-3xl mt-6 fixed w-[90%] max-w-7xl left-1/2 -translate-x-1/2 ">
	<nav class="items-center justify-between p-6 lg:px-8 {menuOpen ? "hidden" : 'flex'}" aria-label="Global">
		<a href="#" class="-m-1.5 p-1.5">
			<span class="sr-only">Your Company</span>
			<Logo />
		</a>
		<div class="flex lg:hidden">
			<button
				type="button"
        on:click={toggleMenu}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12 place-items-center">
			{#each pages as { name, href }}
				<a {href} class="m-0 text-sm font-semibold leading-6 text-card-foreground hover:text-accent sm:m-0">{name}</a>
			{/each}
      <div class="grid grid-cols-2 gap-x-4">
			{#each Object.entries(CTAButtons) as [name, { href, highlight }]}
				<Button {href} class="w-full">
					{name}
				</Button>
			{/each}
    </div>
      <ThemeToggle />
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden {menuOpen ? '' : 'hidden'}" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-10 "></div>
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-card px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt=""
					/>
				</a>
				<button type="button" on:click={toggleMenu} class="-m-2.5 rounded-md p-2.5 text-gray-700">
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						{#each pages as { name, href }}
							<a
								{href}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-card-foreground hover:text-accent-foreground hover:bg-accent"
								>{name}</a
							>
						{/each}
					</div>
					<div class="py-6 grid grid-cols-2 gap-x-4">
            {#each Object.entries(CTAButtons) as [name, { href, highlight }]}
              <Button {href} class="w-full">
                {name}
              </Button>
            {/each}
          </div>
				</div>
			</div>
		</div>
	</div>
</header>
