<script lang="ts">
	import { formatDate } from '$lib/utils';
	import SEO from '$lib/components/SEO/index.svelte';

	export let data;
</script>

<SEO
	slug="blog"
	title="Blog • Startino"
	metadescription="This is a collection of blogs written by Startino to help entrepreneurs and startups with their software startup journey"
/>

<div class="py-36 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<h2 class="text-3xl">Blog</h2>
			<p class="mt-2 text-center text-lg leading-8 text-foreground/80"></p>
			<div class="mx-auto mt-16 space-y-8 lg:space-y-10 text-center lg:mt-20  flex flex-col">
				{#each data.posts as post}
					{#if post.published}
						<a href="/blog/{post.slug}" class="group">
							<article
								class="relative isolate flex flex-col gap-8 lg:grid lg:grid-cols-4"
								data-pubdate={post.date}
							>
								<div
									class="aspect-[16/9] relative col-span-1 sm:aspect-[2/1] lg:aspect-1 lg:h-full lg:shrink-0"
								>
									<img
										src={post.thumbnail}
										alt="Thumbnail for {post.title}"
										class="absolute inset-0 h-full w-full rounded-2xl bg-card/20 object-cover"
									/>
									<div
										class="absolute inset-0 rounded-2xl ring-2 ring-inset ring-primary/10"
									></div>
								</div>
								<div class="col-span-3">
									<div class="flex items-center gap-x-4 text-xs">
										<time datetime={post.date} class="text-foreground/70"
											>{post.date_formatted}</time
										>
									</div>
									<div class="group relative max-w-xl text-left">
										<h3
											class="mt-2 text-lg font-semibold leading-6 text-foreground group-hover:text-foreground/80"
										>
											{post.title}
										</h3>
										<p class="mt-3 text-xs leading-6 text-foreground/80">
											{post.description}
										</p>
									</div>
									<div class="mt-2 flex border-t border-gray-900/5 pt-2">
										<div class="relative flex items-center gap-x-4">
											<img
												src={post.author == 'Jorge Lewis'
													? '/portraits/jorge-main-close-up.webp'
													: post.author == 'Jonas Lindberg'
														? '/people/jonas-main-close-up.webp'
														: '/favicon.png'}
												alt="{post.author}'s Profile Picture"
												class="h-10 w-10 rounded-full bg-card"
											/>
											<div class="text-sm leading-6">
												<p class="font-semibold text-foreground">{post.author}</p>
											</div>
										</div>
									</div>
								</div>
							</article>
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
