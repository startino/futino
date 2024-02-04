<script lang="ts">
	import {
		SvelteFlow,
		Background,
		Controls,
		Position,
		useEdges,
		ConnectionMode,
		type IsValidConnection,
		getIncomers,
		type Edge,
		type Connection
	} from '@xyflow/svelte';
	import { get, writable } from 'svelte/store';
	import AgentNode from './AgentNode.svelte';

	// 👇 always import the styles
	import '@xyflow/svelte/dist/style.css';

	const nodeDefaults = {
		sourcePosition: Position.Left,
		targetPosition: Position.Right
	};

	const nodes = writable([
		{
			id: '0',
			type: 'agent',
			position: { x: 0, y: 0 },
			data: { agent_id: writable('0') },
			...nodeDefaults
		},
		{
			id: '1',
			type: 'agent',
			position: { x: 300, y: 300 },
			data: { agent_id: writable('1') },

			...nodeDefaults
		},
		{
			id: '2',
			type: 'agent',
			position: { x: 500, y: 100 },
			data: { agent_id: writable('2') },
			...nodeDefaults
		}
	]);
	const edges = writable([
		{
			id: '0-1',
			source: '0',
			target: '1',
			animated: true
		}
	]);

	const nodeTypes = {
		agent: AgentNode
	};

	type Connection = {
		source: string;
		target: string;
		sourceHandle: string | null;
		targetHandle: string | null;
	};

	const onconnect = (connection: Connection) => {
		// Get the source and target from the connection
		let { source, target } = connection;

		// Get the current list of edges
		let currentEdges = $edges;

		// Remove edges between the same two nodes
		let filteredEdges = currentEdges.filter((edge, i) => {
            const isLastNode = i == currentEdges.length -1;
            if (((edge.source == source && edge.target == target) || (edge.target == source && edge.source == target))) {

                if (isLastNode) {
                    // This is the new edge
                    return true;
                }
                
                // Connection between the same nodes already exists
                return false
            }
			
		});

        console.log('filteredEdges', filteredEdges, 'currentEdges', currentEdges, 'source', source, 'target', target, 'connection', connection)
		// Update the edges store with the filtered list of edges
		edges.set(filteredEdges);
	};
</script>

<main class="h-screen">
	<SvelteFlow
		{nodes}
		{edges}
		{nodeTypes}
		onconnectstart={(connection) => console.log('edges: ', $edges, 'nodes: ', $nodes)}
		connectionMode={ConnectionMode.Loose}
		snapGrid={[20, 20]}
		connectionRadius={50}
		{onconnect}
	>
		<Background class="!bg-background" />
		<Controls />
	</SvelteFlow>
</main>
