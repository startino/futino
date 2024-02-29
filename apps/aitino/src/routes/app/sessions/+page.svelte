<script lang="ts">
	import type { SessionLoad } from "$lib/loads";
	import { Button } from "$lib/components/ui/button";
	import Chat from "./Chat.svelte";
	import { onMount } from "svelte";
	import { API_BASE_URL } from "$lib/config";

	export let data: SessionLoad;

	let loading = true;
	let awaitingReply = false;

	onMount(() => {
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

	async function main(url: string): Promise<void> {
		if (!url) {
			console.log("Usage: Provide a valid URL as a parameter");
			return;
		}

		for await (const event of callMaeve(url)) {
			let e = null;
			try {
				e = JSON.parse(event.trim());
				console.log("got message", e);
			} catch (error) {
				console.error(`Error parsing JSON ${error}:`, event);
				continue;
			}
			if (!e) {
				continue;
			}

			if (e.id === 0) {
				data.sessionId = e.data.session_id;
				localStorage.setItem("currentSessionId", e.data.session_id);
				loading = false;
				console.log("got session id", e.data.session_id);
				continue;
			}
			if (e.data === "done") {
				awaitingReply = true;
				console.log("done");

				return;
			}

			data.messages = [...data.messages, e.data];
			localStorage.setItem("currentMessages", JSON.stringify(data.messages));
		}
	}

	function startSession() {
		localStorage.removeItem("currentSessionId");
		localStorage.removeItem("currentMessages");
		data.sessionId = null;
		data.messages = [];
		loading = true;

		const url = `${API_BASE_URL}/maeve?id=${data.maeveId}`;
		main(url);
	}

	function continueSession() {
		const url = `${API_BASE_URL}/maeve?id=${data.maeveId}&session_id=${data.sessionId}&reply=${data.eply}`;

		main(url);
	}

	function redirectToMaeveEditor() {
		window.location.href = "/app/editors/maeve";
	}
</script>

{#if loading}
	<div
		class="xl:prose-md prose prose-sm prose-main mx-auto flex h-screen max-w-none flex-col items-center justify-center gap-4 px-12 text-center md:prose-base 2xl:prose-lg"
	>
		<h1>Loading...</h1>
	</div>
{:else if data.sessionId && data.maeveId}
	<Chat {data.maeveId} {data.sessionId} {data.messages} {awaitingReply} />
	<div
		class="absolute top-0 mx-auto flex h-min w-full flex-col items-center justify-center bg-transparent p-4 backdrop-blur"
	>
		<Button on:click={startSession}>Start New Session</Button>
	</div>
{:else if maeveId}
	<div
		class="xl:prose-md prose prose-sm prose-main mx-auto flex h-screen max-w-none flex-col items-center justify-center gap-4 px-12 text-center md:prose-base 2xl:prose-lg"
	>
		<h1>It looks like you don't have session yet...</h1>
		<Button on:click={startSession}>Run Your Maeve!</Button>
	</div>
{:else}
	<div
		class="xl:prose-md prose prose-sm prose-main mx-auto flex h-screen max-w-none flex-col items-center justify-center gap-4 px-12 text-center md:prose-base 2xl:prose-lg"
	>
		<h1>It looks like you haven't created a maeve yet...</h1>
		<Button on:click={redirectToMaeveEditor}>Go Create One!</Button>
	</div>
{/if}
<div class="absolute bottom-1 mx-auto flex h-min w-full flex-col items-center justify-center">
	<code class="text-muted">debug:</code>
	<code class="text-muted">maeve id: {maeveId} - session id: {sessionId}</code>
</div>
