<script lang="ts">
	import { writable } from 'svelte/store';
	import dagre from '@dagrejs/dagre';
	import {
		SvelteFlow,
		Background,
		Position,
		ConnectionLineType,
		Panel,
		useSvelteFlow,
		type Node,
		type Edge
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';

	import { initNodes, initEdges } from './nodes-and-edges';
	import RightEditorSidebar from '$lib/components/RightEditorSidebar.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Library } from '$lib/components/ui/library';
	import * as CustomNode from '$lib/components/ui/custom-node';
	import { getContext } from '$lib/utils';

	const actions = [
		{ name: 'Run' },
		{ name: 'Add Prompt' },
		{ name: 'Add Agent' },
		{ name: 'Add Maeve' },
		{ name: 'Compile' },
		{ name: 'Sessions' }
	];

	const nodeTypes = {
		agent: CustomNode.Agent,
		prompt: CustomNode.Prompt
	};

	const { receiver } = getContext('maeve');

	$: console.log($receiver);

	const dagreGraph = new dagre.graphlib.Graph();
	dagreGraph.setDefaultEdgeLabel(() => ({}));

	const nodeWidth = 300;
	const nodeHeight = 300;

	const { deleteElements, getNodes } = useSvelteFlow();

	function getLayoutedElements(nodes: Node[], edges: Edge[], direction = 'TB') {
		const isHorizontal = direction === 'LR';
		dagreGraph.setGraph({ rankdir: direction });

		nodes.forEach((node) => {
			dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
		});

		edges.forEach((edge) => {
			dagreGraph.setEdge(edge.source, edge.target);
		});

		dagre.layout(dagreGraph);

		nodes.forEach((node) => {
			const nodeWithPosition = dagreGraph.node(node.id);
			node.targetPosition = isHorizontal ? Position.Left : Position.Top;
			node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

			// We are shifting the dagre node position (anchor=center center) to the top left
			// so it matches the React Flow node anchor point (top left).
			node.position = {
				x: nodeWithPosition.x - nodeWidth / 2,
				y: nodeWithPosition.y - nodeHeight / 2
			};
		});

		return { nodes, edges };
	}

	const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initNodes, initEdges);

	const nodes = writable<Node[]>([]);
	const edges = writable<Edge[]>([]);

	function addNewAgent() {
		nodes.update((v) => [
			...v,
			{
				id: crypto.randomUUID(),
				type: 'agent',
				position: { x: 0, y: 0 },
				selectable: false,
				data: {
					prompt: writable(''),
					full_name: writable(''),
					job_title: writable(''),
					model: writable('model-a'),
					unique_id: crypto.randomUUID(),
					instance_id: crypto.randomUUID()
				}
			}
		]);
	}

	function addNewPrompt() {
		nodes.update((v) => [
			...v,
			{
				id: crypto.randomUUID(),
				type: 'prompt',
				selectable: false,
				position: { x: 0, y: 0 },
				data: {
					title: writable(''),
					content: writable('')
				}
			}
		]);
	}
</script>

<div style="height:100vh;">
	<SvelteFlow
		{nodes}
		{edges}
		{nodeTypes}
		fitView
		connectionLineType={ConnectionLineType.SmoothStep}
		defaultEdgeOptions={{ type: 'smoothstep', animated: true }}
		on:edgeclick={(e) => {
			const edge = e.detail.edge;
			deleteElements({ edges: [{ id: edge.id }] });

			if ($receiver && edge.target === $receiver.node.id) {
				$receiver.targetCount--;
				$receiver.targetCount === 0 && ($receiver = null);
			}
		}}
		onedgecreate={(c) => {
			const [source, target] = getNodes([c.source, c.target]);
			if (source.type === 'prompt' && target.type === 'agent') {
				if ($receiver) {
					if (target.id !== $receiver.node.id) {
						return;
					} else {
						$receiver.targetCount++;
					}
				} else {
					$receiver = { node: target, targetCount: 1 };
				}
			}
			return c;
		}}
	>
		<Background class="!bg-background" />

		<Panel position="top-right">
			<RightEditorSidebar {actions} let:action>
				{#if action.name === 'Run'}
					<Button>
						{action.name}
					</Button>
				{:else if action.name === 'Add Agent'}
					<Button on:click={addNewAgent} variant="outline" class="w-full">
						{action.name}
					</Button>
				{:else if action.name === 'Add Prompt'}
					<Button on:click={addNewPrompt} variant="outline" class="w-full">
						{action.name}
					</Button>
				{:else if ['Add Maeve'].includes(action.name)}
					<Dialog.Root>
						<Dialog.Trigger>
							<Button variant="outline" class="w-full">
								{action.name}
							</Button>
						</Dialog.Trigger>
						<Dialog.Content class="max-w-5xl">
							<Library />
						</Dialog.Content>
					</Dialog.Root>
				{:else}
					<Button variant="outline" class="w-full">
						{action.name}
					</Button>
				{/if}
			</RightEditorSidebar>
		</Panel>
	</SvelteFlow>
</div>
