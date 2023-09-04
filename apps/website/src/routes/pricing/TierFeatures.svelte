<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte';
	import type { Features } from './plans';

	export let features: Features;
</script>

<div class="flex flex-col divide-y title-medium w-full">
	{#each Object.entries(features) as [name, value], i}
		<div class="flex flex-row justify-between py-1">
			<h2 class="">
				{name}
			</h2>
			<h2 class="">
				{#if value == 'checkmark'}
					<Icon icon="checkmark" height="24" width="24" />
				{:else}
					{value}
				{/if}
			</h2>
		</div>
	{/each}
</div>
