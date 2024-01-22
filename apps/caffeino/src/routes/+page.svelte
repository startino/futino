<script lang="ts">
	import { createClient } from '@supabase/supabase-js';

	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { Icon } from '$lib/components/ui/icon';

	const supabase = createClient(
		'https://qnzxoapdhdycrblbeovn.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs'
	);

	let nameInput: string = '';
	let emailInput: string = '';
	let phoneInput: string = '';
	let companyNameInput: string = '';
	let messageInput: string = '';

	let formSubmitted = false;
	let submitting = false;
	let hasError = false;

	async function submitForm(event: any) {
		submitting = true;
		hasError = false;

		const { data, error } = await supabase.from('Contact Forms').insert([
			{
				name: nameInput,
				email: emailInput,
				message: messageInput,
				phone: phoneInput,
				companyName: companyNameInput,
				website: 'caffeino'
			}
		]);

		if (error) hasError = true;

		formSubmitted = true;
		submitting = false;
		event.target.reset();
	}
</script>

<section
	class="grid min-h-dvh place-content-center items-center justify-items-center gap-4 text-center md:grid-cols-2 md:grid-rows-[repeat(2,_auto)] md:justify-items-end md:gap-0 md:text-left"
>
	<img src="/logo.png" alt="logo" />

	<ul class="row-start-3 grid gap-4 font-light md:row-start-2 md:justify-self-center">
		<li class="flex items-center gap-2">
			<Icon icon="email" fillColor="#674230" width={42} height={42} /> jorge.lewis@futi.no
		</li>
		<li class="flex items-center gap-2">
			<Icon icon="whatsapp" fillColor="#674230" width={42} height={42} /> +852 9747 3013
		</li>
	</ul>

	<div>
		<h1 class="mb-2 text-[2rem]/8 font-bold md:text-[2.375rem]/9">
			Brew your digital prisence with a custom website
		</h1>

		<p class="mb-4">We include everything you'd ever need for a website</p>

		<Button
			href="/#contact"
			class="bg-foreground hover:bg-foreground/90 px-8 py-6 text-xl uppercase">Contact now</Button
		>
	</div>
</section>

<section class="mb-20">
	<h2 id="contact" class="mb-12 text-center text-[2rem]/8 font-bold md:text-[2.375rem]/9">
		Contact Us
	</h2>

	<form on:submit|preventDefault={submitForm} action="/" class="mx-auto grid max-w-lg gap-6">
		<Input
			bind:value={nameInput}
			name="name"
			required
			placeholder="Full name"
			class="border-foreground focus:border-none"
		/>
		<Input
			bind:value={emailInput}
			name="email"
			required
			type="email"
			placeholder="email"
			class="border-foreground focus:border-none"
		/>
		<Input
			bind:value={phoneInput}
			name="phone"
			placeholder="Phone number"
			required
			class="border-foreground focus:border-none"
		/>
		<Input
			bind:value={companyNameInput}
			name="companyName"
			placeholder="Company Name"
			class="border-foreground focus:border-none"
		/>
		<Textarea
			bind:value={messageInput}
			required
			placeholder="Type you message here..."
			class="border-foreground focus:border-none"
		></Textarea>
		<Button type="submit">{submitting ? 'Sending...' : 'Send'}</Button>

		{#if formSubmitted && !hasError}
			<p class="text-base text-[green]">Your message has been sent. Thank you for contacting us!</p>
		{/if}

		{#if hasError}
			<p class="text-destructive text-base">Something went wrong...Please try again</p>
		{/if}
	</form>
</section>

<style lang="postcss">
	h1 {
		background: -webkit-linear-gradient(hsl(19, 41%, 52%), hsl(20 36% 30%));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	input {
		display: none;
	}
</style>
