<script lang="ts">
	export let tour: {
		id: number;
		name: string;
		tags: string[];
		parks: string;
	};
</script>

<div
	class="flex flex-col h-full w-full text-left transition-all hover:scale-105 place-items-start rounded-lg shadow-lg shadow-black bg-black/60 hover:cursor-pointer">
	<img
		src="/images/safari/safari_img(7).jpeg"
		class="h-32 md:h-44 w-full object-cover object-center rounded-t"
		alt="" />
	<!--Title and parks-->
	<div class="rounded-b flex flex-col p-4">
		<h1 class="headline-small">{tour.name}</h1>
		<div class="flex flex-row flex-wrap gap-3 py-1">
			{#each tour.tags as tag}
				<div class="[&>*]:rounded-xl body-medium [&>*]:px-2 [&>*]:py-0.5 font-bold">
					{#if tag == 'Safari'}
						<div class="bg-gradient-to-tr from-yellow-600 to-orange-800">
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
		<h1 class="body-large">
			{tour.parks}
		</h1>
	</div>
</div>
