<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';

	const accomodations = [
		{
			label: 'Beachfront Villa',
			body: 'Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.',
			img_path: '/images/zanzibar/villa.jpg',
		},
		{
			label: 'All-Inclusive Resort',
			body: 'Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.',
			img_path: '/images/zanzibar/resort.jpg',
		},
		{
			label: 'Boutique Hotel',
			body: 'Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.',
			img_path: '/images/zanzibar/small_hotel.jpg',
		},
	];

	const activities = [
		{
			label: 'Snorkeling',
			body: 'Feel the rush of wind and water as you glide across the waves on a kite-surfing adventure',
			img_path: '/images/zanzibar/snorkeling.jpg',
		},
		{
			label: 'Kite-surfing',
			body: 'Feel the rush of wind and water as you glide across the waves on a kite-surfing adventure',
			img_path: '/images/zanzibar/kite_surfing.jpg',
		},
		{
			label: 'Spice tour',
			body: "Visit local spice farms and learn about the history and culture of Zanzibar's spice trade",
			img_path: '/images/zanzibar/spice_farm.jpg',
		},
	];
</script>

<Header />

<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-zanzibar bg-cover object-contain bg-center">
	<div class="flex flex-col max-w-2xl mx-auto mt-8 mb-64 text-center space-y-2">
		<h1 class="font-bold text-black display-medium">Escape to a Tropical Paradise</h1>
		<h1 class="pb-6 body-large text-black">Experience the ultimate beach holiday</h1>

		<div class="place-self-center">
			<OutlineButton>
				<h1 class="p-4 title-medium">Book Your Holiday</h1>
			</OutlineButton>
		</div>
	</div>
</div>

<!-- Activities section -->
<section class="py-16 border-b-2 shadow-xl border-primary-dark">
	<div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold text-primary-dark">Activities</h2>
			<p class="max-w-2xl mx-auto mt-4 text-xl text-primary-dark">
				Explore a range of activities during your beach holiday in Zanzibar
			</p>
		</div>
		<div class="grid grid-cols-3 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
			{#each activities as activity}
				<div
					class="flex flex-col place-content-between bg-surface-dark rounded-lg shadow-md hover:shadow-lg">
					<img
						class="object-cover w-full h-64 rounded-t-lg"
						src={activity.img_path}
						alt="Snorkeling" />
					<div class="p-6">
						<h3 class="text-lg font-medium text-surface-on-dark">{activity.label}</h3>
						<p class="mt-2 text-surface-on-dark">
							{activity.body}
						</p>
						<div class="pt-12 mx-auto w-fit">
							<OutlineButton><h1 class="title-medium p-2">Learn More</h1></OutlineButton>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!--Accomodations Section-->
<section class="py-16">
	<div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold text-primary-dark">Accomodation</h2>
		<p class="max-w-2xl mx-auto mt-4 text-xl text-primary-dark">
			Explore a range of accomodations during your beach holiday in Zanzibar
		</p>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-8">
			{#each accomodations as accomodation}
				<div class="">
					<div class="my-3">
						<img
							src={accomodation.img_path}
							alt={accomodation.label}
							class="object-cover w-full h-64 rounded-lg" />
					</div>
					<div
						class="flex flex-col place- p-6 bg-surface-dark rounded-lg shadow-md hover:shadow-lg">
						<h3 class="py-3 font-bold text-display-medium text-surface-on-dark">
							{accomodation.label}
						</h3>
						<p class="py-3 text-surface-on-dark text-body">
							{accomodation.body}
						</p>
						<div class="pt-5 w-fit mx-auto self-end">
							<OutlineButton><h1 class="title-medium p-2">Book Now</h1></OutlineButton>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<Footer />
