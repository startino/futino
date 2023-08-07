<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQ.svelte';
	import MountPage from '$lib/components/organisms/MountPage.svelte';

	const routes = [
		{
			label: 'Marangu Route',
			difficulty: 'Easy',
			duration: 1,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/trail_1.jpg',
		},
		{
			label: 'Machame Route',
			difficulty: 'Intermediate',
			duration: 3,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/trail_2.jpg',
		},
		{
			label: 'Machame Route',
			difficulty: 'Easy',
			duration: 3,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/trail_2.jpg',
		},
		{
			label: 'Machame Route',
			difficulty: 'Expert',
			duration: 3,
			body: "The Machame Route, also known as the 'Whiskey Route', the Machame Route, is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/trail_2.jpg',
		},
	];

	const FAQs = [
		{
			index: 0,
			question: 'What is the best time of year to climb Meru?',
			answer:
				'The best time to climb Meru is during the dry season, which runs from June to October and January to March. However, it is possible to climb at other times of the year as well.',
		},
		{
			index: 1,
			question: 'What is altitude sickness, and how can I prevent it?',
			answer:
				'Altitude sickness is a condition that can occur when climbing to high altitudes. Symptoms can include headaches, nausea, and dizziness. To prevent altitude sickness, it is important to acclimatize properly and drink plenty of water.',
		},
		{
			index: 2,
			question: 'Is it safe to climb Meru?',
			answer:
				'Yes, climbing Meru is generally safe as long as you take the necessary precautions and follow the advice of your guides. Our team of experienced guides and porters will ensure your safety throughout the climb.',
		},
		{
			index: 3,
			question: 'What gear and equipment do I need for a Meru climb?',
			answer:
				'You will need a range of gear and equipment for your Meru climb, including warm clothing, hiking boots, and a sleeping bag. We provide a detailed gear list to all of our climbers to ensure that you have everything you need.',
		},
		{
			index: 4,
			question: 'What is the minimum age requirement for a Meru climb?',
			answer:
				'The minimum age for a Meru climb is 10 years old. However, we recommend that children be at least 12 years old to ensure that they are physically and mentally prepared for the challenge.',
		},
		{
			index: 5,
			question: 'What is your cancellation policy?',
			answer:
				'Our cancellation policy varies depending on the timing of the cancellation. We recommend that you review our policy before booking your climb, and we are happy to answer any questions you may have.',
		},
	];

	const overview_topics = [
		{
			label: 'The Climbing Experience',
			body: "Climbing Meru is a once-in-a-lifetime experience that requires careful preparation and planning. Our team of expert guides and porters will ensure that you have a safe and memorable climb to the top of Africa's highest peak.",
		},
		{
			label: 'Difficulty Level',
			body: 'Climbing Meru is a challenging trek, but it is accessible to most people with a good level of fitness and determination. The level of difficulty varies depending on the route and your level of experience.',
		},
		{
			label: 'Route Options',
			body: 'We offer a range of routes to suit your preferences and level of experience. Each route has its own unique features and challenges, from the shorter and less strenuous Marangu route to the longer and more scenic Lemosho route.',
		},
		{
			label: 'Duration',
			body: 'The duration of the climb depends on the route you choose and your pace. Most climbs take between five and nine days to complete, with some routes offering shorter or longer options.',
		},
	];
</script>

<Header />
<MountPage
	hero_header="Ascending the Peak of Mount Meru"
	hero_subtitle="Embark on a Captivating Trek to Tanzania's Second Highest Summit"
	{routes}
	{FAQs}
	{overview_topics} />

<Footer />
