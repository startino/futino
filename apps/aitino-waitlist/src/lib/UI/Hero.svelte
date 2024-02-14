<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import FormItem from './FormItem.svelte';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export function toggleModal() {
		dispatch('toggleModal');
	}
</script>

<h1 class="text-2xl md:text-3xl lg:text-7xl text-center">
	Join The Waitlist For Early Access To <span class="text-[#45dfa4] border-none">AITINO </span>
</h1>

<p class="text-center text-lg my-8">
	<span class="text-[#45dfa4]">Aitino </span> is a SaaS platform powered by multi-agent LLMs designed
	to help entrepreneurs and businesses automate tasks and solve complex problems.
</p>

<FormItem />

<Button
	class="block lg:absolute lg:-bottom-1/4 lg:right-6 text-base bg-purple-600 md:absolute md:bottom-0 md:-right-8  hover:bg-[#003825] "
	on:click={() => toggleModal()}>Contact Us</Button
>
