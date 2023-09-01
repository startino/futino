<div
	id="carousel-parent"
	class="overflow-hidden relative h-fit flex w-full flex-nowrap py-2 bg-gradient-to-b from-black/30 to-transparent">
	<div
		class="h-full z-10 bg-gradient-to-r from-surface-dark/50 to-transparent w-20 -left-6 absolute" />
	<div
		class="h-full z-10 bg-gradient-to-l from-surface-dark/50 to-transparent w-20 -right-6 absolute" />

	{#each Array(3) as repeated_so_that_it_can_cycle}
		<div class="logo-carousel">
			<div class="box border-1 border-white/20 shadow-lg">
				<img src="favicon.png" alt="" class="h-32 w-32 mx-auto" />
			</div>
			<div class="box border-1 border-white/20 shadow-lg">
				<img src="favicon.png" alt="" class="h-32 w-32 mx-auto" />
			</div>
			<div class="box border-1 border-white/20 shadow-lg">
				<img src="favicon.png" alt="" class="h-32 w-32 mx-auto" />
			</div>
			<div class="box border-1 border-white/20 shadow-lg">
				<img src="favicon.png" alt="" class="h-32 w-32 mx-auto" />
			</div>
		</div>
	{/each}
</div>

<style>
	.box {
		@apply w-32 md:w-64 rounded-lg mx-6 flex-shrink-0;
	}

	.logo-carousel {
		@apply flex flex-row py-3 animate-carouselSlide;
	}
</style>
