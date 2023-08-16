<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
</script>

<svelte:head>
	<title>Bapta - Contact Us</title>
	<meta
		name="description"
		content="Connect with Bapta to learn about Tanzanian Safaris, Climbing Kilimanjaro, and FAQs relating to both." />
</svelte:head>

<!--Hero-->
<div
	class="object-contain w-full h-screen grid-rows-2 px-10 bg-center bg-cover border-b shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow lg:px-20 xl:px-40 pt-60 place-items-center border-secondary-light/40 dark:border-secondary-dark/40 bg-about">
	<div class="flex flex-col items-center max-w-2xl mx-auto mt-8 mb-64 space-y-2">
		<h1 class="font-bold text-primary-dark display-medium">Discover Tanzania With Bapta</h1>
		<h1 class="pb-6 text-white body-large">Experience the Adventure of a Lifetime</h1>

		<OutlineButton href="/contact" class="py-2">
			<h1 class="px-4 py-1 title-large">Contact Us</h1>
		</OutlineButton>
	</div>
</div>

<!-- Our Mission section -->
<section class="section">
	<div class="my-6 inner-section">
		<div class="flex flex-col items-center w-full p-6 mx-auto rounded-xl">
			<div class="grid items-center grid-cols-1 md:grid-cols-2 gap-y-3 md:flex-row gap-x-3">
				<img
					src="/images/safari/43.webp"
					alt=""
					class="object-cover object-center h-full rounded-md w-fit md:h-full" />
				<div class="flex flex-col items-center self-center h-fit">
					<h2 class="font-semibold display-large text-primary-dark">Our Mission</h2>
					<p class="max-w-lg px-3 py-3 body-medium">
						At Our Company, we believe in responsible tourism that respects local communities,
						cultures, and environments. We are committed to sustainable development and
						conservation, and work closely with local organizations and initiatives to ensure that
						our trips have a positive impact on the places we visit. We believe that travel is not
						only a way to explore new places, but also a way to connect with people and learn about
						different ways of life. We are dedicated to providing authentic travel experiences that
						immerse our clients in the local culture and give them a deeper understanding of the
						places they visit.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Team section -->
<section class="section">
	<div class="grid grid-cols-1 text-center md:grid-cols-2 gap-y-5 inner-section">
		<!--Our Team Passage and group photo. Left -->
		<div class="flex flex-col items-center md:pr-12">
			<h1 class="display-large text-primary-dark font-bold">Our Team</h1>
			<p class="py-3 body-medium text-surface-variant-on-dark">
				Bapta, founder of Bapta Safaris, is passionate about wildlife conservation. Growing up in
				Tanzania, he started his own safari business to share the beauty and biodiversity of his
				country while supporting local communities and he started his own safari business to share
				the beauty the environment country while supporting country while supporting own safari
				business.
			</p>
			<img
				src="/images/safari/30.webp"
				alt=""
				class="object-cover h-64 my-8 w-fit sm:h-72 md:h-80 rounded-lg md:mb-0" />
		</div>
		<!--Employees Grid. Right-->
		<div class="grid grid-cols-3 gap-3 md:grid-cols-2 xl:grid-cols-3 place-items-center">
			{#each Array(6) as employee}
				<button
					class="relative w-28 h-28 bg-black sm:w-36 sm:h-36 md:w-40 md:h-40 card-zoom rounded-sm group">
					<div class="card-zoom-image">
						<img src="/images/safari/51.webp" alt="" class="" />
					</div>
					<h1 class="p-6 font-bold text-center title-medium sm:title-large card-zoom-text">
						Emmanuel Baptister
					</h1>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.card-zoom {
		@apply relative flex items-center bg-surface-dark justify-center place-self-center m-2 overflow-hidden shadow-xl rounded-lg;
	}
	.card-zoom-image {
		@apply absolute w-full h-full transition-all duration-700 scale-125 ease-in-out opacity-40 transform bg-center bg-cover;
	}
	.card-zoom-text {
		@apply absolute transition-all duration-700 ease-in-out transform scale-100 opacity-70;
	}
	.card-zoom:hover .card-zoom-image {
		@apply scale-100 opacity-90;
	}
	.card-zoom:hover .card-zoom-text {
		@apply scale-110 opacity-100;
	}
</style>
