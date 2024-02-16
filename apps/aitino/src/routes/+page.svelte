<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';

	import { toast } from 'svelte-sonner';

	import FormItem from '$lib/components/FormItem.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { SplitTest } from 'svelte-split-testing';
	import { Toaster } from '$lib/components/ui/sonner';

	export let form;

	let showModal = false;

	const titleVariants = {
		'0': 'Join the Future of AI<br /> with Exclusive Early Access to <span class="bg-gradient-to-b from-primary to-background from-20% bg-clip-text text-transparent">Aitino</span>'
		// '1': 'Create Solutions Like <br /> Never Before with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '2': 'Automate Your Business <br /> with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '3': 'Create teams of  AI Agents <br/> to solve any task.',
		// '4': 'Join the Multi-Agent <br/> Revolution with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '5': 'Join the Future of AI with <br/>  Exclusive Early Access to <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '6': 'Create Solutions Like <br/>  Never Before with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>',
		// '7': 'Automate Your Business <br/>  with <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Aitino</span>'
	};

	const subtitleVariants = {
		'0': 'Aitino is a platform powered by multi-agent LLMs designed to help entrepreneurs and businesses automate tasks and solve complex problems using a node-editor to create teams of AI Agents.'
	};
	$: console.log(showModal);
</script>

<div
	class="pointer-events-none absolute inset-0 h-full w-full bg-inherit bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:150px_150px]"
></div>

<Toaster />

<div
	class="font-roboto container flex h-screen w-screen flex-col justify-center bg-transparent"
>
	<div class="flex h-full flex-col justify-evenly py-6">
		<div
			class="text-foreground relative mx-auto flex flex-col place-items-center gap-y-4 sm:gap-y-8"
		>
			<img src="logo_nobg.png" alt="Aitino Logo" class="h-20 w-20" />
			<h1
				class="tracking-loose m-0 text-center text-3xl font-semibold sm:m-0 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
			>
				<SplitTest key="Title Test" variants={Object.keys(titleVariants)} let:variant>
					{@html titleVariants[0]}
				</SplitTest>
			</h1>

			<h3
				class="text-foreground m-0 mx-auto mt-2 max-w-3xl text-balance text-center text-sm brightness-75 sm:m-0 sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
			>
				<SplitTest key="Subtitle Test" variants={Object.keys(subtitleVariants)} let:variant>
					{@html subtitleVariants[variant]}
				</SplitTest>
			</h3>

			<FormItem class="mt-10" {form} />
		</div>

		{#if showModal}
			<div class="absolute left-0 top-0 h-full w-full bg-zinc-800/50">
				<Contact on:closeModal={() => (showModal = false)} />
			</div>
		{/if}
	</div>
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
