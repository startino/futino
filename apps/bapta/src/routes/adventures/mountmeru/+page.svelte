<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';
	import MountPage from '$lib/components/pages/MountPage.svelte';
	import mountMeruFaq from '$lib/components/tsData/mountMeruFaq';
	import { addChosenJourney } from '$lib/journeysStore';

	const routes = [
		{
			id: 'momella-route',
			label: 'Momella Route',
			difficulty: 'Intermediate',
			duration: 4,
			body: 'The Momella Route is a popular option for climbing Mount Meru. It offers a moderate level of difficulty and takes around 4 days to complete. This route provides diverse landscapes, including lush forests and alpine meadows.',
			img_path: '/images/kilimanjaro/11.webp',
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
			body: 'We offer a range of routes to suit your preferences and level of experience. Each route has its own unique features and challenges.',
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
	FAQs={mountMeruFaq}
	{overview_topics}>
	<div class="grid grid-cols-1 justify-items-center items-center">
		{#each routes as { label, difficulty, duration, body, img_path, id }}
			<div class="bg-surface rounded-lg shadow-lg max-w-3xl flex flex-col h-full">
				<img
					src={img_path}
					alt="Marangu Route"
					class="w-full object-cover object-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-t-lg bg-gradient-to-b from-transparent to-surface" />

				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!--Route Details-->
				<div class="flex flex-col px-12 py-6 content-between h-fit">
					<h3 class="mb-2 font-bold headline-medium text-primary">{label}</h3>
					<div class="flex flex-col items-center gap-y-1 my-3">
						<h1 class="title-large text-primary">Difficulty</h1>
						<div
							class=" rounded-md [&>*]:py-2 [&>*]:px-3 [&>*]:w-fit [&>*]:rounded-md [&>*]:text-white">
							{#if difficulty == 'Easy'}
								<h1 class=" bg-green-800 label-large">NOVICE LEVEL</h1>
							{:else if difficulty == 'Intermediate'}
								<h1 class=" bg-orange-500 label-large">INTERMEDIATE LEVEL</h1>
							{:else if difficulty == 'Expert'}
								<h1 class=" bg-red-700 label-large">EXPERT LEVEL</h1>
							{/if}
						</div>
					</div>
					<!--Duration-->
					<div class="flex flex-col py-3 items-center">
						<h1 class="title-large text-primary">Duration</h1>
						<div class="flex flex-row flex-nowrap items-center py-2 gap-x-2">
							{#each { length: duration } as i}
								<div class="w-8 h-3 bg-primary rounded-sm">
									<!--This block represents one day :)-->
								</div>
							{/each}
							<h1 class="title-large text-primary">
								{#if duration > 1}
									{duration} Days
								{:else}
									{duration} Day
								{/if}
							</h1>
						</div>
					</div>

					<p class="text-secondary body-large">{body}</p>
					<div
						class="mt-auto pt-6 pb-2 mx-auto self-end"
						on:click={() => {
							addChosenJourney(id);
						}}>
						<OutlineButton href="/request-tour">
							<h1 class="p-3 title-medium">Request Now</h1>
						</OutlineButton>
					</div>
				</div>
			</div>
		{/each}
	</div></MountPage>
