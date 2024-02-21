<script lang="ts">
	import { ArrowDown, Loader, Send, User } from 'lucide-svelte';
	import { Input } from './ui/input';
	import { Button } from './ui/button';
	import * as Card from '$lib/components/ui/card';
	import { afterUpdate, onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	let messages = [
		{
			unique_id: '0004',
			content:
				'Aitino will be the ultimate business partner and business tool. Aitino will be able to help both entrepreneurs and larger corporations by harnessing the power of multi-LLM-agent environments and advanced integration with other business systems.',
			time: '10:46:45 pm',
			fromUser: false,
			instance_id: '4',
			full_name: 'Michael',
			job_title: 'Graphic Designer',
			model: 'model-b'
		},
		{
			unique_id: '0004',
			content: 'The waitlist for aitino is live go check it out at aiti.no 😀',
			time: '10:46:45 pm',
			fromUser: false,
			instance_id: '4',
			full_name: 'Michael',
			job_title: 'Graphic Designer',
			model: 'model-b'
		},
		{
			content: 'Generate a 1 min video with a short description about Aitino.',
			time: '11:20:45 pm',
			fromUser: true,
			unique_id: '0001',
			instance_id: '1',
			full_name: 'Alice Johnson',
			job_title: 'Content Creator',
			model: 'model-a'
		}
	];

	function handleKeyDown(event: { key: string }) {
		if (event.key === 'Enter') {
			sendMessage();
		}
	}

	function handleInputChange(event: { target: { value: string } }) {
		newMessageContent = event.target.value;
	}

	let newMessageContent = '';
	const sendMessage = () => {
		if (newMessageContent.trim() !== '') {
			const newMessage = {
				id: messages.length + 1,
				name: 'User',
				role: 'User Role',
				content: newMessageContent,
				time: new Date().toLocaleTimeString(),
				fromUser: true
			};
			messages = [...messages, newMessage];
			newMessageContent = '';
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
			<div>
				{#if !message.fromUser}
					<div class="space-y-2 border-none">
						<Card.Root class=" max-w-2xl">
							<Card.Content class="grid gap-4 p-6">
								{#if message.content.startsWith('```') || message.content.includes('<')}
									<SvelteMarkdown source={message.content} />
								{:else}
									<p class="prose text-sm font-medium leading-5 tracking-widest">
										{message.content}
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
										{message.full_name} - Agent
									</p>
								</div>
								<p class="prose text-sm font-medium dark:text-blue-950">
									sent: {message.time}
								</p>
							</Card.Content>
						</Card.Root>
					</div>
				{:else}
					<div class="space-y-2">
						<Card.Root class=" ml-auto flex max-w-2xl flex-wrap rounded-bl-3xl border">
							<Card.Content class="prose grid gap-4 p-6">
								{#if message.content.startsWith('```') || message.content.includes('<')}
									<SvelteMarkdown source={message.content} />
								{:else}
									<p class="prose text-sm font-medium leading-5 tracking-widest">
										{message.content}
									</p>
								{/if}
							</Card.Content>
						</Card.Root>
						<Card.Root class="ml-auto max-w-2xl border-none bg-transparent">
							<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4">
								<p class="prose text-xs font-medium leading-8 dark:text-green-300">you</p>
								<p class="prose text-xs font-medium leading-8 dark:text-green-300">
									sent: {message.time}
								</p>
							</Card.Content>
						</Card.Root>
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

		<div class="relative flex w-full max-w-full items-center">
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
		</div>
	</div>
</div>
