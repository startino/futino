<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase.types';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://qnzxoapdhdycrblbeovn.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs',
	);

	let nameInput: string = '';
	let emailInput: string = '';
	let messageInput: string = '';

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

<form
	id="contactform"
	class="flex flex-col gap-8 text-left overflow-x-clip"
	on:submit|preventDefault={submitForm}>
	<div class="relative mt-2 h-fit group overflow-visible mx-1.5">
		<label
			for="name"
			class=" {nameInput
				? 'font-bold text-primary-dark -top-1/2 -translate-y-2 left-0'
				: 'font-normal left-3'} block group-hover:font-bold text-outline-dark group-hover:text-primary-dark absolute top-1/2 -translate-y-1/2 group-hover:-top-1/2 group-hover:-translate-y-2 transition-all"
			>Name</label>
		<h1 class="placeholder">
			{#if !nameInput}
				Bob John
			{/if}
		</h1>
		<input
			class="input"
			id="name"
			name="name"
			type="text"
			bind:value={nameInput}
			form="contactform"
			required />
	</div>

	<div class="relative mt-2 h-fit group overflow-visible mx-1.5">
		<label
			for="email"
			class=" {emailInput
				? 'font-bold text-primary-dark -top-1/2 -translate-y-2 left-0'
				: 'font-normal left-3'} block group-hover:font-bold text-outline-dark group-hover:text-primary-dark absolute top-1/2 -translate-y-1/2 group-hover:-top-1/2 group-hover:-translate-y-2 transition-all"
			>Email</label>
		<h1 class="placeholder">
			{#if !emailInput}
				bob.john123@gmail.com
			{/if}
		</h1>
		<input type="email" required id="email" name="email" bind:value={emailInput} class="input" />
	</div>

	<div class="relative mt-2 h-fit group overflow-visible mx-1.5">
		<label
			for="message"
			class="{messageInput
				? 'font-bold text-primary-dark -top-2 -translate-y-full left-0'
				: 'font-normal left-3 top-2.5'} block group-hover:font-bold text-outline-dark group-hover:text-primary-dark absolute group-hover:-top-2 group-hover:-translate-y-full transition-all"
			>Your message</label>
		<h1
			class="absolute pointer-events-none -left-1/2 invisible group-hover:visible group-hover:left-3 group-hover:right-auto text-left top-2.5 transition-all font-light text-outline-dark">
			{#if !messageInput}
				I want to ask about...
			{/if}
		</h1>
		<textarea
			id="message"
			required
			rows="4"
			name="message"
			bind:value={messageInput}
			class="input" />
	</div>

	<button
		type="submit"
		id="submit"
		class="flex relative border-2 border-primary-dark justify-center tracking-wide items-center py-3 my-1 px-6 font-bold rounded-md shadow-2xl group hover:text-primary-container-on-dark hover:bg-primary-container-dark/60 transition-all duration-300 hover:scale-[103%] text-primary-on-dark bg-primary-dark">
		<h1 class="title-large">Submit</h1>
	</button>
</form>

<style>
	.placeholder {
		@apply absolute pointer-events-none -left-1/2 invisible group-hover:visible group-hover:left-3 group-hover:right-auto text-left top-1/2 -translate-y-1/2 transition-all font-light text-outline-dark;
	}
	.input {
		@apply w-full h-fit px-3 py-3 leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded focus:shadow-glow focus:shadow-tertiary-dark/20 focus:outline-none;
		@apply w-full h-fit px-3 py-3 rounded-sm leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded-r appearance-none;
	}
</style>
