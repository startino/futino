<script lang="ts">
	import { Loader, Send } from "lucide-svelte";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import { Textarea } from "$lib/components/ui/textarea";
	import Message from "./Message.svelte";
	import * as Card from "$lib/components/ui/card";
	import { afterUpdate } from "svelte";
	import { v4 as uuidv4 } from "uuid";

	export let maeveId: string;
	export let sessionId: string;
	export let messages: {
		id: string;
		session_id: string;
		recipient: string;
		content: string;
		role: string;
		name: string;
		created_at: string;
	}[] = [];

	export let awaitingReply = false;

	let rows = 1;
	$: minRows = rows <= 1 ? 1 : rows >= 50 ? 50 : rows;

	function handleInputChange(event: { target: { value: string } }) {
		newMessageContent = event.target.value;
		rows = newMessageContent.split("\n").length;
	}

	let newMessageContent = "";
	function sendMessage() {
		if (newMessageContent.trim().length <= 5) {
			console.warn("Message too short");
			// TODO: show sonner warning to user
		}

		const newMessage = {
			id: uuidv4(),
			session_id: sessionId,
			recipient: "",
			content: newMessageContent,
			role: "user",
			name: "Admin",
			created_at: new Date().toISOString().replace("T", " ")
		};
		messages = [...messages, newMessage];
		newMessageContent = "";
	}

	let chatContainerElement: HTMLDivElement;
	afterUpdate(() => {
		if (chatContainerElement) {
			chatContainerElement.scrollTop = chatContainerElement.scrollHeight;
		}
	});
</script>

<div class="container flex h-screen max-w-6xl flex-col justify-end">
	<div
		class="no-scrollbar flex h-screen w-full flex-col gap-4 overflow-y-auto pb-16 pt-20"
		bind:this={chatContainerElement}
	>
		<!-- add scroll to the bottom of the chat  -->
		{#each messages as message, index}
			<Message {message} />

			{#if index !== messages.length - 1}
				<hr class="prose my-20 w-full max-w-none border-t border-nsecondary px-12" />
			{/if}
		{/each}
		{#if awaitingReply}
			<div class="flex w-full flex-row items-center justify-center gap-1 p-1">
				<Textarea
					class="prose prose-main w-full max-w-none resize-none text-lg"
					placeholder="Give Feedback to the agents"
					bind:value={newMessageContent}
					{minRows}
					maxRows={minRows}
					on:input={handleInputChange}
				></Textarea>
				<Button
					variant="ghost"
					class="hover:bg-default hover:scale-95 hover:text-primary"
					disabled={newMessageContent.length <= 5}
					on:click={sendMessage}
				>
					<Send />
				</Button>
			</div>
		{/if}
	</div>
</div>
