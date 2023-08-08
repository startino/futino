<script lang="ts">
	import FAQCard from '../molecules/FAQCard.svelte';
	import SearchBox from '../molecules/SearchBox.svelte';
	// Gets the Frequently Asked Questions by parent component
	export let faqs: {
		index: number;
		question: string;
		answer: string;
	}[] = [];
	export let activeEntry = 0;

	const handleClick = (questionIndex: number) => () => (activeEntry = questionIndex);

	// For Search Input
	let searchInput = '';
	let filteredFaqs: {
		index: number;
		question: string;
		answer: string;
	}[] = [];

	// Matches photoData
	const searchPhotos = () => {
		return (filteredFaqs = faqs.filter((faq) => {
			if (faq.question.toLowerCase().includes(searchInput.toLowerCase())) return true;
			if (faq.answer.toLowerCase().includes(searchInput.toLowerCase())) return true;
		}));
	};
</script>

<section class="flex flex-col items-center gap-6 section">
	<h2 class="py-12 font-bold text-primary-dark text-center display-small">
		Frequently Asked Questions
	</h2>
	<SearchBox class="w-full" bind:searchInput on:input={searchPhotos} />
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#if searchInput && filteredFaqs.length === 0}
			<section>
				<div class="mx-auto w-full py-12">
					<h1 class="display-medium">No Results</h1>
				</div>
			</section>
		{:else if filteredFaqs.length > 0}
			{#each filteredFaqs as { question, answer, index }}
				<FAQCard {question} {answer} isOpen={index == activeEntry} />
			{/each}
		{:else}
			{#each faqs as { question, answer, index }}
				<FAQCard {question} {answer} isOpen={index == activeEntry} />
			{/each}
		{/if}
	</div>
</section>
