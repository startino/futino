<script lang="ts">
	import { base } from '$app/paths';
	import ThemeButton from '$lib/components/molecules/ThemeButton.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Icon from '../atoms/Icon.svelte';
</script>

<div
	class="{$$props.class} top-0 z-40 flex-none w-full transition-colors duration-500 backdrop-blur bg-primary-container-light/5 dark:bg-primary-container-dark/5 text-primary-container-on-light dark:text-primary-container-on-dark"
>
	<div class="py-2 mx-5 border-b border-secondary-light/10 dark:border-secondary-dark/10">
		<div class="flex relative items-center md:px-10 lg:px-20 xl:px-40 px-auto md:px-auto">
			<a class="flex overflow-hidden gap-3 justify-center flex-none" href="{base}/">
				<Logo />
				<p class="hidden 2xl:flex self-center display-small">Good Game Soccer</p>
			</a>

			<div class="flex items-center ml-auto">
				<nav class="text-sm font-semibold">
					<ul
						class="flex m-auto space-x-3 sm:space-x-6 md:space-x-12 text-surface-on-light dark:text-surface-on-dark items-center"
					>
						<li class="hover:text-tertiary-light dark:hover:text-tertiary-light">
							<a class="" href="https://www.instagram.com/ggsoccercamps/">
								<Icon icon="instagram" height="24" width="24" />
							</a>
						</li>

						<li class="hover:text-tertiary-light dark:hover:text-tertiary-light">
							<a class="" href="https://www.facebook.com/goodgamesoccercamps">
								<Icon icon="facebook" height="24" width="24" fillColor="DarkSlateBlue" />
							</a>
						</li>

						<li
							class="bg-primary-light hover:bg-secondary-light hover:text-secondary-on-light dark:hover:text-secondary-on-dark dark:hover:bg-secondary-dark p-2 sm:p-3 w-max"
						>
							<a class="inline" href="tel:9133600394">
								<h1 class="body-small md:body-large text-primary-on-light">(913) 360-0394</h1>
							</a>
						</li>
						<li class="self-stretch border-l border-black/20 dark:border-secondary-dark/20" />
						<li>
							<ThemeButton />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
