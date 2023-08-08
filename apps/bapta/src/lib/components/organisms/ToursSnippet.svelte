<script>
	import { tours } from '../tsData/tours';

	import OutlineButton from '../molecules/OutlineButton.svelte';
	import TourCard from '../molecules/TourCard.svelte';
</script>

<!--Tours Snippet-->
<section class="flex flex-col items-start gap-4 text-left section bg-surface-dark">
	<div class="text-left mx-2 flex flex-col">
		<div class="flex flex-row items-center gap-2 md:gap-8">
			<h1 class="display-medium">{$$props.title}</h1>
			<OutlineButton href="/tour">
				<h1 class="title-large text-center">{$$props.buttonText}</h1>
			</OutlineButton>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 overflow-hidden gap-6 py-6 px-6">
			{#each tours as tour, i}
				{#if tour.tags.includes($$props.tag)}
					<TourCard {tour} />
				{/if}
			{/each}
		</div>
	</div>
</section>
