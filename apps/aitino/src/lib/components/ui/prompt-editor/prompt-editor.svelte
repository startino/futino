<script lang="ts">
	import { Loader2 } from "lucide-svelte";

	import * as Dialog from "$lib/components/ui/dialog";
	import { Button } from "$lib/components/ui/button";
	import { Textarea } from "$lib/components/ui/textarea";

	export let value: string;
</script>

<div>
	<Dialog.Root>
		<Dialog.Trigger class="w-full">
			<Button class="w-full">Prompt Editor</Button>
		</Dialog.Trigger>

		<Dialog.Content class="h-dvh max-w-screen-lg grid-rows-[auto_1fr]">
			<Dialog.Header class="justify-self-center">
				<Button>Improve prompt with AI</Button>
			</Dialog.Header>
			<Textarea {value} class="resize-none" />
		</Dialog.Content>
	</Dialog.Root>
</div>
