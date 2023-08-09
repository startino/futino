<script lang="ts">
	import OutlineButton from '../molecules/OutlineButton.svelte';

	function onSubmit(event: { target: HTMLFormElement | undefined }) {
		let formData = new FormData(event.target);

		let data: [string, FormDataEntryValue][] = [];
		for (let field of formData) {
			let [key, value]: [string, FormDataEntryValue] = field;
			data.push(field);
		}
		console.log(formData);
	}
</script>

<form class=" space-y-5 py-6" on:submit|preventDefault={onSubmit}>
	<label class="label" for="asd">Name</label>
	<input class="input required:text-black" required id="asd" type="text" placeholder="Bob John" />
	<div>
		<label class="label" for="name">Name</label>
		<input
			class="input required:text-black"
			required
			id="name"
			type="text"
			placeholder="Bob John" />
	</div>

	<div class="">
		<label for="mode_of_contact" class="label">Prefered Method of Contact</label>
		<select id="mode_of_contact" class="input">
			<option class="" selected value="whatsapp">WhatsApp</option>
			<option value="email">Email</option>
			<option value="mobile">Mobile Number</option>
			<option value="mobile">Zoom?</option>
			<option value="mobile">Discord???</option>
		</select>
	</div>
	<div class="">
		<label for="message" class="label">Additional Requests</label>
		<textarea id="message" rows="4" class="input" placeholder="I want to ask about..." />
	</div>

	<button class="my-5" type="submit">
		submit button for now
		<OutlineButton>
			<h1 class="title-large px-5 py-2">Request Quote</h1>
		</OutlineButton>
	</button>
</form>

<style>
	.label {
		@apply block pt-4 pb-2 font-bold text-left text-primary-dark;
	}
	.input {
		@apply w-full h-full px-3 py-2 leading-tight text-surface-on-dark bg-surface-dark border border-primary-dark placeholder:text-outline-dark/90 rounded-md;
	}
</style>
