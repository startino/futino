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
		getIncomers,
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
	import { getContext, getInitialEdges, getInitialNodes, getLocalMaeve } from '$lib/utils';
	import type { Maeve, MaeveGroup, MaevePrompt, PanelAction } from '$lib/types';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import ChatRoom from '$lib/components/ChatRoom.svelte';

	const actions: PanelAction[] = [
		{ name: 'Run', buttonVariant: 'default' },
		{ name: 'Add Prompt', buttonVariant: 'outline', onclick: addNewPrompt },
		{ name: 'Add Agent', buttonVariant: 'outline', onclick: addNewAgent },
		{ name: 'Add Maeve', buttonVariant: 'outline', isCustom: true },
		{
			name: 'Compile',
			buttonVariant: 'outline',
			onclick: () => {
				const meave = compile();
				maeveErrors = validateMaeve(meave);
				maeveErrors
					? toast.error(maeveErrors[0])
					: toast.success('Maeve has been successfuly compile');

				saveMaeve(meave);
				layout();
			}
		},
		{ name: 'Sessions', buttonVariant: 'outline' }
	];

	let maeveErrors: string[] | null = null;

	const nodeTypes = {
		agent: CustomNode.Agent,
		prompt: CustomNode.Prompt
	};

	const localMaeve = getLocalMaeve();
	const [initEdges, initNodes] = localMaeve
		? [getInitialEdges(localMaeve), getInitialNodes(localMaeve)]
		: [[], []];

	const { receiver } = getContext('maeve');

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
		}

		if (edges.length > 0) {
			edges.forEach((edge) => {
				dagreGraph.setEdge(edge.source, edge.target);
			});
		}

		if (nodes.length > 0) {
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

	const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initNodes, initEdges);

	const nodes = writable<Node[]>(layoutedNodes);
	const edges = writable<Edge[]>(layoutedEdges);

	function compile() {
		let meave: Maeve = {
			instance_id: '0',
			composition: {
				receiver: $receiver ? { instance_id: $receiver.node.id } : null,
				groups: [],
				prompts: []
			}
		};

		let groups: MaeveGroup[] = [];
		let prompts: MaevePrompt[] = [];

		$nodes.forEach((node) => {
			if (node.type === 'prompt') {
				const { title, content } = node.data;
				prompts.push({
					...node.data,
					title: get(title),
					content: get(content),
					position: node.position
				});
			} else {
				let agents = [node, ...getOutgoers(node, $nodes, $edges)].map((n) => {
					const { prompt, full_name, job_title, model } = n.data;
					return {
						...n.data,
						prompt: get(prompt),
						full_name: get(full_name),
						job_title: get(job_title),
						model: get(model),
						position: n.position
					};
				});
				const communicator = node.id;

				groups.push({
					communicator,
					agents
				});
			}
		});

		meave.composition.prompts = prompts;
		meave.composition.groups = groups;

		return meave;
	}

	function saveMaeve(maeve: Maeve) {
		localStorage.setItem('maeve', JSON.stringify(maeve));
	}

	function validateMaeve(maeve: Maeve) {
		const errors: string[] = [];
		const prompts = $nodes.filter((node) => node.type === 'prompt');
		if (prompts.length === 0) {
			errors.push('A maeve must have at least one prompt');
		} else {
			if ($receiver) {
				const incommers = getIncomers({ id: $receiver.node.id }, $nodes, $edges);

				incommers.length !== prompts.length &&
					errors.push('All the prompts must be connected to the receiver');
			}
		}

		if (!$receiver) {
			errors.push('A receiver, which is an agent directly connected to the prompts, is required.');
		} else {
			const outgoers = getOutgoers({ id: $receiver.node.id }, $nodes, $edges);

			outgoers.length === 0 &&
				errors.push('At least one agent should be connected to the receiver');
		}

		return errors[0] ? errors : null;
	}

	function layout() {
		const layoutedElements = getLayoutedElements($nodes, $edges);
		$nodes = layoutedElements.nodes;
		$edges = layoutedElements.edges;
	}

	function addNewAgent() {
		const uuid = crypto.randomUUID();
		const instance_id = crypto.randomUUID();
		const position = { ...getViewport() };

		setCenter(position.x, position.y, { zoom: position.zoom });

		nodes.update((v) => [
			...v,
			{
				id: instance_id,
				type: 'agent',
				position,
				selectable: false,
				data: {
					prompt: writable(''),
					full_name: writable(''),
					job_title: writable(''),
					model: writable('model-a'),
					unique_id: uuid,
					instance_id,
					position
				}
			}
		]);
	}

	function addNewPrompt() {
		const id = crypto.randomUUID();
		const position = { ...getViewport() };
		setCenter(position.x, position.y, { zoom: position.zoom });

		nodes.update((v) => [
			...v,
			{
				id,
				type: 'prompt',
				selectable: false,
				position,
				data: {
					id,
					title: writable(''),
					content: writable(''),
					position
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
		oninit={() => {
			if (!localMaeve) return;
			const recv = localMaeve.composition.receiver;
			if (!recv) return;
			const node = getNodes([recv.instance_id])[0];
			const incommers = getIncomers(node, initNodes, initEdges);
			receiver.set({ node, targetCount: incommers.length });
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
</div>


<Dialog.Root>
	<Dialog.Trigger class="mt-4">
		<Button class="block text-base">Chat</Button>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-full">
		<ChatRoom/>
	</Dialog.Content>
</Dialog.Root>