<script>
	import OutlineButton from '../molecules/OutlineButton.svelte';
</script>

<form class="space-y-6 py-6">
	<div>
		<label class="label" for="name">Name</label>
		<input class="input" id="name" type="text" placeholder="Bob John" />
	</div>

	<div>
		<label for="email" class="label">Email</label>
		<div class="flex">
			<span
				class="inline-flex items-center px-3 body-small text-secondary-on-dark bg-secondary-dark border border-r-0 rounded-l">
				@
			</span>
			<input
				type="text"
				id="website-admin"
				class="input rounded-l-none"
				placeholder="bob.john123@gmail.com" />
		</div>
	</div>

	<label class="label" for="name">Subject</label>
	<input class="input" id="subject" type="text" placeholder="Water during safari" />

	<label for="message" class="label">Your message</label>
	<textarea id="message" rows="4" class="input" placeholder="I want to ask about..." />

	<div class="w-fit mx-auto p-6">
		<OutlineButton>
			<h1 class="title-large p-3">Submit</h1>
		</OutlineButton>
	</div>
</form>

<style>
	.icon {
	}
	.label {
		@apply block pt-4 pb-2 font-bold text-left text-primary-dark;
	}
	.input {
		@apply w-full h-full px-3 py-2 leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded-r appearance-none;
	}
</style>
