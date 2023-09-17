<script lang="ts">
	import { fade } from 'svelte/transition';

	export let content: string;
	let isHovered = false;
	export let direction: 'left' | 'right' | 'top' | 'bottom';
	let directionStyling: string;

	switch (direction) {
		case 'left':
			directionStyling = 'right-full';
		case 'right':
			directionStyling = 'left-full';
		case 'top':
			directionStyling = 'bottom-full';
		case 'bottom':
			directionStyling = 'top-full';
	}

	function mouseOver(event: any): any {
		isHovered = true;
	}

	function mouseLeave(event: any) {
		isHovered = false;
	}
	function focus(event: any) {
		isHovered = true;
	}
</script>

<!--This Component is used for when you want to place a tooltip element. (rather than using an action)-->

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:focus={focus}
	class="relative {$$props.class} flex justify-items-center w-fit h-fit">
	{#if isHovered}
		<div
			transition:fade={{ duration: 150 }}
			class=" bg-surface-dark p-4 max-w-md w-max rounded-lg absolute bottom-full -translate-x-1/2 -translate-y-3">
			<h1 class="body-medium">
				{content}
			</h1>
		</div>
	{/if}
	<slot />
</div>
