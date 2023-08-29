<script>
	import Button from '../atoms/Button.svelte';
</script>

<form class="flex flex-col gap-4">
	<div>
		<input class="input" id="name" type="text" placeholder="Name" />
	</div>

	<div>
		<input
			type="text"
			id="website-admin"
			class="input rounded-l-none"
			placeholder="Email or WhatsApp" />
	</div>

	<div class="">
		<input class="input" id="subject" type="text" placeholder="Subject" />
	</div>

	<div class="">
		<textarea id="message" rows="4" class="input" placeholder="I want to ask about..." />
	</div>

	<div class="py-4">
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
		@apply w-full h-fit px-3 py-3 leading-tight text-secondary-dark bg-surface-dark border border-primary-dark rounded appearance-none;
	}
</style>
