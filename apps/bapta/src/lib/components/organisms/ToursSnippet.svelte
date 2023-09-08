<script lang="ts">
	import tours, { type Tour } from '../tsData/tours';

	import OutlineButton from '../molecules/OutlineButton.svelte';
	import TourCard from '../molecules/TourCard.svelte';

	export let tag: string = '';

	let sortedTours: Tour[] = [];

	tours.forEach((tour) => {
		if (tour.tags.includes(tag)) {
			sortedTours.push(tour);
		}
	});
</script>

<!--Tours Snippet-->
<section class="flex flex-col items-center gap-4 md:text-center section">
	<div class="place-self-center items-center flex flex-col max-w-7xl">
		<div class="flex flex-col">
			<div class="flex flex-col justify-items-center items-center gap-2 md:gap-8">
				<h1 class="display-large">{$$props.title}</h1>
			</div>
			<h1 class="headline-small">{$$props.subtitle}</h1>
			<h3 class="body-large max-w-xl pt-4 mx-auto">
				* Each Journey here is only a starting point and is fully customizeable after requesting the
				tour.
			</h3>
		</div>

		<div
			class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 overflow-hidden gap-6 py-6">
			{#each sortedTours as tour, i}
				<TourCard {tour} class={i > 2 ? 'xl:hidden' : 'xl:flex'} />
			{/each}
		</div>
		<OutlineButton href="/tours" class="flex pt-6">
			<h1 class="headline-large text-center px-3 py-1">{$$props.buttonText}</h1>
		</OutlineButton>
	</div>
</section>
