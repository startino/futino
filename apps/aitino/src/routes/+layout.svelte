<script lang="ts">
	import { Toaster } from "svelte-sonner";
	import "$styling";
	import { setContext } from "svelte";
	import { Shell } from "$lib/components/layout/shell";
	import Header from "$lib/components/Header.svelte";

	export let data;

	setContext("splitTestIdentifier", data?.splitTestIdentifier);
</script>

<Toaster />

<Shell
	class=""
>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<svelte:fragment slot="pageHeader"></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</Shell>
