<script lang="ts">
	import Promotion from './Promotion.svelte';
	import OfferText from './OfferText.svelte';

	export let promotions: { label: string; index: number; for: string; discount: string }[];
	export let activeTabValue = 0;

	let positionClass: string = 'left: 0px';

	let button_widths: number[] = [68, 419, 70421];

	const handleClick = (tabValue: number) => () => {
		console.log(tabValue);
		let left = 0;
		button_widths.forEach((value, index) => {
			console.log('Loop');
			if (index < tabValue) {
				left += value;
				console.log('Adding to left: ', left);
			}
		});
		let newString = 'left: ' + left.toString() + 'px';
		positionClass = 'left: ' + left.toString() + 'px';
		console.log(positionClass);
	};
</script>

<div
	class="flex flex-col max-w-xl m-2 border rounded-2xl border-secondary-light/20 dark:border-secondary-dark/20">
	<ul class="relative flex flex-row p-2 items-center text-sm text-center">
		<div
			class="h-12 absolute border-2 left- mx-2 rounded-xl border-primary-light dark:border-primary-dark transition-all duration-700"
			style="width: {button_widths[activeTabValue] - 4}px; {positionClass};" />

		{#each promotions as promotion, i}
			<!--{activeTabValue == promotion.index
					? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark'
					: -->
			<li
				class="py-1 md:py-3 rounded-xl transition-all duration-200 px-5 {activeTabValue == i
					? ''
					: 'outline outline-0 hover:outline-2 outline-white'}"
				bind:clientWidth={button_widths[i]}>
				<button on:click={handleClick(promotion.index)}>
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
