<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import Stripe from 'stripe';
	import Counter from './Counter.svelte';
	import { destinationObjects } from '../destinations/destinations';
	import { adventureObjects } from './adventures';

	const stripe = new Stripe(
		'secret_stripe_key',
		{ apiVersion: '2022-11-15' },
	);

	const destinations = destinationObjects;
	const adventures = adventureObjects;

	const accommodations = [
		{
			index: 0,
			cost: '$400 UP',
			cycle: '/night',
			img_path: 'images/zanzibar/resort.jpg',
			label: 'Luxury',
			body: "Indulge in the epitome of luxury at some of Tanzania's most prestigious accommodations. Choose from a selection of renowned establishments, including the elegant Gran Melia, the upscale Mount Meru Hotel, and the Four Points by Sheraton. Experience unparalleled comfort, exceptional service, and exquisite amenities that cater to your every desire.",
		},
		{
			index: 1,
			cost: '$200-$400',
			cycle: '/night',
			img_path: 'images/zanzibar/villa.jpg',
			label: 'Mid-range',
			body: 'For those seeking comfort and quality at an affordable price, our mid-range options offer the perfect balance. Experience the serene ambiance of Marera Valley, the rustic charm of Farm of Dreams, the cozy KilimaMoja Hotel, or the Tarangire Simba Lodge. These accommodations provide a comfortable stay, attentive service, and a memorable safari experience.',
		},
		{
			index: 2,
			cost: '$80-$150',
			cycle: '/night',
			img_path: 'images/zanzibar/small_hotel.jpg',
			label: 'Budget',
			body: "Travelers on a tighter budget can still enjoy the wonders of Tanzania with our budget-friendly options. Public campsites in Serengeti, Manyara, Tarangire, and Ngorongoro offer a more affordable way to experience the natural beauty of Tanzania's national parks. While simpler in amenities, these campsites still provide basic facilities and an authentic camping experience.",
		},
	];

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

	function requestTour() {
		const session = stripe.checkout.sessions.create({
			line_items: [
				{
					// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
					price: '{{PRICE_ID}}',
					quantity: 1,
				},
			],
			mode: 'payment',
			success_url: `/kilimanjaro`,
			cancel_url: `/tour`,
		});
	}
</script>

<Header />

<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('images/safari/african_plains_3.jpeg')] bg-cover object-contain bg-top">
	<div class="flex flex-col max-w-lg mx-auto text-center">
		<h1 class="font-bold text-black display-medium">Create Your Own Safari</h1>
		<h1 class="pb-6 text-black">Send Us Your unique safari. We'll Make It Happen.</h1>
		<a class="place-self-center" href="/tour">
			<OutlineButton>
				<h1 class="p-4 title-medium">Explore Safaris</h1>
			</OutlineButton>
		</a>
	</div>
</div>

<!--Trip duration-->
<div class="my-20 xl:mx-48 lg:mx-24 md:mx-12 sm:mx-10 xs:mx-4">
	<div
		class="grid px-6 py-12 text-left divide-x 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 bg-surface-dark/90 rounded-3xl">
		<div class="flex flex-col px-6 py-4">
			<h1 class="headline-medium">Start Date</h1>
			<input
				type="date"
				placeholder="---- / ---- / --------"
				class="flex flex-row items-center p-2 my-auto mr-10 rounded-lg bg-secondary-dark/20 text-primary-light" />
		</div>
		<div class="flex flex-col px-6 py-4">
			<h1 class="headline-medium">End Date</h1>
			<style>
				.date-input {
					@apply bg-secondary-dark/20 rounded-sm text-primary-light p-2;
					placeholder-color: orange;
					color: orange;
				}
			</style>
			<div class="flex flex-row my-auto gap-x-2">
				<input class="w-16 date-input" type="number" placeholder="DD" />
				<input class="w-16 date-input" type="number" placeholder="MM" />
				<input class="w-24 date-input" type="number" placeholder="YYYY" />
				<Icon icon="calendar" height="40" width="40" strokeColor="white" fillColor="none" />
			</div>
			<!--<input
				type="date"
				placeholder="---- / ---- / --------"
				class="flex flex-row p-2 my-auto mr-10 rounded-lg bg-secondary-dark/20 text-primary-light" />-->
		</div>
	</div>
</div>

<!--Group Size-->
<div class="my-20 xl:mx-48 lg:mx-24 md:mx-12 sm:mx-10 xs:mx-4">
	<div class="flex flex-col px-12 py-12 text-left bg-surface-dark/90 rounded-3xl">
		<h1 class="headline-medium">Guests</h1>

		<div class="grid grid-cols-1 space-y-4 lg:grid-cols-4 lg:space-y-0 lg:space-x-9">
			<Counter label="Senior" />
			<Counter label="Adults" />
			<Counter label="Students" />
			<Counter label="Kids" />
		</div>
	</div>
</div>

