<script lang="ts">
	import { formatDate } from '$lib/utils';
	import SEO from '$lib/components/SEO/index.svelte';
	import { badgeVariants } from '$lib/components/ui/badge';

	export let data;
</script>

<SEO
	slug="blog"
	title="Blog • Startino"
	metadescription="This is a collection of blogs written by Startino to help industry experts with entrepreneurial spirits with their software startup journey"
/>

<div class="">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<h2 class="text-3xl text-left">Blog</h2>
			<p class="mt-2 text-center text-lg leading-8 text-foreground/80"></p>
			<div class="mx-auto mt-16 flex flex-col space-y-8 text-center lg:space-y-10">
				{#each data.posts as post}
					{#if post.published}
						<a href="/blog/{post.slug}" class="group border rounded-2xl p-6 border-border bg-surface">
							<article
								class="relative isolate flex flex-col gap-8 lg:grid lg:grid-cols-4"
								data-pubdate={post.date}
							>
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
									<ul class="mt-2 flex gap-2">
										{#each post.categories as category}
											<li class="bg-primary rounded-md text-primary-on px-2 py-1 text-sm font-semibold">{category}</li>
										{/each}
									</ul>
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
								<div class="flex lg:place-self-end mr-4 gap-x-4">
									<p class="text-sm font-light text-foreground">Read more...</p>
								</div>
							</article>
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
