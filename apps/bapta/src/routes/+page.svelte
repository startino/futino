<script lang="ts">
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import { adventures } from './adventures/adventures';
	import tours from '../lib/components/tsData/tours';
	import ToursSnippet from '$lib/components/organisms/ToursSnippet.svelte';
	import FaqSection from '$lib/components/organisms/FAQSection.svelte';
	import safariFaq from '$lib/components/tsData/safariFaq';

	const testimonials = [
		{
			src: '#',
			img_path: '/images/safari/safari_img(25).jpeg',
			name: 'John Smith',
			body: "Going on an African safari was for me, and the experience exceeded all my expectations! The wildlife was amazing, the landscapes were breathtaking, and the accommodations were comfortable and cozy. I couldn't have asked for a better trip. Thank you!",
		},

		{
			src: '#',
			img_path: '/images/safari/safari_img(26).jpeg',
			name: 'Jane Doe',
			body: "I've always very important to me. But also walks the walk. The guides were knowledgeable and respectful of the animals and their habitats, and the accommodations were eco-friendly and responsible. I would highly recommend this company to anyone looking for an ethical and unforgettable safari experience.",
		},
		{
			src: '#',
			img_path: '/images/safari/safari_img(21).jpeg',
			name: 'Tom Jones',
			body: "As a photographer, I was blown away frican wildlife and landscapes. The company's guides were patient and accommodating, allowing me to take my time to capture the perfect shot. I came away from the safari with some of the best pictures of my life, and memories that will last forever. Thank you for an unforgettable adventure!",
		},
	];

	const why_choose_us = [
		{
			image: '/images/serengeti/4.jpeg',
			title: 'Safe & Hassle-free Travel',
			body: `Travel worry-free with us as your trusted companion. 
			We prioritize your well-being, handling every detail seamlessly – from cozy accommodations to expert guides. 
			With our safety protocols, you're free to fully immerse yourself in Africa's wonders. 
			Embark on an unforgettable safari experience with confidence.`,
		},
		{
			image: '/images/serengeti/2.jpeg',
			title: 'Excellent Customer Service',
			body: `From the moment you inquire about your adventure to the final farewell,
			 our dedicated team is here to cater to your every need. With prompt and attentive communication, 
			  knowledgeable staff, and a genuine passion for creating unforgettable memories, our commitment to excellent 
			  customer service is a testament to the exceptional journey you'll embark upon with us.`,
		},
		{
			image: '/images/serengeti/1.jpeg',
			title: 'Private, Tailormade Safaris',
			body: `We believe in crafting experiences that reflect your individual interests and aspirations. 
			Our dedicated team collaborates closely with you to design a bespoke itinerary that encompasses your 
			preferred destinations, activities, and pace. Whether it's a romantic escape,
			  a family adventure, or a solo expedition, our tailor-made safaris ensure that every moment aligns perfectly with your 
			  vision.`,
		},
	];
</script>

<!-- Hero Section-->
<section
	class="grid justify-center w-full h-screen grid-rows-2 px-10 bg-cover bg-center border-b shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow xl:px-40 pt-60 place-items-center border-secondary-light/40 dark:border-secondary-dark/40 bg-landing_hero">
	<div class="grid space-y-3 text-left justify-items-start">
		<h1 class="font-bold text-primary-dark display-medium">
			A Safari of a Lifetime,<br />
			Memories to Last Forever.
		</h1>
		<h1 class="pb-6 text-left body-large">
			Unleash Your Adventurous Side with Our Unique Safari Experiences in Tanzania.
		</h1>

		<OutlineButton href="#choose_bapta">
			<h1 class="px-4 py-1 title-large">Why Choose Us</h1>
		</OutlineButton>
	</div>
</section>

