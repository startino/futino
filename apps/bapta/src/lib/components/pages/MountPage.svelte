<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';

	export let hero_header: string = '';
	export let hero_subtitle: string = '';

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
	class="w-full h-screen shadow-lg shadow-background card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center {$$props.hero} bg-cover object-contain bg-center">
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
		class="inner-section max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-6 py-12 items-center rounded-lg bg-cover bg-center bg-[url('/images/kilimanjaro/4.webp')]">
		{#each overview_topics as { label, body }}
			<div class="card m-6 w-fit rounded-lg bg-surface/75 justify-around">
				<h2 class="font-bold headline-small text-primary">{label}</h2>
				<p class="text-secondary title-medium my-auto">
					{body}
				</p>
			</div>
		{/each}
	</div>

	<!-- <div class="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-6">
		<div class="h-full">
			<img
				src="/images/kilimanjaro/vertical_mountain.webp"
				alt="Kilimanjaro"
				class="object-cover object-center h-full w-fit rounded-lg shadow-lg" />
		</div>
		<div class="flex flex-col h-full gap-6 place-content-between">
			{#each overview_topics as { label, body }}
				<div class="card rounded-lg bg-surface justify-around">
					<h2 class="mb-4 font-bold headline-small text-primary">{label}</h2>
					<p class="text-secondary title-medium my-auto">
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
		<h2 class=" font-bold text-center display-large text-primary">Routes</h2>
		<h1 class="body-medium mb-8">
			* Each Route here is only a starting point and is fully customizeable after requesting the
			Journey.
		</h1>

		<slot />
	</div>
</section>

<FAQ faqs={FAQs} />
