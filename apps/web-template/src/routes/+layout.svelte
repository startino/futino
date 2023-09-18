<script lang="ts">
	import '../app.postcss';
	import { Header, Shell, Footer, Logo, ThemeButton, Icon } from 'lorc';

	const headerElements: { name: string; href: string }[] = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: '/',
		},
		{
			name: 'Pricing',
			href: '/',
		},
		{
			name: 'Contact',
			href: '/',
		},
	];
</script>

<Shell
	class="card h-full p-1"
	slotSidebarLeft="grid grid-cols-1"
	slotSidebarRight="grid grid-cols-1"
	slotPageContent="grid grid-cols-1">
	<svelte:fragment slot="header">
		<Header pages={headerElements} centerHeader={true} companyName="Futino Web-template" />
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</Shell>
