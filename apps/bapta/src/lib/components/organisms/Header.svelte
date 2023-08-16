<script lang="ts">
	import { base } from '$app/paths';
	import ThemeButton from '$lib/components/atoms/ThemeButton.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '../atoms/Icon.svelte';

	let adventuresOpen = false;
	function mouseOver() {
		adventuresOpen = true;
	}

	function mouseLeave() {
		adventuresOpen = false;
	}
	function focus() {
		//isHovered = true;
	}

	let largeHeaderClass = 'fixed py-12';
	let activeheaderClass = largeHeaderClass;
	let miniHeaderClass = 'fixed py-3 border-b bg-surface-dark/60 backdrop-blur';

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

<header
	id="header"
	class="{$$props.class} {activeheaderClass} text-primary-light dark:text-primary-dark border-secondary-light/10 dark:border-secondary-dark/10 top-0 z-40 w-full transition-all duration-400">
	<div class="flex relative items-center px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto">
		<a class="flex gap-3" href="/">
			<Logo />
			<p class="hidden sm:flex text-xl my-auto pb-1">Bapta Safaris</p>
		</a>
		<div class="flex items-center ml-auto gap-6">
			<nav class="hidden md:flex gap-6 pb-0.5">
				<a class="nav-item" href="/">Home </a>

				<a class="nav-item" href="/tours"> Tours </a>
				<a class="nav-item" href="/contact"> Contact </a>
				<div
					class="relative group"
					on:mouseover={mouseOver}
					on:mouseleave={mouseLeave}
					on:focus={focus}>
					<a
						class="flex flex-row items-center gap-x-1 hover:text-tertiary-light dark:hover:text-tertiary-dark"
						href="/adventures">
						<h1 class="">Adventures</h1>
						<span class="inline-flex self-center">
							<Icon
								class="group-hover:translate-y-1 transition-transform group-hover:rotate-180 group-hover:-translate-x-1 justify-self-center self-center pr-1 nav-item"
								fillColor="currentColor"
								icon="down-caret"
								height="12"
								width="12" />
						</span>
					</a>

					{#if adventuresOpen}
						<ul
							in:slide
							out:slide={{ delay: 200, duration: 300 }}
							class="absolute flex flex-col text-left py-2 body-small bg-surface-dark/50 outline outline-1 mt-2 rounded-lg gap-y-2 [&>*]:px-2">
							<li>
								<a
									class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
									href="/adventures/kilimanjaro">
									Mount Kilimanjaro
								</a>
							</li>
							<li>
								<a
									class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
									href="/adventures/kilimanjaro">
									Mount Meru
								</a>
							</li>
							<li>
								<a
									class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
									href="/adventures/zanzibar">
									Zanzibar Beach
								</a>
							</li>
						</ul>
					{:else}
						<ul class="" />
					{/if}
				</div>
				<a href="/about" class="nav_item"> About</a>
			</nav>
		</div>
	</div>
</header>

<style>
	.nav-item {
		@apply hover:text-tertiary-light dark:hover:text-tertiary-dark;
	}
</style>
