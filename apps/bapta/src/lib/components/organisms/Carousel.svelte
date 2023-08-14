<script lang="ts">
	type TourType = {
		id: number;
		name: string;
		parks: string;
	};
	export let tours: TourType[];
</script>

<div
	class="flex overflow-x-auto gap-6 py-3 snap-x snap-mandatory before:shrink-0 before:w-[1vw] after:shrink-0 after:w-[1vw]">
	{#each tours as { name, parks }}
		<div
			class="flex flex-col my-3 max-w-xl rounded-lg shadow-lg shadow-black bg-card-surface-on shrink-0 snap-center">
			<div class="bg-[url('/images/safari/4.jpeg')] h-44 rounded-t bg-center bg-cover flex" />
			<!--Title and parks-->
			<div class="rounded-b flex flex-col py-4 px-6">
				<h1 class="headline-small">{name}</h1>
				<h1 class="body-large">
					{parks}
				</h1>
			</div>
		</div>
	{/each}
</div>
