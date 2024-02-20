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
	let dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper mauris 
  at ligula faucibus sollicitudin. Integer non bibendum lorem. Vivamus et massa massa. Curabitur eleifend 
  risus in mi feugiat, non ullamcorper tortor dignissim. Integer condimentum, nisi quis viverra elementum, 
  enim augue fringilla mi, id porttitor massa nisi quis purus. Cras id commodo ligula, eu tincidunt ligula. 
  Praesent at justo condimentum, volutpat lorem eget, tristique nisl. Nunc eget vestibulum lorem. 
  Sed nec eros suscipit, bibendum ex id, bibendum metus. Donec consectetur nisl nulla, et pharetra enim 
  volutpat in. Suspendisse potenti. Integer ut dolor quis lorem egestas pharetra eu dapibus mauris. 
  Sed at iaculis est. Ut nec posuere.`;

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
				bind:value={dummyText}
				class="content border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-32  w-96 min-w-max max-w-lg overflow-y-auto text-wrap rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
			/>
			<div class="flex flex-col gap-2">
				<Button on:click={toggleContent}>Show Less</Button>
				<Button>Improve Prompt</Button>
			</div>
		{:else}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="content no-scrollbar w-full max-w-lg overflow-auto text-wrap"
				on:click={toggleContent}
			>
				{dummyText.slice(0, previewLength)}
			</div>
			<div class="flex flex-col gap-2">
				{#if dummyText.length > previewLength}
					<Button on:click={toggleContent}>Load All</Button>
				{/if}
				<Button>Improve Prompt</Button>
			</div>
		{/if}
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
