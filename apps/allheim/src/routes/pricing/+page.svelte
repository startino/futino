<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	// import Button from '$lib/components/atoms/Button.svelte';
</script>

<Header />

<main
	class="py-20 px-4 border-b shadow-2xl sm:px-6 md:px-8  border-primary/40">
	<div class="grid justify-items-center space-y-12 mx-auto">
		<h1 class="display-large">Pricing</h1>

		<h2 class="headline-large">Stavanger HEMA - Allheim</h2>
	</div>
</main>

<div class="grid h-full w-full justify-center place-items-center">
	<p class="m-5 bg-white/5 shadow-lg shadow-black rounded-lg p-20 display-large">
		1 500.- / 6 months
	</p>
</div>

<Footer />
