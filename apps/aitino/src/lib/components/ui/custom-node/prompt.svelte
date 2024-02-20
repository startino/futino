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
	const previewLength = 200; // Define how much text to show in the preview

	let dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper mauris 
  at ligula faucibus sollicitudin. Integer non bibendum lorem. Vivamus et massa massa. Curabitur eleifend 
  risus in mi feugiat, non ullamcorper tortor dignissim. Integer condimentum, nisi quis viverra elementum, 
  enim augue fringilla mi, id porttitor massa nisi quis purus. Cras id commodo ligula, eu tincidunt ligula. 
  Praesent at justo condimentum, volutpat lorem eget, tristique nisl. Nunc eget vestibulum lorem. 
  Sed nec eros suscipit, bibendum ex id, bibendum metus. Donec consectetur nisl nulla, et pharetra enim 
  volutpat in. Suspendisse potenti. Integer ut dolor quis lorem egestas pharetra eu dapibus mauris. 
  Sed at iaculis est. Ut nec posuere.`;

	let contentPreview = dummyText.slice(0, previewLength);

	let contentDiv: HTMLDivElement;

	function toggleContent() {
		if (!contentDiv) {
			console.error('Content div element is not bound!');
			return;
		}

		showAll = !showAll;
		if (showAll) {
			contentDiv.style.height = contentDiv.scrollHeight + 'rem';
		} else {
			contentDiv.style.height = previewLength + 'rem';
		}
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
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				bind:this={contentDiv}
				class="content no-scrollbar min-h-full w-full max-w-lg text-wrap"
				on:click={toggleContent}
			>
				{dummyText}
			</div>
			<Button on:click={toggleContent}>Show Less</Button>
		{:else}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				bind:this={contentDiv}
				class="content no-scrollbar min-h-full w-full max-w-lg text-wrap"
				on:click={toggleContent}
			>
				{contentPreview}
			</div>
			{#if dummyText.length > previewLength}
				<Button on:click={toggleContent}>Load All</Button>
			{/if}
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
