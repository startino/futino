<script lang="ts">
	import Promotion from './Promotion.svelte';
	import OfferText from './OfferText.svelte';

	export let promotions: { label: string; index: number; for: string; discount: string }[];
	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => {
		activeTabValue = tabValue;

		if (activeTabValue == 2) {
			console.log('2');
			positionClass = 'right-0';
		}
	};

	let positionClass = 'left-0';

	function calculatePosition() {
		switch (activeTabValue) {
			case 0: {
				positionClass = 'left-0';
				break;
			}
			case 1: {
				positionClass = 'left-1/3';
				break;
			}
			case 2: {
				positionClass = 'right-0';
				break;
			}
		}
	}
</script>

<div
	class="flex flex-col max-w-xl p-2 border rounded-2xl border-secondary-light/20 dark:border-secondary-dark/20">
	<ul class="flex flex-row items-center text-sm text-center gap-x-7 relative group">
		{#key positionClass}
			<div
				class="w-20 h-12 absolute border-2 rounded-xl border-primary-light dark:border-primary-dark transition-all {positionClass}" />
		{/key}
		<div class="fixed left-1/2 top-1/2">
			{activeTabValue}
			position class {positionClass}
		</div>
		{#each promotions as promotion, i}
			<li
				class="relative {activeTabValue === promotion.index
					? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark'
					: 'hover:border-2 rounded-xl'}">
				<button>
					<Promotion
						name="billing"
						for={promotion.for}
						text={promotion.label}
						value={promotion.index}
						bind:activeTabValue>
						<div class="">
							<!--ChoiceButton Probably shouldn't be inside of another button but idk how to pass onclick listener so...-->
							{#if promotion.discount == ''}
								<h1 class="body-large">
									{promotion.discount}
								</h1>
							{:else}
								<OfferText class="">
									<h1 class="body-small">
										{promotion.discount}
									</h1>
								</OfferText>
							{/if}
						</div>
					</Promotion>
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
