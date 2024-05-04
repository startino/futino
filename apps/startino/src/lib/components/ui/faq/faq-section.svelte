<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import FaqItem from './faq-item.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

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

<section
	class="my-12 flex grid w-full max-w-7xl grid-cols-1 flex-col items-center justify-center gap-3 px-5 sm:px-10 md:grid-cols-5"
>
	<div
		class="col-span-2 flex h-fit flex-col items-center gap-y-4 self-start text-surface-on md:items-start md:text-left"
	>
		<h1 class="text-2xl font-semibold leading-tight md:text-4xl">
			Your Questions, <br class="hidden md:flex" /> Answered
		</h1>
		<h1 class="text-md hidden md:flex">
			Find clarity and confidence through some frequently asked questions. If you can't find your
			answer there, we're open to answer any questions.
		</h1>
		<div class="my-2 mb-6 flex flex-row gap-4">
			<Button href="#contact">
				<h2 class="title-medium">Book a call</h2>
			</Button>
			<Button href="#contact">
				<h2 class="title-medium">Contact</h2>
			</Button>
		</div>
	</div>
	<div class="flex w-full flex-col gap-4 self-start md:col-span-3">
		<div class="flex flex-col items-start gap-4">
			<ScrollArea class="flex max-h-[500px]  flex-col gap-12">
				<div class="flex w-max flex-col space-y-4">
					{#if searchInput && filteredFaqs.length === 0}
						<div class="headline-medium inline w-full py-12">
							<h1 class="">Sorry, we couldn't find your question.</h1>
							<a href="#contact" class="headline-small text-tertiary underline">Ask Us Here!</a>
						</div>
					{:else if filteredFaqs.length > 0}
						{#each filteredFaqs as { question, answer }}
							<FaqItem {question} {answer} isOpen={question == questionEntry} />
						{/each}
					{:else}
						{#each faqs as { question, answer }}
							<FaqItem {question} {answer} isOpen={question == questionEntry} />
						{/each}
					{/if}
				</div>
			</ScrollArea>
		</div>
	</div>
</section>
