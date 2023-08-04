<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import TabNav from './TabNav.svelte';

	import { tabs } from './tabs';
</script>

<Header />

<main
	class="py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40">
	<div class="grid justify-items-center space-y-12 mx-auto">
		<h1 class="display-large">Adopt an online presence the way you want to.</h1>

		<h3 class="display-small">Consider some of our offers:</h3>

		<TabNav {tabs} />
	</div>
</main>

<Footer />
