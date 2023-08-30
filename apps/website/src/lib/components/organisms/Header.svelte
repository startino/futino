<script lang="ts">
	import ThemeButton from '$lib/components/atoms/ThemeButton.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export const elements = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: '/about',
		},
		{
			name: 'Contact',
			href: '/contact',
		},
		{
			name: 'Pricing',
			href: '/pricing',
		},
	];

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
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- Background Blurr -->
	<div transition:fade class="fixed z-50 inset-0">
		<div on:click={toggleMenu} class="bg-black/50 absolute w-screen h-screen backdrop-blur-sm" />
		<!-- Menu Card -->
		<div
			in:slide={{ delay: 200, duration: 300 }}
			out:slide
			class="absolute z-50 p-6 w-full mx-auto pb-8 my-auto top-0 bottom-0 flex flex-col items-center gap-4 left-0 right-0 h-fit max-w-xs md:max-w-xl lg:max-w-2xl bg-surface-dark rounded-lg shadow-lg">
			<!-- Close Menu Button -->
			<button
				class="w-7 h-7 my-4 flex items-center hover:scale-150 transition-all duration-200 justify-center stroke-primary-dark hover:stroke-tertiary-dark"
				on:click={toggleMenu}>
				<svg viewBox="0 0 10 10" class="w-3 h-3 overflow-visible"
					><path
						d="M0 0L10 10M10 0L0 10"
						fill="none"
						stroke-width="2"
						stroke-linecap="round" /></svg>
			</button>

			<!-- Nav Elements -->
			<nav class="text-center flex flex-col gap-6 headline-medium">
				{#each elements as element}
					<a
						class="text-primary-container-on-dark hover:text-tertiary-dark hover:scale-105 transition-all duration-200"
						href={element.href}
						on:click={toggleMenu}>
						{element.name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<header
	id="header"
	class="{$$props.class} {activeheaderClass} text-primary-light dark:text-primary-dark border-secondary-light/10 dark:border-secondary-dark/10 top-0 z-40 w-full transition-all duration-400">
	<div class="flex relative items-center px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto">
		<a class="flex gap-3" href="/">
			<Logo />
			<p class="hidden sm:flex headline-small my-auto pb-1">Futino</p>
		</a>
		<div class="flex items-center ml-auto gap-8 font-extrabold title-large">
			<nav class="hidden md:flex gap-6 lg:gap-8 pb-0.5">
				{#each elements as element, i}
					<a class="hover:text-tertiary-light dark:hover:text-tertiary-dark" href={element.href}>
						{element.name}
					</a>
				{/each}
			</nav>
			<div
				class="gap-6 pl-6 flex md:border-l md:border-secondary-light/50 md:dark:border-primary-dark/50">
				<ThemeButton />
				<button
					class="flex md:hidden stroke-primary-light hover:stroke-tertiary-light dark:stroke-primary-dark dark:hover:stroke-tertiary-dark"
					on:click={toggleMenu}>
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>
