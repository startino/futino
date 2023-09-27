<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	// import Button from '$lib/components/atoms/Button.svelte';
</script>

<Header />

<main
	class="py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8  dark:border-primary-dark/40">
	<div class="grid justify-items-center space-y-12 mx-auto">
		<h1 class="display-large">Stavanger HEMA - Allheim</h1>

		<h2 class="headline-large">Rogalands most consistent HEMA club!</h2>
	</div>
</main>

<Footer />
