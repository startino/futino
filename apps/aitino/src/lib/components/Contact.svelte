<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export function closeModal() {
		dispatch('closeModal');
	}

	export let showModal = false;

	$: showModal;
</script>

<Card.Root
	class="bg-card border-primary absolute left-1/2 top-1/2  w-full max-w-xl -translate-x-1/2  -translate-y-1/2 border font-bold text-primary transition-all duration-300 ease-in-out"
>
	<Button
		class="absolute right-0 rounded-lg bg-transparent hover:scale-95 hover:bg-transparent"
		on:click={() => closeModal()}><i class="fas fa-times"></i></Button
	>
	<Card.Header class="space-y-1 mt-4">
		<Card.Title class="text-4xl">Contact Us</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="grid gap-2">
			<Label for="name">Name</Label>
			<Input
				id="name"
				type="text"
				placeholder="John Doe"
				class="font-roboto w-full border-none bg-[#17151c] p-6 font-bold  outline-primary focus-within:outline-primary focus:outline"
			/>
		</div>
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input
				id="email"
				type="email"
				placeholder="example@example.com"
				class="font-roboto w-full border-none bg-[#17151c] p-6 font-bold  outline-primary focus-within:outline-primary focus:outline"
			/>
		</div>
		<div class="grid gap-2">
			<Label for="email">Description</Label>
			<Textarea
				id="description"
				placeholder="description..."
				class="font-roboto w-full border-none bg-[#17151c] p-6 font-bold  outline-primary focus-within:outline-primary focus:outline"
			/>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button
			class="relative w-full border-none bg-primary text-lg font-bold text-black transition-all duration-300 ease-in-out hover:scale-y-95 hover:bg-[#003825]"
			on:click={() => (showModal = false)}
			type="submit">Submit</Button
		>
	</Card.Footer>
</Card.Root>
