<script lang="ts">
	import FormItem from '$lib/UI/FormItem.svelte';
	import { afterUpdate } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { invalidateAll } from '$app/navigation';
	import Contact from '$lib/UI/Contact.svelte';
	import Hero from '$lib/UI/Hero.svelte';
	$: showModal = false;
	export let form;
	$: console.log(showModal);

	$: showAlert = false;
	afterUpdate(() => {
		if (form?.success || form?.invalid) {
			showAlert = true;
			setTimeout(() => {
				showAlert = false;
			}, 1000);
		}
	});
</script>

<div class="flex flex-col text-white space-y-14 mt-4 lg:space-y-4 mx-auto w-full relative">
	<Hero on:toggleModal={() => (showModal = !showModal)}/>
</div>

{#if showModal}
	<div class="modal absolute top-0 left-0 h-full w-full bg-zinc-800/50">
		<Contact on:closeModal={() => (showModal = false)} />
	</div>
{/if}

{#if showAlert}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		style="position: fixed; bottom: 4rem; right: 4rem; z-index: 50; transform: translateY(0); transition: transform 0.3s;"
		class="{form?.success
			? 'text-white bg-[#44dea4] animate-none'
			: 'text-white bg-red-500'} p-4 rounded-md shadow-md animate-pulse"
		on:click={() => (invalidateAll(), (showAlert = false))}
	>
		<p class="text-base">{form?.success ? form.message : form?.error}</p>
	</div>
{/if}

<style>
	@keyframes glowing {
		0% {
			box-shadow: 0 0 5px rgba(6, 92, 33, 0.8);
			transition: box-shadow 3s ease-in;
		}
		100% {
			box-shadow: 0 0 20px rgba(0, 255, 102, 0.8);
			transition: box-shadow 3s ease-out;
		}
	}

	.element {
		animation: glowing 2s infinite;
	}
</style>
