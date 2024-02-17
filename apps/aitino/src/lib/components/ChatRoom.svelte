<script lang="ts">
	import { ArrowRight, Loader, MessageCircleDashed, Send, User } from 'lucide-svelte';
	import { Input } from './ui/input';
	import { Button } from './ui/button';
	import * as Card from '$lib/components/ui/card';
	let messages = [
		{
			unique_id: '0004',
			content:
				'Aitino is a SaaS idea of Futino. Aitino will be the ultimate business partner and business tool. Aitino will be able to help both entrepreneurs and larger corporations by harnessing the power of multi-LLM-agent environments and advanced integration with other business systems. It will be able to train off of its use-case data day in and day out, improving the software just by getting more data. Aitino will have the capability to replace entire teams of beginner to intermediate-experienced employees and also assist by saving the very expensive time of the experts within companies with their tasks.',
			time: '10:46:45 pm',
			fromUser: true,
			instance_id: '4',
			full_name: 'Michael Smith',
			job_title: 'Graphic Designer',
			model: 'model-b'
		},
		{
			content: 'Generate a 1 min video with a short description about Aitino.',
			time: '11:20:45 pm',
			fromUser: false,
			unique_id: '0001',
			instance_id: '1',
			full_name: 'Alice Johnson',
			job_title: 'Content Creator',
			model: 'model-a'
		}
	];

	let inputText = '';

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
</script>

<div class="container max-w-7xl space-y-3">
	<div class="5 chat-container min-h-96 space-y-8 overflow-auto">
		<!--  the above div is Wrapper for the messages -->
		<!-- Chat messages -->
		{#each messages as message}
			<div>
				{#if message.fromUser}
					<div class="space-y-2">
						<Card.Root class=" max-w-2xl rounded-bl-3xl">
							<Card.Content class="grid gap-4 p-6">
								<p class="text-sm font-medium leading-none">{message.content}</p>
							</Card.Content>
						</Card.Root>
						<Card.Root class="max-w-2xl border-none bg-transparent">
							<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4">
								<div class="flex items-center gap-4">
									<p class="text-sm font-medium leading-none"><User /></p>

									<p class="text-sm font-medium leading-none">{message.full_name}</p>
								</div>
								<p class="text-sm font-medium leading-none">SENT: {message.time}</p>
							</Card.Content>
						</Card.Root>
					</div>
				{:else}
					<div class="space-y-2">
						<Card.Root class="ml-auto max-w-2xl rounded-bl-3xl">
							<Card.Content class="grid gap-4 p-6">
								<p class="text-sm font-medium leading-none">{message.content}</p>
							</Card.Content>
						</Card.Root>
						<Card.Root class="ml-auto max-w-2xl border-none bg-transparent">
							<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4">
								<p class="text-sm font-medium leading-none">You</p>
								<p class="text-sm font-medium leading-none">SENT: {message.time}</p>
							</Card.Content>
						</Card.Root>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="space-y-8">
		<Card.Root class="max-w-full">
			<Card.Content class="grid gap-4 p-2">
				<div class="flex justify-between">
					<p class="text-sm font-medium leading-none">Waiting on your response...</p>
					<Loader />
				</div>
			</Card.Content>
		</Card.Root>

		<div class="relative flex w-full max-w-full items-center">
			<Input
				bind:value={newMessageContent}
				on:input={handleInputChange}
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
