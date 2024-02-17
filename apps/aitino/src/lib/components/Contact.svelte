<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { createEventDispatcher } from 'svelte';
	import { toast } from 'svelte-sonner';

	import { X } from 'lucide-svelte';

	const dispatch = createEventDispatcher();

	export let form: any = {};

	export function closeModal() {
		dispatch('closeModal');
	}

	export let showModal = false;

	let submitting = false;

	$: showModal;
</script>

<Card.Root
	class="bg-card border-primary text-primary absolute left-1/2  top-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 border font-bold transition-all duration-300 ease-in-out"
>
	<Button
		class="absolute right-0 rounded-lg bg-transparent hover:scale-95 hover:bg-transparent"
		on:click={() => closeModal()}
	>
		<X class="hover:text-" />
	</Button>
	<Card.Header class="mt-4 space-y-1">
		<Card.Title class="text-4xl">Contact Us</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="grid gap-2">
			<Label for="name">Name</Label>
			<Input
				id="name"
				type="text"
				placeholder="John Doe"
				class="font-roboto outline-primary focus-within:outline-primary w-full border-none bg-[#17151c]  p-6 font-bold focus:outline"
			/>
		</div>
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input
				id="email"
				type="email"
				placeholder="example@example.com"
				class="font-roboto outline-primary focus-within:outline-primary w-full border-none bg-[#17151c]  p-6 font-bold focus:outline"
			/>
		</div>
		<div class="grid gap-2">
			<Label for="email">Description</Label>
			<Textarea
				id="description"
				placeholder="description..."
				class="font-roboto outline-primary focus-within:outline-primary w-full border-none bg-[#17151c]  p-6 font-bold focus:outline"
			/>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button
			class="bg-primary relative w-full border-none text-lg font-bold text-black transition-all duration-300 ease-in-out hover:scale-y-95 hover:bg-[#003825]"
			on:click={() => {
				showModal = false;
				submitting = true;
			}}
			type="submit"
		>
		Submit
		</Button>
	</Card.Footer>
</Card.Root>
