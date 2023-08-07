<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQ.svelte';
	import MountPage from '$lib/components/pages/MountPage.svelte';
	import mountMeruFaqData from '$lib/components/mountMeruFaq';

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
	FAQs={mountMeruFaqData}
	{overview_topics} />

<Footer />
