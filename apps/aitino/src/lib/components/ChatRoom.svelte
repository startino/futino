<script lang="ts">
	import { ArrowRight, Loader, MessageCircleDashed, Send } from 'lucide-svelte';
	import { Input } from './ui/input';
	import { Button } from './ui/button';
	import * as Card from '$lib/components/ui/card';
	let messages = [
		{
			content:
				'Aitino is a SaaS idea of Futino. Aitino will be the ultimate business partner and business tool. Aitino will be able to help both entrepreneurs and larger corporations by harnessing the power of multi-LLM-agent environments and advanced integration with other business systems. It will be able to train off of its use-case data day in and day out, improving the software just by getting more data. Aitino will have the capability to replace entire teams of beginner to intermediate-experienced employees and also assist by saving the very expensive time of the experts within companies with their tasks.',
			time: 'HH:MM:SSpm',
			agentLogo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
			fromUser: true,

			unique_id: '0001',
			instance_id: '1',
			full_name: 'Alice Johnson',
			job_title: 'Content Creator',
			model: 'model-a'
		},
		{
            unique_id: '0004',
			content: 'Another message content...',
			time: 'HH:MM:SSpm',
			agentLogo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
			fromUser: false,
			instance_id: '4',
			full_name: 'Michael Smith',
			job_title: 'Graphic Designer',
			model: 'model-b'
		}
	];

	let inputText = '';

	function handleInputChange(event) {
		inputText = event.target.value;
	}
</script>

<div class="container max-w-3xl space-y-3">
	<div class="5 min-h-96 overflow-auto border">
		<!-- Chat messages -->
		{#each messages as message}
			<div>
				{#if message.fromUser}
					<Card.Root class="max-w-lg rounded-bl-lg">
						<Card.Header></Card.Header>
						<Card.Content class="grid gap-4">
							<div class=" flex items-center rounded-md">
								<p class="text-sm font-medium leading-none">{message.content}</p>
							</div>
							<div></div>
						</Card.Content>
						<Card.Footer></Card.Footer>
					</Card.Root>
				{/if}
			</div>
		{/each}
	</div>

	<div class="space-y-8">
		<Button
			class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full cursor-text justify-between rounded-md  border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium hover:bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
		>
			<p>Waiting on your response...</p>
			<Loader />
		</Button>

		<form class="relative flex w-full max-w-full items-center">
			<Input
				bind:value={inputText}
				on:input={handleInputChange}
				class="border-input  placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-6 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
				placeholder="Join the conversation by typing a message..."
			/>
			<Button
				variant="ghost"
				class="hover:bg-default absolute right-0 hover:scale-95"
				disabled={inputText.length === 0}
			>
				<Send class="hover:text-primary" />
			</Button>
		</form>
	</div>
</div>
