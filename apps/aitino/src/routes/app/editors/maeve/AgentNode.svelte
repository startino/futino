<script lang="ts">
	import {
		Position,
		type NodeProps,
		useHandleConnections,
		type Connection,
		getConnectedEdges
	} from '@xyflow/svelte';
	import { writable, type Writable } from 'svelte/store';
	import Node from '$lib/components/Node.svelte';
	import Handle from '$lib/components/Handle.svelte';

	// 👇 always import the styles
	import '@xyflow/svelte/dist/style.css';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Card from '$lib/components/ui/card';

	type $$Props = NodeProps;

	export let data: { agent_id: Writable<string> };

	const { agent_id } = data;

	import { useConnection } from '@xyflow/svelte';

	export let id: NodeProps['id'];

	const connection = useConnection();

	let isConnecting = false;
	let isTarget = false;

	$: isConnecting = !!$connection.startHandle?.nodeId;
	$: isTarget = !!$connection.startHandle && $connection.startHandle?.nodeId !== id;

	$: label = isTarget ? 'Drop it here' : 'Drag to connect';

	const connections = useHandleConnections({ nodeId: $agent_id, type: 'source' });

	$: {
		console.log('connections', $connections);
	}

	function checkIfConnectable(connections: Connection[]) {
		if (connections.length < 0) {
			return true;
		} else {
		}
	}
	$: isConnectable = checkIfConnectable($connections);
</script>

<Card.Root class="{isTarget ? 'bg-card border-2 border-dashed' : ''} transition ">
	<Card.Header>
		<Card.Title>
			{label}
		</Card.Title>
		<Card.Description>CEO, Founder</Card.Description>
	</Card.Header>
	<Card.Content>
		<Handle id="top-{$agent_id}" position={Position.Top} isConnectable={() => isConnectable} />
		<Handle id="bottom-{$agent_id}" position={Position.Bottom} {isConnectable} />
		<Handle id="left-{$agent_id}" position={Position.Left} {isConnectable} />
		<Handle id="right-{$agent_id}" position={Position.Right} {isConnectable} />
	</Card.Content>
</Card.Root>
