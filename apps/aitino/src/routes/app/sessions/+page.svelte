<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Chat from "./Chat.svelte";
	import { onMount } from "svelte";

	// get maeveId and sessionId from the page store

	let loading = true;
	let maeveId: string | null;
	let sessionId: string | null;
	let awaitingReply = false;
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
		maeveId = localStorage.getItem("currentMeaveId");
		sessionId = localStorage.getItem("currentSessionId");
		messages = JSON.parse(localStorage.getItem("currentMessages") || "[]");
		loading = false;
	});

	async function* callMaeve(url: string): AsyncGenerator<string, void, unknown> {
		const response = await fetch(url);
		const reader = response.body?.getReader();

		if (!reader) {
			throw new Error("Invalid response");
		}

		while (true) {
			const { done, value } = await reader.read();

			if (done) {
				break;
			}

			const line = new TextDecoder().decode(value);

			if (!line) {
				break;
			}

			yield line;
		}
	}

	async function main(): Promise<void> {
		const url = `https://api.aiti.no/maeve?id=${maeveId}`;

		if (!url) {
			console.log("Usage: Provide a valid URL as a parameter");
			return;
		}

		for await (const event of callMaeve(url)) {
			let e = null;
			try {
				e = JSON.parse(event.trim());
			} catch (error) {
				console.error(`Error parsing JSON ${error}:`, event);
				continue;
			}
			if (!e) {
				continue;
			}

			if (e.id === 0) {
				sessionId = e.data.session_id;
				localStorage.setItem("currentSessionId", e.data.session_id);
				loading = false;
				continue;
			}
			if (e.data === "done") {
				awaitingReply = true;
				console.log("done");
				return;
			}

			messages = [...messages, e.data];
			localStorage.setItem("currentMessages", JSON.stringify(messages));
		}
	}

	function runMaeve() {
		localStorage.removeItem("currentSessionId");
		localStorage.removeItem("currentMessages");
		sessionId = null;
		messages = [];
		loading = true;

		main();
	}

	function redirectToCreateMaeve() {
		window.location.href = "/app/maeves/create";
	}
</script>

{#if loading}
	<div
		class="xl:prose-md prose prose-sm prose-main mx-auto flex h-screen max-w-none flex-col items-center justify-center gap-4 px-12 text-center md:prose-base 2xl:prose-lg"
	>
		<h1>Loading...</h1>
	</div>
{:else if sessionId && maeveId}
	<Chat {maeveId} {sessionId} {messages} {awaitingReply} />
	<div
		class="absolute top-0 mx-auto flex h-min w-full flex-col items-center justify-center bg-transparent p-4 backdrop-blur"
	>
		<Button on:click={runMaeve}>Start New Session</Button>
	</div>
{:else if maeveId}
	<div
		class="xl:prose-md prose prose-sm prose-main mx-auto flex h-screen max-w-none flex-col items-center justify-center gap-4 px-12 text-center md:prose-base 2xl:prose-lg"
	>
		<h1>It looks like you don't have session yet...</h1>
		<Button on:click={runMaeve}>Run Your Maeve!</Button>
	</div>
{:else}
	<div
		class="xl:prose-md prose prose-sm prose-main mx-auto flex h-screen max-w-none flex-col items-center justify-center gap-4 px-12 text-center md:prose-base 2xl:prose-lg"
	>
		<h1>It looks like you haven't created a maeve yet...</h1>
		<Button on:click={redirectToCreateMaeve}>Go Create One!</Button>
	</div>
{/if}
<div class="absolute bottom-1 mx-auto flex h-min w-full flex-col items-center justify-center">
	<code class="text-muted">debug:</code>
	<code class="text-muted">maeve id: {maeveId} - session id: {sessionId}</code>
</div>
