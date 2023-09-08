<script lang="ts">
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase.types';
	import journeys from '$lib/journeys';
	import { journeysStore } from '$lib/journeysStore';
	import { onMount } from 'svelte';
	import JourneyCard from '$lib/components/molecules/JourneyCard.svelte';
	import AccommodationToggle from '../tours/AccommodationToggle.svelte';
	import { goto } from '$app/navigation';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://ekushmqbxanusqyxyzkk.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdXNobXFieGFudXNxeXh5emtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzODQ1NzMsImV4cCI6MTk5Njk2MDU3M30.RTlWWjf6n2PCDkMdN43B0lBjsXe_aEIfTIs2bDCxfSE',
	);
	const accommodationOptions = [
		{ label: 'Midrange', index: 0, for: 'midrange' },
		{ label: 'Luxury', index: 1, for: 'luxury' },
	];

	let standard: number = 0; // 0 is midrange, 1 is Luxury

	async function requestTour(e) {
		console.log('inserting test data');
		let formData = new FormData(e.target);

		let data = {
			firstName: '',
			lastName: '',
			contact: '',
			people: 1,
		};

		for (let field of formData) {
			const [key, value]: [string, FormDataEntryValue] = field;
			data[key] = value;
		}

		goto('/thank-you');

		// Supabase only has one name property
		let fullName = data.firstName + ' ' + data.lastName;
		let journeys = $journeysStore.toString().replaceAll('-', ' ');
		await supabase.from('bapta').insert([
			{
				name: fullName,
				contact: data.contact,
				people: data.people,
				choice: journeys,
			},
		]);
		journeysStore.reset();
	}
</script>

<div
	class="flex flex-col w-full h-full shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-4 lg:px-10 py-40 justify-center place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('/images/safari/18.webp')] bg-cover bg-left">
	<h1 class="font-bold text-primary-dark display-medium">Request Your Tour</h1>

	<hr class="w-40 py-4" />
	<div class="grid grid-cols-1 md:grid-cols-5 place-items-center gap-5">
		<div
			class="rounded-lg shadow-lg col-span-3 shadow-black bg-surface-dark/70 h-full p-5 title-large sm:headline-medium lg:display-small justify-items-center">
			<h2>Your Selection:</h2>
			<h3 class="body-large max-w-xl mx-auto">
				* Each Journey is only a starting point and is fully customizeable. <br />
				* Prices displayed are estimations and may vary.
			</h3>
			<div class="text-left flex flex-col gap-8 pt-2">
				{#each $journeysStore as journeyId}
					<JourneyCard {journeyId} />
				{/each}
			</div>
		</div>

		<div
			class="p-5 rounded-lg self-start shadow-lg w-full max-w-xl col-span-2 shadow-black bg-surface-dark/70 prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert prose-main justify-items-center mx-auto">
			<form class="flex flex-col gap-5" on:submit|preventDefault={requestTour}>
				<input
					class="dark:bg-surface-dark/70 border-black"
					type="text"
					name="firstName"
					placeholder="First Name"
					required />
				<input
					class="dark:bg-surface-dark/70 border-black"
					name="lastName"
					type="text"
					placeholder="Last Name"
					required />

				<input
					class="dark:bg-surface-dark/70 border-black"
					name="contact"
					type="text"
					placeholder="Email"
					required />
				<input
					class="dark:bg-surface-dark/70 border-black"
					name="people"
					type="number"
					placeholder="People"
					required />
				<div class="flex flex-col">
					<label for="message" class="block pt-4 title-large text-left text-primary-dark"
						>Tell us more</label>
					<textarea
						id="message"
						rows="4"
						class="dark:bg-surface-dark/70 border-black"
						placeholder="I want to ask about..." />
				</div>
				<div class="-ml-2">
					<AccommodationToggle promotions={accommodationOptions} bind:activeTabValue={standard} />
				</div>
				<button
					type="submit"
					id="request"
					class="py-2 shadow-lg rounded-lg text-center bg-secondary-light dark:bg-secondary-dark text-secondary-on-light dark:text-secondary-on-dark display-small">
					Request Quote
				</button>
			</form>
		</div>
	</div>
</div>
