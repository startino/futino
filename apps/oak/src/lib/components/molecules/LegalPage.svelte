<script>
	import Prose from '../atoms/Prose.svelte';
</script>

<main
	class="{$$props.class} border-b border-primary/40 px-6 py-40 shadow-2xl prose-headings:font-sans sm:px-6 md:px-8"
>
	<Prose size="xs">
		<article class="mx-auto max-w-7xl justify-items-center space-y-8 text-left">
			<slot />
		</article>
	</Prose>
</main>
