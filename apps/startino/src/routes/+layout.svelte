<script lang="ts">
	import '$styling';
	import { Header } from '$lib/components/ui/header';
	import { Footer } from '$lib/components/ui/footer';

	const footerLinks = {
		Company: [
			{ name: 'About', href: '/#about' },
			{ name: 'Pricing', href: '/#pricing' },
			{ name: 'Contact Us', href: '/#contact' }
		],
		Socials: [
			{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/futino' },
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
</script>

<Header elements={headerLinks} />

<main
	class="relative min-h-screen w-full bg-background text-center text-background-on"
>

	<!-- The content -->
	<div class="relative flex min-h-screen w-full flex-col items-center justify-center gap-24">
		<slot />
	</div >
</main>

<Footer links={footerLinks} />
