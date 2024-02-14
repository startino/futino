<script lang="ts">
	import { afterUpdate } from 'svelte';
	import Contact from '$lib/UI/Contact.svelte';
	import Hero from '$lib/UI/Hero.svelte';
	import { toast } from 'svelte-sonner';
	$: showModal = false;
	export let form;

	$: showAlert = false;
	afterUpdate(() => {
		if (form?.success || form?.invalid) {
			showAlert = true;
			setTimeout(() => {
				showAlert = false;
			}, 1000);
		}
	});

	$: if (form?.success) {
		toast.success(form.message);
	}

	$: if (form?.invalid) {
		toast.error(form.error);
	}
</script>

<div class="flex flex-col text-white space-y-14 mt-4 lg:space-y-4 mx-auto w-full relative">
	<Hero on:toggleModal={() => (showModal = !showModal)} />
</div>

{#if showModal}
	<div class="modal absolute top-0 left-0 h-full w-full bg-zinc-800/50">
		<Contact on:closeModal={() => (showModal = false)} />
	</div>
{/if}

