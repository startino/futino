<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';
	import MountPage from '$lib/components/pages/MountPage.svelte';
	import kilimanjaroFaq from '$lib/components/tsData/kilimanjaroFaq';

	const routes = [
		{
			label: 'Marangu Route',
			difficulty: 'Intermediate',
			duration: 1,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/2.webp',
		},
		{
			label: 'Machame Route',
			difficulty: 'Hard',
			duration: 3,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/5.webp',
		},
	];

	const overview_topics = [
		{
			label: 'The Climbing Experience',
			body: "Climbing Kilimanjaro is a once-in-a-lifetime experience that requires careful preparation and planning. Our team of expert guides and porters will ensure that you have a safe and memorable climb to the top of Africa's highest peak.",
		},
		{
			label: 'Difficulty Level',
			body: 'Climbing Kilimanjaro is a challenging trek, but it is accessible to most people with a good level of fitness and determination. The level of difficulty varies depending on the route and your level of experience.',
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

<svelte:head>
	<title>Bapta - Climbing Kilimanjaro</title>
	<meta
		name="description"
		content="Reach new heights by climbing Africa's highest mountain. We offer fully customizable routes for all levels of difficulty." />
</svelte:head>

<MountPage
	hero_header="Climb Africa's Highest Peak"
	hero_subtitle="Reach New Heights on Africa's Iconic Summit"
	hero="bg-kilimanjaro"
	{routes}
	FAQs={kilimanjaroFaq}
	{overview_topics} />
