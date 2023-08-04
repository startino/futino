<script lang="ts">
	import Promotion from './Promotion.svelte';
	import OfferText from './OfferText.svelte';

	export let promotions: { label: string; index: number; for: string; discount: string }[];
	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => {
		console.log(tabValue);
		console.log(button_widths[tabValue]);
		switch (tabValue) {
			case 0: {
				positionClass = 'left-0';
				break;
			}
			case 1: {
				positionClass = 'left-1/4';
				break;
			}
			case 2: {
				positionClass = 'left-2/3';
				break;
			}
		}
	};

	let positionClass: string = 'left-0';

	let button_widths: number[] = [68, 419, 70421];
</script>

<div
	class="flex flex-col max-w-xl p-2 border rounded-2xl border-secondary-light/20 dark:border-secondary-dark/20">
	<ul class="relative flex flex-row items-center text-sm text-center gap-x-7">
		<div
			class="h-12 absolute border-2 rounded-xl border-primary-light dark:border-primary-dark transition-all duration-700 {positionClass}"
			style="width: {button_widths[activeTabValue]}px" />

		{#each promotions as promotion, i}
			<!--{activeTabValue == promotion.index
					? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark'
					: -->
			<li
				class="py-1 md:py-3 rounded-xl transition-all duration-200 {activeTabValue == i
					? ''
					: 'outline outline-0 hover:outline-2 outline-white'}">
				<button on:click={handleClick(promotion.index)} bind:clientWidth={button_widths[i]}>
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
