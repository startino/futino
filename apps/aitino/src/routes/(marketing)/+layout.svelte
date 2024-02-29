<script lang="ts">
	import "$styling";
	import { setContext } from "svelte";
	import { Shell } from "$lib/components/layout/shell";
	import Header from "$lib/components/Header.svelte";

	export let data;

	setContext("splitTestIdentifier", data?.splitTestIdentifier);
</script>

<Shell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<svelte:fragment slot="pageHeader"></svelte:fragment>
	<!-- Router Slot -->
	<div class="overflow-y-hidden"><slot /></div>

	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"></svelte:fragment>
	<!-- (footer) -->
</Shell>
