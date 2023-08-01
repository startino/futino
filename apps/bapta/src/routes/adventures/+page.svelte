<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	const adventures = [
		{
			name: 'Kilimanjaro',
			description:
				"Climbing Kilimanjaro is a once-in-a-lifetime experience that requires careful preparation and planning. Our team of expert guides and porters will ensure that you have a safe and memorable climb to the top of Africa's highest peak.",
			image: 'images\\kilimanjaro\\kilimanjaro.jpg',
		},
		{
			name: 'Mount Meru',
			description:
				"Climbing Meru is a once-in-a-lifetime experience that requires careful preparation and planning. Our team of expert guides and porters will ensure that you have a safe and memorable climb to the top of Africa's highest peak.",
			image: 'images\\kilimanjaro\\kilimanjaro.jpg',
		},
		{
			name: 'Zanzibar',
			description:
				'Escape to a Tropical Paradise. Relax, unwind and make memories that last a lifetime with our bespoke beach holiday creator to a Tropical Paradise. Relax, unwind.',
			image: 'images\\zanzibar\\zanzibar_beach.jpg',
		},
	];
</script>

<Header />
<div
	class="flex flex-col w-full h-full shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 py-40 justify-center place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('images/serengeti_sunset.jpg')] bg-cover bg-left">
	<h1 class="font-bold text-primary-dark display-medium">Our Curated Adventures!</h1>

	<hr class="w-40 py-4" />

	<div class="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-5">
		{#each adventures as adventure}
			<a class="h-full max-w-xl" href="/adventures/{adventure.name.toLowerCase().replace(' ', '')}">
				<div class="rounded-lg shadow-lg shadow-black bg-black/60 h-full">
					<img
						src={adventure.image}
						alt={adventure.name}
						class="object-cover object-center w-full rounded-lg h-60" />
					<div class="gap-5 p-6">
						<h3 class="title-large text-primary-dark/80">{adventure.name}</h3>
						<p class="p-3 body-small text-primary-dark/60">
							{adventure.description}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<Footer />
