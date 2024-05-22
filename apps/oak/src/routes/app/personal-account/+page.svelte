<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader2 } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { departmentIdSchema, emailSchema } from '$lib/schemas';
	import { getContext } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Combobox } from '$lib/components/ui/combobox';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	export let data;

	const currentProfile = getContext('currentProfile');
	const departments = getContext('departments');

	const emailForm = superForm(data.emailForm, {
		id: 'email',
		validators: zodClient(emailSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				state = 'email-recovery-link-sent';
				emailFormOpen = false;
			}
		}
	});
	const departmentForm = superForm(data.departmentForm, {
		id: 'department',
		resetForm: false,
		validators: zodClient(departmentIdSchema),
		onChange: () => {
			if (departIsTainted($departTainted)) {
				submitDepartment();
			}
		},
		onUpdated: ({ form }) => {
			if (form.valid) {
				console.log(form.data);
				toast.success('Department updated!');
				if (form.data.department_id) {
					$currentProfile.department_id = form.data.department_id;
					$currentProfile.department = $departments.find((d) => d.id === form.data.department_id);
				} else {
					$currentProfile.department_id = null;
					$currentProfile.department = null;
				}
			}
		}
	});

	let state:
		| 'idle'
		| 'password-recovery-link-sent'
		| 'email-recovery-link-sent'
		| 'password-recovering'
		| 'password-reset-error' = 'idle';

	let emailFormOpen = false;

	const {
		form: emailFormData,
		delayed: emailDelayed,
		enhance: emailEnhance,
		isTainted: emailIsTainted,
		tainted: emailTainted
	} = emailForm;

	const {
		form: departFormData,
		submitting: submittingDepart,
		enhance: departEnhance,
		submit: submitDepartment,
		isTainted: departIsTainted,
		tainted: departTainted
	} = departmentForm;

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

	onMount(() => {
		departFormData.update(
			($form) => {
				$form.department_id = $currentProfile.department_id;
				return $form;
			},
			{ taint: false }
		);
	});
</script>

<AlertDialog.Root
	open={state === 'password-recovery-link-sent' || state === 'email-recovery-link-sent'}
>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>
				{#if state === 'password-recovery-link-sent'}
					<span> Reset link sent! </span>
				{/if}

				{#if state === 'email-recovery-link-sent'}
					<span>Confirm your new email address</span>
				{/if}
			</AlertDialog.Title>

			<AlertDialog.Description>
				{#if state === 'password-recovery-link-sent'}
					<span>
						We've sent a password reset link to your email. This might take a couple of minutes
						before you receive it. Use this link to update your password.
					</span>
				{/if}

				{#if state === 'email-recovery-link-sent'}
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
				<form action="?/updateEmail" method="post" class="space-y-1" use:emailEnhance>
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
						<Form.Button
							size="sm"
							type="submit"
							disabled={!emailIsTainted($emailTainted) || $emailDelayed}
						>
							{#if $emailDelayed}
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
			<form
				action="?/updateDepartment"
				method="post"
				use:departEnhance
				class="flex items-center gap-2"
			>
				<Form.Field form={departmentForm} name="department_id">
					<Form.Control let:attrs>
						<Combobox
							disabled={$submittingDepart}
							loading={$submittingDepart}
							placeholder="Select a department"
							items={$departments.map((d) => ({ value: d.id, label: d.name }))}
							{attrs}
							bind:value={$departFormData.department_id}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</form>
		</div>

		<div class="grid gap-2">
			<h2 class="font-bold">Supervisor</h2>
			{#if $currentProfile.approver_id}
				<p>{$currentProfile.approver.full_name}</p>
			{:else}
				<p>No supervisor</p>
			{/if}
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
