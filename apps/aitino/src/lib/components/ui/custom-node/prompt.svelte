<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { Position, useHandleConnections, useConnection, type NodeProps } from '@xyflow/svelte';

	import * as Card from '$lib/components/ui/card';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Input } from '$lib/components/ui/input';
	import Handle from '$lib/components/Handle.svelte';

	type $$Props = NodeProps;

	export let data: { title: Writable<string>; content: Writable<string> };
	export let id: $$Props['id'];

	const { content, title } = data;

	const connects = useHandleConnections({ nodeId: id, type: 'source' });
	const connection = useConnection();

	$: isConnectable = $connects.length === 0;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Prompt</Card.Title>
	</Card.Header>

	<Card.Content class="grid gap-2">
		<Input bind:value={$title} />
		<Textarea bind:value={$content} />
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
