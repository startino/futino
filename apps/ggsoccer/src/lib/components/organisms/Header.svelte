<script lang="ts">
	import { base } from '$app/paths';

	import Logo from '$lib/components/atoms/Logo.svelte';
	import Icon from '../atoms/Icon.svelte';
</script>

<div
	class="{$$props.class} bg-red-600-container/5 text-red-600-container-on top-0 z-40 w-full flex-none backdrop-blur transition-colors duration-500"
>
	<div class="mx-5 border-b border-green-600/10 py-2">
		<div class="px-auto md:px-auto relative flex items-center md:px-10 lg:px-20 xl:px-40">
			<a class="flex flex-none justify-center gap-3 overflow-hidden" href="{base}/">
				<Logo />
				<p class="display-small hidden self-center 2xl:flex">Good Game Soccer</p>
			</a>

			<div class="ml-auto flex items-center">
				<nav class="text-sm font-semibold">
					<ul class="text-surface-on m-auto flex items-center space-x-3 sm:space-x-6 md:space-x-12">
						<li class="hover:">
							<a class="" href="https://www.instagram.com/ggsoccercamps/">
								<Icon icon="instagram" height="24" width="24" />
							</a>
						</li>

						<li class="hover:">
							<a class="" href="https://www.facebook.com/goodgamesoccercamps">
								<Icon icon="facebook" height="24" width="24" fillColor="DarkSlateBlue" />
							</a>
						</li>

						<li class=" hover:text-green-600-on w-max p-2 hover:bg-green-600 sm:p-3">
							<a class="inline" href="tel:9133600394">
								<h1 class="body-small md:body-large">(913) 360-0394</h1>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
