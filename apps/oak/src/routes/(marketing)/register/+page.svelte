<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import Icon from '$lib/components/Icon.svelte';
	import { InputField } from '$lib/components/ui/input-field';

	export let data: PageData;

	const { form, enhance, constraints, submitting, errors } = superForm(data.form, {
		dataType: 'json'
	});

	const steps = ['Company Details', 'Admin Credentials'];

	let currentStep = 0;

	$: if ($errors.company && !$submitting) {
		currentStep = 0;
	}

	const prev = () => --currentStep;
	const next = () => ++currentStep;

	const addItem = (target: string) => {
		form.update((values) => {
			const items = [
				...values.company[target],
				target === 'departments' ? { name: '', number: 0 } : 0
			];
			return { ...values, company: { ...values.company, [target]: items } };
		});
	};

	const removeItem = (i, target: string) => {
		form.update((values) => {
			const items = values.company[target].filter((_, index) => index !== i);
			return { ...values, company: { ...values.company, [target]: items } };
		});
	};
</script>

<main class="my-32">
	<h1 class="mt-24 text-center">Register for an account</h1>

	<form use:enhance method="POST" class="mx-auto grid w-full max-w-2xl gap-5">
		<div class="mx-auto flex gap-4">
			{#each steps as s, i}
				<Button variant="secondary" disabled={i !== currentStep}>{s}</Button>
			{/each}
		</div>

		{#if currentStep === 0}
			<InputField
				name="name"
				labelText="Company Name"
				error={$errors.company?.name}
				bind:value={$form.company.name}
				{...$constraints.company.name}
			/>
			<div class="grid gap-2">
				<div class="items-heading">Departments (optional)</div>

				{#each $form.company.departments as _, i}
					<div class="flex gap-3">
						<div class="flex-1">
							<InputField
								name={`department-name-${i}`}
								labelText="Name"
								error={$errors.company?.departments && $errors.company.departments[i].name}
								bind:value={$form.company.departments[i].name}
								{...$constraints.company.departments.name}
							/>
						</div>
						<div>
							<InputField
								name={`department-number-${i}`}
								labelText="Number"
								type="number"
								error={$errors.company?.departments && $errors.company.departments[i].number}
								on:change={(e) => {
									$form.company.departments[i].number = +e.target.value;
								}}
								{...$constraints.company.departments.number}
							/>
						</div>
						<button type="button" on:click={() => removeItem(i, 'departments')}
							><Icon name="Trash" /></button
						>
					</div>
				{/each}
				<Button type="button" on:click={() => addItem('departments')} class="justify-self-start"
					>add department</Button
				>
			</div>

			<div class="grid gap-2">
				<div class="items-heading">Projects (optional)</div>

				{#each $form.company.projects as _, i}
					<div class="flex gap-3">
						<div class="flex-1">
							<InputField
								name={`project-name-${i}`}
								labelText="Name"
								error={$errors.company?.projects && $errors.company.projects[i]}
								bind:value={$form.company.projects[i]}
								{...$constraints.company.projects}
							/>
						</div>
						<button type="button" on:click={() => removeItem(i, 'projects')}>
							<Icon name="Trash" />
						</button>
					</div>
				{/each}
				<Button type="button" on:click={() => addItem('projects')} class="justify-self-start"
					>add project</Button
				>
			</div>

			<div class="grid gap-2">
				<div class="items-heading">Accounts (optional)</div>

				{#each $form.company.accounts as _, i}
					<div class="flex gap-3">
						<div class="flex-1">
							<InputField
								name={`account-${i}`}
								labelText="Number"
								type="number"
								error={$errors.company?.accounts && $errors.company.accounts[i]}
								on:change={(e) => {
									$form.company.accounts[i] = +e.target.value;
								}}
								{...$constraints.company.accounts}
							/>
						</div>
						<button
							type="button"
							on:click={() => removeItem(i, 'accounts')}
							class="translate-y-1/2 self-center"><Icon name="Trash" /></button
						>
					</div>
				{/each}
				<Button type="button" on:click={() => addItem('accounts')} class="justify-self-start"
					>add account</Button
				>
			</div>
		{:else if currentStep === 1}
			<InputField
				name="fullName"
				labelText="Full Name"
				error={$errors.user?.fullName && $errors.user.fullName}
				bind:value={$form.user.fullName}
				{...$constraints.user.fullName}
			/>

			<InputField
				name="email"
				labelText="Email"
				error={$errors.user?.email && $errors.user.email}
				bind:value={$form.user.email}
				{...$constraints.user.email}
			/>

			<InputField
				type="password"
				name="password"
				labelText="Password"
				error={$errors.user?.password && $errors.user.password}
				bind:value={$form.user.password}
				{...$constraints.user.password}
			/>

			<InputField
				type="password"
				name="confirmPassword"
				labelText="Confirm Password"
				error={$errors.user?.confirmPassword && $errors.user.confirmPassword}
				bind:value={$form.user.confirmPassword}
				{...$constraints.user.confirmPassword}
			/>

			{#if $errors?.user && $errors.user._errors}
				<span class="tex-sm text-destructive">
					{$errors.user._errors[0]}
				</span>
			{/if}
		{/if}

		<div class="flex justify-between">
			<Button variant="secondary" type="button" on:click={prev} disabled={currentStep === 0}
				>previous</Button
			>
			<Button
				variant="secondary"
				type="button"
				on:click={next}
				disabled={currentStep === steps.length - 1}>Next</Button
			>
		</div>
		{#if $errors && $errors._errors}
			<span class="tex-sm text-destructive">
				{$errors._errors[0]}
			</span>
		{/if}
		<Button type="submit" disabled={currentStep !== steps.length - 1 || $submitting}
			>{$submitting ? 'submitting...' : 'Submit'}</Button
		>
	</form>
</main>

<style lang="postcss">
	.items-heading {
		@apply text-base font-bold;
	}
</style>
