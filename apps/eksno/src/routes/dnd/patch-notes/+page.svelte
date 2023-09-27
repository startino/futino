<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Header from '$lib/molecules/Header.svelte';
	import patch_notes from '$lib/patch_notes.md?raw';
</script>

<Header />

<main
	class="py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8  border-primary/40">
	<article
		class="text-left prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-invert prose-main justify-items-center space-y-12 mx-auto">
		<SvelteMarkdown source={patch_notes} />
	</article>
</main>
