<script lang="ts">
	import { Logo } from '$lib/components/ui/logo';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export const elements = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Services',
			href: '/#services'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Contact',
			href: '/contact'
		},
		{
			name: 'Pricing',
			href: '/pricing'
		}
	];

	let largeHeaderClass = 'fixed py-12';
	let activeheaderClass = largeHeaderClass;
	let miniHeaderClass = 'fixed py-3 border-b bg-surface/60 backdrop-blur';

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
	<div transition:fade class="fixed inset-0 z-50">
		<div on:click={toggleMenu} class="absolute h-screen w-screen bg-black/50 backdrop-blur-sm" />
		<!-- Menu Card -->
		<div
			in:slide={{ delay: 200, duration: 300 }}
			out:slide
			class="absolute bottom-0 left-0 right-0 top-0 z-50 mx-auto my-auto flex h-fit w-full max-w-xs flex-col items-center gap-4 rounded-lg bg-surface p-6 pb-8 shadow-lg md:max-w-xl lg:max-w-2xl"
		>
			<!-- Close Menu Button -->
			<button
				class="my-4 flex h-7 w-7 items-center justify-center stroke-primary transition-all duration-200 hover:scale-150 hover:stroke-tertiary"
				on:click={toggleMenu}
			>
				<svg viewBox="0 0 10 10" class="h-3 w-3 overflow-visible"
					><path
						d="M0 0L10 10M10 0L0 10"
						fill="none"
						stroke-width="2"
						stroke-linecap="round"
					/></svg
				>
			</button>

			<!-- Nav Elements -->
			<nav class="headline-medium flex flex-col gap-6 text-center">
				{#each elements as element}
					<a
						class="text-primary-container-on transition-all duration-200 hover:scale-105 hover:text-tertiary"
						href={element.href}
						on:click={toggleMenu}
					>
						{element.name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<header
	id="header"
	class="{$$props.class} {activeheaderClass} duration-400 top-0 z-40 w-full border-secondary/10 text-primary transition-all"
>
	<div class="md:px-18 relative mx-auto flex items-center px-6 lg:max-w-5xl xl:max-w-6xl">
		<a class="flex gap-3" href="/">
			<Logo />
			<p class="headline-small my-auto hidden pb-1 sm:flex">Futino</p>
		</a>
		<div class="title-large ml-auto flex items-center gap-8">
			<nav class="hidden gap-6 pb-0.5 md:flex lg:gap-8">
				{#each elements as element, i}
					<a class=" hover:text-tertiary" href={element.href}>
						{element.name}
					</a>
				{/each}
			</nav>
			<div class="flex gap-6 md:border-primary/50">
				<button class="flex stroke-primary hover:stroke-tertiary md:hidden" on:click={toggleMenu}>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>
