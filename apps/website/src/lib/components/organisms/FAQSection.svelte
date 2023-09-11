<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import FAQCard from '../molecules/FAQCard.svelte';
	import SearchBox from '../molecules/SearchBox.svelte';

	// Gets the Frequently Asked Questions by parent component
	export let faqs: {
		question: string;
		answer: string;
	}[] = [];
	let questionEntry: string;

	const handleClick = (question: string) => () => (questionEntry = question);

	// For Search Input
	let searchInput = '';
	let filteredFaqs: {
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

<div class="grid grid-cols-1 md:grid-cols-5 gap-3 w-full">
	<div
		class="col-span-2 h-fit flex flex-col gap-y-4 items-center self-start md:items-start md:text-left text-surface-on-dark">
		<h1 class="font-semibold headline-medium md:display-medium leading-tight">
			Your Questions, <br /> Answered
		</h1>
		<h1 class="title-medium hidden md:flex">
			Find Clarity and Confidence <br /> through some frequently asked questions.
		</h1>
	</div>
	<div class="flex flex-col gap-4 md:col-span-3 self-start w-full">
		<div class="lex flex-col gap-4 items-start">
			<SearchBox class="w-full mb-4 md:mb-6" bind:searchInput on:input={searchPhotos} />
			<div class="flex flex-col gap-4 overflow-scroll w-full max-h-[505px]">
				{#if searchInput && filteredFaqs.length === 0}
					<div class="w-full py-12 headline-medium inline">
						<h1 class="">Sorry, we couldn't find your question.</h1>
						<a href="/contact" class="underline text-tertiary-dark headline-small">Ask Us Here!</a>
					</div>
				{:else if filteredFaqs.length > 0}
					{#each filteredFaqs as { question, answer }}
						<FAQCard {question} {answer} isOpen={question == questionEntry} />
					{/each}
				{:else}
					{#each faqs as { question, answer }}
						<FAQCard {question} {answer} isOpen={question == questionEntry} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
