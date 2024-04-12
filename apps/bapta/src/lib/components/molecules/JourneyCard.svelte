<script lang="ts">
	import journeys, { Journey } from '$lib/journeys';
	import { formatter } from '$lib/utils';

	export let journeyId: string;

	console.log(`journey-id: ${journeyId}`);

	const journey: Journey = journeys[journeyId];

	let { name, duration, days, thumbnail, midrange, luxury } = journey;
	let tags: string[] = [];

	let formattedMidrange: string[] = [
		formatter.format(midrange[0] * days),
		formatter.format(midrange[1] * days)
	];
	let formattedLuxury: string[] = [
		formatter.format(luxury[0] * days),
		formatter.format(luxury[1] * days)
	];
</script>

<div
	class="grid h-fit w-full grid-cols-2 place-items-center gap-4 rounded-lg bg-surface text-left shadow-lg shadow-surface transition-all md:grid-cols-1 lg:grid-cols-2"
>
	<div class="relative flex h-full w-full rounded-md">
		<img
			src={thumbnail}
			alt="TOUR IMG"
			class="flex h-52 w-full rounded-l object-cover object-center transition-all sm:h-64 md:h-64 md:rounded-b-none md:rounded-t lg:h-full lg:rounded-l lg:rounded-r-none"
		/>

		{#if tags.includes('Top Rated')}
			<div
				class="absolute right-0 top-0 mr-2 mt-3 w-fit rounded-2xl bg-yellow-500 px-3 py-1 font-bold text-white"
			>
				<h1 class="body-large font-bold uppercase">Top Rated</h1>
			</div>
		{/if}
	</div>
	<!--Title, Parks, and tags-->
	<div
		class="my-auto flex w-full flex-col justify-items-center gap-2 rounded-b px-2 py-1 pr-4 sm:px-4 md:place-items-start md:px-2 md:pr-2 lg:pl-0 lg:pr-4"
	>
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
			<div class="mt-2 flex w-fit flex-col py-2">
				<h1 class="title-small md:title-medium">Standard</h1>
				<h1 class="headline-medium md:headline-large inline-block font-bold">
					<span class="text-primary"> {formattedMidrange[0]} </span>
					<span class="title-small text-outline">/person</span>
				</h1>
			</div>
		{:else}
			<div class="mt-2 flex w-fit flex-col border-b border-outline py-2 pr-12">
				<h1 class="title-small md:title-medium">Midrange</h1>
				<h1 class="headline-small md:headline-medium inline-block font-bold">
					{#if luxury[0] == 0}
						-
					{:else}
						<span class="text-primary"> {formattedMidrange[0]} </span> -
						<span class="text-primary"> {formattedMidrange[1]} </span>
						<span class="title-medium text-outline">/person</span>
					{/if}
				</h1>
			</div>
			<div class="mb-2 flex flex-col py-2">
				<h1 class="title-small md:title-medium">Luxury</h1>
				<h1 class="headline-small md:headline-medium inline-block font-bold">
					{#if luxury[0] == 0}
						-
					{:else}
						<span class="text-primary"> {formattedLuxury[0]}</span> -
						<span class="text-primary"> {formattedLuxury[1]} </span>
						<span class="title-medium text-outline">/person</span>
					{/if}
				</h1>
			</div>
		{/if}
	</div>
</div>
