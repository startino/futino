<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import ToursSnippet from '$lib/components/organisms/ToursSnippet.svelte';
	import ZanzibarPackageCard from './ZanzibarPackageCard.svelte';
	import { addChosenJourney, journeysStore } from '$lib/journeysStore';

	const accomodations = [
		{
			label: 'Beachfront Villa',
			body: 'Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.',
			img_path: '/images/zanzibar/7.webp',
		},
		{
			label: 'All-Inclusive Resort',
			body: 'Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.',
			img_path: '/images/zanzibar/3.webp',
		},
		{
			label: 'Boutique Hotel',
			body: 'Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.',
			img_path: '/images/zanzibar/4.webp',
		},
	];

	const activities = [
		{
			label: 'Snorkeling',
			body: `Plunge into Zanzibar's azure waters for an unforgettable snorkeling escapade. 
			Encounter a vibrant marine realm with lively coral reefs and diverse aquatic creatures, 
			guided by experts. Explore the underwater beauty and create cherished moments in this 
			aquatic haven.`,
			img_path: '/images/zanzibar/5.webp',
		},
		{
			label: 'Kite-surfing',
			body: `Ride the winds and conquer the waves with heart-pounding kite-surfing in Zanzibar.
			 Feel the exhilaration as you harness the power of the wind, propelling yourself across
			  the turquoise waters. Our skilled instructors ensure a thrilling and safe adventure.`,
			img_path: '/images/zanzibar/2.webp',
		},
		{
			label: 'Spice tour',
			body: `Embark on a sensory journey through Tanzania's vibrant culture with our immersive spice tours.
			 Wander through fragrant spice plantations, where you'll engage all your senses in the lush 
			 surroundings. Taste their rich flavors, and connect with the local traditions that have shaped Zanzibar's aromatic heritage.`,
			img_path: '/images/zanzibar/6.webp',
		},
		{
			label: 'Dolphin Tour',
			body: `Embark on a captivating dolphin tour in Zanzibar's pristine waters. 
			Join us for an unforgettable marine encounter as you sail across the Indian Ocean's azure expanse.
			Witness pods of playful dolphins in their natural habitat, gracefully gliding alongside your boat.`,
			img_path: '/images/zanzibar/10.webp',
		},
	];
</script>

<svelte:head>
	<title>Bapta - Zanzibar Beach</title>
	<meta
		name="description"
		content="Explore the breathtaking beauty of Zanzibar Beach: pristine sands, turquoise waters, and vibrant culture. Discover your tropical paradise today." />
</svelte:head>

<!--Hero-->
<section
	class="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-zanzibar bg-cover object-contain bg-center">
	<div class="flex flex-col max-w-2xl mx-auto mt-8 mb-64 text-center space-y-2">
		<h1 class="font-bold text-black display-medium">Escape to Tanzania's Paradise</h1>
		<h1 class="pb-6 body-large text-black">
			Discover the Beauty and Culture of Tanzania's Exotic Island
		</h1>

		<div class="place-self-center">
			<OutlineButton>
				<h1 class="p-4 title-medium">Book Your Holiday</h1>
			</OutlineButton>
		</div>
	</div>
</section>

<!-- Activities section -->
<section class="section">
	<div class="inner-section">
		<div class="">
			<h2 class="headline-large font-extrabold text-primary-dark">Activities</h2>
			<p class="title-medium text-primary-dark">
				Explore a range of activities during your beach holiday in Zanzibar
			</p>
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 my-6 gap-y-12 gap-x-6 justify-items-center items-center">
			{#each activities as { img_path, label, body }}
				<div class="image_card">
					<div class="">
						<img src={img_path} alt={label} class="object-cover w-full h-64 rounded-lg" />
					</div>
					<div
						class="flex flex-col items-center h-full text-surface-on-dark gap-y-3 p-6 shadow-md hover:shadow-lg">
						<h3 class=" font-semibold title-large">
							{label}
						</h3>
						<p class="body-large my-auto">
							{body}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<ToursSnippet
	title="Top Safaris with Zanzibar"
	subtitle="Choose a Safari with a beach extension!"
	buttonText="See All"
	tag="Zanzibar" />

<!--Standalone Zanzibar Packages-->
<section class="section">
	<div class="inner-section flex flex-col text-left gap-4">
		<h2 class="headline-large font-extrabold text-primary-dark">
			Simply looking for a beach holiday? <br /> Bapta has just that.
		</h2>
		<p class="max-w-2xl title-small">
			Specific activities and accommodations are completely up to you. Request a journey and we'll
			get a knowledgable guide to help customize your trip.
		</p>

		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-fit py-4"
			on:click={() => {
				addChosenJourney('zanzibar');
			}}>
			<OutlineButton href="/checkout">
				<h1 class="headline-medium">Request Journey</h1>
			</OutlineButton>
		</div>
	</div>
</section>

<!--Accomodations Section-->
<section class="section">
	<div class="inner-section">
		<h2 class="headline-large font-semibold text-primary-dark">Accomodation</h2>
		<p class="max-w-2xl mx-auto mt-4 title-medium text-primary-dark">
			Explore a range of accomodations during your beach holiday in Zanzibar
		</p>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-8">
			{#each accomodations as accomodation}
				<div class="image_card">
					<div class="">
						<img
							src={accomodation.img_path}
							alt={accomodation.label}
							class="object-cover w-full h-64 rounded-lg" />
					</div>
					<div
						class="flex flex-col p-6 self-stretch gap-y-3 rounded-lg shadow-md hover:shadow-lg text-surface-on-dark">
						<h3 class="title-large font-semibold">
							{accomodation.label}
						</h3>
						<p class=" body-large">
							{accomodation.body}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.image_card {
		@apply max-w-md flex flex-col h-full bg-surface-dark rounded-lg shadow-lg;
	}
</style>
