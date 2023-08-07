<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';

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
	const tours = [
		{
			id: 0,
			name: '0 Day Awesome Dude Camp',
			parks: 'Tarangire, Western Serengeti, Ngorongoro Crater & Lake Manyara',
		},
		{
			id: 1,
			name: '1 Day Awesome Dude Camp',
			parks: 'Tarangire, Western Serengeti, Ngorongoro Crater & Lake Manyara',
		},
		{
			id: 2,
			name: '2 Day Awesome Dude Camp',
			parks: 'Tarangire, Western Serengeti, Ngorongoro Crater & Lake Manyara',
		},
		{
			id: 3,
			name: '3 Day Awesome Dude Camp',
			parks: 'Tarangire, Ngorongoro Crater & Lake Manyara',
		},
		{
			id: 4,
			name: '4 Day Awesome Dude Camp',
			parks: 'Tarangire, Western Serengeti, Lake Manyara',
		},
	];
</script>

<Header />

<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-80 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('/images/safari/african_plains_3.jpeg')] bg-cover object-contain bg-top">
	<div class="flex flex-col max-w-lg self-center items-center h-full mx-auto text-center">
		<h1 class="font-bold text-black display-medium">Tanzanian Tours</h1>
		<h1 class="pb-6 text-black body-large">Plan Your Journey Of a Lifetime</h1>
		<OutlineButton href="#tours">
			<h1 class="px-4 py-1 title-large">See Tours</h1>
		</OutlineButton>
	</div>
</div>

<!--Tours-->
<div class="mx-4 my-12 md:my-24 lg:my-32 lg:mx-14 md:mx-8 text-left" id="tours">
	<div class="flex flex-col gap-8">
		<h1 class="display-large text-center">Safari Tours</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each tours as { id, name, parks }}
				<div
					class="flex flex-col h-full transition-all hover:scale-105 place-items-center my-3 max-w-xl rounded-lg shadow-lg shadow-black bg-black/60 hover:cursor-pointer">
					<img
						src="images/safari/safari_img(7).jpeg"
						class="h-44 w-full object-cover object-center rounded-t"
						alt="" />
					<!--Title and parks-->
					<div class="rounded-b flex flex-col py-4 px-6">
						<h1 class="headline-small">{name}</h1>
						<h1 class="body-large">
							{parks}
						</h1>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<Footer />
