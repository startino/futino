<script lang="ts">
	import { writable, get } from 'svelte/store';
	import dagre from '@dagrejs/dagre';
	import {
		SvelteFlow,
		Background,
		Position,
		ConnectionLineType,
		Panel,
		useSvelteFlow,
		type Node,
		type Edge,
		getOutgoers
	} from '@xyflow/svelte';
	import { toast } from 'svelte-sonner';

	import '@xyflow/svelte/dist/style.css';

	import RightEditorSidebar from '$lib/components/RightEditorSidebar.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Library } from '$lib/components/ui/library';
	import * as CustomNode from '$lib/components/ui/custom-node';
	import { saveMaeveNodes } from '$lib/api-client';

	import { getContext, getInitialNodes, pickRandomAvatar, pickRandomName } from '$lib/utils';
	import type { PanelAction } from '$lib/types';
	import ChatRoom from '$lib/components/ChatRoom.svelte';
	import { AGENT_LIMIT, PROMPT_LIMIT } from '$lib/config.js';

	export let data;

	const { receiver, count } = getContext('maeve');

	const actions: PanelAction[] = [
		{ name: 'Run', buttonVariant: 'default' },
		{ name: 'Add Prompt', buttonVariant: 'outline', onclick: addNewPrompt },
		{ name: 'Add Agent', buttonVariant: 'outline', onclick: addNewAgent },
		{ name: 'Add Maeve', buttonVariant: 'outline', isCustom: true },
		{
			name: 'Save',
			buttonVariant: 'outline',
			onclick: async () => {
				layout();
				await compile();
			}
		},
		{ name: 'Sessions', buttonVariant: 'outline' }
	];

	const nodeTypes = {
		agent: CustomNode.Agent,
		prompt: CustomNode.Prompt
	};

	const dagreGraph = new dagre.graphlib.Graph();
	dagreGraph.setDefaultEdgeLabel(() => ({}));

	const nodeWidth = 400;
	const nodeHeight = 400;

	const { deleteElements, getNodes, getViewport, setCenter } = useSvelteFlow();

	function getLayoutedElements(nodes: Node[], edges: Edge[], direction = 'TB') {
		const isHorizontal = direction === 'LR';
		dagreGraph.setGraph({ rankdir: direction });

		if (nodes.length > 0) {
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
		}

		return { nodes, edges };
	}

	// const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initNodes, initEdges);

	const nodes = writable<Node[]>(getInitialNodes(data.nodes));
	const edges = writable<Edge[]>(data.edges);

	async function compile() {
		const agents = $nodes
			.filter((n) => n.type === 'agent')
			.map((n) => {
				const { prompt, name, job_title, model } = n.data;
				return {
					...n,
					data: {
						...n.data,
						prompt: get(prompt),
						name: get(name),
						job_title: get(job_title),
						model: get(model)
					}
				};
			});

		const prompts = $nodes
			.filter((n) => n.type === 'prompt')
			.map((n) => {
				const { title, content } = n.data;
				return {
					...n,
					data: {
						title: get(title),
						content: get(content)
					}
				};
			});

		const { error } = await saveMaeveNodes({
			id: data.id,
			user_id: data.userId,
			receiver_id: $receiver?.node.id ?? null,
			nodes: [...prompts, ...agents],
			edges: $edges
		});

		if (error) {
			toast.error('Something went wrong when saving the nodes..');
			return;
		}

		toast.success('Nodes successfully saved!');
	}

	function layout() {
		const layoutedElements = getLayoutedElements($nodes, $edges);
		$nodes = layoutedElements.nodes;
		$edges = layoutedElements.edges;
	}

	function addNewAgent() {
		if ($count.agents >= AGENT_LIMIT) return;

		const position = { ...getViewport() };

		let name = '';

		do {
			name = pickRandomName();
		} while (Boolean($nodes.find((n) => n.type === 'agent' && n.data.name === name)));

		setCenter(position.x, position.y, { zoom: position.zoom });

		nodes.update((v) => [
			...v,
			{
				id: crypto.randomUUID(),
				type: 'agent',
				position,
				selectable: false,
				data: {
					name: writable(name),
					job_title: writable(''),
					prompt: writable(''),
					model: writable({ label: '', value: '' }),
					avatar: pickRandomAvatar()
				}
			}
		]);

		$count.agents++;
	}

	function addNewPrompt() {
		if ($count.prompts >= PROMPT_LIMIT) return;

		const position = { ...getViewport() };
		setCenter(position.x, position.y, { zoom: position.zoom });

		nodes.update((v) => [
			...v,
			{
				id: crypto.randomUUID(),
				type: 'prompt',
				selectable: false,
				position,
				data: {
					title: writable(''),
					content: writable('')
				}
			}
		]);

		$count.prompts++;
	}
</script>

<div style="height:100vh;">
	<Dialog.Root>
		<Dialog.Trigger class="">
			<Button class="block text-base">Chat</Button>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-full">
			<ChatRoom />
		</Dialog.Content>
	</Dialog.Root>

	<SvelteFlow
		{nodes}
		{edges}
		{nodeTypes}
		fitView
		oninit={() => {
			count.set(data.count);

			const prompt = $nodes.find((n) => n.type === 'prompt');

			if (prompt) {
				const outgoers = getOutgoers(prompt, $nodes, $edges);

				outgoers[0] && ($receiver = { node: outgoers[0], targetCount: 1 });
			}
		}}
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

			if (source.type === 'agent' && target.type === 'agent' && $receiver?.node.id === target.id) {
				return;
			}
			return c;
		}}
	>
		<Background class="!bg-background" />

		<Panel position="top-right">
			<RightEditorSidebar {actions} let:action>
				{#if action.isCustom}
					<Dialog.Root>
						<Dialog.Trigger>
							<Button variant={action.buttonVariant} class="w-full">
								{action.name}
							</Button>
						</Dialog.Trigger>
						<Dialog.Content class="max-w-5xl">
							<Library />
						</Dialog.Content>
					</Dialog.Root>
				{/if}
			</RightEditorSidebar>
		</Panel>
	</SvelteFlow>
	<Panel position="bottom-right">
		<Dialog.Root>
			<Dialog.Trigger class="">
				<Button class="block text-base">Chat</Button>
			</Dialog.Trigger>
			<Dialog.Content class="mt-3 sm:max-w-full">
				<ChatRoom />
			</Dialog.Content>
		</Dialog.Root>
	</Panel>
</div>
