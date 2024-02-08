<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { Position, type NodeProps } from '@xyflow/svelte';

	import * as Card from '$lib/components/ui/card';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Input } from '$lib/components/ui/input';
	import Handle from '$lib/components/Handle.svelte';

	type $$Props = NodeProps;

	export let data: { title: Writable<string>; content: Writable<string> };
	export let id: $$Props['id'];

	const { content, title } = data;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Prompt</Card.Title>
	</Card.Header>

	<Card.Content class="grid gap-2">
		<Input bind:value={$title} />
		<Textarea bind:value={$content} />
		<Handle type="source" id="bottom-{id}" position={Position.Bottom} />
	</Card.Content>
</Card.Root>
