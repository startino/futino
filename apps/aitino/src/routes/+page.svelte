<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import FormItem from '$lib/components/FormItem.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	export let form;

	let showModal = false;

	$: console.log(showModal);
</script>

<div class="flex h-full flex-col justify-evenly py-6">
	<Dialog.Root>
		<Dialog.Trigger class="ml-auto"
			><Button class="ml-auto block max-w-sm  text-base">Contact Us</Button></Dialog.Trigger
		>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header class="mt-4 space-y-1">
				<Dialog.Title class="text-4xl">Contact Us</Dialog.Title>
			</Dialog.Header>
			<div class="grid gap-2">
				<Label for="name">Name</Label>
				<Input
					class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
					id="name"
					type="name"
					name="name"
				/>
			</div>
			<div class="grid gap-2">
				<Label for="email">Email</Label>
				<Input
					class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
					id="email"
					type="email"
					name="email"
				/>
			</div>
			<div class="grid gap-2">
				<Label for="email">Description</Label>
				<Textarea
					class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
				/>
			</div>
			<Dialog.Footer>
				<Button type="submit">Submit</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>

	<div class="relative mx-auto flex w-full flex-col gap-y-12 text-white lg:gap-y-4">
		<h1 class="text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
			Join the Future of AI<br /> with Exclusive Early Access to
			<span class="text-primary border-none">Aitino</span>
		</h1>

		<p class="mx-auto mt-2 max-w-3xl text-center text-lg">
			<span class="text-primary">Aitino </span> is a SaaS platform powered by multi-agent LLMs designed
			to help entrepreneurs and businesses automate tasks and solve complex problems.
		</p>

		<FormItem class="mt-10" {form} />
	</div>

	{#if showModal}
		<div class="absolute left-0 top-0 h-full w-full bg-zinc-800/50">
			<Contact on:closeModal={() => (showModal = false)} />
		</div>
	{/if}
</div>
