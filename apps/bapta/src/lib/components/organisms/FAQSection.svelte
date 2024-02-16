<script lang="ts">
	import FAQCard from '../molecules/FAQCard.svelte';
	import OutlineButton from '../molecules/OutlineButton.svelte';
	import SearchBox from '../molecules/SearchBox.svelte';
	import { MessageCircle } from 'lucide-svelte';

	// Gets the Frequently Asked Questions by parent component
	export let faqs: {
		index: number;
		question: string;
		answer: string;
	}[] = [];
	let activeEntry: number;

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

<section class="section relative overflow-hidden" id="faqs">
	<div
		class="absolute bottom-0 h-36 w-screen bg-gradient-to-t from-surface-variant to-transparent"
	/>
	<div class="inner-section grid h-[500px] grid-cols-1 items-center gap-3 md:grid-cols-3">
		<div
			class="col-span-1 flex flex-col items-center gap-y-4 self-start text-surface-on md:items-start md:text-left"
		>
			<h1 class="headline-medium md:display-medium font-semibold leading-tight">
				Your Safari Questions, Answered
			</h1>
			<h1 class="body-large hidden md:flex">
				Find Clarity and Confidence in Planning Your Unforgettable African Adventure.
			</h1>

			<OutlineButton href="/contact" class="py-2">
				<h1 class="title-small font-bold">Contact us</h1>
			</OutlineButton>
			<OutlineButton href="https://wa.me/+255757755174">
				<span class="flex gap-2">Text Us On WhatsApp <MessageCircle /></span>
			</OutlineButton>
		</div>
		<div class="col-span-2 flex h-screen flex-col items-center gap-4">
			<SearchBox class="mb-4 w-full" bind:searchInput on:input={searchPhotos} />

			{#if searchInput && filteredFaqs.length === 0}
				<section>
					<div class="display-small inline w-full py-12">
						<h1 class="">Sorry, we couldn't find your question.</h1>
						<a href="/contact" class="text-tertiary underline">Try Asking Us Here</a>
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
	</div>
</section>
