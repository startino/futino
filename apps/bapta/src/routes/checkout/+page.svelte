<script lang="ts">
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase.types';
	import journeys from '$lib/journeys';
	import { journeysStore } from '$lib/journeysStore';
	import { onMount } from 'svelte';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://ekushmqbxanusqyxyzkk.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdXNobXFieGFudXNxeXh5emtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzODQ1NzMsImV4cCI6MTk5Njk2MDU3M30.RTlWWjf6n2PCDkMdN43B0lBjsXe_aEIfTIs2bDCxfSE',
	);

	async function registerTour(e) {
		console.log('inserting test data');
		let formData = new FormData(e.target);

		let data = {
			fullName: '',
			firstName: '',
			lastName: '',
			contact: '',
			people: 1,
		};

		for (let field of formData) {
			const [key, value]: [string, FormDataEntryValue] = field;
			data[key] = value;
		}

		data.fullName = data.firstName + ' ' + data.lastName;
		await supabase.from('bapta').insert([
			{
				name: data.fullName,
				contact: data.contact,
				people: data.people,
				choice: $journeysStore.toString(),
			},
		]);
	}
</script>

<div
	class="flex flex-col w-full h-full shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 py-40 justify-center place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('/images/safari/18.webp')] bg-cover bg-left">
	<h1 class="font-bold text-primary-dark display-medium">Request Your Tour</h1>

	<hr class="w-40 py-4" />
	<div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
		<div
			class="p-5 rounded-lg shadow-lg shadow-black bg-surface-dark/70 h-fullp-5 prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert prose-main justify-items-center mx-auto">
			<h2>Your Selection:</h2>
			<ul class="text-left">
				{#each $journeysStore as journey}
					<li>{journey} {journeys[journey].duration}</li>
				{/each}
			</ul>
		</div>

		<div
			class="p-5 rounded-lg shadow-lg shadow-black bg-surface-dark/70 h-fullp-5 prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert prose-main justify-items-center mx-auto">
			<form class="flex flex-col gap-5" on:submit|preventDefault={registerTour}>
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
					placeholder="Contact"
					required />
				<input
					class="dark:bg-surface-dark/70 border-black"
					name="people"
					type="number"
					placeholder="people"
					required />
				<button
					type="submit"
					id="register"
					class="p-5 shadow-lg rounded-lg text-center bg-secondary-light dark:bg-secondary-dark text-secondary-on-light dark:text-secondary-on-dark display-small">
					Register
				</button>
			</form>
		</div>
	</div>
</div>
