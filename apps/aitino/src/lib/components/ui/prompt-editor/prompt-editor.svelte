<script lang="ts">
	import { Loader2 } from "lucide-svelte";

	import * as Dialog from "$lib/components/ui/dialog";
	import { Button } from "$lib/components/ui/button";
	import { Textarea } from "$lib/components/ui/textarea";

	export let value: string;

	let state: "loading" | "error" | "idle" = "idle";

	const handleSubmit = async () => {
		console.log(value);

		if (value) {
			state = "loading";

			console.log("Sending GET request to improve prompt");
			try {
				const queryParams = new URLSearchParams({ prompt: value }).toString();
				const response = await fetch(`/api/v1/prompt?${queryParams}`);

				console.log(response, "from handlesubmit");
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					state = "idle";
					let improvedPrompt = data.improvedPrompt;
					if (improvedPrompt.startsWith("```markdown")) {
						improvedPrompt = improvedPrompt.substring(11); // Remove the starting ```markdown
						improvedPrompt = improvedPrompt.substring(0, improvedPrompt.lastIndexOf("```")); // Remove the closing ```
					}
					value = improvedPrompt;
				} else {
					state = "error";
					console.log(`HTTP error! status: ${response.status}`);
				}
			} catch (error) {
				state = "error";
				console.error("Error fetching improved prompt:", error);
			}
		}
	};
</script>

<div>
	<Dialog.Root>
		<Dialog.Trigger class="w-full text-left">
			<div class="grid gap-2">
				{#if value.length > 0}
					<p class="rounded-md border p-2 text-gray-400">{value.slice(0, 50)}...</p>
				{/if}
				<Button class="w-full">Prompt Editor</Button>
			</div>
		</Dialog.Trigger>

		<Dialog.Content class="h-dvh max-w-screen-lg grid-rows-[auto_1fr]">
			<Dialog.Header class="justify-self-center">
				<Button on:click={handleSubmit}>
					Improve prompt with AI

					{#if state === "loading"}
						<Loader2 class="ml-2 w-4 animate-spin" />
					{/if}
				</Button>
				{#if state === "error"}
					<span class="text-destructive">Something went please try again...</span>
				{/if}
			</Dialog.Header>
			<Textarea placeholder="Enter you prompt here..." bind:value class="resize-none" />
		</Dialog.Content>
	</Dialog.Root>
</div>
