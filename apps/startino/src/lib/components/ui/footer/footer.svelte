<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Logo } from '$lib/components/ui/logo';
	export let links: { [key: string]: { name: string; href: string }[] } = {};
</script>

<footer class="bg-background" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<Logo wordmark class="h-9" />
				<p class="text-balance text-sm leading-6 text-gray-300">
					Building Software Ideas into Life
				</p>
			</div>
			<div class="mt-16 gap-8 xl:col-span-2 xl:ml-64 xl:mt-0">
				<div class=" md:grid md:grid-cols-3 md:gap-8">
					{#each Object.entries(links) as [category, links]}
						<div class="mt-6 xl:mt-0">
							<h3 class="text-md font-semibold leading-6 text-white">{category}</h3>
							<ul role="list" class="mt-6 space-y-4">
								{#each links as { name, href }}
									<li>
										<a {href} class="text-sm leading-6 text-gray-300 hover:text-white">{name}</a>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-400">&copy; 2024 Futino Ltd. All rights reserved.</p>
		</div>
	</div>
</footer>
