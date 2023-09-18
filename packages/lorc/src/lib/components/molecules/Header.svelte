<script lang="ts">
	import ThemeButton from '../atoms/ThemeButton.svelte';
	import Logo from '../atoms/Logo.svelte';
	import { onMount } from 'svelte';
	import Icon from '../atoms/Icon.svelte';
	import { fade, fly, slide } from 'svelte/transition';

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
	export let pages: { name: string; href: string }[] = [];
	/**Property to determine if the class 'fixed' is applied to the header.*/
	export let sticky: boolean = true;
	/**Property to determine if the theme toggle button should be included.*/
	export let dualTheme: boolean = true;
	/**Provide the company's name as text. If the name */
	export let companyName: string = 'Company Name';

	// Props (base styles)
	/** Provide classes to set background color. */
	export let background: string = '';
	/** Provide classes to set border styles. The default is: md:border-secondary-light/50 md:dark:border-primary-dark/50 */
	export let border: string = 'md:border-secondary-light/50 md:dark:border-primary-dark/50';
	/** Provide classes to set padding. */
	export let padding: string = '';
	/** Provide classes to define a box shadow. */
	export let shadow: string = '';
	/** Provide classes to set base styling for gap spacing. The default is: gap-6*/
	export let gap: string = 'gap-6';
	/** Provide classes to set the base typography styling. The default is: body-small text-primary-light dark:text-primary-dark*/
	export let typography: string = 'dark:prose-invert text-primary-light dark:text-primary-dark';

	// Reactive Classes
	$: classesBase = `${
		sticky ? 'fixed' : ''
	} ${background} ${border} ${padding} ${shadow} ${typography} ${$$props.class}`;

	// Constant Classes
	/** Default header class; user hasn't scrolled */
	let largeHeaderClass = `py-12`;
	/** Class for when user has scrolled; slightly collapsed header */
	let miniHeaderClass = `py-3 border-b ${border} backdrop-blur`;

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
	<div transition:fade class="fixed inset-0 z-30">
		<div on:click={toggleMenu} class="bg-black/50 absolute w-screen h-screen backdrop-blur-sm" />
		<!-- Menu Card -->
		<div
			in:slide={{ delay: 200, duration: 300 }}
			out:slide
			class="absolute z-50 p-12 w-full mx-auto my-auto top-0 bottom-0 flex flex-col items-center gap-4 left-0 right-0 h-fit max-w-xs md:max-w-xl lg:max-w-2xl bg-surface-dark rounded-lg shadow-lg">
			<!-- Nav Elements -->
			<nav class="text-center flex flex-col gap-6 headline-medium">
				{#each pages as { name, href }}
					<a
						class="text-primary-container-on-dark hover:text-tertiary-dark hover:scale-105 transition-all duration-200"
						{href}
						on:click={toggleMenu}>
						{name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<header
	id="header"
	class="{classesBase}  top-0 z-40 w-full transition-all duration-400"
	bind:clientHeight={flyAmount}>
	<div class="relative {activeheaderClass} transition-all duration-400">
		<div class="flex flex-row z-50 items-center px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto">
			<a class="flex gap-3 not-prose" href="/">
				<Logo />
				<p class="hidden sm:flex text-xl my-auto">{companyName}</p>
			</a>

			<!-- Justify-between Header -->
			<div class="flex {gap} ml-auto items-center">
				<nav class="hidden md:flex {gap}">
					{#each pages as { name, href }}
						<a class="hover:text-tertiary-light dark:hover:text-tertiary-dark" {href}>
							<h5>
								{name}
							</h5>
						</a>
					{/each}
				</nav>

				<div class="pl-6 md:border-l items-center {border} {dualTheme ? 'flex' : 'hidden'}">
					<ThemeButton />
				</div>

				<button
					class="flex md:hidden stroke-primary-light hover:stroke-tertiary-light dark:stroke-primary-dark dark:hover:stroke-tertiary-dark"
					on:click={toggleMenu}>
					<Icon height="28" width="28" fill={'none'} icon={menuOpen ? 'cross' : 'burger'} />
				</button>
			</div>
		</div>
	</div>
</header>
