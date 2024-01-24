<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import FAQCard from '../atoms/FAQCard.svelte';
	import SearchBox from '../atoms/SearchBox.svelte';

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

<div class="grid w-full grid-cols-1 gap-3 md:grid-cols-5">
	<div
		class="text-surface-on col-span-2 flex h-fit flex-col items-center gap-y-4 self-start md:items-start md:text-left"
	>
		<h1 class="headline-medium md:display-medium font-semibold leading-tight">
			Your Questions, <br class="hidden md:flex" /> Answered
		</h1>
		<h6 class="title-medium hidden md:flex">
			Find clarity and confidence <br /> through some frequently asked questions. If you can't find your
			answer there, we're open to answer any questions.
		</h6>
		<div class="my-2 -ml-2 mb-6 flex flex-row gap-y-4 md:flex-col lg:flex-row">
			<Button href="/contact">
				<h2 class="title-medium">Book a call</h2>
			</Button>
			<Button href="/contact">
				<h2 class="title-medium">Contact</h2>
			</Button>
		</div>
	</div>
	<div class="flex w-full flex-col gap-4 self-start md:col-span-3">
		<div class="lex flex-col items-start gap-4">
			<SearchBox class="mb-4 w-full md:mb-6" bind:searchInput on:input={searchPhotos} />
			<div class="flex max-h-[505px] w-full flex-col gap-4 overflow-y-scroll">
				{#if searchInput && filteredFaqs.length === 0}
					<div class="headline-medium inline w-full py-12">
						<h6 class="">Sorry, we couldn't find your question.</h6>
						<a href="/contact" class="text-tertiary headline-small underline">Ask Us Here!</a>
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
