<script lang="ts">
	import { base } from '$app/paths';
	import ThemeButton from '$lib/components/atoms/ThemeButton.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '../atoms/Icon.svelte';

	let largeHeaderClass =
		'py-10 text-primary-container-on-light dark:text-primary-container-on-dark';
	let miniHeaderClass =
		'py-3 border-b border-secondary-light/10 dark:border-secondary-dark/10 backdrop-blur bg-surface-light/60 dark:bg-surface-dark/60 text-primary-container-on-light backdrop-blur dark:text-primary-container-on-dark';

	let activeheaderClass = largeHeaderClass;

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

	onMount(() => {
		const header = document.querySelector('#header');

		window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll > 100) {
				if (activeheaderClass != miniHeaderClass) {
					activeheaderClass = miniHeaderClass;
				}
			} else {
				if (activeheaderClass != largeHeaderClass) {
					activeheaderClass = largeHeaderClass;
				}
			}
		});
	});
</script>

<div
	id="header"
	class="{$$props.class} {activeheaderClass} border-b border-transparent fixed top-0 z-40 flex-none w-full transition-all duration-400">
	<div class="py-2 mx-5 flex flex-col">
		<div class="flex relative items-center md:px-10 lg:px-20 xl:px-40 px-auto md:px-auto">
			<a class="flex overflow-hidden px-3 gap-3 justify-center" href="/">
				<Logo />
				<p class="invisible pt-0.5 title-medium my-auto font-bold sm:visible">Bapta Safaris</p>
			</a>
			<div class="flex items-center ml-auto">
				<nav class="body-large font-semibold tracking-wide">
					<ul class="flex m-auto space-x-8">
						<li>
							<a class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark" href="/">
								Home
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="/tours">
								Tours
							</a>
						</li>
						<li
							on:mouseover={mouseOver}
							on:mouseleave={mouseLeave}
							on:focus={focus}
							class="relative">
							<a
								class="flex flex-row items-center gap-x-1 hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="/adventures">
								<h1 class="">Adventures</h1>
								<span class="inline-flex self-center">
									<Icon
										class="row-span-2 row-start-1 col-start-3 col-span-1 md:col-start-7 group-hover:translate-y-1 transition-transform justify-self-end pr-1"
										fillColor="white"
										icon="down-arrow"
										height="12"
										width="12" />
								</span>
							</a>
							{#if adventuresOpen}
								<ul
									in:slide
									out:slide
									class="absolute flex flex-col text-left py-2 body-small bg-primary-light/20 rounded-lg gap-y-2 [&>*]:px-2">
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
							<ul class="" />
						</li>
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="/about">
								About
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
