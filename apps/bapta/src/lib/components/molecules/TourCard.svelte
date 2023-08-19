<script lang="ts">
	import { base } from '$app/paths';
	import type { Tour } from '../tsData/tours';

	export let tour: Tour;
	const tour_url = tour.href;
</script>

<a
	href="/tours/{tour_url}"
	class="flex flex-col h-full w-full text-left transition-all group hover:scale-105 duration-300 place-items-start rounded-lg shadow-lg shadow-surface-dark bg-surface-dark">
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
	<div class="rounded-b flex flex-col gap-2 p-4 h-full">
		<h1 class="headline-small">{tour.name}</h1>
		<div class="headline-small flex gap-6">
			<h1>
				{tour.days} &#9728;&#65039
			</h1>
			<h1>
				{tour.days - 1} &#127769
			</h1>
		</div>
		<div class="flex flex-row flex-wrap gap-3 py-1">
			{#each tour.tags as tag}
				<!-- Ignores top rated tag since it is at the top-->
				{#if tag != 'Top Rated'}
					<div class="[&>*]:rounded-xl body-medium [&>*]:px-2 [&>*]:py-0.5 font-bold">
						{#if tag == 'Zanzibar'}
							<div class="bg-gradient-to-tr from-blue-800 to-teal-500">
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
						{:else}
							<div class="bg-gradient-to-tr from-yellow-700 to-orange-900">
								<h1 class="">
									{tag}
								</h1>
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</a>
