<script lang="ts">
	import { Loader2 } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { emailSchema } from '$lib/schemas';
	import { getContext } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	export let data;

	const currentProfile = getContext('currentProfile');
	const emailForm = superForm(data.emailForm, { id: 'email', validators: zodClient(emailSchema) });

	let state:
		| 'idle'
		| 'password-recovery-link-sent'
		| 'email-recovery-link-sent'
		| 'password-recovering'
		| 'password-reset-error' = 'idle';

	let emailFormOpen = false;

	const { form: emailFormData, delayed, isTainted, enhance, tainted } = emailForm;

	const resetPassword = async () => {
		state = 'password-recovering';
		const response = await fetch('/api/reset-password', { method: 'POST' });
		const success = (await response.json()) as boolean;

		if (success) {
			state = 'password-recovery-link-sent';
		} else {
			state = 'password-reset-error';
		}
	};
</script>

<AlertDialog.Root
	open={state === 'password-recovery-link-sent' || state === 'email-recovery-link-sent'}
>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Description>
				{#if state === 'password-recovery-link-sent'}
					<AlertDialog.Title>Reset link sent!</AlertDialog.Title>
					<span>
						We've sent a password reset link to your email. This might take a couple of minutes
						before you receive it. Use this link to update your password.
					</span>
				{/if}

				{#if state === 'email-recovery-link-sent'}
					<AlertDialog.Title
						>Confirm your new email <address></address></AlertDialog.Title
					>
					<span>We've sent a confirmation email to verify your email address.</span>
				{/if}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Action>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>

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
			<p class="flex items-center gap-2">
				{data.email}
				{#if !emailFormOpen}
					<Button
						on:click={() => {
							emailFormOpen = true;
						}}
						size="sm"
						variant="outline">change</Button
					>
				{/if}
			</p>

			{#if emailFormOpen}
				<form action="?/updateEmail" method="post" class="space-y-1" use:enhance>
					<Form.Field form={emailForm} name="email">
						<Form.Control let:attrs>
							<Form.Label>Enter your new email</Form.Label>
							<Input
								type="email"
								placeholder="example@email.com"
								bind:value={$emailFormData.email}
								{...attrs}
							/>
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<div class="flex gap-2">
						<Form.Button size="sm" type="submit" disabled={!isTainted($tainted) || $delayed}>
							{#if $delayed}
								<Loader2 class="animate-spin" />
							{:else}
								Update
							{/if}
						</Form.Button>

						<Button variant="outline" size="sm" on:click={() => (emailFormOpen = false)}
							>Discard</Button
						>
					</div>
				</form>
			{/if}
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Role</h2>
			<p>{$currentProfile.roles}</p>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Department</h2>
			{#if $currentProfile.department}
				<p>{$currentProfile.department.name}</p>
			{:else}
				<p>None set</p>
			{/if}
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Supervisor</h2>
			<p>{$currentProfile.approver.full_name}</p>
		</div>

		<Button
			variant="outline"
			disabled={state === 'password-recovering'}
			on:click={resetPassword}
			class="flex max-w-fit gap-2"
		>
			{#if state === 'password-recovering'}
				<Loader2 class="animate-spin" />
			{:else}
				Reset password
			{/if}
		</Button>
	</Card.Content>
</Card.Root>
