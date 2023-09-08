<script lang="ts">
	import { base } from '$app/paths';
	import type { Tour } from '../tsData/tours';
	import { formatter } from '$lib/utils';

	export let tour: Tour;
	const tour_url = tour.href;
	let formattedMidrange: string[] = [
		formatter.format(tour.journey.midrange[0] * tour.days),
		formatter.format(tour.journey.midrange[1] * tour.days),
	];
	let formattedLuxury: string[] = [
		formatter.format(tour.journey.luxury[0] * tour.days),
		formatter.format(tour.journey.luxury[1] * tour.days),
	];
</script>

<a
	href="/tours/{tour_url}"
	class="{$$props.class} flex flex-col h-full mx-1 w-full text-left transition-all group hover:scale-[102%] duration-300 place-items-start rounded-lg shadow-lg shadow-surface-dark bg-surface-dark">
	<div class="flex shrink-0 h-80 w-full relative overflow-hidden bg-black rounded-md">
		<img
			src={tour.thumbnail}
			alt="TOUR IMG"
			class="object-cover object-center h-full w-full rounded-t duration-500 ease-in-out group-hover:scale-105 md:opacity-70 group-hover:opacity-100 transition-all" />

		{#if tour.tags.includes('Top Rated')}
			<div
				class="bg-yellow-500 text-white absolute rounded-2xl px-3 py-1 mt-3 mr-2 font-bold w-fit right-0 top-0">
				<h1 class="uppercase body-large font-bold">Top Rated</h1>
			</div>
		{/if}
	</div>
	<!--Title, Parks, and tags-->

	<div class="rounded-b flex flex-col justify-items-end gap-2 p-4 h-full">
		<h1 class="headline-medium">{tour.name}</h1>
		<div class="headline-small flex gap-6 mt-auto pt-3">
			<h1>
				{tour.days} &#9728;&#65039
			</h1>
			<h1>
				{tour.days - 1} &#127769
			</h1>
		</div>
		{#if tour.days == 1}
			<div class="flex flex-col py-2 w-fit pr-12 my-auto">
				<h1 class="title-large">Standard</h1>
				<h1 class="headline-large md: font-bold inline-block">
					<span class="text-primary-dark"> {formattedMidrange[0]} </span>
					<span class="title-medium text-outline-dark font-extralight">/person</span>
				</h1>
			</div>
		{:else}
			<div class="flex flex-col py-2 border-b border-outline-dark w-fit pr-12">
				<h1 class="title-medium">Midrange</h1>
				<h1 class="title-large md: font-bold inline-block">
					{#if tour.journey.midrange[0] == 0}
						-
					{:else}
						<span class="text-primary-dark"> {formattedMidrange[0]} </span> -
						<span class="text-primary-dark"> {formattedMidrange[1]} </span>
						<span class="title-medium text-outline-dark font-extralight">/person</span>
					{/if}
				</h1>
			</div>
			<div class="flex flex-col py-2">
				<h1 class="title-medium">Luxury</h1>
				<h1 class="headline-small font-bold inline-block">
					{#if tour.journey.luxury[0] == 0}
						-
					{:else}
						<span class="text-primary-dark"> {formattedLuxury[0]} </span> -
						<span class="text-primary-dark"> {formattedLuxury[1]} </span>
						<span class="title-medium text-outline-dark font-extralight">/person</span>
					{/if}
				</h1>
			</div>
		{/if}

		<div class="flex flex-row flex-wrap gap-3 py-1">
			{#each tour.tags as tag}
				<!-- Ignores top rated tag since it is at the top-->
				{#if tag != 'Top Rated'}
					<div class="[&>*]:rounded-xl body-medium [&>*]:px-2 [&>*]:py-0.5 font-bold">
						{#if tag == 'Zanzibar'}
							<div class="bg-gradient-to-tr from-blue-700 to-teal-600">
								<h1 class="">
									{tag}
								</h1>
							</div>
						{:else if tag == 'Kilimanjaro'}
							<div class="bg-gradient-to-tl from-green-900 via-teal-900 to-zinc-500">
								<h1 class="">
									{tag}
								</h1>
							</div>
						{:else if tag == 'Tarangire'}
							<div class="bg-yellow-900">
								<h1 class="">
									{tag}
								</h1>
							</div>
						{:else if tag == 'Serengeti'}
							<div class="bg-amber-900">
								<h1 class="">
									{tag}
								</h1>
							</div>
						{:else if tag == 'Ngorongoro'}
							<div class="bg-gray-800">
								<h1 class="">
									{tag}
								</h1>
							</div>
						{:else if tag == 'Lake Manyara'}
							<div class="bg-indigo-950">
								<h1 class="">
									{tag}
								</h1>
							</div>
						{:else if tag == 'xlSpacer'}
							<div class="invisible">spacing to br</div>
						{:else if tag == 'lgSpacer'}
							<div class="invisible xl:hidden">spacing to br</div>
						{:else if tag == 'mdSpacer'}
							<div class="invisible">spacing to br</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</div></a>
