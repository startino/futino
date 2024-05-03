<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let links: { [key: string]: { name: string; href: string }[] } = {};
</script>

<footer class="bg-surface" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<img class="h-10" src="favicon.png" alt="Company name" />
				<p class="text-balance text-sm leading-6 text-gray-300">
					Building the software ideas of founders and startups into life
				</p>

				<div class="flex space-x-6">
					<a href="https://github.com/futino/aitino" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">GitHub</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<a href="https://youtube.com/@futinolimited" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">YouTube</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
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
