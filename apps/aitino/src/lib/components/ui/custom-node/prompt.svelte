<script lang="ts">
	import type { Writable } from "svelte/store";
	import { Position, useHandleConnections, useSvelteFlow, type NodeProps } from "@xyflow/svelte";
	import { Loader2, X } from "lucide-svelte";

	import * as Card from "$lib/components/ui/card";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Input } from "$lib/components/ui/input";
	import Handle from "$lib/components/Handle.svelte";
	import { getContext } from "$lib/utils";
	import Button from "../button/button.svelte";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Carta, CartaEditor } from "carta-md";
	import { browser } from "$app/environment";
	import { code } from "@cartamd/plugin-code";
	import "carta-md/light.css";
	import "carta-md/default-theme.css";
	import { enhance } from "$app/forms";

	const carta = new Carta({
		extensions: [
			code({
				lineNumbering: true
			})
		]
	});

	let value = "";

	type $$Props = NodeProps;

	export let data: { title: Writable<string>; content: Writable<string> };
	export let id: $$Props["id"];

	const { content, title } = data;

	const { receiver, count } = getContext("maeve");
	const connects = useHandleConnections({ nodeId: id, type: "source" });
	const { deleteElements } = useSvelteFlow();

	$: isConnectable = $connects.length === 0;

	let showAll = false;
	let isLoading = false;
	const previewLength = 250;

	function toggleContent() {
		showAll = !showAll;
	}

	const isClient = browser;

	const handleSubmit = async () => {
		console.log("Sending GET request to improve prompt");
		try {
			const queryParams = new URLSearchParams({ prompt: $content }).toString();
			const response = await fetch(`/api/v1/prompt?${queryParams}`);

			console.log(response, "from handlesubmit");
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				isLoading = false;
				if (data.success) {
					let improvedPrompt = data.improvedPrompt;
					if (improvedPrompt.startsWith("```markdown")) {
						improvedPrompt = improvedPrompt.substring(11); // Remove the starting ```markdown
						improvedPrompt = improvedPrompt.substring(0, improvedPrompt.lastIndexOf("```")); // Remove the closing ```
					}
					$content = improvedPrompt;
				}
			} else {
				isLoading = false;
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error) {
			isLoading = false;
			console.error("Error fetching improved prompt:", error);
		}
	};
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
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->

		<div
			class="content no-scrollbar border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-12 w-full max-w-lg overflow-auto text-wrap rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
			placeholder="Please enter you prompt here..."
			on:click={toggleContent}
		>
			{$content.slice(0, previewLength)}
		</div>
		<!-- {/if} -->

		<Dialog.Root>
			<Dialog.Trigger><Button class="w-full">Prompt Editor</Button></Dialog.Trigger>
			<Dialog.Content class="mx-auto h-full max-h-dvh w-full max-w-full border-none">
				<Dialog.Header>
					<Dialog.Title class="-mt-2 text-center"
						><form
							on:submit|preventDefault={handleSubmit}
							class="flex items-center justify-center gap-2"
						>
							<Button type="submit" on:click={() => (isLoading = true)}
								>Improve Prompt With AI{#if isLoading}
									<Loader2 class="ml-2 w-4 animate-spin" />
								{/if}</Button
							>
						</form></Dialog.Title
					>
					<Dialog.Description class="mx-auto w-full max-w-7xl p-4">
						<CartaEditor {carta} bind:value={$content} mode="auto" theme="default" />
					</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>

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

<style global>
</style>
