<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import Wildlife from '$lib/components/organisms/Wildlife.svelte';
	import FaqCard from '$lib/components/molecules/FAQCard.svelte';
	import { adventures } from './tour/adventures';

	const animals = [
		{
			index: 0,
			label: 'Lion',
			body: 'Known as the "king of the jungle," the lion is a majestic and powerful animal',
			media: [
				'/images/safari/safari_img(2).jpeg',
				'/images/safari/safari_img(6).jpeg',
				'/images/safari/safari_img(7).jpeg',
			],
		},
		{
			index: 1,
			label: 'Elephant',
			body: 'Known as the "king of the jungle," the lion is a majestic and powerful animal',
		},
		{
			index: 2,
			label: 'Tiger',
			body: 'Known as the "king of the jungle," the lion is a majestic and powerful animal',
		},
	];

	const staff_members = [
		{
			name: 'Emill Baptest',
			role: 'Tour Guide',
			img_path: '/images/safari/safari_img(25).jpeg',
			body: 'Experience the beauty of the wild on a Bapta Safari. Witness stunning landscapes and unique wildlife up close, while guided by experienced professionals. Discover the secrets of the African savanna, and create unforgettable memories that will last a lifetime.',
		},
		{
			name: 'Emmanuel Baptister',
			role: 'CEO/Founder',
			img_path: '/images/safari/safari_img(29).jpeg',
			body: 'Experience the beauty of the wild on a Bapta Safari. Witness stunning landscapes and unique wildlife up close, while guided by experienced professionals. Discover the secrets of the African savanna, and create unforgettable memories that will last a lifetime.',
		},
		{
			name: 'Emmory Baptist',
			role: 'Tour Guide',
			img_path: '/images/safari/safari_img(25).jpeg',
			body: 'Experience the beauty of the wild on a Bapta Safari. Witness stunning landscapes and unique wildlife up close, while guided by experienced professionals. Discover the secrets of the African savanna, and create unforgettable memories that will last a lifetime.',
		},
	];

	const testimonials = [
		{
			img_path: '/images/safari/safari_img(25).jpeg',
			name: 'John Smith',
			body: "Going on an African safari was for me, and the experience exceeded all my expectations! The wildlife was amazing, the landscapes were breathtaking, and the accommodations were comfortable and cozy. I couldn't have asked for a better trip. Thank you!",
		},
		{
			img_path: '/images/safari/safari_img(26).jpeg',
			name: 'Jane Doe',
			body: "I've always very important to me. But also walks the walk. The guides were knowledgeable and respectful of the animals and their habitats, and the accommodations were eco-friendly and responsible. I would highly recommend this company to anyone looking for an ethical and unforgettable safari experience.",
		},
		{
			img_path: '/images/safari/safari_img(21).jpeg',
			name: 'Tom Jones',
			body: "As a photographer, I was blown away frican wildlife and landscapes. The company's guides were patient and accommodating, allowing me to take my time to capture the perfect shot. I came away from the safari with some of the best pictures of my life, and memories that will last forever. Thank you for an unforgettable adventure!",
		},
		{
			img_path: '/images/safari/safari_img(25).jpeg',
			name: 'John Smith',
			body: "Going on an African safari was for me, and the experience exceeded all my expectations! The wildlife was amazing, the landscapes were breathtaking, and the accommodations were comfortable and cozy. I couldn't have asked for a better trip. Thank you!",
		},
		{
			img_path: '/images/safari/safari_img(21).jpeg',
			name: 'Tom Jones',
			body: "As a photographer, I was blown away frican wildlife and landscapes. The company's guides were patient and accommodating, allowing me to take my time to capture the perfect shot. I came away from the safari with some of the best pictures of my life, and memories that will last forever. Thank you for an unforgettable adventure!",
		},
		{
			img_path: '/images/safari/safari_img(26).jpeg',
			name: 'Jane Doe',
			body: "I've always very important to me. But also walks the walk. The guides were knowledgeable and respectful of the animals and their habitats, and the accommodations were eco-friendly and responsible. I would highly recommend this company to anyone looking for an ethical and unforgettable safari experience.",
		},
	];

	const popularDestinations = [
		{
			img_path: '/images/safari/safari_img(6).jpeg',
			title: 'Serengeti National Park',
			subtitle: 'Home of the Wildebeest Migration',
			description:
				'Is  where largest animal migration exists in the world, over one million wildebeest plus hundreds of thousands of other ungulates engage in a journey of approximately 1,000 kilometers between the two countries of Kenya and Tanzania. This unique vast ecosystem of about 15,000kmsq, is made up of grasslands with scattered trees, rock outcroppings, wetlands and rivers, where these habitats host  a big diversity of large mammals, reptiles,bird species, and Great Migration .Due to abundance of prey species, Serengeti is the world’s largest lion sanctuary,approximately population of 3,000 ',
		},
		{
			img_path: '/images/safari/safari_img(6).jpeg',
			title: 'Ngorongoro Crater',
			subtitle: 'The Eden Garden Of Africa',
			description:
				'Is  where largest animal migration exists in the world, over one million wildebeest plus hundreds of thousands of other ungulates engage in a journey of approximately 1,000 kilometers between the two countries of Kenya and Tanzania. This unique vast ecosystem of about 15,000kmsq, is made up of grasslands with scattered trees, rock outcroppings, wetlands and rivers, where these habitats host  a big diversity of large mammals, reptiles,bird species, and Great Migration .Due to abundance of prey species, Serengeti is the world’s largest lion sanctuary,approximately population of 3,000 ',
		},
		{
			img_path: '/images/safari/safari_img(22).jpeg',
			title: 'Maasai Tribe',
			subtitle: 'The Original Habitants',
			description:
				'Is  where largest animal migration exists in the world, over one million wildebeest plus hundreds of thousands of other ungulates engage in a journey of approximately 1,000 kilometers between the two countries of Kenya and Tanzania. This unique vast ecosystem of about 15,000kmsq, is made up of grasslands with scattered trees, rock outcroppings, wetlands and rivers, where these habitats host  a big diversity of large mammals, reptiles,bird species, and Great Migration .Due to abundance of prey species, Serengeti is the world’s largest lion sanctuary,approximately population of 3,000 ',
		},
		{
			img_path: '/images/safari/safari_img(6).jpeg',
			title: 'Tarangire National Park',
			subtitle: 'Known for Beautiful Wildlife',
			description:
				'Is  where largest animal migration exists in the world, over one million wildebeest plus hundreds of thousands of other ungulates engage in a journey of approximately 1,000 kilometers between the two countries of Kenya and Tanzania. This unique vast ecosystem of about 15,000kmsq, is made up of grasslands with scattered trees, rock outcroppings, wetlands and rivers, where these habitats host  a big diversity of large mammals, reptiles,bird species, and Great Migration .Due to abundance of prey species, Serengeti is the world’s largest lion sanctuary,approximately population of 3,000 ',
		},
	];

	const destinations = [];
