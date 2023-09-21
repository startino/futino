<script lang="ts">
	import '../app.postcss';
	import { Header, Shell, FatFooter } from 'lorc';
	const footerCategories: { [key: string]: { [key: string]: string } } = {
		Explore: {
			Home: '/',
			Products: '/',
			Services: '/',
			'Our Work': '/',
		},
		Legal: {
			'Privacy Policy': '/',
			'Tems of Service': '/',
			Disclaimer: '/',
		},
		Support: {
			Contact: '/',
			'+852 6931 0020': 'tel: +852 6931 0020',
			'Sales@wonderlee.hk': 'email: Sales@wonderlee.hk',
			FAQ: '/',
		},
		Company: {
			About: '/',
			Careers: '/',
		},
	};

	const headerPages: { [key: string]: string } = {
		Home: '/',
		Products: '/',
		Services: '/',
		'Our work': '/',
		Contact: '/',
		About: '/',
	};
</script>

<Shell class="bg-background-light dark:bg-background-dark">
	<svelte:fragment slot="header">
		<Header pages={headerPages} dualTheme={false} companyName="Wonderlee" />
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<FatFooter categories={footerCategories} companyName="Wonderlee" />
	</svelte:fragment>
</Shell>
