<script lang="ts">
	import ThemeButton from '$lib/atoms/ThemeButton.svelte';
	import Logo from '$lib/atoms/Logo.svelte';
	import { onMount } from 'svelte';

	let scrollY: number;
	let hasScrolled: boolean = false; // If the user has scrolled at all => true

	let largeHeaderClass =
		'py-10 text-primary-container-on-light dark:text-primary-container-on-dark';
	let activeheaderClass = largeHeaderClass;
	let miniHeaderClass =
		'py-3 border-b border-secondary-light/11 dark:border-secondary-dark/10 backdrop-blur bg-surface-light/60 dark:bg-surface-dark/60 text-primary-container-on-light backdrop-blur dark:text-primary-container-on-dark';

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

<svelte:window bind:scrollY />

<div
	id="header"
	class="{$$props.class} {activeheaderClass} border-b border-transparent fixed top-0 z-40 flex-none w-full transition-all duration-400">
	<div class="py-2 mx-5">
		<div class="flex relative items-center md:px-10 lg:px-20 xl:px-40 px-auto md:px-auto">
			<a class="flex overflow-hidden px-3 gap-3 justify-center" href="/">
				<Logo />
				<p class="invisible pt-0.5 text-lg font-bold sm:visible">Futino</p>
			</a>
			<div class="flex items-center ml-auto">
				<nav class="body-large font-semibold tracking-wide">
					<ul class="flex m-auto space-x-8">
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="/pricing">
								About
							</a>
						</li>
						<li class="border-l border-secondary-light/20 dark:border-secondary-dark/20" />
						<li>
							<ThemeButton />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
