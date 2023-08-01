<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
</script>

<Header />

<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-about bg-cover object-contain bg-top">
	<div class="flex flex-col max-w-2xl mx-auto mt-8 mb-64 text-center space-y-2">
		<h1 class="font-bold text-primary-dark display-medium">Discover Tanzania With Bapta</h1>
		<h1 class="pb-6 text-white body-large">Experience the Adventure of a Lifetime</h1>

		<div class="mx-auto">
			<OutlineButton>
				<h1 class="p-4 title-medium">Contact Us</h1>
			</OutlineButton>
		</div>
	</div>
</div>

<!-- Our Mission section -->
<section class="section">
	<div class="my-6 mx-2">
		<div class="p-6 mx-auto text-center max-w-7xl rounded-xl bg-surface-dark">
			<h2 class="font-semibold display-large text-primary-dark">Our Mission</h2>
			<p class="py-3 text-white body-medium">
				At Our Company, we believe in responsible tourism that respects local communities, cultures,
				and environments. We are committed to sustainable development and conservation, and work
				closely with local organizations and initiatives to ensure that our trips have a positive
				impact on the places we visit. We believe that travel is not only a way to explore new
				places, but also a way to connect with people and learn about different ways of life. We are
				dedicated to providing authentic travel experiences that immerse our clients in the local
				culture and give them a deeper understanding of the places they visit.
			</p>
			<img
				src="images\safari\safari_img(9).jpeg"
				alt=""
				class="object-cover w-full rounded-xl h-96" />
		</div>
	</div>
</section>

<!-- Our Team section -->
<section class="py-12 bg-surface-variant-dark">
	<div class="grid grid-cols-1 lg:grid-cols-2 lg:text-left mx-8 text-center gap-y-5">
		<!--Our Team Passage and group photo. Left -->
		<div class="flex flex-col lg:pr-12">
			<h1 class="display-large text-surface-variant-on-dark">Our Team</h1>
			<p class="py-3 body-medium text-surface-variant-on-dark">
				Bapta, founder of Bapta Safaris, is passionate about wildlife conservation. Growing up in
				Tanzania, he started his own safari business to share the beauty and biodiversity of his
				country while supporting local communities and he started his own safari business to share
				the beauty the environment country while supporting country while supporting own safari
				business.
			</p>
			<img
				src="images\safari\safari_img(25).jpeg"
				alt=""
				class="object-cover w-full rounded-xl h-52 lg:h-64" />
		</div>
		<!--Employees Grid. Right-->
		<div class="grid grid-cols-2 md:grid-cols-3 gap-x-3">
			{#each Array(6) as employee}
				<button class="relative w-32 h-32 lg:w-40 lg:h-40 bg-black card-zoom rounded-xl group">
					<div class="card-zoom-image">
						<img src="/images/safari/safari_img(29).jpeg" alt="" class="" />
					</div>
					<h1 class="p-6 font-bold text-center headline-small card-zoom-text">
						Emmanuel Baptister
					</h1>
				</button>
			{/each}
		</div>
	</div>
</section>

<Footer />

<style>
	.card-zoom {
		@apply relative flex items-center bg-surface-dark justify-center place-self-center m-2 overflow-hidden shadow-xl rounded-2xl;
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
