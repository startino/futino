<script>
	import '../app.pcss';
	import LoremIpsum from '$lib/components/LoremIpsum.svelte';
</script>

<!-- Hero? -->
<section class="flex max-w-5xl flex-col items-center justify-center text-center">
	<h1 class="text-4xl">Who we are</h1>
	<LoremIpsum name="jeff" />
	<LoremIpsum name="bill" />
</section>
