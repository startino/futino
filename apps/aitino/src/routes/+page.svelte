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
	<div
		class="text-foreground relative mx-auto flex flex-col place-items-center gap-y-4 md:gap-y-12 lg:gap-y-4"
	>
		<h1 class="m-0 text-center text-2xl sm:m-0 md:text-4xl lg:text-6xl xl:text-7xl">
			Join the Future of AI<br /> with Exclusive Early Access to
			<span class="text-primary typewriter border-none">
				<span class="mx-au inline-block overflow-hidden whitespace-nowrap">Aitino</span></span
			>
		</h1>

		<h2 class="prose text-foreground m-0 mx-auto mt-2 text-center sm:m-0">
			<span class="text-primary">Aitino </span> is a platform powered by multi-agent LLMs designed to
			help entrepreneurs and businesses automate tasks and solve complex problems.
		</h2>

		<FormItem class="mt-10" {form} />
	</div>

	{#if showModal}
		<div class="absolute left-0 top-0 h-full w-full bg-zinc-800/50">
			<Contact on:closeModal={() => (showModal = false)} />
		</div>
	{/if}
</div>

<style>
	.typewriter span {
		overflow: hidden;
		white-space: nowrap;
		margin: auto;
		letter-spacing: 0.15em;
		margin-bottom: -0.39rem;
		animation:
			typing 3.5s steps(40, end),
			blink-caret 0.75s step-end infinite;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 20%;
		}
	}
</style>
