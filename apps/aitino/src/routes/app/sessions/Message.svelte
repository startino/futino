<script lang="ts">
	import { User } from "lucide-svelte";
	import * as Card from "$lib/components/ui/card";
	import { formatDate } from "$lib/utils";
	import SvelteMarkdown from "svelte-markdown";
	export let message: {
		id: string;
		session_id: string;
		recipient: string;
		content: string;
		role: string;
		name: string;
		created_at: string;
	};
</script>

{#if message && "content" in message && message.role === "user"}
	<div class="space-y-2 border-none">
		<Card.Root class=" max-w-2xl">
			<Card.Content class="grid gap-4 p-6">
				<p
					class="prose prose-main max-w-2xl break-words text-sm font-medium leading-5 tracking-widest"
				>
					<SvelteMarkdown source={message.content} />
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
						{message.name} - Agent
					</p>
				</div>
				<p class="prose text-sm font-medium dark:text-blue-950">
					sent: {formatDate(message.created_at)}
				</p>
			</Card.Content>
		</Card.Root>
	</div>
{:else}
	<div class="space-y-2">
		{#if message && "content" in message}
			<Card.Root class=" ml-auto flex max-w-2xl flex-wrap rounded-bl-3xl border">
				<Card.Content class="prose grid gap-4 p-6">
					{#if message && "content" in message && message.content !== "undefined" && message.content.startsWith("```")}
						<SvelteMarkdown source={message.content} />
					{:else}
						<p class="max-2xl prose text-sm font-medium leading-5 tracking-widest">
							{message.content}
						</p>
					{/if}
				</Card.Content>
			</Card.Root>
		{/if}
		{#if message && "created_at" in message}
			<Card.Root class="ml-auto max-w-2xl border-none bg-transparent">
				<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4">
					<p class="prose text-xs font-medium leading-8 dark:text-green-300">you</p>
					<p class="prose text-xs font-medium leading-8 dark:text-green-300">
						sent: {message.created_at}
					</p>
				</Card.Content>
			</Card.Root>
		{/if}
	</div>
{/if}
