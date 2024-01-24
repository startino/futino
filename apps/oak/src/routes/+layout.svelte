<script lang="ts">
	import { navigating } from '$app/stores';
	import { Skeleton } from '$lib/components/ui/skeleton';
import '$styling';
</script>

{#if $navigating}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<Skeleton class="w-24 h-24"/>
	</div>
{:else}
<slot />
{/if}