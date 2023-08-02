<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import HostingTab from './HostingTab.svelte';
	import MarketingTab from './MarketingTab.svelte';
	import PartnershipTab from './PartnershipTab.svelte';
	import Tabs from '$lib/components/organisms/Tabs.svelte';
	import CommisionTab from './CommisionTab.svelte';

	let tabs = [
		{ label: 'Hosting Plans', value: 1, component: HostingTab },
		{ label: 'Marketing Plans', value: 2, component: MarketingTab },
		{ label: 'Commission', value: 3, component: CommisionTab },
		{ label: 'Partnership', value: 4, component: PartnershipTab }
	];
</script>

<Header />

<main
	class="py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40"
>
	<div class="grid justify-items-center space-y-12 mx-auto">
		<h1 class="text-5xl">Adopt an online presence the way you want to.</h1>

		<h3 class="text-2xl">Consider some of our offers:</h3>

		<Tabs {tabs} />
	</div>
</main>

<Footer />
