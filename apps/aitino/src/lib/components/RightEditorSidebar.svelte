<script lang="ts">
	import LucideIcon from '$lib/components/LucideIcon.svelte';
	import { page } from '$app/stores';
	import { Button } from './ui/button';

	export let actions: {
		name: string;
	}[] = [];
</script>

<!-- Static sidebar for desktop -->
<div
	class="hidden h-full overflow-y-clip rounded-2xl border bg-primary-900/50 p-6 lg:z-50 lg:grid lg:w-72"
>
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<ul role="list" class="grid w-full gap-4">
		{#each actions as action}
			<li>
				<Button variant="outline" class="w-full">
					<slot {action} />
				</Button>
			</li>
		{/each}
	</ul>
</div>
