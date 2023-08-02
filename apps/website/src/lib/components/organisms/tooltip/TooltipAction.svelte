<script lang="ts">
	import { onMount } from 'svelte';

	export let content;
	export let x;
	export let y;

	onMount(() => {
		console.log('instantiating new tooltip');
	});
</script>

<!-- This is a svelte action component that represents a tooltip-->
<div
	class="bg-surface-light dark:bg-surface-dark p-4 rounded-lg absolute"
	style="top: {y - 20}px; left: {x + 10}px;"
>
	<h1 class="body-medium">
		{content}
	</h1>
</div>
