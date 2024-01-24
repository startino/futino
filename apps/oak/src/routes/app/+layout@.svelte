<script>
	import '$styling';
	import Shell from '$lib/components/organisms/Shell.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import ThemeToggle from '$lib/components/atoms/ThemeToggle.svelte';
	import Header from '$lib/components/molecules/Header.svelte';
	import PageHeader from '$lib/components/molecules/PageHeader.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { browser } from '$app/environment';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { page, navigating } from '$app/stores';
</script>

<Shell
	class="prose prose-main h-screen h-screen w-full max-w-none sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-a:no-underline"
>
	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
	<svelte:fragment slot="pageHeader"><PageHeader /></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</Shell>
