<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import ToursSnippet from '$lib/components/organisms/ToursSnippet.svelte';

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
			<h2 class="display-large font-extrabold text-primary-dark">Activities</h2>
			<p class="headline-small text-primary-dark">
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
						<OutlineButton class="self-center mt-auto pt-6">
							<h1 class="title-medium p-2">Book Now</h1>
						</OutlineButton>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<ToursSnippet title="Top Tours in Zanzibar" buttonText="See More" tag="Zanzibar" />

<!--Accomodations Section-->
<section class="section">
	<div class="inner-section">
		<h2 class="text-3xl font-extrabold text-primary-dark">Accomodation</h2>
		<p class="max-w-2xl mx-auto mt-4 text-xl text-primary-dark">
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
						<OutlineButton class="self-center pt-6">
							<h1 class="title-medium p-2">Book Now</h1>
						</OutlineButton>
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
