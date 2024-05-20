<script lang="ts">
	import { Loader2 } from 'lucide-svelte';

	import { getContext } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	export let data;

	let state:
		| 'idle'
		| 'password-recovery-link-sent'
		| 'email-recovery-link-sent'
		| 'email-recovering'
		| 'password-recovering'
		| 'password-reset-error'
		| 'email-change-error' = 'idle';

	$: isLoading = state === 'email-recovering' || state === 'password-recovering';

	const currentProfile = getContext('currentProfile');

	const resetPassword = async () => {
		state = 'password-recovering';
		const response = await fetch('/api/reset-password', { method: 'POST' });
		const success = (await response.json()) as boolean;

		if (success) {
			state = 'email-recovery-link-sent';
		} else {
			state = 'email-change-error';
		}
	};
	const changeEmail = async () => {
		state = 'email-recovering';
		const response = await fetch('/api/reset-password', { method: 'POST' });
		const success = (await response.json()) as boolean;

		if (success) {
			state = 'password-recovery-link-sent';
		} else {
			state = 'password-reset-error';
		}
	};
</script>

<Card.Root class="mx-auto max-w-screen-md">
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">Personal Account</Card.Title>
	</Card.Header>

	<Card.Content class="grid gap-6">
		<div class="grid gap-2">
			<h2 class="font-bold">Full Name</h2>
			<p>{$currentProfile.full_name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Email</h2>
			<p>{data.email}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Role</h2>
			<p>{$currentProfile.roles}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Department</h2>
			<p>{$currentProfile.department.name}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Supervisor</h2>
			<p>{$currentProfile.approver.full_name}</p>
		</div>

		<div class="flex gap-4">
			<Button variant="outline" disabled={isLoading} on:click={resetPassword} class="flex gap-2">
				{#if state === 'password-recovering'}
					<Loader2 class="animate-spin" />
				{/if}
				Reset password
			</Button>
			<Separator orientation="vertical" />
			<Button variant="outline" disabled={isLoading} on:click={changeEmail} class="flex gap-2">
				{#if state === 'email-recovering'}
					<Loader2 class="animate-spin" />
				{/if}
				Change email</Button
			>
		</div>
	</Card.Content>
</Card.Root>
