<script lang="ts">
	import type { SessionLoad } from "$lib/types/loads";
	import { Button } from "$lib/components/ui/button";
	import Chat from "./Chat.svelte";
	import { onMount } from "svelte";
    import { PUBLIC_API_URL } from "$env/static/public";
	import { error } from "@sveltejs/kit";

	export let data: SessionLoad;

	let loading = true;
	let awaitingReply = false;

	onMount(() => {
		loading = false;

		if (data.messages.length > 0) {
			awaitingReply = true;
		}
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
				data.session = {
					id: e.data.session_id,
					maeve_id: e.data.maeva_id,
					profile_id: e.data.profile_id
				};
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
		}
	}

	function startSession() {
		data.session = null;
		data.messages = [];
		loading = true;

		const url = `${PUBLIC_API_URL}/maeve?id=${data.maeveId}&profile_id=${data.profileId}`;

		main(url);
	}

	function replySession(message: string) {
		if (!data.session) {
			throw error(500, "Cannot reply without session");
		}
		awaitingReply = false;
		const url = `${PUBLIC_API_URL}/maeve?id=${data.maeveId}&profile_id=${data.profileId}&session_id=${data.session.id}&reply=${message}`;

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
{:else if data.session && data.maeveId}
	<Chat
		sessionId={data.session.id}
		messages={data.messages}
		{awaitingReply}
		replyCallback={replySession}
	/>
	<div
		class="absolute top-0 mx-auto flex h-min w-full flex-col items-center justify-center bg-transparent p-4 backdrop-blur"
	>
		<Button on:click={startSession}>Start New Session</Button>
	</div>
{:else if data.maeveId}
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
	<code class="text-muted">
		maeve id: {data.maeveId} - session id: {data.session ? data.session.id : "missing"}
	</code>
</div>
