<script lang="ts">
	import { onMount, type SvelteComponent } from "svelte";
	import SEO from "$lib/components/SEO/index.svelte";
	import { page } from "$app/stores";

	import { base } from "$app/paths";

	export let data;

	const { post: {metadata, content} } = data;
</script>

<SEO
	article
	slug={metadata.slug}
	title={metadata.title}
	datePublished={metadata.date}
	metadescription={metadata.description}
	lastUpdated={metadata.date}
/>

<article
	class="sm:prose-md prose prose-blog mx-auto px-4 md:prose-lg xl:prose-xl"
	data-pubdate={metadata.date}
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html content}
</article>