<!--Accomodation-->
<div class="mx-4 my-20 lg:mx-14 md:mx-8">
	<div class="px-10 py-20 bg-surface-dark/90 card lg:px-20 xl:px-32 2xl:px-40 rounded-3xl">
		<h1 class="pt-6 font-semibold display-large text-primary-dark">Accomodation</h1>
		<h1 class="pb-6 title-small text-primary-dark">
			Select the standard of accommodation you'd like your tour to entail.
		</h1>
		<div
			class="grid-cols-1 md:grid-cols-2 gap-5 card lg:grid-cols-3 xl:grid-cols-3 gap-y-14 items-stretch">
			{#each accommodations as accommodation}
				<button on:click={handleClick(accommodation.index)}>
					<div
						class="relative overflow-hidden rounded-lg shadow-lg card shadow-black bg-black/60 items-start">
						<img
							src={accommodation.img_path}
							alt="Card"
							class="object-cover object-center w-full rounded-lg h-60" />
						<!-- <div class="absolute top-0 left-0 z-10 m-1 rounded-md bg-tertiary-dark">
						<h1 class="p-1 text-left title-medium text-tertiary-on-dark">Popular</h1>
					</div>
					<div class="absolute top-0 right-0 z-10 m-1">
						<button class="relative w-5 h-5 rounded-full bg-outline-dark"> i </button>
					</div> -->
						<div class="gap-3 p-5 card">
							<h3 class="display-small text-primary-dark/80">{accommodation.label}</h3>
							<!--Cost Display-->
							<div class="flex justify-center flex-row text-secondary-dark/80">
								<h1 class="headline-medium">
									{accommodation.cost}
								</h1>
								<p class="body-small pt-4">
									{accommodation.cycle}
								</p>
							</div>
							<p class="body-medium text-primary-dark/60">
								{accommodation.body}
							</p>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<!--Destinations-->
<div class="mx-4 my-20 lg:mx-14 md:mx-8">
	<div class="px-10 py-20 bg-surface-dark/90 card lg:px-20 xl:px-32 2xl:px-40 rounded-3xl">
		<h1 class="pt-6 font-semibold display-large text-primary-dark">Destinations</h1>
		<h1 class="pb-6 title-small text-primary-dark">
			Select the locations you'd like to include in your safari!
		</h1>
		<div
			class="grid-cols-1 md:grid-cols-2 gap-5 card lg:grid-cols-3 xl:grid-cols-3 gap-y-14 items-stretch">
			{#each destinations as { index, label, summary, paragraphs, img_paths }}
				<button on:click={handleClick(index)}>
					<div class="rounded-lg shadow-lg card shadow-black bg-black/60 items-start">
						<img
							src={img_paths[0]}
							alt="Card"
							class="object-cover object-center w-full rounded-lg h-60" />
						<!-- <div class="absolute top-0 left-0 z-10 m-1 rounded-md bg-tertiary-dark">
						<h1 class="p-1 text-left title-medium text-tertiary-on-dark">Popular</h1>
					</div>
					<div class="absolute top-0 right-0 z-10 m-1">
						<button class="relative w-5 h-5 rounded-full bg-outline-dark"> i </button>
					</div> -->
						<div class="gap-3 p-4 card flex flex-col">
							<h3 class="title-large text-primary-dark/80">{label}</h3>

							<p class="body-small text-primary-dark/60 text-justify px-1">
								{summary}
							</p>
							<a href="/destinations/{index}"> Read More... </a>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<!--Additional Adventures-->
<div class="mx-4 my-20 lg:mx-14 md:mx-8">
	<div class="px-10 py-20 bg-surface-dark/90 card lg:px-20 xl:px-32 2xl:px-40 rounded-3xl">
		<h1 class="pt-6 font-semibold display-large text-primary-dark">Additional Adventures</h1>
		<h1 class="pb-6 title-small text-primary-dark">
			Select the additional adventures you'd like to include in your safari!
		</h1>
		<div class="grid-cols-1 md:grid-cols-3 gap-5 card gap-y-14 items-stretch">
			{#each adventures as { label, body, img_path }}
				<button>
					<div class="rounded-lg shadow-lg card items-start shadow-black bg-black/60">
						<img
							src={img_path}
							alt="Card"
							class="object-cover object-center w-full rounded-lg h-60" />
						<!-- <div class="absolute top-0 left-0 z-10 m-1 rounded-md bg-tertiary-dark">
						<h1 class="p-1 text-left title-medium text-tertiary-on-dark">Popular</h1>
					</div>
					<div class="absolute top-0 right-0 z-10 m-1">
						<button class="relative w-5 h-5 rounded-full bg-outline-dark"> i </button>
					</div> -->
						<div class="gap-5 p-6 card">
							<h3 class="title-large text-primary-dark/80">{label}</h3>
							<p class="p-3 body-small text-primary-dark/60">
								{body}
							</p>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<Footer />
