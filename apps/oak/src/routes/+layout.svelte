<script lang="ts">
	import { navigating } from '$app/stores';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import '$styling';
</script>

{#if $navigating}
	<!-- Skeleton of the Shell.svelte layout-->
	<div class="w-screen h-screen flex place-items-center p-6">
		<Skeleton class="h-full w-72 rounded-3xl" />
		<div class="flex flex-col h-full w-full mx-6 gap-y-6">
			<Skeleton class="h-20 w-full mb-auto rounded-3xl" />
			<Skeleton class="h-full w-full mb-auto rounded-3xl" />
		</div>
	</div>
{:else}
	<slot />
{/if}
