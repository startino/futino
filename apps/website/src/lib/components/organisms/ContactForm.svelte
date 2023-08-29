<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://qnzxoapdhdycrblbeovn.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs',
	);

	async function submitForm(event: any) {
		let rawData = new FormData(event.target);
		console.log(rawData);

		let formData: {
			name: string;
			email: string;
			message: string;
		} = {
			name: 'na',
			email: 'na',
			message: 'na',
		};

		// Assign data values from input elements.
		for (let field of rawData) {
			const [key, value]: [string, FormDataEntryValue] = field;
			formData[key as keyof typeof formData] = value as string;
		}

		const { data, error } = await supabase.from('Contact Forms').insert([
			{
				name: formData.name,
				email: formData.email,
				message: formData.message,
			},
		]);
	}
</script>

<form id="contactform" class="flex flex-col gap-6" on:submit|preventDefault={submitForm}>
	<div>
		<label for="name" class="label">Name</label>
		<input
			class="input"
			id="name"
			name="name"
			type="text"
			form="contactform"
			required
			placeholder="Name" />
	</div>

	<div class="py-4">
		<label for="email" class="label">Email</label>
		<input
			type="email"
			required
			id="email"
			name="email"
			class="input"
			placeholder="bob.john123@gmail.com" />
	</div>

	<div class="">
		<label for="message" class="label">Your message</label>
		<textarea
			id="message"
			required
			rows="4"
			name="message"
			class="input"
			placeholder="I want to ask about..." />
	</div>

	<button
		type="submit"
		id="submit"
		class=" flex relative border-2 border-primary-dark justify-center tracking-wide items-center py-3 my-1 px-6 font-bold rounded-md shadow-2xl group hover:text-primary-container-on-dark hover:bg-primary-container-dark/60 transition-all duration-300 hover:scale-[103%] text-primary-on-dark bg-primary-dark">
		Submit
	</button>
</form>

<style>
	.label {
		@apply block pb-2 font-bold text-left text-primary-dark;
	}
	.input {
		@apply w-full h-fit px-3 py-3 leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded appearance-none;
		@apply w-full h-fit px-3 py-3 rounded-sm leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded-r appearance-none;
	}
</style>
