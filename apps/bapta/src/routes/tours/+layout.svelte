<script lang="ts">
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import { addChosenJourney } from '$lib/journeysStore';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let journeyId: string | null;

	// Get id from url path.
	onMount(() => {
		journeyId = window.location.pathname.split('/').pop();
		console.log(journeyId);
	});
</script>

<main class="border-b border-primary/40 px-4 py-40 shadow-2xl sm:px-6 md:px-8">
	<article
		class="prose-main prose prose-sm prose-invert mx-auto justify-items-center space-y-8 text-left md:prose-base lg:prose-lg xl:prose-xl"
	>
		<slot />
	</article>
	<div class="fixed bottom-6 left-1/2 w-full -translate-x-1/2 lg:bottom-10">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- <button
			on:click={handleOnRequestClick}
			class="bg-surface rounded-lg w-72 md:w-96 text-primary">
			<h1 class="display-small">Request Quote</h1>
		</button> -->
		<button
			class="mx-auto w-fit rounded-lg backdrop-blur-xl"
			on:click={() => {
				if (!journeyId) {
					console.error('No journey id found');
					return;
				}
				addChosenJourney(journeyId);
				goto('/request-tour');
			}}
		>
			<OutlineButton>
				<h2 class="display-small md:display-medium">Request Quote</h2>
			</OutlineButton>
		</button>
	</div>
</main>

<style>
</style>
