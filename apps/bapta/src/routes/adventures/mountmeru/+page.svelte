<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';
	import MountPage from '$lib/components/pages/MountPage.svelte';
	import mountMeruFaq from '$lib/components/tsData/mountMeruFaq';

	const routes = [
		{
			label: 'Momella Route',
			difficulty: 'Intermediate',
			duration: 4,
			body: 'The Momella Route is a popular option for climbing Mount Meru. It offers a moderate level of difficulty and takes around 4 days to complete. This route provides diverse landscapes, including lush forests and alpine meadows.',
			img_path: '/images/kilimanjaro/11.webp',
		},
		{
			label: 'Saddle Route',
			difficulty: 'Difficult',
			duration: 3,
			body: 'The Saddle Route is a difficult and less-traveled option for Mount Meru. It takes about 3 days and involves steep ascents and descents. Hikers on this route will be treated to breathtaking views and a sense of remote wilderness.',
			img_path: '/images/kilimanjaro/12.webp',
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

<svelte:head>
	<title>Bapta - Climb Mount Meru, Kilimanjaro's little brother</title>
	<meta
		name="description"
		content="Embark on an unforgettable journey to Mount Meru: Tanzania's hidden gem. Majestic peaks, diverse wildlife, and challenging trails await adventurers." />
</svelte:head>

<MountPage
	hero_header="Ascending the Peak of Mount Meru"
	hero_subtitle="Embark on a Captivating Trek to Tanzania's Second Highest Summit"
	hero="bg-meru"
	{routes}
	FAQs={mountMeruFaq}
	{overview_topics} />
