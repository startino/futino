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

	<div class="relative mx-auto flex flex-col place-items-center gap-y-4 md:gap-y-12 text-foreground lg:gap-y-4">
		<h1 class="text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl m-0 sm:m-0">
			Join the Future of AI<br /> with Exclusive Early Access to
			<span class="text-primary border-none">Aitino</span>
		</h1>

		<h2 class="mx-auto mt-2 text-center prose text-foreground m-0 sm:m-0">
			<span class="text-primary">Aitino </span> is a platform powered by multi-agent LLMs designed
			to help entrepreneurs and businesses automate tasks and solve complex problems.
		</h2>

		<FormItem class="mt-10" {form} />
	</div>

	{#if showModal}
		<div class="absolute left-0 top-0 h-full w-full bg-zinc-800/50">
			<Contact on:closeModal={() => (showModal = false)} />
		</div>
	{/if}
</div>
