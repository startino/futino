<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import { toast } from 'svelte-sonner';
	import FormItem from '$lib/components/FormItem.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export let form;

	let showModal = false;

	$: console.log(showModal);

</script>

<div class="flex flex-col justify-evenly h-full py-6">
<Button
	class="ml-auto block max-w-sm  text-base"
	on:click={() => {
		showModal = !showModal;
		console.log('sdfs');
	}}>Contact Us</Button
>

<div class="relative mx-auto flex w-full flex-col gap-y-12 text-white lg:gap-y-4 ">
	<h1 class="text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
		Join the Future of AI<br /> with Exclusive Early Access to
		<span class="text-primary border-none">Aitino</span>
	</h1>

	<p class="mx-auto mt-2 max-w-3xl text-center text-lg">
		<span class="text-primary">Aitino </span> is a SaaS platform powered by multi-agent LLMs designed
		to help entrepreneurs and businesses automate tasks and solve complex problems.
	</p>

	<FormItem class="mt-10" form={form}/>
</div>

{#if showModal}
	<div class="absolute left-0 top-0 h-full w-full bg-zinc-800/50">
		<Contact on:closeModal={() => (showModal = false)} />
	</div>
{/if}
</div>