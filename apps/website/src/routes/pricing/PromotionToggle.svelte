<script lang="ts">
	import Promotion from './Promotion.svelte';
	import OfferText from './OfferText.svelte';

	export let promotions: { label: string; index: number; for: string; discount: string }[];
	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => {
		activeTabValue = tabValue;
	};

	let widths: number[] = [100, 100, 100];
</script>

<div
	class="flex flex-col max-w-xl p-2 border rounded-2xl border-secondary-light/20 dark:border-secondary-dark/20">
	<ul class="flex flex-wrap text-sm text-center gap-x-7 relative">
		<div
			class="h-[{widths[
				activeTabValue
			]}px] h-12 z-20 fixed bg-white rounded-xl border-primary-light dark:border-primary-dark left-1/2 top-1/2" />

		{#each promotions as promotion, i}
			<li
				class="relative {activeTabValue === promotion.index
					? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark'
					: 'hover:border-2 rounded-xl'}">
				<button bind:clientWidth={widths[i]} on:click={handleClick(promotion.index)}>
					<Promotion name="billing" for={promotion.for} text={promotion.label}>
						<!--ChoiceButton Probably shouldn't be inside of another button but idk how to pass onclick listener so...-->
						{#if promotion.discount == ''}
							<h1 class="body-large">
								{promotion.discount}
							</h1>
						{:else}
							<OfferText class="pl-2 widths">
								<h1 class="body-small">
									{promotion.discount}
								</h1>
							</OfferText>
						{/if}
					</Promotion>
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.widths {
		@apply w-[100px];
	}
</style>
