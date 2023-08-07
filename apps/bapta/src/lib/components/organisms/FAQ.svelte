<script lang="ts">
	import FAQCard from '../molecules/FAQCard.svelte';
	// Gets the Frequently Asked Questions by parent component
	export let FAQs: {
		index: number;
		question: string;
		answer: string;
	}[] = [];
	export let activeEntry = 0;

	const handleClick = (questionIndex: number) => () => (activeEntry = questionIndex);
</script>

<div class="flex flex-col mx-auto">
	<h2 class="py-12 font-bold text-primary-dark text-center display-small">
		Frequently Asked Questions
	</h2>
	<!--Search bar-->
	<div class="flex py-12 place-self-center">
		<input
			type="text"
			class="w-full px-4 py-2 border-gray-300 bg-surface-variant-dark rounded-l-lg"
			placeholder="Search FAQs..." />
		<button class="px-4 py-2 text-white bg-surface-dark/90 rounded-r-lg hover:bg-surface-dark">
			Search
		</button>
	</div>

	<div class="grid grid-cols-1 gap-6 mx-10 lg:grid-cols-2">
		<!--Loop through each question. Makes it's card.-->
		{#each FAQs as { index, question, answer }}
			<!--I didn't know how to implicitly define the entry with properties for question and answer.-->
			<FAQCard {question} {answer} isOpen={index == activeEntry} />
			<!--Don't know how to refresh non-active cards so that they collapse once another card is clicked. TODO-->
		{/each}
	</div>
</div>
