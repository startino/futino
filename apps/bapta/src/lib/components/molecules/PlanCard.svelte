<div class="flex flex-col space-y-10 p-7">
	<h1 class="headline-large">
		{$$props.plan.label}
	</h1>
	<div class="flex flex-col justify-center">
		<div class="flex flex-row justify-center">
			<h1 class="display-medium">
				{$$props.plan.prefix}{$$props.plan.cost}
			</h1>
			<p class="pt-8 body-large">
				{$$props.plan.note}
			</p>
		</div>
		<p class="italic label-large">{$$props.plan.subtext}</p>
	</div>

	<!-- <Button>
		<p class="title-large text-primary-on-light dark:text-primary-on-dark">Get Started</p>
	</Button> -->
	<ul class="flex flex-col space-y-2">
		{#each $$props.plan.features as feature}
			<li class="text-left whitespace-pre title-medium">
				{'  •  '}
				{feature}
			</li>
		{/each}
	</ul>
</div>
