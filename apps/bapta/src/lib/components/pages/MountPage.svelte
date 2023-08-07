<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQ.svelte';

	export let hero_header: string = '';
	export let hero_subtitle: string = '';

	export let routes: {
		label: string;
		difficulty: string;
		duration: number;
		body: string;
		img_path: string;
	}[];

	export let FAQs: {
		index: number;
		question: string;
		answer: string;
	}[];

	export let overview_topics: {
		label: string;
		body: string;
	}[];
</script>

<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center bg-kilimanjaro bg-cover object-contain bg-top">
	<div class="flex flex-col max-w-xl mx-auto mt-8 mb-64 space-y-2 items-center">
		<h1 class="font-bold text-black display-medium">{hero_header}</h1>
		<h1 class="pb-6 text-black body-large">
			{hero_subtitle}
		</h1>

		<OutlineButton href="#routes">
			<h1 class="px-4 py-2 title-large">Choose Route</h1>
		</OutlineButton>
	</div>
</div>

<!-- Climbing Experience section -->
<section class="section">
	<div class="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-6">
		<div class="h-full">
			<img
				src="/images/kilimanjaro/vertical_mountain.jpg"
				alt="Kilimanjaro"
				class="object-cover object-center h-full w-fit rounded-lg shadow-lg" />
		</div>
		<div class="flex flex-col h-full gap-6 place-content-between">
			{#each overview_topics as { label, body }}
				<div class="card rounded-lg bg-surface-dark justify-around">
					<h2 class="mb-4 font-bold headline-small text-primary-dark">{label}</h2>
					<p class="text-secondary-dark title-medium my-auto">
						{body}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Routes section -->
<section class="section lg:px-24" id="routes">
	<div class="flex flex-col">
		<h2 class="mb-8 font-bold text-center display-large text-primary-dark">Routes</h2>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center">
			{#each routes as route}
				<div class="bg-surface-dark rounded-lg shadow-lg max-w-3xl flex flex-col h-full">
					<img
						src={route.img_path}
						alt="Marangu Route"
						class="w-full object-cover object-center h-fit rounded-t-lg" />
					<!--Route Details-->
					<div class="flex flex-col px-12 py-6 content-between h-full">
						<h3 class="mb-2 font-bold headline-medium text-primary-dark">{route.label}</h3>
						<div class="flex flex-col py-3 mx-auto">
							<h1 class="title-large text-primary-dark">Difficulty</h1>
							{#if route.difficulty == 'Easy'}
								<div class="px-6 py-2 my-3 bg-green-800 w-fit rounded-md">
									<h1 class="text-white label-large">NOVICE LEVEL</h1>
								</div>
							{:else if route.difficulty == 'Intermediate'}
								<div class="px-6 py-2 my-3 bg-orange-500 w-fit rounded-md">
									<h1 class="text-white label-large">INTERMEDIATE LEVEL</h1>
								</div>
							{:else if route.difficulty == 'Expert'}
								<div class="px-6 py-4 my-3 bg-red-700 w-fit rounded-md">
									<h1 class="text-white label-large">EXPERT LEVEL</h1>
								</div>
							{/if}
						</div>
						<!--Duration-->
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

						<p class="md:px-10 text-secondary-dark body-large">{route.body}</p>
						<div class="mt-auto pt-6 pb-2 mx-auto self-end">
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
