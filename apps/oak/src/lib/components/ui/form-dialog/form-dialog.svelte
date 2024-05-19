<script lang="ts">
	import { fly } from 'svelte/transition';

	import * as Dialog from '$lib/components/ui/dialog';

	export let title = '';
	export let open = false;
</script>

<Dialog.Root bind:open onOpenChange={(o) => (open = o)}>
	<slot name="trigger" />

	<Dialog.Content
		transition={(node) => fly(node, { x: 300, duration: 300 })}
		class="left-auto right-0 flex h-dvh max-h-screen w-full max-w-lg translate-x-1 flex-col overflow-y-scroll border-y-0 sm:rounded-none"
	>
		<Dialog.Header>
			<Dialog.Title>{title}</Dialog.Title>
		</Dialog.Header>

		<slot />
	</Dialog.Content>
</Dialog.Root>
