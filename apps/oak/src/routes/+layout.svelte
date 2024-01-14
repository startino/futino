<script>
	import '../app.pcss';
	import Shell from '$lib/components/organisms/Shell.svelte';

	import Header from '$lib/components/molecules/Header.svelte';
	import Prose from '$lib/components/atoms/Prose.svelte';

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Pricing', href: '/pricing' }
	];

	const CTAButtons = {
		Login: { href: '/login', highlight: false },
		Register: { href: '/register', highlight: true }
	};
</script>

<Shell
	class="no-scroll prose-a:no-underline prose  prose-main sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl h-screen max-w-none overflow-hidden"
>
	<svelte:fragment slot="header">
		<Header companyName="Oak" pages={navigation} {CTAButtons} />
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"></svelte:fragment>
	<!-- (footer) -->
</Shell>
