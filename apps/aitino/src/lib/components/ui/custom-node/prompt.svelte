<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { Position, useHandleConnections, useSvelteFlow, type NodeProps } from '@xyflow/svelte';
	import { X } from 'lucide-svelte';

	import * as Card from '$lib/components/ui/card';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Input } from '$lib/components/ui/input';
	import Handle from '$lib/components/Handle.svelte';
	import { getContext } from '$lib/utils';
	import Button from '../button/button.svelte';

	type $$Props = NodeProps;

	export let data: { title: Writable<string>; content: Writable<string> };
	export let id: $$Props['id'];

	const { content, title } = data;

	const { receiver, count } = getContext('maeve');
	const connects = useHandleConnections({ nodeId: id, type: 'source' });
	const { deleteElements } = useSvelteFlow();

	$: isConnectable = $connects.length === 0;

	let showAll = false;
	const previewLength = 250;
	let prompt = '';

	function toggleContent() {
		showAll = !showAll;
	}
</script>

<Card.Root>
	<button
		on:click={() => {
			deleteElements({ nodes: [{ id }] });
			$count.prompts--;

			if ($receiver) {
				$receiver.targetCount--;
				$receiver.targetCount === 0 && ($receiver = null);
			}
		}}
		aria-label="delete agent"
		class="absolute right-2 top-2"><X /></button
	>
	<Card.Header>
		<Card.Title>Prompt</Card.Title>
	</Card.Header>

	<Card.Content class="grid gap-2">
		<Input bind:value={$title} placeholder="Title..." />
		{#if showAll}
			<Textarea
				bind:value={prompt}
				class="content border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-32  w-96 min-w-max max-w-lg overflow-y-auto text-pretty rounded-md border bg-transparent py-1 text-left text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
			/>
			<div class="flex flex-col gap-2">
				<Button on:click={toggleContent}>Show Less</Button>
			</div>
		{:else}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			{#if prompt.length > 0}
				<div
					class="content no-scrollbar h-16 w-full max-w-lg overflow-auto text-wrap"
					placeholder="Please enter you prompt here..."
					on:click={toggleContent}
				>
					{prompt.slice(0, previewLength)}
				</div>
			{:else}
				<Textarea
					bind:value={prompt}
					class="content border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-32  w-96 min-w-max max-w-lg overflow-y-auto text-pretty rounded-md border bg-transparent py-1 text-left text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
				/>
			{/if}
			<div class="flex flex-col gap-2">
				{#if prompt.length > previewLength}
					<Button on:click={toggleContent}>Load All</Button>
				{/if}
			</div>
		{/if}
		<form action="?/ImprovePrompt&prompt={prompt}" method="post">
			<Button class="w-full">Improve Prompt</Button>
		</form>
		<Handle
			type="source"
			id="bottom-{id}"
			position={Position.Bottom}
			onconnect={(c) => {
				if (c.length >= 1) {
					isConnectable = false;
				}
			}}
			ondisconnect={(c) => {
				isConnectable = true;
			}}
			{isConnectable}
		/>
	</Card.Content>
</Card.Root>
