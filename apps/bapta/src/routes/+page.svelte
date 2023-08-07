<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import { adventures } from './tour/adventures';

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
		{
			src: '#',
			img_path: '/images/safari/safari_img(25).jpeg',
			name: 'John Smith',
			body: "Going on an African safari was for me, and the experience exceeded all my expectations! The wildlife was amazing, the landscapes were breathtaking, and the accommodations were comfortable and cozy. I couldn't have asked for a better trip. Thank you!",
		},
		{
			src: '#',
			img_path: '/images/safari/safari_img(21).jpeg',
			name: 'Tom Jones',
			body: "As a photographer, I was blown away frican wildlife and landscapes. The company's guides were patient and accommodating, allowing me to take my time to capture the perfect shot. I came away from the safari with some of the best pictures of my life, and memories that will last forever. Thank you for an unforgettable adventure!",
		},
		{
			src: '#',
			img_path: '/images/safari/safari_img(26).jpeg',
			name: 'Jane Doe',
			body: "I've always very important to me. But also walks the walk. The guides were knowledgeable and respectful of the animals and their habitats, and the accommodations were eco-friendly and responsible. I would highly recommend this company to anyone looking for an ethical and unforgettable safari experience.",
		},
	];
</script>

<Header />
<div
	class="grid justify-center w-full h-screen grid-rows-2 px-10 bg-left bg-cover border-b shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow xl:px-40 pt-60 place-items-center border-secondary-light/40 dark:border-secondary-dark/40 bg-landing_hero">
	<div class="grid space-y-3 text-left justify-items-start">
		<h1 class="font-bold text-primary-dark display-medium">
			A Safari of a Lifetime,<br />
			Memories to Last Forever.
		</h1>
		<h1 class="pb-6 text-left body-large">
			Unleash Your Adventurous Side with Our Unique Safari Experiences in Tanzania.
		</h1>

		<OutlineButton href="/tour">
			<h1 class="px-4 py-1 title-large">Find Your Tour</h1>
		</OutlineButton>
	</div>
</div>

<!-- Social Proof -->
<section class="shadow-lg bg-surface-variant-light shadow-background-dark">
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
	<div class="flex flex-col space-y-4 max-w-7xl">
		<h1 class="font-extrabold display-large">Your Safari Experience</h1>
		<h2 class="body-large max-w-2xl">
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
				<h3 class="font-semibold body-large">Emmanuel Baptist</h3>
				<h3 class="font-light body-medium">Creator Of Bapta Safari</h3>
			</div>
		</div>
	</div>
</section>

<!--Adventure Snippets-->
<section class="flex flex-col items-center gap-4 space-y-1 text-left section bg-surface-dark">
	{#each adventures as { img_path, label, body, href }, i}
		{#if i % 2 == 0}
			<div
				class="flex flex-col justify-items-start items-center gap-6 md:text-right md:justify-items-end md:flex-row-reverse">
				<img
					src={img_path}
					alt="img"
					class="object-cover object-center rounded-md w-fit md:max-w-md lg:max-w-2xl xl:max-w-3xl" />
				<div class="flex flex-col md:max-w-xs gap-y-1">
					<h1 class="h-full font-semibold headline-large text-primary-dark">
						{label}
					</h1>
					<h2 class="body-large mx-auto max-w-lg">
						{body}
					</h2>

					<OutlineButton {href} class="py-2 md:self-end">
						<h1 class="font-bold title-small">Learn More</h1>
					</OutlineButton>
				</div>
			</div>
		{:else}
			<div class="flex flex-col items-center gap-6 md:flex-row">
				<img
					src={img_path}
					alt="img"
					class="object-cover object-center rounded-md w-fit md:max-w-md lg:max-w-2xl xl:max-w-3xl" />
				<div class="flex flex-col md:max-w-xs gap-y-1">
					<h1 class="font-semibold text-left headline-large text-primary-dark">
						{label}
					</h1>
					<h2 class="max-w-lg mx-auto text-left body-large">
						{body}
					</h2>

					<OutlineButton {href} class="py-2">
						<h1 class="font-bold title-small">Learn More</h1>
					</OutlineButton>
				</div>
			</div>
		{/if}
	{/each}
</section>

<!--Testimonials Section-->
<section class="section">
	<div class="flex flex-col items-center">
		<div class="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 max-w-7xl">
			{#each testimonials as testimonial}
				<a href={testimonial.src} class="transition-all card hover:scale-105">
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
					<div class="flex flex-col pt-3 mt-auto justify-self-end h-fit">
						<h1 class="text-center title-large text-secondary-dark">
							{testimonial.name}
						</h1>
						<h2 class="body-small text-secondary-dark">TripAdvisor</h2>
					</div>
				</a>
			{/each}
		</div>
		<OutlineButton>
			<h1 class="font-bold title-large">See More...</h1>
		</OutlineButton>
	</div>
</section>

<!--About Section-->
<section class="flex flex-col items-center space-y-12 section bg-black/60">
	<div
		class="flex flex-col items-center max-w-5xl p-10 space-y-6 border rounded-lg shadow-2xl border-primary-dark/50 bg-black/50">
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
</section>

<Footer />
