<script>
	import "$styling";
	import Shell from '$lib/components/organisms/Shell.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import ThemeToggle from '$lib/components/atoms/ThemeToggle.svelte';
	import Header from '$lib/components/molecules/Header.svelte';
	import PageHeader from '$lib/components/molecules/PageHeader.svelte';
</script>


<Shell class="h-screen prose-a:no-underline prose prose-main sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl h-screen w-full max-w-none">
	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
	<svelte:fragment slot="pageHeader"><PageHeader /></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page y </svelte:fragment>
	<!-- (footer) -->
</Shell>


