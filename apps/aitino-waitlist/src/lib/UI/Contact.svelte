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
	class="element shadow-md max-w-lg  w-full absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-green-300 bg-black border-none text-[#45dfa4] font-bold transition-all duration-300 ease-in-out"
>
	<Button
		class="absolute right-0 bg-transparent hover:bg-transparent hover:scale-95 rounded-lg"
		on:click={() => closeModal()}><i class="fas fa-times"></i></Button
	>
	<Card.Header class="space-y-1">
		<Card.Title class="text-2xl">Contact Us</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="grid gap-2">
			<Label for="name">Name</Label>
			<Input
				id="name"
				type="text"
				placeholder="John Doe"
				class="p-6 font-bold border-none w-full font-roboto bg-[#17151c]  outline-[#45dfa4] focus:outline focus-within:outline-[#45dfa4]"
			/>
		</div>
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input
				id="email"
				type="email"
				placeholder="example@example.com"
				class="p-6 font-bold border-none w-full font-roboto bg-[#17151c]  outline-[#45dfa4] focus:outline focus-within:outline-[#45dfa4]"
			/>
		</div>
		<div class="grid gap-2">
			<Label for="email">Description</Label>
			<Textarea
				id="description"
				placeholder="description..."
				class="p-6 font-bold border-none w-full font-roboto bg-[#17151c]  outline-[#45dfa4] focus:outline focus-within:outline-[#45dfa4]"
			/>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button
			class="w-full border-none relative text-lg font-bold text-black hover:bg-[#003825] bg-[#45dfa4] hover:scale-y-95 transition-all duration-300 ease-in-out"
			on:click={() => (showModal = false)}
			type="submit">Submit</Button
		>
	</Card.Footer>
</Card.Root>
