<script>
	import OutlineButton from '../molecules/OutlineButton.svelte';
</script>

<form class=" space-y-5 py-6">
	<div>
		<label class="label" for="name">Name</label>
		<input class="input" id="name" type="text" placeholder="Bob John" />
	</div>

	<div class="">
		<label for="mode_of_contact" class="label">Prefered Method of Contact</label>
		<select id="mode_of_contact" class="input">
			<option class="" selected>Choose a Mode of Contact</option>
			<option value="whatsapp">WhatsApp</option>
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

	<div class="my-5">
		<OutlineButton>
			<h1 class="title-large px-5 py-2">Request Quote</h1>
		</OutlineButton>
	</div>
</form>

<style>
	.label {
		@apply block pt-4 pb-2 font-bold text-left text-primary-dark;
	}
	.input {
		@apply w-full h-full px-3 py-2 leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded-r;
	}
</style>
