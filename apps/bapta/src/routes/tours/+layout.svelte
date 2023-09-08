<script lang="ts">
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import { page } from '$app/stores';
	import { journeysStore, addChosenJourney } from '$lib/journeysStore';
	import journeys from '$lib/journeys';

	// Get id from url path.
	let journeyId = $page.url.pathname.slice($page.url.pathname.lastIndexOf('/') + 1);
</script>

<main
	class="py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40">
	<article
		class="text-left prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert prose-main justify-items-center space-y-8 mx-auto">
		<slot />
	</article>
	<div class="fixed bottom-0 w-full left-1/2 -translate-y-1/2 -translate-x-1/2">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- <button
			on:click={handleOnRequestClick}
			class="bg-surface-dark rounded-lg w-72 md:w-96 text-primary-dark">
			<h1 class="display-small">Request Quote</h1>
		</button> -->
		<div
			class="backdrop-blur-xl w-fit mx-auto rounded-lg"
			on:click={() => {
				console.log('on click');
				addChosenJourney(journeyId);
			}}>
			<OutlineButton href="/checkout">
				<h2 class="display-small md:display-medium">Request Quote</h2>
			</OutlineButton>
		</div>
	</div>
</main>

<style>
</style>
