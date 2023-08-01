<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQ.svelte';

	const routes = [
		{
			label: 'Marangu Route',
			difficulty: 'Easy',
			duration: 1,
			body: "The Marangu Route, also known as the 'Coca-Cola Route', is the most popular route due to its relative ease and shorter duration.",
			img_path: '/images/kilimanjaro/trail_1.jpg',
		},
		{
			label: 'Machame Route',
			difficulty: 'Intermediate',
			duration: 3,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/trail_2.jpg',
		},
	];

	const FAQs = [
		{
			index: 0,
			question: 'What is the best time of year to climb Kilimanjaro?',
			answer:
				'The best time to climb Kilimanjaro is during the dry season, which runs from June to October and January to March. However, it is possible to climb at other times of the year as well.',
		},
		{
			index: 1,
			question: 'What is altitude sickness, and how can I prevent it?',
			answer:
				'Altitude sickness is a condition that can occur when climbing to high altitudes. Symptoms can include headaches, nausea, and dizziness. To prevent altitude sickness, it is important to acclimatize properly and drink plenty of water.',
		},
		{
			index: 2,
			question: 'Is it safe to climb Kilimanjaro?',
			answer:
				'Yes, climbing Kilimanjaro is generally safe as long as you take the necessary precautions and follow the advice of your guides. Our team of experienced guides and porters will ensure your safety throughout the climb.',
		},
		{
			index: 3,
			question: 'What gear and equipment do I need for a Kilimanjaro climb?',
			answer:
				'You will need a range of gear and equipment for your Kilimanjaro climb, including warm clothing, hiking boots, and a sleeping bag. We provide a detailed gear list to all of our climbers to ensure that you have everything you need.',
		},
		{
			index: 4,
			question: 'What is the minimum age requirement for a Kilimanjaro climb?',
			answer:
				'The minimum age for a Kilimanjaro climb is 10 years old. However, we recommend that children be at least 12 years old to ensure that they are physically and mentally prepared for the challenge.',
		},
		{
			index: 5,
			question: 'What is your cancellation policy?',
			answer:
				'Our cancellation policy varies depending on the timing of the cancellation. We recommend that you review our policy before booking your climb, and we are happy to answer any questions you may have.',
		},
	];
</script>

<Header />
<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-kilimanjaro bg-cover object-contain bg-top">
	<div class="flex flex-col max-w-xl mx-auto mt-8 mb-64 text-center space-y-2">
		<h1 class="font-bold text-black display-medium">Climb Africa's Highest Peak</h1>
		<h1 class="pb-6 text-black body-large">
			Experience the adventure of a lifetime on Mount Kilimanjaro
		</h1>

		<div class="mx-auto">
			<OutlineButton>
				<h1 class="p-4 title-medium">Book Your Climb</h1>
			</OutlineButton>
		</div>
	</div>
</div>

<!-- Climbing Experience section -->
<section class="flex flex-col text-center section">
	<div class="mx-auto">
		<div class="grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-6">
			<div class="h-full">
				<img
					src="/images/kilimanjaro/vertical_mountain.jpg"
					alt="Kilimanjaro"
					class="object-contain rounded-lg shadow-lg mb" />
			</div>
			<div
				class="py-10 flex flex-row lg:flex-col gap-2 h-full place-content-between [&>*]:bg-black/60 [&>*]:rounded-lg [&>*]:p-6">
				<div>
					<h2 class="mb-4 font-bold headline-small text-primary-dark">The Climbing Experience</h2>
					<p class="mb-8 text-secondary-dark title-medium">
						Climbing Kilimanjaro is a once-in-a-lifetime experience that requires careful
						preparation and planning. Our team of expert guides and porters will ensure that you
						have a safe and memorable climb to the top of Africa's highest peak.
					</p>
				</div>
				<div>
					<h3 class="mb-4 font-bold headline-small text-primary-dark">Difficulty Level</h3>
					<p class="mb-8 text-secondary-dark title-medium">
						Climbing Kilimanjaro is a challenging trek, but it is accessible to most people with a
						good level of fitness and determination. The level of difficulty varies depending on the
						route and your level of experience.
					</p>
				</div>
				<div>
					<h3 class="mb-4 font-bold headline-small text-primary-dark">Route Options</h3>
					<p class="mb-8 text-secondary-dark title-medium">
						We offer a range of routes to suit your preferences and level of experience. Each route
						has its own unique features and challenges, from the shorter and less strenuous Marangu
						route to the longer and more scenic Lemosho route.
					</p>
				</div>
				<div>
					<h3 class="mb-4 font-bold headline-small text-primary-dark">Duration</h3>
					<p class="mb-8 text-secondary-dark title-medium">
						The duration of the climb depends on the route you choose and your pace. Most climbs
						take between five and nine days to complete, with some routes offering shorter or longer
						options.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Routes section -->
<section class="section">
	<div class="mx-auto">
		<h2 class="mb-8 font-bold text-center display-large text-primary-dark">Routes</h2>
		<div class="grid grid-cols-1 gap-10 mx-10 md:grid-cols-2 lg:grid-cols-2">
			{#each routes as route}
				<div class="bg-surface-dark rounded-lg shadow-lg max-w-2xl">
					<img src={route.img_path} alt="Marangu Route" class="w-full rounded-t-lg" />
					<div class="flex flex-col px-12 py-6">
						<h3 class="mb-2 font-bold headline-medium text-primary-dark">{route.label}</h3>
						<div class="flex flex-col py-3 mx-auto">
							<h1 class="title-large text-primary-dark">Difficulty</h1>
							{#if route.difficulty == 'Easy'}
								<div class="px-6 py-2 my-3 bg-green-500 w-fit rounded-md">
									<h1 class="text-white label-large">NOVICE LEVEL</h1>
								</div>
							{:else if route.difficulty == 'Intermediate'}
								<div class="px-6 py-2 my-3 bg-orange-500 w-fit rounded-md">
									<h1 class="text-white label-large">INTERMEDIATE LEVEL</h1>
								</div>
							{:else if route.difficulty == 'Expert'}
								<div class="px-6 py-4 my-3 bg-red-500 w-fit rounded-md">
									<h1 class="text-white label-large">EXPERT LEVEL</h1>
								</div>
							{/if}
						</div>
						<div class="flex flex-col py-3">
							<h1 class="title-large text-primary-dark">Duration</h1>
							<div class="flex flex-row items-center py-2 gap-x-2 mx-auto">
								{#each { length: route.duration } as i}
									<div class="w-10 h-3 bg-gray-400 rounded-sm">
										<!--This block represents one day :)-->
									</div>
								{/each}
								<h1 class="title-large text-primary-dark">
									{route.duration} Days
								</h1>
							</div>
						</div>

						<p class="py-6 px-12 text-secondary-dark body-large">{route.body}</p>
						<div class="py-6 mx-auto">
							<OutlineButton>
								<h1 class="p-3 title-medium">Learn More</h1>
							</OutlineButton>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<FAQ {FAQs} />

<Footer />
