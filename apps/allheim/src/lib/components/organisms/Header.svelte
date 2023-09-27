<script lang="ts">
	import { base } from '$app/paths';
	import ThemeButton from '$lib/components/molecules/ThemeButton.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
</script>

<div
	class="{$$props.class} fixed top-0 z-40 flex-none w-full transition-colors duration-500 backdrop-blur  bg-primary-container/5  text-primary-container-on">
	<div class="py-4 mx-5 border-b  border-secondary/10">
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
								class="inline hover:text-tertiary"
								href="{base}/">
								Home
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary"
								href="{base}/schedule">
								Schedule
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary"
								href="{base}/contact">
								Contact
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary"
								href="{base}/about">
								About
							</a>
						</li>
						<li>
							<a
								class="inline hover:text-tertiary"
								href="{base}/pricing">
								Pricing
							</a>
						</li>
						<li class="border-l  border-secondary/20" />
						<li>
							<ThemeButton />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
