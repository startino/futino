<script lang="ts">

	import Logo from '$lib/atoms/Logo.svelte';
	import { onMount } from 'svelte';

	export const elements = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'D&D patch-notes',
			href: '/dnd/patch-notes',
		},
	];

	let largeHeaderClass = 'fixed py-12';
	let activeheaderClass = largeHeaderClass;
	let miniHeaderClass =
		'fixed py-3 border-b  bg-surface/60 backdrop-blur';

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
	<div class="z-50 fixed inset-0 bg-black/20 backdrop-blur-sm">
		<!-- Menu Card -->
		<div
			class="absolute top-6 right-6 p-6 w-full max-w-xs  bg-primary-container rounded-lg shadow-lg">
			<!-- Close Menu Button -->
			<button
				class="absolute top-6 right-6 w-7 h-7 flex items-center justify-center  stroke-primary hover:stroke-tertiary"
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
				{#each elements as element}
					<a
						class=" text-primary-container-on hover:text-tertiary"
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
	class="{$$props.class} {activeheaderClass}  text-primary  border-secondary/10 top-0 z-40 w-full transition-all duration-400">
	<div class="flex relative items-center px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto">
		<a class="flex gap-3" href="/">
			<Logo />
			<p class="hidden sm:flex text-xl my-auto pb-1">Eksno.com</p>
		</a>
		<div class="flex items-center ml-auto gap-6">
			<nav class="hidden md:flex gap-6 pb-0.5">
				{#each elements as element, i}
					<a class="hover:text-tertiary" href={element.href}>
						{element.name}
					</a>
				{/each}
			</nav>
			<div
				class="gap-6 pl-6 flex md:border-l md: md:border-primary/50">

				<button
					class="flex md:hidden  stroke-primary hover:stroke-tertiary"
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
