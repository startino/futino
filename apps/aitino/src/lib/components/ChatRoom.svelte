<script lang="ts">
	import { ArrowDown, ChevronDown, Loader, Loader2, Send, User } from "lucide-svelte";
	import { Input } from "./ui/input";
	import { Button } from "./ui/button";
	import * as Card from "$lib/components/ui/card";
	import { afterUpdate, onMount } from "svelte";
	import SvelteMarkdown from "svelte-markdown";

	let messages: string | any[] = [];

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
				id: messages.length + 1,
				status: "success",
				data: {
					id: "599bd33b-2b24-437a-89c5-54c998c87598",
					session_id: "76e4f0cf-4678-4ace-8d90-75815d5df78b",
					recipient: "SocialMediaManager-OliviaHarris",
					content: newMessageContent,
					role: "not user",
					name: "new user",
					created_at: new Date().toLocaleTimeString()
				}
			};
			messages = [...messages, newMessage];
			newMessageContent = "";
		}
	};

	let showReplyField = false;

	const toggleReplyField = () => {
		showReplyField = !showReplyField;
	};

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US");
	}

	let chatContainerElement: HTMLDivElement;

	afterUpdate(() => {
		if (chatContainerElement) {
			chatContainerElement.scrollTop = chatContainerElement.scrollHeight;
		}
	});

	const handeNewMessage = async () => {
		const queryParams = new URLSearchParams({
			id: "dfb9ede1-3c08-462f-af73-94cf6aa9185a"
		}).toString();

		try {
			const response = await fetch(`/api/v1/meave?${queryParams}`);
			const data = await response.json();
			const jsonResponseString = data.content;

			const jsonStrings = jsonResponseString
				.split("}}\n")
				.map((str: string) => (str.endsWith("}") ? str : str + "}}"));

			// Parsing each string to JSON, filtering out the 'done' message or any non-JSON strings
			const jsonObjects = jsonStrings
				.filter((str: string) => str.trim() && !str.includes('"status": "success", "data": "done"'))
				.map((str: string) => JSON.parse(str));

			// Adding parsed objects to the messages array
			messages = [...messages, ...jsonObjects];
		} catch (error) {
			console.error("Error fetching chat maeave:", error);
		}
	};

	let replyMessage = "";
	let state: "loading" | "success" | "error" | "idle" = "idle";

	function handleInputChangeReply(event: { target: { value: string } }) {
		replyMessage = event.target.value;
	}

	const handleReply = async () => {
		state = "loading";
		const id = messages[0].data.session_id;
		const reply = replyMessage;

		const queryParams = new URLSearchParams({
			meave_id: "dfb9ede1-3c08-462f-af73-94cf6aa9185a",
			session_id: id,
			reply
		}).toString();
		try {
			const response = await fetch(`/api/v1/reply?${queryParams}`);
			const data = await response.json();
			const jsonResponseString = data.content;
			const jsonStrings = jsonResponseString
				.split("}}\n")
				.map((str: string) => (str.endsWith("}") ? str : str + "}}"));

			// Parsing each string to JSON, filtering out the 'done' message or any non-JSON strings
			const jsonObjects = jsonStrings
				.filter((str: string) => str.trim() && !str.includes('"status": "success", "data": "done"'))
				.map((str: string) => JSON.parse(str));
			// Adding parsed objects to the messages array
			messages = [...messages, ...jsonObjects];
			state = "success";
			replyMessage = "";
			showReplyField = false;
		} catch (error) {
			state = "error";
			replyMessage = "";
			showReplyField = false;
			console.error("Error fetching chat maeave:", error);
		}
	};
</script>

<div class="container -mb-6 flex h-screen max-w-6xl flex-col justify-end p-6">
	<div class="no-scrollbar max-h-full overflow-y-auto" bind:this={chatContainerElement}>
		<!-- add scroll to the bottom of the chat  -->
		{#each messages as message}
			<div>
				{#if message.data && "content" in message.data && message.data.role === "user"}
					<div class="space-y-2 border-none">
						<Card.Root class=" max-w-2xl">
							<Card.Content class="grid gap-4 p-6">
								{#if message.data && "content" in message.data && message.data.content === "CONTINUE"}
									{#if !showReplyField}
										{message.data.content}
										<Button on:click={toggleReplyField} class="flex items-center justify-center">
											reply
										</Button>{/if}
									{#if showReplyField}
										<form class="mt-2 flex flex-col gap-y-6" on:submit={handleReply}>
											<Input
												on:input={handleInputChangeReply}
												placeholder="Type your reply..."
												class="border-input  placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-6 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
											/>
											<div class="align-center mx-auto flex justify-between gap-2">
												<Button variant="primary" type="submit">Send Reply</Button>
												{#if state !== "idle"}
													<Loader2 class="ml-2 w-4 animate-spin" />
												{/if}
												<Button variant="primary" on:click={toggleReplyField}>Cancel</Button>
											</div>
										</form>
									{/if}
								{:else if message.data.content.startsWith("```") || message.data.content.includes("<")}
									<SvelteMarkdown source={message.data.content} />
								{:else}
									<p
										class="prose max-w-2xl break-words text-sm font-medium leading-5 tracking-widest"
									>
										{message.data.content}
									</p>
								{/if}
							</Card.Content>
						</Card.Root>
						<Card.Root class="bg-background max-w-2xl border-none">
							<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4 ">
								<div class="flex items-center gap-4">
									<p class="prose text-xs font-medium leading-none dark:text-blue-950">
										<User size="16" />
									</p>

									<p
										class="prose text-xs font-medium leading-none tracking-widest dark:text-blue-950"
									>
										{message.data.name} - Agent
									</p>
								</div>
								<p class="prose text-sm font-medium dark:text-blue-950">
									sent: {formatDate(message.data.created_at)}
								</p>
							</Card.Content>
						</Card.Root>
					</div>
				{:else}
					<div class="space-y-2">
						{#if message.data && "content" in message.data}
							<Card.Root class=" ml-auto flex max-w-2xl flex-wrap rounded-bl-3xl border">
								<Card.Content class="prose grid gap-4 p-6">
									{#if message.data && "content" in message.data && message.data.content !== "undefined" && message.data.content.startsWith("```")}
										<SvelteMarkdown source={message.data.content} />
									{:else}
										<p class="max-2xl prose text-sm font-medium leading-5 tracking-widest">
											{message.data.content}
										</p>
									{/if}
								</Card.Content>
							</Card.Root>
						{/if}
						{#if message.data && "created_at" in message.data}
							<Card.Root class="ml-auto max-w-2xl border-none bg-transparent">
								<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4">
									<p class="prose text-xs font-medium leading-8 dark:text-green-300">you</p>
									<p class="prose text-xs font-medium leading-8 dark:text-green-300">
										sent: {message.data.created_at}
									</p>
								</Card.Content>
							</Card.Root>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="mb-2 space-y-16">
		<Card.Root class="border-secondary mt-4 max-w-full border">
			<Card.Content class="grid gap-4 p-2">
				<div class="flex justify-between">
					<p class="prose text-sm font-medium leading-8 tracking-widest">
						Waiting on your response...
					</p>
					<Loader class="prose" />
				</div>
			</Card.Content>
		</Card.Root>

		<form class="relative flex w-full max-w-full items-center" on:submit={handeNewMessage}>
			<Input
				bind:value={newMessageContent}
				on:input={handleInputChange}
				on:keydown={handleKeyDown}
				class="border-input  placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-6 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
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
