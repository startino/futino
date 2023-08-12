<script lang="ts">
	import tours from '../tsData/tours';

	import OutlineButton from '../molecules/OutlineButton.svelte';
	import TourCard from '../molecules/TourCard.svelte';

	export let tag: string = '';

	const sortedTours = tours.forEach((tour) => {
		tour.tags.includes(tag);
	});
</script>

<!--Tours Snippet-->
<section class="flex flex-col items-center gap-4 md:text-center section bg-surface-dark">
	<div class="place-self-center items-center mx-2 px-2 flex flex-col max-w-7xl">
		<div class="flex flex-col">
			<div class="flex flex-col md:flex-row justify-items-center items-center gap-2 md:gap-8">
				<h1 class="display-large">{$$props.title}</h1>
				<OutlineButton href="/tour" class="hidden md:flex">
					<h1 class="title-large text-center">{$$props.buttonText}</h1>
				</OutlineButton>
			</div>
			<h1 class="headline-small">Click on a tour to learn more!</h1>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-6 px-6 py-6">
			{#each tours as tour, i}
				{#if tour.tags.includes($$props.tag)}
					<TourCard {tour} />
				{/if}
			{/each}
		</div>
		<OutlineButton href="/tour" class="md:hidden flex py-3">
			<h1 class="title-large text-center">{$$props.buttonText}</h1>
		</OutlineButton>
	</div>
</section>
