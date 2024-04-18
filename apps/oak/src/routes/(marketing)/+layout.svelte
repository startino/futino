<script>
	import Shell from '$lib/components/organisms/Shell.svelte';

	import Header from '$lib/components/molecules/Header.svelte';
	import Prose from '$lib/components/atoms/Prose.svelte';
	import MarketingShell from '$lib/components/ui/shell/marketing-shell.svelte';

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Pricing', href: '/pricing' }
	];

	const CTAButtons = {
		Login: { href: '/login', highlight: false },
		Register: { href: '/register', highlight: true }
	};
</script>

<MarketingShell class="">
	<svelte:fragment slot="header">
		<Header companyName="Oak" pages={navigation} {CTAButtons} />
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"></svelte:fragment>
	<!-- (footer) -->
</MarketingShell>
