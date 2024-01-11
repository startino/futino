<script>
	import '../app.pcss';
	import Header from '$lib/components/Header.svelte';
</script>

<!-- Main -->
<main class="flex min-h-screen flex-col bg-sky-900 text-white">
	<!-- Header -->
	<Header />

	<div class="pt:20 flex flex-col items-center justify-center md:pt-40">
		<slot />
	</div>

	<!-- Footer -->
	<footer></footer>
</main>
