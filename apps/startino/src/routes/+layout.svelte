<script lang="ts">
	import '$styling';
	import { Header } from '$lib/components/ui/header';
	import { Footer } from '$lib/components/ui/footer';
	import { page } from '$app/stores';

	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';  
	import { particlesConfig } from '$lib/config/particles-config';

	const footerLinks = {
		Company: [
			{ name: 'About', href: '/#about' },
			{ name: 'Pricing', href: '/#pricing' },
			{ name: 'Contact Us', href: '/#contact' }
		],
		Socials: [
			{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/startino' },
			{ name: 'GitHub', href: 'https://github.com/futino' }
		]
	};
	const headerLinks = [
		{
			name: 'Home',
			href: '/#hero'
		},
		{
			name: 'About',
			href: '#about'
		},
		{
			name: 'Contact',
			href: '#contact'
		},
		{
			name: 'Pricing',
			href: '#pricing'
		},
		{
			name: 'Blog',
			href: 'blog'
		}
	];
	let onParticlesLoaded = (event: CustomEvent<{ container: any }>) => {
		const container = event.detail.container;

		// you can use container to call all the Container class methods
		// like play, pause, refresh, start, stop
	};

	void particlesInit(async (engine) => {
		// call this once per app
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	});

	$: isBlogPage = $page.url.pathname.startsWith('/blog');
</script>

<Header elements={headerLinks} />

<main
	class="relative min-h-screen w-full bg-background text-center text-background-on"
>
	{#if !isBlogPage}
		<Particles
			id="tsparticles"
			class="w-full h-full absolute z-0"
			options={particlesConfig}
			on:particlesLoaded={onParticlesLoaded}
		/>
	{/if}
	<!-- The content -->
	<div class="relative flex min-h-screen h w-full flex-col items-center justify-center h-full gap-24">
		<slot />
	</div>
</main>

<Footer links={footerLinks} />
