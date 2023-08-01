<script lang="ts">
	import { base } from '$app/paths';
	import ThemeButton from '$lib/components/molecules/ThemeButton.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
</script>

<div
	class="{$$props.class} fixed top-0 z-40 flex-none w-full transition-colors duration-500 backdrop-blur bg-primary-container-light/5 dark:bg-primary-container-dark/5 text-primary-container-on-light dark:text-primary-container-on-dark">
	<div class="py-4 mx-5 border-b border-secondary-light/10 dark:border-secondary-dark/10">
		<div class="flex relative items-center md:px-10 lg:px-20 xl:px-40 px-auto md:px-auto">
			<a class="flex overflow-hidden px-3 gap-3 justify-center" href="{base}/">
				<Logo />
				<p class="invisible pt-0.5 text-lg font-bold lg:visible">Stavanger HEMA - Allheim</p>
			</a>

			<div class="flex items-center ml-auto">
				<nav class="text-sm font-semibold leading-6">
					<ul class="flex m-auto space-x-8">
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="{base}/">
								Home
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="{base}/schedule">
								Schedule
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="{base}/contact">
								Contact
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="{base}/about">
								About
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
								href="{base}/pricing">
								Pricing
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
