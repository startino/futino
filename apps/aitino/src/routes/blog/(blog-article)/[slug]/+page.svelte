<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose prose-main mx-auto">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div>
		{#each data.meta.categories as category}
			<span class="surface-4 text-accent">&num;{category} </span>
		{/each}
	</div>

	
		<svelte:component this={data.content} />
	
</article>

