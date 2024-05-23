<script lang="ts">
	import { Loader2 } from 'lucide-svelte';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { superForm } from 'sveltekit-superforms/client';
	import { registrationSchema } from '$lib/schemas';
	import AuthShell from '$lib/components/auth-shell/auth-shell.svelte';

	export let data;

	const { form, enhance, validate, constraints, errors, submitting } = superForm(data.form, {
		dataType: 'json',
		validators: zodClient(registrationSchema)
	});

	let step = 1;

	const moveTo = async (newStep: 1 | 2) => {
		if (newStep == 2) {
			const result = await validate('organization');

			if (result) return;
		}

		step = newStep;
	};
</script>

<AuthShell>
	<form method="POST" use:enhance class="grid w-full max-w-sm items-start justify-center py-12">
		<div class="mx-auto grid gap-10">
			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Register your company</h1>
				<p class="text-balance text-muted-foreground">
					If your admin already created an account, <a href="/login" class="text-accent underline"
						>login here</a
					>
				</p>
			</div>

			<div
				class="relative grid w-[350px] grid-cols-[auto_1fr_auto] grid-rows-2 items-center justify-items-center"
			>
				<h1 class="col-start-1 row-start-1 font-bold">Company Details</h1>
				<div class="row-start-2 flex w-full items-center">
					<span class="bg-tranparent h-1 flex-1" />
					<span
						class:bg-card-foreground={step == 1}
						class:text-card={step == 1}
						class="grid aspect-1 w-12 place-items-center rounded-full bg-card text-xl">1</span
					>
					<span class="h-1 flex-1 bg-foreground" />
				</div>

				<span class="col-start-2 row-start-2 h-1 w-full bg-foreground" />

				<h1 class="col-start-3 row-start-1 font-bold">Admin Details</h1>
				<div class="col-start-3 row-start-2 flex w-full items-center">
					<span class="h-1 flex-1 bg-foreground" />
					<span
						class:bg-card-foreground={step == 2}
						class:text-card={step == 2}
						class="grid aspect-1 w-12 place-items-center rounded-full bg-card text-xl">2</span
					>
					<span class="bg-tranparent h-1 flex-1" />
				</div>
			</div>
			<div class="grid gap-4">
				{#if step == 1}
					<div class="grid gap-2">
						<Label>Company Name</Label>
						<Input
							bind:value={$form.organization.name}
							name="organizationName"
							aria-invalid={$errors.organization?.name ? true : undefined}
							{...$constraints.organization.name}
						/>
						{#if $errors.organization?.name}
							<p class="text-sm text-destructive">{$errors.organization.name[0]}</p>
						{/if}
					</div>
				{:else}
					<div class="grid gap-2">
						<Label>Full Name</Label>
						<Input
							bind:value={$form.user.fullName}
							name="fullname"
							aria-invalid={$errors.user?.fullName ? true : undefined}
							{...$constraints.user.fullName}
						/>
						{#if $errors.user?.fullName}
							<p class="text-sm text-destructive">{$errors.user.fullName[0]}</p>
						{/if}
					</div>

					<div class="grid gap-2">
						<Label>Email</Label>
						<Input
							type="email"
							bind:value={$form.user.email}
							name="email"
							aria-invalid={$errors.user?.email ? true : undefined}
							{...$constraints.user.email}
						/>
						{#if $errors.user?.email}
							<p class="text-sm text-destructive">{$errors.user.email[0]}</p>
						{/if}
					</div>

					<div class="grid gap-2">
						<Label>Password</Label>
						<Input
							type="password"
							bind:value={$form.user.password}
							name="password"
							aria-invalid={$errors.user?.password ? true : undefined}
							{...$constraints.user.password}
						/>
						{#if $errors.user?.password}
							<p class="text-sm text-destructive">{$errors.user.password[0]}</p>
						{/if}
					</div>

					<div class="grid gap-2">
						<Label>Confirm password</Label>
						<Input
							type="password"
							bind:value={$form.user.confirmPassword}
							name="confirmPassword"
							aria-invalid={$errors.user?.confirmPassword ? true : undefined}
							{...$constraints.user.confirmPassword}
						/>
						{#if $errors.user?.confirmPassword}
							<p class="text-sm text-destructive">{$errors.user.confirmPassword[0]}</p>
						{/if}
					</div>

					{#if $errors._errors}
						<p class="text-sm text-destructive">{$errors._errors[0]}</p>
					{/if}

					<Button type="submit">
						{#if $submitting}
							<Loader2 class="animate-spin" />
						{:else}
							Submit
						{/if}
					</Button>
				{/if}
				<div class="flex justify-between">
					<Button disabled={step == 1} variant="outline" on:click={() => moveTo(1)}>Prev</Button>
					<Button disabled={step == 2} variant="outline" on:click={() => moveTo(2)}>Next</Button>
				</div>
			</div>
		</div>
	</form>
</AuthShell>
