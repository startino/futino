<script lang="ts">
	import type { NorpTier } from './plans';

	export let tier: NorpTier;
</script>

<div class="flex flex-col space-y-10 p-7">
	<h1 class="headline-large">
		{tier.name}
	</h1>
	<div class="flex flex-col justify-center">
		<div class="flex justify-center flex-row">
			<h1 class="display-medium">
				${tier.cost}
			</h1>
			<p class="body-large pt-8">/mo</p>
		</div>
		<p class="label-large italic">/ per month, billed annually</p>
	</div>

	<!-- <Button>
		<p class="title-large text-primary-on-light dark:text-primary-on-dark">Get Started</p>
	</Button> -->
	<ul class="flex flex-col space-y-2">
		{#each Array(2) as feature, i}
			<li class="whitespace-pre text-left title-medium">
				{'  •  '}
				{tier.features[i]}
			</li>
		{/each}
	</ul>
</div>
