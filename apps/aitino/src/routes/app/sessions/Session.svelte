<script lang="ts">
	import { Loader, Send } from "lucide-svelte";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import Message from "./Message.svelte";
	import * as Card from "$lib/components/ui/card";
	import { afterUpdate, onMount } from "svelte";
	import { v4 as uuidv4 } from "uuid";

	let maeveId: string;
	let sessionId: string;
	let messages: {
		id: string;
		session_id: string;
		recipient: string;
		content: string;
		role: string;
		name: string;
		created_at: string;
	}[] = [];

	onMount(() => {
		const _id: string | null = localStorage.getItem("currentMeaveId");
		if (_id == null) {
			console.error("No maeve id found");
			return;
		}

		maeveId = _id;
		console.log(maeveId, "maeveId");
	});

	function handleKeyDown(event: { key: string }) {
		if (event.key === "Enter") {
			sendMessage();
		}
	}

	function handleInputChange(event: { target: { value: string } }) {
		newMessageContent = event.target.value;
	}

	let newMessageContent = "";
	const sendMessage = () => {
		if (newMessageContent.trim() !== "") {
			const newMessage = {
				id: uuidv4(),
				status: "success",
				data: {
					content: newMessageContent,
					role: "user",
					name: "Admin",
					created_at: new Date().toLocaleTimeString(),
					session_id: sessionId
				}
			};
			messages = [...messages, newMessage];
			newMessageContent = "";
		}
	};

	let chatContainerElement: HTMLDivElement;

	afterUpdate(() => {
		if (chatContainerElement) {
			chatContainerElement.scrollTop = chatContainerElement.scrollHeight;
		}
	});
</script>

<div class="container -mb-6 flex h-screen max-w-6xl flex-col justify-end p-6">
	<div class="no-scrollbar max-h-full overflow-y-auto" bind:this={chatContainerElement}>
		<!-- add scroll to the bottom of the chat  -->
		{#each messages as message}
			<Message {message} />
		{/each}
	</div>

	<div class="mb-2 space-y-16">
		<Card.Root class="mt-4 max-w-full border border-secondary">
			<Card.Content class="grid gap-4 p-2">
				<div class="flex justify-between">
					<p
						class="text-background-on prose prose-main text-sm font-medium leading-8 tracking-widest"
					>
						Waiting on your response...
					</p>
					<Loader class="prose" />
				</div>
			</Card.Content>
		</Card.Root>

		<form class="relative flex w-full max-w-full items-center">
			<Input
				bind:value={newMessageContent}
				on:input={handleInputChange}
				on:keydown={handleKeyDown}
				class="flex  h-9 w-full rounded-md border border-input bg-transparent px-3 py-6 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
				placeholder="Join the conversation by typing a message..."
			/>
			<Button
				variant="ghost"
				class="hover:bg-default absolute right-0 hover:scale-95"
				disabled={newMessageContent.length === 0}
				on:click={sendMessage}
			>
				<Send class="hover:text-primary" />
			</Button>
		</form>
	</div>
</div>
