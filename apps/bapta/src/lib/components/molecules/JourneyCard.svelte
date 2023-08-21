<script lang="ts">
	import { base } from '$app/paths';
	import journeys, { Journey } from '$lib/journeys';
	import type { Tour } from '../tsData/tours';

	export let journeyId: string = '';
	const journey: Journey = journeys[journeyId];
	let { name, duration, days, thumbnail } = journey;
	let tags: string[] = [];
</script>

<div
	class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 h-fit w-full text-left transition-all place-items-center rounded-lg shadow-lg shadow-surface-dark bg-surface-dark gap-4">
	<div class="flex h-full w-full relative rounded-md">
		<img
			src={thumbnail}
			alt="TOUR IMG"
			class="object-cover object-center w-full h-32 sm:h-44 md:h-full flex rounded-l transition-all" />

		{#if tags.includes('Top Rated')}
			<div
				class="bg-yellow-500 text-white absolute rounded-2xl px-3 py-1 mt-3 mr-2 font-bold w-fit right-0 top-0">
				<h1 class="uppercase body-large font-bold">Top Rated</h1>
			</div>
		{/if}
	</div>
	<!--Title, Parks, and tags-->
	<div
		class="rounded-b flex flex-col gap-2 w-full my-auto md:place-items-start md:px-2 md:pr-2 lg:pr-4 lg:pl-0 pr-4 justify-items-center">
		<h1 class="title-small sm:headline-small pt-4">{name}</h1>
		<div class="title-small sm:headline-small flex gap-6">
			<h1>
				{days} &#9728;&#65039
			</h1>
			<h1>
				{days - 1} &#127769
			</h1>
		</div>
		<div class="flex flex-row flex-wrap gap-3 py-1">
			{#each tags as tag}
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
						{:else if tag == 'Ngorongoro Crater'}
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
</div>
