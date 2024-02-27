<script>
	import '$styling';
	import Shell from '$lib/components/organisms/Shell.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import PageHeader from '$lib/components/molecules/PageHeader.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<Skeleton class="fixed inset-0 top-0 z-50 h-2 bg-primary-500" />
{/if}

<Shell
	class="h-screen w-full max-w-none"
	slotSidebarLeft="m-4"
	slotPageHeader="my-4"
	slotPageContent=""
>
	<svelte:fragment slot="sidebarLeft"><Sidebar class="" /></svelte:fragment>
	<svelte:fragment slot="pageHeader"><PageHeader class="" /></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</Shell>
