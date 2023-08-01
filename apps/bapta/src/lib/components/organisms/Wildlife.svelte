<script lang="ts">
	export let animals: any[] = [];

	let activeAnimalIndex = 0;
	function handleClick(animalValue: number) {
		activeAnimalIndex = animalValue;
	}
</script>

<!--This component is the Wildlife Section in the landing page. Displaying the possible animals you would see in a safai and a description about them-->
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
	<div class="p-8 bg-white rounded-md shadow-md">
		<h2 class="py-6 font-bold display-medium">Wildlife Checklist</h2>
		<div class="p-6 border border-gray-300 rounded-md">
			<ul class="flex flex-col gap-y-4">
				{#each animals as animal}
					<button on:click={() => handleClick(animal.index)}>
						<li
							class={activeAnimalIndex == animal.index
								? 'border-2 border-primary-light rounded-lg dark:border-primary-dark'
								: 'hover:border-2 rounded-lg'}>
							<h1 class="text-left headline-medium">
								{animal.label}
							</h1>
							{#if animal.index == activeAnimalIndex}
								<h1 class="text-left body-medium">
									{animal.body}
								</h1>
							{/if}
						</li>
					</button>
				{/each}
			</ul>
		</div>
	</div>

	<div class="overflow-hidden rounded-lg shadow-md bg-surface-light">
		{#each animals[activeAnimalIndex].media as animal}
			images
			<!-- <img src={animal} /> -->
		{/each}
	</div>
</div>
