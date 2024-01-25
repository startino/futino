<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Icon from '$lib/components/Icon.svelte';

	export let data: PageData;

	const { form, enhance, constraints, submitting } = superForm(data.form, { dataType: 'json' });

	const steps = ['Company Details', 'Admin Credentials'];

	let currentStep = 0;

	const prev = () => --currentStep;
	const next = () => ++currentStep;

	const addItem = (target: string) => {
		form.update((values) => {
			const items = [
				...values.company[target],
				target === 'departments' ? { name: '', number: 0 } : ''
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
			<div>
				<label for="name">Company Name</label>
				<Input type="text" name="name" bind:value={$form.company.name} id="name" />
			</div>

			<div class="grid gap-2">
				<div class="items-heading">Departments (optional)</div>

				{#each $form.company.departments as _, i}
					<div class="flex gap-3">
						<div class="flex-1">
							<label for={`department-name-${i}`}>Name</label>
							<Input
								id={`department-name-${i}`}
								type="text"
								name={`department-${i}`}
								bind:value={$form.company.departments[i].name}
								{...$constraints.company.departments.name}
							/>
						</div>
						<div>
							<label for={`department-number-${i}`}>Number</label>

							<Input
								id={`department-number-${i}`}
								type="number"
								name={`department-number-${i}`}
								on:change={(e) => {
									$form.company.departments[i].number = +e.target.value;
								}}
								{...$constraints.company.departments.number}
							/>
						</div>
						<button
							type="button"
							on:click={() => removeItem(i, 'departments')}
							class="translate-y-1/2 self-center"><Icon name="Trash" /></button
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
							<label for={`project-name-${i}`}>Name</label>
							<Input
								id={`project-name-${i}`}
								type="text"
								name={`project-${i}`}
								bind:value={$form.company.projects[i]}
								{...$constraints.company.projects}
							/>
						</div>
						<button
							type="button"
							on:click={() => removeItem(i, 'projects')}
							class="translate-y-1/2 self-center"><Icon name="Trash" /></button
						>
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
							<label for={`account-${i}`}>Number</label>
							<Input
								id={`account-${i}`}
								type="number"
								name={`account-${i}`}
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
			<label class="space-y-2" for="fullName">
				<span>Full Name</span>
				<Input
					type="text"
					name="fullName"
					bind:value={$form.user.fullName}
					data-testid="fullName"
				/>
			</label>
			<label class="space-y-2" for="email">
				<span>Email</span>
				<Input type="email" name="email" bind:value={$form.user.email} data-testid="email" />
			</label>
			<label class="space-y-2" for="password">
				<span>Password</span>
				<Input
					type="password"
					name="password"
					bind:value={$form.user.password}
					data-testid="password"
				/>
			</label>
			<label class="space-y-2" for="confirmPassword">
				<span>Confirm Password</span>
				<Input
					type="password"
					name="confirmPassword"
					bind:value={$form.user.confirmPassword}
					data-testid="confirmPassword"
				/>
			</label>
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
		<Button type="submit" disabled={currentStep !== steps.length - 1}>Submit</Button>
	</form>
</main>

<style lang="postcss">
	label {
		@apply text-sm;
	}

	.items-heading {
		@apply text-base font-bold;
	}
</style>
