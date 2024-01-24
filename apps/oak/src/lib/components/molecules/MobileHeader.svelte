<script lang="ts">
	export let pages;
	import Logo from '../atoms/Logo.svelte';
	import { onMount } from 'svelte';
	import Icon from '../atoms/Icon.svelte';
	import { fade, slide } from 'svelte/transition';
	import Button from '../atoms/Button.svelte';

	// Types to get TailwindCSS Intellisense
	import type { CssClasses } from '../../types.ts';
</script>

<div transition:fade class="fixed inset-0 z-30">
	<div on:click={toggleMenu} class="absolute h-screen w-screen bg-black/50 backdrop-blur-sm" />
	<!-- Menu Card -->
	<div
		in:slide={{ delay: 200, duration: 300 }}
		out:slide
		class="bg-surface absolute bottom-0 left-0 right-0 top-0 z-50 mx-auto my-auto flex h-fit w-full max-w-xs flex-col items-center gap-4 rounded-lg p-12 shadow-lg md:max-w-xl lg:max-w-2xl"
	>
		<!-- Nav Elements -->
		<nav class="headline-medium flex flex-col gap-6 text-center">
			{#each Object.entries(pages) as [name, href]}
				<a
					class="text-primary-container-on hover:text-tertiary transition-all duration-200 hover:scale-105"
					{href}
					on:click={toggleMenu}
				>
					{name}
				</a>
			{/each}
		</nav>
	</div>
</div>
