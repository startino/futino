<script lang="ts">
	import Promotion from './Promotion.svelte';
	import OfferText from './OfferText.svelte';

	export let promotions: { label: string; value: number; for: string; discount: string }[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="p-2 border rounded-2xl border-secondary-light/20 dark:border-secondary-dark/20">
	<ul
		class="flex flex-wrap text-sm text-center space-x-7"
		id="myTab"
		data-tabs-toggle="#myTabContent"
		role="tablist"
	>
		{#each promotions as promotion}
			<li
				class={activeTabValue === promotion.value
					? 'active border-2 rounded-xl border-primary-light dark:border-primary-dark'
					: 'hover:border-2 rounded-xl'}
			>
				<button on:click={handleClick(promotion.value)}>
					<Promotion name="billing" for={promotion.for} text={promotion.label}>
						<!--ChoiceButton Probably shouldn't be inside of another button but idk how to pass onclick listener so...-->
						{#if promotion.discount == ''}
							<h1 class="body-large">
								{promotion.discount}
							</h1>
						{:else}
							<OfferText class="pl-2">
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
