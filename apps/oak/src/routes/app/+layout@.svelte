<script>
	import '$styling';
	import Shell from '$lib/components/organisms/Shell.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { navigating } from '$app/stores';
	import { setContext } from '$lib/utils';
	import { createCurrentProfile } from '$lib/stores';

	export let data;

	setContext('currentUser', createCurrentProfile(data.storesData.currentProfile));
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
	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
	<!-- Router Slot -->
	<main class="p-4">
		<slot />
	</main>
</Shell>
