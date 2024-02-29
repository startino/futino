<script lang="ts">
	import { writable, get } from "svelte/store";
	import dagre from "@dagrejs/dagre";
	import {
		SvelteFlow,
		Background,
		Position,
		ConnectionLineType,
		Panel,
		useSvelteFlow,
		type Node,
		type Edge
	} from "@xyflow/svelte";
	import { toast } from "svelte-sonner";

	import "@xyflow/svelte/dist/style.css";

	import RightEditorSidebar from "$lib/components/RightEditorSidebar.svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Library } from "$lib/components/ui/library";
	import * as CustomNode from "$lib/components/ui/custom-node";
	import { saveMaeveNodes } from "$lib/api-client";

	import {
		getContext,
		getWritableNodes,
		getCleanNodes,
		pickRandomAvatar,
		pickRandomName,
		getNodesCount
	} from "$lib/utils";
	import type { PanelAction } from "$lib/types";
	import ChatRoom from "$lib/components/ChatRoom.svelte";
	import { AGENT_LIMIT, PROMPT_LIMIT } from "$lib/config.js";

	export let data;

	const { receiver, count } = getContext("maeve");

	let title = data.title;
	let description = data.description;
	let isChatDialogOpen = false;

	const actions: PanelAction[] = [
		{
			name: "Run",
			buttonVariant: "default",
			onclick: async () => {
				isChatDialogOpen = true;
				await save();
			}
		},
		{ name: "Add Prompt", buttonVariant: "outline", onclick: addNewPrompt },
		{ name: "Add Agent", buttonVariant: "outline", onclick: addNewAgent },
		{ name: "Load Maeve", buttonVariant: "outline", isCustom: true },
		{
			name: "Export",
			buttonVariant: "outline",
			onclick: () => {
				const jsonString = JSON.stringify(
					{
						nodes: getCleanNodes($nodes),
						edges: $edges,
						title,
						description,
						receiver_id: $receiver?.node.id ?? null
					},
					null,
					2
				);
				const blob = new Blob([jsonString], { type: "application/json" });
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = "maeve.json";
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
				document.body.removeChild(a);
			}
		},
		{
			name: "Save",
			buttonVariant: "outline",
			onclick: async () => await save()
		},
		{ name: "Layout", buttonVariant: "outline", onclick: layout }
	];

	const nodeTypes = {
		agent: CustomNode.Agent,
		prompt: CustomNode.Prompt
	};

	let libraryOpen = false;

	const dagreGraph = new dagre.graphlib.Graph();
	dagreGraph.setDefaultEdgeLabel(() => ({}));

	const nodeWidth = 400;
	const nodeHeight = 500;

	const { deleteElements, getNodes, getViewport, setCenter } = useSvelteFlow();

	function getLayoutedElements(nodes: Node[], edges: Edge[], direction = "TB") {
		const isHorizontal = direction === "LR";
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

	const nodes = writable<Node[]>(getWritableNodes(data.nodes));
	const edges = writable<Edge[]>(data.edges);

	async function save() {
		const { error } = await saveMaeveNodes({
			id: data.id,
			user_id: data.user_id,
			title,
			description,
			receiver_id: $receiver?.node.id ?? null,
			nodes: getCleanNodes($nodes),
			edges: $edges
		});

		if (!data.id) {
			console.error("no data id");
			toast.error("Something went wrong when saving the nodes.");
			return;
		}
		if (error) {
			console.error(error);
			toast.error("Something went wrong when saving the nodes.");
			return;
		}

		console.log(data.id, "from save node");

		localStorage.setItem("currentMeaveId", data.id);

		toast.success("Nodes successfully saved!");
	}

	function setReceiver(id: string | null | undefined) {
		if (!id) {
			return;
		}
		const revr = getNodes([id])[0];
		$receiver = { node: revr, targetCount: 1 };
	}

	function layout() {
		const layoutedElements = getLayoutedElements($nodes, $edges);
		$nodes = layoutedElements.nodes;
		$edges = layoutedElements.edges;
	}

	function addNewAgent() {
		if ($count.agents >= AGENT_LIMIT) return;

		const position = { ...getViewport() };

		let name = "";

		do {
			name = pickRandomName();
		} while ($nodes.find((n) => n.type === "agent" && get(n.data.name) === name));

		nodes.update((v) => [
			...v,
			{
				id: crypto.randomUUID(),
				type: "agent",
				position,
				selectable: false,
				data: {
					name: writable(name),
					job_title: writable(""),
					prompt: writable(""),
					model: writable({ label: "", value: "" }),
					avatar: pickRandomAvatar()
				}
			}
		]);

		$count.agents++;
	}

	function addNewPrompt() {
		if ($count.prompts >= PROMPT_LIMIT) return;

		const position = { ...getViewport() };

		nodes.update((v) => [
			...v,
			{
				id: crypto.randomUUID(),
				type: "prompt",
				selectable: false,
				position,
				data: {
					title: writable(""),
					content: writable("")
				}
			}
		]);

		$count.prompts++;
	}

	console.log(data.id, "from save node 0");
</script>

<div style="height:100vh;">
	<SvelteFlow
		minZoom={0.1}
		{nodes}
		{edges}
		{nodeTypes}
		fitView
		oninit={() => {
			count.set(data.count);
			setReceiver(data.receiver_id);
		}}
		connectionLineType={ConnectionLineType.SmoothStep}
		defaultEdgeOptions={{ type: "smoothstep", animated: true }}
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
			if (source.type === "prompt" && target.type === "agent") {
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

			if (source.type === "agent" && target.type === "agent" && $receiver?.node.id === target.id) {
				return;
			}
			return c;
		}}
	>
		<Background class="!bg-background" />

		<Panel position="top-right">
			<RightEditorSidebar bind:description bind:title {actions} let:action>
				{#if action.isCustom}
					<Dialog.Root open={libraryOpen} onOpenChange={(o) => (libraryOpen = o)}>
						<Dialog.Trigger>
							<Button variant={action.buttonVariant} class="w-full">
								{action.name}
							</Button>
						</Dialog.Trigger>
						<Dialog.Content class="max-w-5xl">
							<Library
								on:maeve-load={(e) => {
									const maeve = e.detail.maeve;
									$count = getNodesCount(maeve.nodes);
									nodes.set(getWritableNodes(maeve.nodes));
									edges.set(maeve.edges);
									libraryOpen = false;
									title = maeve.title;
									description = maeve.description;
									setReceiver(maeve.receiver_id);
								}}
							/>
						</Dialog.Content>
					</Dialog.Root>
				{/if}
			</RightEditorSidebar>
		</Panel>
		<Panel position="bottom-right">
			<Dialog.Root
				open={isChatDialogOpen}
				onOpenChange={() => {
					isChatDialogOpen = false;
					console.log("close");
				}}
			>
				<Dialog.Content class="sm:max-w-full">
					<ChatRoom />
				</Dialog.Content>
			</Dialog.Root>
		</Panel>
	</SvelteFlow>
</div>
