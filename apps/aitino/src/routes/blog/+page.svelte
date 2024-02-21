<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import SEO from '$lib/components/SEO/index.svelte';

	export let data;
</script>

<SEO
	slug="blog"
	title="Blog • Aitino"
	metadescription="This is a collection of blogs written by Aitino to raise awareness of the capabilities of multi-agent systems, especially in this modern age of powerful AI models."
/>

<h1 class="text-4xl">Blog</h1>
<div class="">
	{#each data.posts as post}
		{#if !post.draft}
			<a class="no-underline" href="/blog/{post.slug}" title="Read the article »">
				<article
					class="prose prose-blog rounded-md border border-border p-6"
					data-pubdate={post.date}
				>
					<h2>{post.title}</h2>
					<h6>Published {post.date}</h6>
					<p>{post.description}</p>
				</article>
			</a>
		{/if}
	{/each}
</div>
