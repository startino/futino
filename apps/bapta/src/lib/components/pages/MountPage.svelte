<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';

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
	class="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center {$$props.hero} bg-cover object-contain bg-top">
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
	<div
		class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-6 py-12 items-center rounded-lg bg-cover bg-center bg-[url('/images/kilimanjaro/4.jpg')]">
		{#each overview_topics as { label, body }}
			<div class="card m-6 w-fit rounded-lg bg-surface-dark/75 justify-around">
				<h2 class="font-bold headline-small text-primary-dark">{label}</h2>
				<p class="text-secondary-dark title-medium my-auto">
					{body}
				</p>
			</div>
		{/each}
	</div>

	<!-- <div class="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-6">
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
	</div> -->
</section>

<!-- Routes section -->
<section class="section" id="routes">
	<div class="flex flex-col">
		<h2 class="mb-8 font-bold text-center display-large text-primary-dark">Routes</h2>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center items-center">
			{#each routes as { label, difficulty, duration, body, img_path }}
				<div class="bg-surface-dark rounded-lg shadow-lg max-w-3xl flex flex-col h-full">
					<img
						src={img_path}
						alt="Marangu Route"
						class="w-full object-cover object-center h-1/2 rounded-t-lg bg-gradient-to-b from-transparent to-surface-dark" />

					<!--Route Details-->
					<div class="flex flex-col px-12 py-6 content-between h-full">
						<h3 class="mb-2 font-bold headline-medium text-primary-dark">{label}</h3>
						<div class="flex flex-col items-center gap-y-1 my-3">
							<h1 class="title-large text-primary-dark">Difficulty</h1>
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
							<h1 class="title-large text-primary-dark">Duration</h1>
							<div class="flex flex-row flex-nowrap items-center py-2 gap-x-2">
								{#each { length: duration } as i}
									<div class="w-8 h-3 bg-primary-dark rounded-sm">
										<!--This block represents one day :)-->
									</div>
								{/each}
								<h1 class="title-large text-primary-dark">
									{#if duration > 1}
										{duration} Days
									{:else}
										{duration} Day
									{/if}
								</h1>
							</div>
						</div>

						<p class="text-secondary-dark body-large">{body}</p>
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

<FAQ faqs={FAQs} />
