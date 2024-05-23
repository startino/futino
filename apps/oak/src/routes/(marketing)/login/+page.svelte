<script lang="ts">
	import { Loader2, Send, CheckCircle } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms/client';

	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { AuthShell } from '$lib/components/auth-shell';
	import * as Alert from '$lib/components/ui/alert';
	import { page } from '$app/stores';

	export let data;

	const newEmail = $page.url.searchParams.get('email');

	const confirmationSent = $page.url.searchParams.has('confirmation-sent') && newEmail;

	const { form, enhance, constraints, errors, submitting } = superForm(data.form);
</script>

<AuthShell>
	<form method="POST" use:enhance class="flex items-start justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			{#if confirmationSent}
				<Alert.Root variant="default">
					<Send class="h-4 w-4" />
					<Alert.Title>Verify your email</Alert.Title>
					<Alert.Description
						>We've sent an email to <span class="font-bold">{newEmail}</span> to verify your email address
						and activate your account.</Alert.Description
					>
				</Alert.Root>
			{/if}

			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Login</h1>
				<p class="text-balance text-muted-foreground">
					Enter your email and password below to login to your account
				</p>
			</div>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input
						{...$constraints.email}
						bind:value={$form.email}
						type="email"
						placeholder="m@example.com"
						id="email"
						name="email"
					/>
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input
						type="password"
						{...$constraints.password}
						bind:value={$form.password}
						id="password"
						name="password"
					/>
				</div>
				{#if $errors._errors}
					<span class="text-sm text-destructive">{$errors._errors[0]}</span>
				{/if}
				<Button type="submit" class="w-full">
					{#if $submitting}
						<Loader2 class="animate-spin" />
					{:else}
						Login
					{/if}
				</Button>
			</div>
			<div class="mt-4 text-balance text-center text-sm">
				If your company hasn't created an account yet,
				<a href="/register" class="text-accent underline"> click here to register</a>
			</div>
		</div>
	</form>
</AuthShell>