</script>

<Header />
<div
	class="grid w-full h-full shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 xl:px-40 pt-60 justify-center place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('images/serengeti_sunset.jpg')] bg-cover bg-left">
	<div class="grid space-y-4 text-left">
		<h1 class="font-bold text-primary-dark display-medium">
			A Safari of a Lifetime,<br />
			Memories to Last Forever.
		</h1>
		<h1 class="pb-6 text-left body-large">
			Unleash Your Adventurous Side with Our Unique Safari Experiences in Tanzania.
		</h1>
		<a href="/tour">
			<OutlineButton>
				<h1 class="p-4 title-medium">Create Your Tour</h1>
			</OutlineButton>
		</a>
	</div>
</div>

<!-- Social Proof -->
<section class="shadow-lg bg-surface-variant-light shadow-background-dark">
	<div
		class="grid-cols-3 gap-5 px-10 py-10 brightness-125 lg:px-20 xl:px-40 card bg-primary-dark/20">
		{#each Array(3) as _, index (index)}
			<div>
				<h1 class="font-bold text-primary-light title-large">★★★★★</h1>
				<!-- <h2 class="italic font-bold text-primary-light title-small">ReviewSite.com</h2> -->
			</div>
		{/each}
	</div>
</section>

<!-- Introduction section-->
<section class="flex flex-col section space-y-12 items-center">
	<div class="flex flex-col space-y-4 max-w-7xl">
		<h1 class="display-large font-extrabold">Your Safari Experience</h1>
		<h2 class="body-large mx-12 lg:mx-24">
			Experience the beauty of the wild on a Bapta Safari. Witness stunning landscapes and unique
			wildlife up close, while guided by experienced professionals. Discover the secrets of the
			African savanna, and create unforgettable memories that will last a lifetime. Experience the
			beauty of the wild on a Bapta Safari. Witness stunning landscapes and unique wildlife up
			close, while guided by experienced professionals. Discover the secrets of the African savanna,
			and create unforgettable memories that will last a lifetime.
		</h2>
		<div class="flex flex-row mx-auto">
			<img src="images/logo/bapta_jeep.png" alt="" class="rounded-full p-4 h-24 w-24" />
			<div class="flex flex-col justify-center text-left">
				<h3 class="body-large font-semibold">Emmanuel Baptist</h3>
				<h3 class="body-medium font-light">Creator Of Bapta Safari</h3>
			</div>
		</div>
	</div>

	<!--Card Section-->
	<!-- <div class="gap-10 px-10 py-10 card max-w-7xl">
		<div class="grid-cols-1 gap-5 card md:grid-cols-3 gap-y-14">
			{#each Array(3) as _, index (index)}
				<div class="rounded-lg shadow-md card shadow-black bg-black/60">
					<img
						src="images/safari/safari_img(6).jpeg"
						alt="Card"
						class="object-cover w-full rounded-lg h-72" />
					<div class="gap-5 p-5 card">
						<h3 class="display-small text-primary-dark/80">Card Title</h3>
						<p class="body-medium text-primary-dark/60">
							Experience the beauty of the wild on a Bapta Safari. Witness stunning landscapes and
							unique wildlife up close, while guided by experienced professionals. Discover the
							secrets of the African savanna, and create unforgettable memories that will last a
							lifetime.
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div> -->
	<!-- <div class="mx-auto w-fit">
		<OutlineButton>
			<h1 class="font-bold headline-small p-4">BOOK A TRIP NOW</h1>
		</OutlineButton>
	</div> -->
</section>
<!-- Most popular destinations-->
<!-- <section class="flex flex-col section space-y-12 items-center">
	<h1 class="font-semibold display-large p-6">Most Popular Destinations</h1>
	<div class="max-w-7xl flex flex-col space-y-6">
		{#each popularDestinations as destination}
			<div class="flex flex-col md:flex-row shadow-lg space-x-4 rounded-lg bg-black/60 max-w-7xl">
				<img
					src={destination.img_path}
					alt="Card"
					class="object-cover w-full md:h-fit md:w-80 rounded-lg" />
				<div class="flex flex-col p-6 text-left">
					<h1 class="display-small font-bold text-primary-dark">{destination.title}</h1>
					<h1 class="headline-medium">{destination.subtitle}</h1>
					<h2 class="body-large pt-4 max-w-3xl">
						{destination.description}
					</h2>
				</div>
			</div>
		{/each}
	</div>
</section> -->

<section class="flex flex-col section bg-surface-dark space-y-12 items-center">
	<!--Zanzibar Holidays snippet-->

	{#each adventures as { img_path, label, body, href }}
		<div class="flex flex-col md:flex-row gap-6 items-center">
			<img src={img_path} alt="img" class="object-cover object-center w-fit md:max-w-4xl" />
			<div class="flex flex-col gap-y-1">
				<h1 class="font-semibold headline-large text-left text-primary-dark">
					{label}
				</h1>
				<h2 class="text-left max-w-xl">
					{body}
				</h2>
				<a {href} class="py-2">
					<OutlineButton>
						<h1 class="font-bold title-small p-2">Learn More</h1>
					</OutlineButton>
				</a>
			</div>
		</div>
	{/each}
</section>

<!--Testimonials Section-->
<section class="section">
	<div class="flex flex-col card">
		<div class="py-10 grid-cols-1 gap-4 card sm:grid-cols-2 lg:grid-cols-3 gap-y-4 max-w-7xl">
			{#each testimonials as testimonial}
				<div class="flex flex-col h-full p-6 rounded-lg bg-black/60 place-items-center">
					<!--pfp-->
					<img
						class="p-1 rounded-full h-32 w-32 border-2 border-primary-dark m-2"
						src={testimonial.img_path}
						alt={testimonial.name} />
					<!--text body-->
					<h1 class="py-1 text-center body-medium text-secondary-on-light">
						{testimonial.body}
					</h1>
					<!--credentials-->
					<div class="flex flex-col pt-3">
						<h1 class="text-center title-large text-primary-dark">
							{testimonial.name}
						</h1>
						<h2 class="body-small text-secondary-dark">TripAdvisor</h2>
					</div>
				</div>
			{/each}
		</div>
		<OutlineButton class="">
			<h1 class="font-bold title-large px-8 py-3">See More</h1>
		</OutlineButton>
	</div>
</section>

<!--About Section-->
<section class="flex flex-col section bg-black/60 space-y-12 items-center">
	<div
		class="max-w-5xl border border-primary-dark/50 rounded-lg shadow-2xl bg-black/50 flex flex-col space-y-6 items-center p-10">
		<h1 class="font-bold text-center display-small">Bapta Safaris</h1>
		<img src="favicon.png" class="rounded-full h-44" alt="logo" />
		<h1 class="text-center body-large">
			Bapta, founder of Bapta Safaris, is passionate about wildlife conservation. Growing up in
			Tanzania, he started his own safari business to share the beauty and biodiversity of his
			country while supporting local communities and the environment. Growing up in Tanzania, he
			started his own safari business to share the beauty and biodiversity of his country while
			supporting local communities and the environment. Bapta, founder of Bapta Safaris, wildlife
			conservation. He started his own safari business to share the beauty and biodiversity of his
			country while supporting local communities and the environment.
		</h1>
		<a href="/about">
			<OutlineButton>
				<h1 class="font-bold title-small p-2">Learn More</h1>
			</OutlineButton>
		</a>
	</div>
</section>
<!--Staff cards-->
<!--Cannot be completed as we do not know the main team size-->
<!-- <div
			class="grid grid-cols-1 gap-y-12 space-content-evenly place-items-center md:grid-cols-1 lg:grid-cols-3">
			{#each staff_members as employee}
				<!Big card (CEO)->
				{#if employee.name == 'Emmanuel Baptister'}
					<div class="border shadow-xl w-80 rounded-xl bg-black/60">
						<img
							src={employee.img_path}
							class="object-cover object-top w-full h-80 rounded-t-xl"
							alt={employee.name} />
						<h1 class="p-6 pb-0 font-bold title-large">{employee.name}</h1>
						<h1 class="pt-0 pb-3 font-semibold text-center title-medium">{employee.role}</h1>
						<h1 class="p-6 pt-3 text-center body-medium">
							Experience the beauty of the wild on a Bapta Safari. Witness stunning landscapes and
							unique wildlife up close, while guided by experienced professionals. Discover the
							secrets of the African savanna, and create unforgettable memories that will last a
							lifetime.
						</h1>
					</div>
					<!Normal Cards->
				{:else}
					<div class="border shadow-xl w-64 rounded-xl mt-44 bg-black/60">
						<img
							src={employee.img_path}
							class="object-cover object-top w-full h-80 rounded-t-xl"
							alt={employee.name} />
						<h1 class="p-6 pb-0 font-bold title-large">{employee.name}</h1>
						<h1 class="p-6 pt-0 pb-3 font-semibold title-medium">{employee.role}</h1>
						<h1 class="p-6 pt-3 body-medium">
							Experience the beauty of the wild on a Bapta Safari. Witness stunning landscapes and
							unique wildlife up close, while guided by experienced professionals. Discover the
							secrets of the African savanna, and create unforgettable memories that will last a
							lifetime.
						</h1>
					</div>
				{/if}
			{/each}
		</div> -->

<Footer />
