<script lang="ts">
	import { Loader, Loader2, Send, User } from "lucide-svelte";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { afterUpdate, onMount } from "svelte";
	import SvelteMarkdown from "svelte-markdown";

	let maeveId: string;

	onMount(() => {
		const _id: string | null = localStorage.getItem("currentMeaveId");
		if (_id == null) {
			console.error("No maeve id found");
			return;
		}

		maeveId = _id;
		console.log(maeveId, "maeveId");
	});

	let messages: any[] = [];

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

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US");
	}

	let chatContainerElement: HTMLDivElement;

	afterUpdate(() => {
		if (chatContainerElement) {
			chatContainerElement.scrollTop = chatContainerElement.scrollHeight;
		}
	});

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
								<p
									class="prose prose-main max-w-2xl break-words text-sm font-medium leading-5 tracking-widest"
								>
									<SvelteMarkdown source={message.data.content} />
								</p>
							</Card.Content>
						</Card.Root>
						<Card.Root class="max-w-2xl border-none bg-background">
							<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4 ">
								<div class="flex items-center gap-4">
									<p class="prose text-xs font-medium leading-none">
										<User size="16" />
									</p>

									<p class="prose prose-main text-xs font-medium leading-none tracking-widest">
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
