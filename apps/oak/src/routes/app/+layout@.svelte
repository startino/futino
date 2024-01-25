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

{#if $navigating}
	<!-- Skeleton of the Shell.svelte layout-->
	<div class="w-screen h-screen flex flex-row place-items-center m-4">
		<Skeleton class="h-full max-w-72 basis-full" />
		<div class="flex flex-col h-full w-full ml-4 gap-y-4">
			<Skeleton class="h-20 w-full mb-auto" />
			<Skeleton class="h-full w-full mb-auto" />
		</div>
	</div>
{:else}
	<Shell
		class="prose prose-main h-screen h-screen w-full max-w-none sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-a:no-underline"
		slotSidebarLeft="m-4"
		slotPageHeader="my-4"
		slotPageContent=""
	>
		<svelte:fragment slot="sidebarLeft" ><Sidebar class="" /></svelte:fragment>
		<svelte:fragment slot="pageHeader"><PageHeader class="" /></svelte:fragment>
		<!-- Router Slot -->
		<slot />
		<!-- ---- / ---- -->
		<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
		<!-- (footer) -->
	</Shell>
{/if}