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
			img_path: '/images/safari/21.webp',
			name: 'John Smith',
			body: "Going on an African safari was for me, and the experience exceeded all my expectations! The wildlife was amazing, the landscapes were breathtaking, and the accommodations were comfortable and cozy. I couldn't have asked for a better trip. Thank you!",
		},

		{
			src: '#',
			img_path: '/images/safari/6.webp',
			name: 'Jane Doe',
			body: "I've always very important to me. But also walks the walk. The guides were knowledgeable and respectful of the animals and their habitats, and the accommodations were eco-friendly and responsible. I would highly recommend this company.",
		},
		{
			src: '#',
			img_path: '/images/safari/64.webp',
			name: 'Tom Jones',
			body: "As a photographer, I was blown away frican wildlife and landscapes. The company's guides were patient and accommodating, allowing me to take my time to capture the perfect shot. I came away from the safari with some of the best pictures of my life. Thank you for an unforgettable adventure!",
		},
	];

	const why_choose_us = [
		{
			title: 'Safe & Hassle-free Travel',
			body: `Discover worry-free safaris, meticulously planned for your safety and comfort. 
			Expert guides navigate seamlessly, ensuring a hassle-free journey through wild landscapes
			 and local customs. Our safety protocols provide peace of mind, allowing you to fully enjoy 
			 Africa's wonders. Travel confidently with us for an effortless and secure safari adventure.
			`,
		},
		{
			title: 'Excellent Customer Service',
			body: `From the moment you inquire about your adventure to the final farewell,
			 our dedicated team is here to cater to your every need. With prompt and attentive communication, 
			  knowledgeable staff, and a genuine passion for creating unforgettable memories, our commitment to excellent 
			  customer service is a testament to the exceptional journey you'll embark upon with us.`,
		},
		{
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
	class="grid justify-center w-full h-screen grid-rows-2 px-10 bg-cover bg-bottom border-b shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow xl:px-40 pt-60 place-items-center justify-items-start border-secondary-light/40 dark:border-secondary-dark/40 bg-landing_hero">
	<div class="grid space-y-3 text-left justify-items-start">
		<h1 class="font-bold text-primary-dark display-medium">
			Safari of a Lifetime,<br />
			Memories for Forever.
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

<!-- Introduction section-->
<section class="flex flex-col items-center space-y-12 section">
	<div class="flex flex-col space-y-4 inner-section place-items-center">
		<svg
			class="w-8 h-8 mb-4"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 18 14">
			<path
				d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
		</svg>
		<h2 class="title-large max-w-3xl">
			Embark on an extraordinary journey with a Bapta Safari, where you'll immerse yourself in the
			unparalleled beauty of the wild. Traverse through awe-inspiring landscapes, each one more
			breathtaking than the last, while being expertly led by seasoned professionals who are
			passionate about sharing their deep knowledge of Tanzania's hidden gems. Encounter the most
			remarkable and elusive wildlife, observing them in their natural habitats, and let every
			moment etch into your heart, crafting indelible memories destined to be cherished for a
			lifetime.
		</h2>
		<div class="flex flex-row mx-auto">
			<img src="images/logo/bapta_jeep.png" alt="" class="w-24 h-24 p-4 rounded-full" />
			<div class="flex flex-col justify-center text-left">
				<h3 class="font-semibold body-large">Emmanuel Baptister Kilas</h3>
				<h3 class="font-light body-medium">Creator of Bapta Safari</h3>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Bapta Section-->
<section class="section" id="choose_bapta">
	<div class="inner-section grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
		{#each why_choose_us as { title, body }}
			<div
				class="h-full bg-surface-dark rounded-lg flex flex-col justify-items-center w-full px-3 py-3 gap-2 shadow-lg shadow-surface-dark">
				<h1 class="text-primary-dark headline-large font-semibold justify-self-start">
					{title}
				</h1>
				<h1 class="body-large max-w-md px-2 my-auto pb-2">
					{body}
				</h1>
			</div>
		{/each}
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
					class="transition-all duration-300 rounded-lg p-6 shadow-lg shadow-surface-dark flex flex-col h-full w-full max-w-md text-center items-center bg-surface-dark hover:scale-105 group">
					<!--pfp-->
					<img
						class="w-32 h-32 p-1 m-2 border-2 rounded-full border-primary-dark"
						src={testimonial.img_path}
						alt={testimonial.name} />
					<!--text body-->
					<h1 class="my-auto text-center body-medium text-surface-on-dark">
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
<section class="section relative">
	<div class="inner-section text-left flex flex-col gap-y-12 items-start md:items-center">
		<div class="flex flex-col md:text-center text-surface-on-dark">
			<h1 class="display-large md:display-large pt-6">Extend Your Safari</h1>
			<h1 class="headline-small pb-6">Add a beach stay or hiking adventure to your safari</h1>
		</div>
		{#each adventures as { img_path, label, body, href }, i}
			{#if i % 2 == 0}
				<div class=" adventure-row">
					<img
						src={img_path}
						alt="img"
						height="720"
						width="1280"
						class="adventure-thumbnail md:order-last" />
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
	<div class="inner-section text-left grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
		<div class="flex flex-col gap-y-3 justify-self-start md:justify-self-center">
			<h1 class="font-semibold headline-large text-primary-dark">Let's choose a Safari</h1>
			<h2 class="body-large max-w-md">
				Browse through our catalogue of tours to find just the one for you! But don't worry if you
				don't find your dream tour, because each tour is fully customizable! Find a tour you love,
				and request a quote!
			</h2>

			<OutlineButton href="/tours" class="py-2">
				<h1 class="font-bold title-small">Find a Tour</h1>
			</OutlineButton>
		</div>
		<img
			src="/images/safari/59.webp"
			alt="img"
			class="object-cover object-center rounded-md w-full order-first md:order-last" />
	</div>
</section>

<FaqSection faqs={safariFaq} />

<!--About Section-->
<section class="flex flex-col items-center space-y-12 section">
	<div
		class="card max-w-5xl p-10 space-y-6 border rounded-lg shadow-2xl border-primary-dark/50 bg-card-surface-on">
		<h1 class="font-bold text-center display-small">Bapta Safaris</h1>
		<img src="favicon.webp" class="rounded-full h-44" alt="logo" />
		<h1 class="text-center body-large max-w-3xl">
			Emmanuel Baptister Kilas, founder of Bapta Safaris, is passionate about wildlife conservation.
			Growing up in Tanzania, he started his own safari business to share the beauty and
			biodiversity of his country while supporting local communities and the environment.
		</h1>
		<OutlineButton href="/about">
			<h1 class="p-2 font-bold title-small">Learn More</h1>
		</OutlineButton>
	</div>
</section>

<!-- CTA to book a tour -->
<section class="section relative z-10">
	<div class="inner-section text-left grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
		<div class="flex flex-col gap-y-3 justify-self-start md:justify-self-center">
			<h1 class="font-semibold headline-large text-primary-dark">
				Now, are you ready to find a Safari?
			</h1>
			<h2 class="body-large max-w-md">
				Take your time to explore the variety of tours we offer, each crafted with care to suit
				different tastes and preferences. Can't find exactly what you're looking for? No worries!
				Our tours are flexible and can be customized to create your ideal adventure. Find a tour you
				love, and let's start planning your unforgettable journey!
			</h2>

			<OutlineButton href="/tours" class="py-2">
				<h1 class="font-bold title-small">Find a Tour</h1>
			</OutlineButton>
		</div>
		<img
			src="/images/safari/59.webp"
			alt="img"
			class="object-cover object-center rounded-md w-full order-first md:order-last" />
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
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-2;
	}
</style>
