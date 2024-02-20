<script lang="ts">
	import { formatDate } from '$lib/utils';
	import SEO from '$lib/components/SEO/index.svelte';

	export let data;

	const { content, meta, slug } = data;

	let title = meta.title;
</script>

<SEO
	article
	{slug}
	{title}
	datePublished={meta.date}
	metadescription={meta.description}
	timeToRead={meta.timeToRead}
	lastUpdated={meta.date}
/>

<article class="prose sm:prose-md md:prose-lg xl:prose-xl prose-blog mx-auto px-4">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published on {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Hide the hashtags for now. I don't think they add trust.-->
	<!-- <div>
		{#each data.meta.categories as category}
			<span class="surface-4 text-accent">&num;{category} </span>
		{/each}
	</div> -->

	<svelte:component this={data.content} />
</article>
