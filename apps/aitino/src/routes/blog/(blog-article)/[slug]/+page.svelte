<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { page } from '$app/stores';

	import { base } from '$app/paths';

	export let data;

	const { post } = data;
</script>

<SEO
	article
	slug={post.slug}
	title={post.title}
	datePublished={post.date}
	metadescription={post.description}
	timeToRead={post.timeToRead}
	lastUpdated={post.date}
/>

<article
	class="sm:prose-md prose prose-blog mx-auto px-4 md:prose-lg xl:prose-xl"
	data-pubdate={post.date}
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html post.content}
</article>
