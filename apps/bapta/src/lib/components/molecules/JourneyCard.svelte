<script lang="ts">
	import { base } from '$app/paths';
	import journeys, { Journey } from '$lib/journeys';
	import { formatter } from '$lib/utils';

	import type { Tour } from '../tsData/tours';

	export let journeyId: string = '';
	const journey: Journey = journeys[journeyId];

	let { name, duration, days, thumbnail, midrange, luxury } = journey;
	let tags: string[] = [];

	let formattedMidrange: string[] = [
		formatter.format(midrange[0] * days),
		formatter.format(midrange[1] * days),
	];
	let formattedLuxury: string[] = [
		formatter.format(luxury[0] * days),
		formatter.format(luxury[1] * days),
	];
</script>

<div
	class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 h-fit w-full text-left transition-all place-items-center rounded-lg shadow-lg shadow-surface-dark bg-surface-dark gap-4">
	<div class="flex h-full w-full relative rounded-md">
		<img
			src={thumbnail}
			alt="TOUR IMG"
			class="object-cover object-center w-full h-52 sm:h-64 md:h-64 lg:h-full flex rounded-l lg:rounded-l lg:rounded-r-none md:rounded-t md:rounded-b-none transition-all" />

		{#if tags.includes('Top Rated')}
			<div
				class="bg-yellow-500 text-white absolute rounded-2xl px-3 py-1 mt-3 mr-2 font-bold w-fit right-0 top-0">
				<h1 class="uppercase body-large font-bold">Top Rated</h1>
			</div>
		{/if}
	</div>
	<!--Title, Parks, and tags-->
	<div
		class="rounded-b flex flex-col gap-2 w-full my-auto md:place-items-start py-1 px-2 sm:px-4 md:px-2 md:pr-2 lg:pr-4 lg:pl-0 pr-4 justify-items-center">
		<h1 class="title-large sm:headline-small pt-4 md:pt-0">{name}</h1>

		<div class="title-small sm:headline-small flex gap-6">
			<h1>
				{days} &#9728;&#65039
			</h1>
			<h1>
				{days - 1} &#127769
			</h1>
		</div>
		{#if days == 1}
			<div class="flex flex-col py-2 mt-2 w-fit">
				<h1 class="title-small md:title-medium">Standard</h1>
				<h1 class="headline-medium md:headline-large font-bold inline-block">
					<span class="text-primary-dark"> {formattedMidrange[0]} </span>
					<span class="title-small text-outline-dark ">/person</span>
				</h1>
			</div>
		{:else}
			<div class="flex flex-col py-2 mt-2 border-b border-outline-dark w-fit pr-12">
				<h1 class="title-small md:title-medium">Midrange</h1>
				<h1 class="headline-small md:headline-medium font-bold inline-block">
					{#if luxury[0] == 0}
						-
					{:else}
						<span class="text-primary-dark"> {formattedMidrange[0]} </span> -
						<span class="text-primary-dark"> {formattedMidrange[1]} </span>
						<span class="title-medium text-outline-dark ">/person</span>
					{/if}
				</h1>
			</div>
			<div class="flex flex-col mb-2 py-2">
				<h1 class="title-small md:title-medium">Luxury</h1>
				<h1 class="headline-small md:headline-medium font-bold inline-block">
					{#if luxury[0] == 0}
						-
					{:else}
						<span class="text-primary-dark"> {formattedLuxury[0]}</span> -
						<span class="text-primary-dark"> {formattedLuxury[1]} </span>
						<span class="title-medium text-outline-dark ">/person</span>
					{/if}
				</h1>
			</div>
		{/if}
	</div>
</div>
