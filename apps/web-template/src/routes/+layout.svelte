<script>
	import '../app.postcss';
	import { Header, Shell, Footer } from 'lorc';
</script>

<Shell
	class="card h-full p-1"
	slotSidebarLeft="grid grid-cols-1"
	slotSidebarRight="grid grid-cols-1"
	slotPageContent="grid grid-cols-1">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</Shell>
