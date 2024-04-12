<script lang="ts">
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase.types';
	import { journeysStore } from '$lib/journeysStore';
	import JourneyCard from '$lib/components/molecules/JourneyCard.svelte';
	import AccommodationToggle from '../tours/AccommodationToggle.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://qnzxoapdhdycrblbeovn.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs'
	);
	const accommodationOptions = [
		{ label: 'Midrange', index: 0, for: 'midrange' },
		{ label: 'Luxury', index: 1, for: 'luxury' }
	];

	// TODO: Why is this not a type or enum lol
	let standard: number = -1; // 0 is midrange, 1 is Luxury

	onMount(() => {
		console.log($journeysStore);
		if ($journeysStore.length == 0) {
			console.log('No journeys selected');
			goto('/tours');
		} else {
			console.log('Journeys selected');
		}
	});

	async function requestTour(e) {
		console.log('inserting test data');
		let rawData = new FormData(e.target);

		let formData: {
			firstName: string;
			lastName: string;
			email: string;
			whatsapp: string;
			people: string;
			message: string;
		} = {
			firstName: '',
			lastName: '',
			email: '',
			whatsapp: '',
			people: '',
			message: ''
		};

		// Assign data values from input elements.
		for (let field of rawData) {
			const [key, value]: [string, FormDataEntryValue] = field;
			formData[key as keyof typeof formData] = value as string;
		}

		goto('/thank-you');

		// Supabase only has one name property
		let journeys: string = $journeysStore.toString().replaceAll('-', ' ');
		journeys = `${
			standard == -1 ? 'No Preference.' : accommodationOptions[standard].label
		} ${journeys}`;
		const { data, error } = await supabase.from('baptaTours').insert([
			{
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				whatsapp: formData.whatsapp,
				people: formData.people,
				tours: journeys,
				message: formData.message
			}
		]);
		$journeysStore = [];
	}

	function cancelForm() {
		journeysStore.reset();
		goto('/tours');
		$journeysStore = [];
	}
</script>

<div
	class="card-shadow flex h-full w-full grid-rows-2 flex-col place-items-center justify-center border-b border-secondary/40 bg-[url('/images/safari/18.webp')] bg-cover bg-left px-4 py-40 shadow-lg shadow-background lg:grid-cols-2 lg:px-10"
>
	<h1 class="display-medium font-bold text-primary">Request Your Tour</h1>

	<hr class="w-40 py-4" />
	<div class="grid grid-cols-1 place-items-center gap-5 md:grid-cols-5">
		<div
			class="title-large sm:headline-medium lg:display-small col-span-3 h-full justify-items-center rounded-lg bg-surface/70 p-5 shadow-lg shadow-black"
		>
			<h2>Your Selection:</h2>
			<h3 class="body-large mx-auto max-w-xl">
				* Each Journey is only a starting point and is fully customizeable. <br />
				* Prices displayed are estimations and may vary.
			</h3>
			<div class="flex flex-col gap-8 pt-2 text-left">
				{#each $journeysStore as journeyId}
					<JourneyCard {journeyId} />
				{/each}
			</div>
		</div>

		<div
			class="prose-main prose prose-sm prose-invert col-span-2 mx-auto w-full max-w-xl justify-items-center self-start rounded-lg bg-surface/70 p-5 shadow-lg shadow-black sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl"
		>
			<form class="flex flex-col gap-5" on:submit|preventDefault={requestTour}>
				<input
					class="border-black bg-surface/70"
					type="text"
					name="firstName"
					placeholder="First Name *"
					required
				/>
				<input
					class="border-black bg-surface/70"
					name="lastName"
					type="text"
					placeholder="Last Name *"
					required
				/>

				<input
					class="border-black bg-surface/70"
					name="email"
					type="text"
					placeholder="Email *"
					required
				/>
				<input
					class="border-black bg-surface/70"
					name="whatsapp"
					placeholder="WhatsApp"
					type="text"
				/>
				<input
					class="border-black bg-surface/70"
					name="people"
					type="number"
					placeholder="People *"
					required
				/>
				<div class="flex flex-col">
					<label for="message" class="title-large block pt-4 text-left text-primary"
						>Tell us more</label
					>
					<textarea
						id="message"
						rows="4"
						class="border-black bg-surface/70"
						name="message"
						placeholder="I want to ask about..."
					/>
				</div>
				<div class="-ml-2">
					<label for="accomodation" class="title-large ml-2 block pt-4 text-left text-primary"
						>Pick a standard:</label
					>

					<AccommodationToggle promotions={accommodationOptions} bind:activeTabValue={standard} />
				</div>
				<button
					type="submit"
					id="request"
					class="display-small rounded-lg bg-secondary py-2 text-center text-secondary-on shadow-lg"
				>
					Request Quote
				</button>
				<button
					type="reset"
					on:click={() => cancelForm()}
					id="request"
					class="headline-medium rounded-lg bg-surface py-2 text-center uppercase text-surface-on shadow-lg"
				>
					Cancel
				</button>
			</form>
		</div>
	</div>
</div>