<!-- Social Proof -->
<section class="shadow-lg bg-surface-variant-light/90 shadow-background-dark">
	<div
		class="grid grid-cols-3 gap-5 px-10 py-10 brightness-125 lg:px-20 xl:px-40 bg-primary-dark/20">
		{#each Array(3) as _, index (index)}
			<div>
				<h1 class="font-bold text-primary-light title-large">★★★★★</h1>
				<!-- <h2 class="italic font-bold text-primary-light title-small">ReviewSite.com</h2> -->
			</div>
		{/each}
	</div>
</section>

<section class="section">
	<div class="inner-section grid grid-cols-1 lg:grid-cols-5 gap-12">
		<div
			class="flex flex-col gap-y-2 lg:col-span-2 justify-items-center items-center lg:items-start lg:justify-items-start lg:text-left">
			<img
				src="/images/safari/safari_img(29).jpeg"
				alt=""
				class="object-cover h-96 lg:h-[400px] xl:h-[500px] w-full object-center rounded-md" />
			<h1 class="font-extrabold display-small md:display-medium">Your Safari Experience</h1>
			<h2 class="body-large max-w-2xl">
				Embark on an extraordinary journey with a Bapta Safari, where you'll immerse yourself in the
				unparalleled beauty of the wild. Traverse through awe-inspiring landscapes, each one more
				breathtaking than the last, while being expertly led by seasoned professionals who are
				passionate about sharing their deep knowledge of Tanzania's hidden gems. Encounter the most
				remarkable and elusive wildlife, observing them in their natural habitats, and let every
				moment etch into your heart, crafting indelible memories destined to be cherished for a
				lifetime.
			</h2>
			<div class="flex flex-row mx-auto lg:mx-0 lg:-ml-3">
				<img src="images/logo/bapta_jeep.png" alt="" class="w-24 h-24 p-4 rounded-full" />
				<div class="flex flex-col justify-center text-left">
					<h3 class="font-semibold body-large">Emmanuel Baptister Kilas</h3>
					<h3 class="font-light body-medium">Creator of Bapta Safari</h3>
				</div>
			</div>
		</div>
		<div
			class="flex flex-col gap-10 lg:col-span-3 items-center justify-items-center lg:items-start h-fit lg:justify-items-start lg:text-left">
			{#each why_choose_us as { image, title, body }}
				<div
					class="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-3 content-around items-center h-full rounded-lg bg-surface-dark">
					<div class="flex flex-col items-center lg:items-start px-3 lg:pl-0 lg:pr-3 py-3 gap-2">
						<h1 class="text-primary-dark headline-small font-semibold">
							{title}
						</h1>
						<h1 class="body-medium max-w-xl">
							{body}
						</h1>
					</div>
					<img
						src={image}
						alt=""
						class="object-cover w-full sm:h-64 md:h-72 lg:h-full object-center rounded-md lg:order-first" />
				</div>
			{/each}
		</div>
	</div>
</section>

<ToursSnippet {tours} title="Top Rated Tours" buttonText="See More" tag="Top Rated" />

<!-- Testimonial Section -->
<section class="section">
	<div class="inner-section">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
			{#each testimonials as testimonial}
				<a
					href={testimonial.src}
					class="transition-all duration-300 rounded-lg p-6 flex flex-col h-full w-full max-w-md text-center items-center bg-surface-dark hover:scale-105 group">
					<!--pfp-->
					<img
						class="w-32 h-32 p-1 m-2 border-2 rounded-full border-primary-dark"
						src={testimonial.img_path}
						alt={testimonial.name} />
					<!--text body-->
					<h1 class="py-1 text-center body-medium text-surface-on-dark">
						{testimonial.body}
					</h1>
					<!--credentials-->
					<div
						class="flex flex-col pt-3 mt-auto justify-self-end h-fit text-secondary-dark transition-all duration-500 group-hover:text-tertiary-dark">
						<h1 class="title-large">
							{testimonial.name}
						</h1>
						<h2 class="body-small">TripAdvisor</h2>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!--Adventure Snippets-->
<section class="section relative z-10">
	<div class="inner-section text-left flex flex-col gap-y-8 items-start md:items-center">
		<div class="flex flex-col md:text-center text-surface-on-dark">
			<h1 class="display-small md:display-large font-bold">Extend Your Safari</h1>
			<h1 class="title-medium md:headline-small font-bold">
				Add a beach stay or hiking adventure to your safari!
			</h1>
		</div>
		{#each adventures as { img_path, label, body, href }, i}
			{#if i % 2 == 0}
				<div class=" adventure-row">
					<img src={img_path} alt="img" class="adventure-thumbnail md:order-last" />
					<div class="flex flex-col md:items-end self-center gap-y-1 md:text-right md:order-first">
						<h1 class="font-semibold headline-large text-primary-dark">
							{label}
						</h1>
						<h2 class="body-large max-w-md">
							{body}
						</h2>

						<OutlineButton {href} class="py-2">
							<h1 class="font-bold title-small">Learn More</h1>
						</OutlineButton>
					</div>
				</div>
			{:else}
				<div class=" adventure-row">
					<img src={img_path} alt="img" class="adventure-thumbnail md:order-first" />
					<div class="flex flex-col items-start self-center gap-y-1">
						<h1 class="font-semibold headline-large text-primary-dark">
							{label}
						</h1>
						<h2 class=" body-large max-w-md">
							{body}
						</h2>

						<OutlineButton {href} class="py-2">
							<h1 class="font-bold title-small">Learn More</h1>
						</OutlineButton>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<!-- CTA to book a tour -->
<section class="section relative z-10">
	<div class="inner-section text-left grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8">
		<div class="flex flex-col gap-y-3">
			<h1 class="font-semibold headline-large text-primary-dark">Find a Tour Today!</h1>
			<h2 class="body-large max-w-xl">
				Browse through our catalogue of tours to find just the one for you! But don't worry if you
				don't find your dream tour, because each tour is fully customizable! Find a tour you love,
				and request a quote!
			</h2>

			<OutlineButton href="/tours" class="py-2">
				<h1 class="font-bold title-small">Find a Tour</h1>
			</OutlineButton>
		</div>
		<img
			src="/images/safari/safari_img(22).jpeg"
			alt="img"
			class="object-cover object-center rounded-md w-full max-w-md" />
	</div>
</section>

<FaqSection faqs={safariFaq} />

<!--About Section-->
<section class="flex flex-col items-center space-y-12 section">
	<div
		class="card max-w-5xl p-10 space-y-6 border rounded-lg shadow-2xl border-primary-dark/50 bg-card-surface-on">
		<h1 class="font-bold text-center display-small">Bapta Safaris</h1>
		<img src="favicon.png" class="rounded-full h-44" alt="logo" />
		<h1 class="text-center body-large max-w-3xl">
			Bapta, founder of Bapta Safaris, is passionate about wildlife conservation. Growing up in
			Tanzania, he started his own safari business to share the beauty and biodiversity of his
			country while supporting local communities and the environment. Growing up in Tanzania, he
			started his own safari business to share the beauty and biodiversity of his country while
			supporting local communities and the environment.
		</h1>
		<OutlineButton href="/about">
			<h1 class="p-2 font-bold title-small">Learn More</h1>
		</OutlineButton>
	</div>

	<!-- CTA to book a tour -->
</section>

<section class="section relative z-10">
	<div class="inner-section text-left grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
		<div class="flex flex-col gap-y-3">
			<h1 class="font-semibold headline-large text-primary-dark">Ready to find a Tour?</h1>
			<h2 class="body-large max-w-xl">
				Browse through our catalogue of tours to find just the one for you! But don't worry if you
				don't find your dream tour, because each tour is fully customizable! Find a tour you love,
				and request a quote!
			</h2>

			<OutlineButton href="/tours" class="py-2">
				<h1 class="font-bold title-small">Find a Tour</h1>
			</OutlineButton>
		</div>
		<img
			src="/images/safari/safari_img(19).jpeg"
			alt="img"
			class="object-cover object-center rounded-md w-full max-w-md" />
	</div>
</section>

<style>
	.image {
		@apply object-cover object-center rounded-md;
	}
	.adventure-thumbnail {
		@apply object-cover object-center w-full h-full rounded-md;
	}
	.adventure-row {
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-10;
	}
</style>
