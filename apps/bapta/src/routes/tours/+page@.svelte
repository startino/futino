<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import tours from '../../lib/components/tsData/tours';
	import FAQSection from '$lib/components/organisms/FAQSection.svelte';
	import safariFaq from '$lib/components/tsData/safariFaq';
	import TourCard from '$lib/components/molecules/TourCard.svelte';

	// List of currently selected cards, to be used when submitting and checking if card already in list.
	export let selectedCards: number[] = [];
	const handleClick = (selectedCardIndex: number) => () => addCard(selectedCardIndex);

	// Adds the card with index "selectedCardIndex" if it isn't already in the list.
	function addCard(selectedCardIndex: number) {
		if (selectedCards.includes(selectedCardIndex)) {
			console.log('List already contains item: ' + selectedCardIndex);
		} else {
			selectedCards.push(selectedCardIndex);
			console.log('New List: ' + selectedCards);
		}
	}

	const locations = [
		'All Locations',
		'Zanzibar Beach',
		'Mount Kilimanjaro',
		'Tanzania',
		'Mount Meru',
	];
</script>

<!--Hero-->
<section
	class="w-full h-screen shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-64 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('/images/serengeti/10.jpeg')] bg-cover object-contain bg-top">
	<div class="flex flex-col max-w-lg self-center items-center h-full inner-section">
		<h1 class="font-bold text-black display-medium">Explore Safari Tours</h1>
		<h1 class="pb-6 text-black body-large">Discover Thrilling Adventures in Africa's Wilderness</h1>
		<OutlineButton href="#tours">
			<h1 class="px-4 py-1 title-large">See Tours</h1>
		</OutlineButton>
	</div>
</section>

<!--Tours-->
<section class="section text-left shadow-lg bg-surface-dark" id="tours">
	<div class="flex flex-col gap-8 items-center inner-section">
		<div class="text-center">
			<h1 class="display-large">Safari Tour Packages</h1>
			<h1 class="headline-small">Click on a tour to learn more!</h1>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each tours as tour}
				<TourCard {tour} />
			{/each}
		</div>
	</div>
</section>

<FAQSection faqs={safariFaq} />
