<script lang="ts">
	import {
		Position,
		type NodeProps,
		useHandleConnections,
		type Connection,
		getConnectedEdges,
		useSvelteFlow,
		useConnection
	} from '@xyflow/svelte';
	import { type Writable } from 'svelte/store';
	import { X } from 'lucide-svelte';

	// 👇 always import the styles
	import '@xyflow/svelte/dist/style.css';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import Handle from '$lib/components/Handle.svelte';
	import Textarea from '../textarea/textarea.svelte';
	import { getContext } from '$lib/utils';

	type $$Props = NodeProps;

	const { receiver } = getContext('maeve');

	export let data: {
		prompt: Writable<string>;
		full_name: Writable<string>;
		job_title: Writable<string>;
		model: Writable<string>;
	};

	const { full_name, job_title, model, prompt } = data;

	const modals = [
		{ label: 'modal-a', value: 'modal-a' },
		{ label: 'modal-b', value: 'modal-b' },
		{ label: 'modal-c', value: 'modal-c' }
	];
	export let id: NodeProps['id'];

	const connection = useConnection();

	let isConnecting = false;
	let isTarget = false;

	$: isConnecting = !!$connection.startHandle?.nodeId;
	$: isTarget = !!$connection.startHandle && $connection.startHandle?.nodeId !== id;
	$: isReceiver = $receiver?.node.id === id;
	$: label = isTarget ? 'Drop it here' : 'Drag to connect';

	const connections = useHandleConnections({ nodeId: id, type: 'source' });
	const { deleteElements } = useSvelteFlow();
</script>

<Card.Root
	class="{isTarget ? 'border-2 border-dashed bg-card ' : ''} {isReceiver
		? 'bg-primary-950'
		: ''} aspect-1transition"
>
	<button
		on:click={() => {
			deleteElements({ nodes: [{ id }] });
			if (isReceiver) {
				$receiver = null;
			}
		}}
		aria-label="delete agent"
		class="absolute right-2 top-2"><X /></button
	>

	<Card.Header class="flex">
		<Card.Title>
			Agent
			{#if isReceiver}
				(receiver)
			{/if}
		</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-2">
		<Textarea placeholder="Prompt..." bind:value={$prompt} />
		<Input placeholder="Full name" bind:value={$full_name} />
		<Input placeholder="Job title" bind:value={$job_title} />
		<Select.Root selected={{ label: $model, value: $model }}>
			<Select.Trigger>
				<Select.Value placeholder="Select a model" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					{#each modals as { value, label }}
						<Select.Item {value} {label}>
							{label}
						</Select.Item>
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
		<Handle type="target" id="top-{id}" position={Position.Top} />
		<Handle type="source" id="bottom-{id}" position={Position.Bottom} />
	</Card.Content>
</Card.Root>
