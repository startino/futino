<script>
	import Header from '$lib/components/molecules/Header.svelte';

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Pricing', href: '/pricing' }
	];

	const CTAButtons = {
		Login: { href: '/login', highlight: false },
		Register: { href: '/register', highlight: true }
	};
</script>

<Header companyName="Oak" pages={navigation} {CTAButtons} />

<slot />
