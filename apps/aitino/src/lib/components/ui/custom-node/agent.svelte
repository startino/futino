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
	import Handle from '$lib/components/Handle.svelte';
	import Textarea from '../textarea/textarea.svelte';
	import { getContext } from '$lib/utils';

	type $$Props = NodeProps;

	const { receiver, count } = getContext('maeve');

	export let data: {
		prompt: Writable<string>;
		job_title: Writable<string>;
		name: Writable<string>;
		modal: Writable<{ label: string; value: string }>;
	};

	const { name, modal, prompt, job_title } = data;

	const modals = [
		{
			label: 'GPT-4-Turbo',
			value: 'GPT-4-Turbo'
		},
		{
			label: 'GPT-3.5-Turbo',
			value: 'GPT-3.5-Turbo'
		}
	];

	export let id: NodeProps['id'];

	const connection = useConnection();

	let isConnecting = false;
	let isTarget = false;

	$: isConnecting = !!$connection.startHandle?.nodeId;
	$: isTarget = !!$connection.startHandle && $connection.startHandle?.nodeId !== id;
	$: isReceiver = $receiver?.node.id === id;

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
			$count.agents--;

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
		<Input placeholder="Name..." bind:value={$name} />
		<Input placeholder="Job title..." bind:value={$job_title} />
		<Textarea placeholder="Prompt..." bind:value={$prompt} />
		<Select.Root bind:selected={$modal}>
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
