<script lang="ts">
	import type { PanelAction } from '$lib/types';
	import { Button } from '$lib/components/ui/button';

	export let actions: PanelAction[] = [];
</script>

<!-- Static sidebar for desktop -->
<div
	class="hidden h-full overflow-y-clip rounded-2xl border bg-primary-900/50 p-6 lg:z-50 lg:grid lg:w-72"
>
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<ul role="list" class="grid w-full gap-2">
		{#each actions as action}
			<li class="grid">
				{#if action.isCustom}
					<slot {action}>
						{action.name}
					</slot>
				{:else}
					<Button on:click={action.onclick} variant={action.buttonVariant} class="w-full">
						{action.name}
					</Button>
				{/if}
			</li>
		{/each}
	</ul>
</div>
