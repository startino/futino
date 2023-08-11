<script lang="ts">
	import { base } from '$app/paths';
	import type { Tour } from '../tsData/tours';

	export let tour: Tour;
	const tour_url = tour.name.toLowerCase().replaceAll(' ', '_');
</script>

<a
	href="/tours/{tour_url}"
	class="flex flex-col h-full w-full text-left transition-all hover:scale-105 place-items-start rounded-lg shadow-lg shadow-black bg-card-surface-on">
	<div class="flex shrink-0 h-64 md:h-64 w-full relative">
		<img src={tour.thumbnail} alt="TOUR IMG" class="object-cover object-bottom w-full rounded-t" />
		{#if tour.tags.includes('Top Rated')}
			<div
				class="bg-yellow-500 text-white absolute rounded-2xl px-3 py-1 mt-3 mr-2 font-bold w-fit right-0 top-0">
				<h1 class="uppercase body-large font-bold">Top Rated</h1>
			</div>
		{/if}
	</div>
	<!--Title, Parks, and tags-->
	<div class="rounded-b flex flex-col p-4 h-full">
		<h1 class="headline-small">{tour.name}</h1>
		<div class="flex flex-row flex-wrap gap-3 py-1">
			{#each tour.tags as tag}
				<div class="[&>*]:rounded-xl body-medium [&>*]:px-2 [&>*]:py-0.5 font-bold">
					{#if tag == 'Safari'}
						<div class="bg-gradient-to-tr from-yellow-700 to-orange-900">
							<h1 class="">
								{tag}
							</h1>
						</div>
					{:else if tag == 'Zanzibar'}
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
					{/if}
				</div>
			{/each}
		</div>
		<h1 class="body-large my-auto">
			{tour.parks}
		</h1>
	</div>
</a>
