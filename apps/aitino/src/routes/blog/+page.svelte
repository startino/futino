<script lang="ts">
	import { formatDate } from "$lib/utils";
	import * as config from "$lib/config";
	import SEO from "$lib/components/SEO/index.svelte";

	export let data;
</script>

<SEO
	slug="blog"
	title="Blog • Aitino"
	metadescription="This is a collection of blogs written by Aitino to raise awareness of the capabilities of multi-agent systems, especially in this modern age of powerful AI models."
/>


<div class="bg-background py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<h2 class="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">From the blog</h2>
			<p class="mt-2 text-lg leading-8 text-foreground/80 text-center">
				Learn about the capabilities of multi-agent systems, especially in this modern age of powerful AI models.
			</p>
			<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
				{#each data.posts as post}
					{#if !post.draft}
						<a href="/blog/{post.slug}" class="group">
							<article
								class="relative isolate flex flex-col gap-8 lg:flex-row"
								data-pubdate={post.date}
							>
								<div
									class="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0"
								>
									<img
										src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
										alt=""
										class="absolute inset-0 h-full w-full rounded-2xl bg-card object-cover"
									/>
									<div
										class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-background/10"
									></div>
								</div>
								<div>
									<div class="flex items-center gap-x-4 text-xs">
										<time datetime="2020-03-16" class="text-foreground/70">Mar 16, 2020</time>
										<a
											href="#"
											class="relative z-10 rounded-full bg-primary px-3 py-1.5 font-medium text-primary-foreground hover:bg-"
											>Marketing</a
										>
									</div>
									<div class="group relative max-w-xl">
										<h3
											class="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-foreground/80"
										>
											{post.title}
										</h3>
										<p class="mt-5 text-sm leading-6 text-foreground/80">
											{post.description}
										</p>
									</div>
									<div class="mt-6 flex border-t border-gray-900/5 pt-6">
										<div class="relative flex items-center gap-x-4">
											<img
												src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
												class="h-10 w-10 rounded-full bg-card"
											/>
											<div class="text-sm leading-6">
												<p class="font-semibold text-foreground">Michael Foster</p>
												<p class="text-foreground/80">Co-Founder / CTO</p>
											</div>
										</div>
									</div>
								</div>
							</article>
						</a>
					{/if}
				{/each}

				<!-- More posts... -->
			</div>
		</div>
	</div>
</div>
