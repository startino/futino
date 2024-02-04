<script lang="ts">
	import { useEdges, useNodes } from '@xyflow/svelte';
	import * as Select from './ui/select';

	export let onClick: () => void;
	export let id: string;
	export let top: number | undefined;
	export let left: number | undefined;
	export let right: number | undefined;
	export let bottom: number | undefined;

	const nodes = useNodes();
	const edges = useEdges();

	function duplicateNode() {
		const node = $nodes.find((node) => node.id === id);
		if (node) {
			$nodes.push({
				...node,
				// You should use a better id than this in production
				id: `${id}-copy${Math.random()}`,
				position: {
					x: node.position.x,
					y: node.position.y + 50
				}
			});
		}
		$nodes = $nodes;
	}

	function deleteNode() {
		$nodes = $nodes.filter((node) => node.id !== id);
		$edges = $edges.filter((edge) => edge.source !== id && edge.target !== id);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	style="top: {top}px; left: {left}px; right: {right}px; bottom: {bottom}px;"
	class="border-2 border-border bg-card flex gap-3 flex-col p-4 absolute z-10 text-card-foreground text-left items-start rounded-md"
	on:click={onClick}
>
	<h3 class="text-xl pb-2">
		NODE: {id}
    </h3>
	<button on:click={duplicateNode}>Duplicate</button>
	<button on:click={deleteNode}>Delete</button>
</div>
