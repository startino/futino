<script>
	import Button from '../atoms/Button.svelte';
</script>

<form class="flex flex-col gap-6">
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

	<div class="">
		<label class="label" for="name">Subject</label>
		<input class="input" id="subject" type="text" placeholder="Water during safari" />
	</div>

	<div class="">
		<label for="message" class="label">Your message</label>
		<textarea id="message" rows="4" class="input" placeholder="I want to ask about..." />
	</div>

	<div class="w-fit mx-auto py-4">
		<Button>
			<h1 class="title-large px-3 py-1">Submit</h1>
		</Button>
	</div>
</form>

<style>
	.label {
		@apply block pt-4 pb-2 font-bold text-left text-primary-dark;
	}
	.input {
		@apply w-full h-fit px-3 py-3 leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded-r appearance-none;
	}
</style>
