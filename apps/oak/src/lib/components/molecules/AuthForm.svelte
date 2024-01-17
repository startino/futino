<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';

	export let data: PageData;
	export let typeOfAuth: 'login' | 'register' = 'login';
	const { form, errors, enhance } = superForm(data.form, {
		onResult: ({ result }) => {
			switch (result.type) {
				case 'success':
					console.log(`Success! Confirm your email to ${typeOfAuth}.`);
					break;
				case 'error':
					console.log(
						typeOfAuth == 'login'
							? 'Error during logging in to your account!'
							: 'Error when trying to create your account!'
					);
					break;
				case 'failure':
					console.log('Submission failed! Try again.');
					break;
				default:
					return;
			}
			return;
		}
	});
</script>

<Card.Root class="w-full max-w-2xl p-12">
	<form
		method="POST"
		class="flex flex-col gap-y-6"
		use:enhance
		data-testid="register-form"
	>
		{#if typeOfAuth == 'register'}
			<label class="space-y-2" for="fullName">
				<span>Full Name</span>
				<input type="text" name="fullName" bind:value={$form.fullName} data-testid="fullName" />
				{#if $errors.fullName}
					<span class="block text-red-600 dark:text-red-500">{$errors.fullName}</span>
				{/if}
			</label>
		{/if}
		<label class="space-y-2" for="email">
			<span>Email</span>
			<input type="email" name="email" bind:value={$form.email} data-testid="email" />
			{#if $errors.email}
				<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
			{/if}
		</label>
		<label class="space-y-2" for="password">
			<span>Password</span>
			<input type="password" name="password" bind:value={$form.password} data-testid="password" />
			{#if $errors.password}
				<span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
			{/if}
		</label>
		{#if typeOfAuth == 'register'}
			<label class="space-y-2" for="confirmPassword">
				<span>Confirm Password</span>
				<input
					type="password"
					name="confirmPassword"
					bind:value={$form.confirmPassword}
					data-testid="confirmPassword"
				/>
				{#if $errors.confirmPassword}
					<span class="block text-red-600 dark:text-red-500">{$errors.confirmPassword}</span>
				{/if}
			</label>
		{/if}
		<Button type="submit" class="w-full mt-4 py-8"><h3 class="m-0 sm:m-0">Register</h3></Button
		>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			{typeOfAuth == 'login' ? "Don't have an account yet?" : 'Already have an account?'}
			<a
				href={typeOfAuth == 'login' ? '/register' : '/login'}
				class="text-blue-700 hover:underline dark:text-blue-500"
				>{typeOfAuth == 'login' ? 'Register now' : 'Sign in'}</a
			>
		</div>
	</form>
</Card.Root>

<style>
label {
	@apply m-0 sm:m-0;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="password"] {
	  @apply block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 !important;
  }
  </style>