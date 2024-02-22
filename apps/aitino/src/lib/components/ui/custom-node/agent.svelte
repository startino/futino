<script lang="ts">
	import {
		Position,
		type NodeProps,
		useHandleConnections,
		type Connection,
		getConnectedEdges,
		useSvelteFlow,
		useConnection
	} from "@xyflow/svelte";
	import { type Writable } from "svelte/store";
	import { Loader2, X } from "lucide-svelte";

	// 👇 always import the styles
	import "@xyflow/svelte/dist/style.css";
	import * as Card from "$lib/components/ui/card";
	import * as Select from "$lib/components/ui/select";
	import { Input } from "$lib/components/ui/input";
	import Handle from "$lib/components/Handle.svelte";
	import Textarea from "../textarea/textarea.svelte";
	import { getContext } from "$lib/utils";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Button } from "$lib/components/ui/button";
	import { Carta, CartaEditor } from "carta-md";
	import "carta-md/default.css"; /* Default theme */
	import "carta-md/light.css"; /* Markdown input theme */
	import { enhance } from "$app/forms";
	import { browser } from "$app/environment";

	type $$Props = NodeProps;

	const { receiver, count } = getContext("maeve");

	export let data: {
		avatar: string;
		prompt: Writable<string>;
		job_title: Writable<string>;
		name: Writable<string>;
		model: Writable<{ label: string; value: string }>;
	};

	const { name, model, prompt, job_title, avatar } = data;

	const models = [
		{
			label: "GPT-4 Turbo",
			value: "gpt-4-turbo-preview"
		},
		{
			label: "GPT-3.5 Turbo",
			value: "gpt-3.5-turbo"
		}
	];

	export let id: NodeProps["id"];

	const connection = useConnection();

	let isConnecting = false;
	let isTarget = false;

	$: isConnecting = !!$connection.startHandle?.nodeId;
	$: isTarget = !!$connection.startHandle && $connection.startHandle?.nodeId !== id;
	$: isReceiver = $receiver?.node.id === id;

	const { deleteElements } = useSvelteFlow();

	const carta = new Carta({
		// Remember to use a sanitizer to prevent XSS attacks!
		// More on that below
		// sanitizer: ...
	});
	let showAll = false;
	const previewLength = 100;
	let isLoading = false;
	// let prompt = '';

	function toggleContent() {
		showAll = !showAll;
	}

	const isClient = browser;

	const handleSubmit = async () => {
		if (isClient && $prompt) {
			console.log("Sending GET request to improve prompt");
			try {
				const queryParams = new URLSearchParams({ prompt: $prompt }).toString();
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
						$prompt = improvedPrompt;
					}
				} else {
					isLoading = false;
					throw new Error(`HTTP error! status: ${response.status}`);
				}
			} catch (error) {
				isLoading = false;
				console.error("Error fetching improved prompt:", error);
			}
		}
	};
</script>

<Card.Root
	class="{isTarget ? 'bg-card border-2 border-dashed ' : ''} {isReceiver
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
		{#if avatar}
			<img class="mx-auto max-w-[90px]" src="/avatars/{avatar}" alt="" />
		{/if}
		<Input placeholder="Name..." bind:value={$name} />
		<Input placeholder="Job title..." bind:value={$job_title} />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->

		<div
			class="content no-scrollbar border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-12 w-full max-w-lg overflow-auto text-wrap rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
			placeholder="Please enter you prompt here..."
			on:click={toggleContent}
		>
			{$prompt.slice(0, previewLength)}
		</div>
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
						<CartaEditor {carta} bind:value={$prompt} mode="auto" theme="default" />
					</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>

		<Select.Root bind:selected={$model}>
			<Select.Trigger>
				<Select.Value placeholder="Select a model" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					{#each models as { value, label }}
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
