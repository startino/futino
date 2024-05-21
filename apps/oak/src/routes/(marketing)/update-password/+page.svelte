<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Loader2 } from 'lucide-svelte';

	import { AuthShell } from '$lib/components/auth-shell';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { resetPasswordSchema } from '$lib/schemas';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(resetPasswordSchema)
	});

	const { form: formData, delayed, errors, enhance } = form;
</script>

<AuthShell>
	<form method="post" use:enhance class="grid w-full max-w-sm content-start gap-2 p-6">
		<h1 class="text-3xl font-bold">Update Your Password</h1>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>New password</Form.Label>
				<Input type="password" bind:value={$formData.password} {...attrs} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="confirmPassword">
			<Form.Control let:attrs>
				<Form.Label>Confirm new password</Form.Label>
				<Input type="password" bind:value={$formData.confirmPassword} {...attrs} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		{#if $errors._errors}
			<span class="text-sm text-destructive">{$errors._errors[0]}</span>
		{/if}

		<Button type="submit">
			{#if $delayed}
				<Loader2 class="animate-spin" />
			{:else}
				submit
			{/if}
		</Button>
	</form>
</AuthShell>
