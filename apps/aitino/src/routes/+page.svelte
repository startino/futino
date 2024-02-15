<script lang="ts">
	import { afterUpdate } from 'svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { toast } from 'svelte-sonner';
	import Button from '$lib/components/ui/button/button.svelte';

	export let form;

	let showModal = false;

	$: console.log(showModal);

	$: showAlert = false;

	$: if (form?.success) {
		toast.success(form.message);
	}

	$: if (form?.invalid) {
		toast.error(form.error);
	}
</script>

<Button
	class="ml-auto block max-w-sm text-base self-start"
	on:click={() => {
		showModal = !showModal;
		console.log('sdfs');
	}}>Contact Us</Button
>

<Hero />

{#if showModal}
	<div class="absolute left-0 top-0 h-full w-full bg-zinc-800/50">
		<Contact on:closeModal={() => (showModal = false)} />
	</div>
{/if}
