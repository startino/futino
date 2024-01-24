<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let data: PageData;

	const { form, enhance, constraints } = superForm(data.form, { dataType: 'json' });

	const addDepartment = () => {
		form.update((values) => {
			const departments = [...values.departments, { name: '', number: 0 }];
			return { ...values, departments };
		});
	};

	const removeDepartment = (i) => {
		form.update((values) => {
			const departments = values.departments.filter((_, index) => index !== i);
			return { ...values, departments };
		});
	};
</script>

<h1 class="text-sm">Company Account</h1>

<form use:enhance method="POST" class="mx-auto grid max-w-xl gap-5">
	<div>
		<label class="text-base" for="name">Company Name</label>
		<Input type="text" name="name" bind:value={$form.name} id="name" />
	</div>

	<div class="grid gap-2">
		<div class="text-base">Departments</div>

		{#each $form.departments as _, i}
			<div class="flex gap-3">
				<div class="flex-1">
					<label class="text-base" for="name">Name</label>
					<Input
						type="text"
						name={`department-${i}`}
						bind:value={$form.departments[i].name}
						{...$constraints.departments.name}
					/>
				</div>
				<div>
					<label class="text-base" for="name">Number</label>

					<Input
						type="number"
						name={`department-number-${i}`}
						on:change={(e) => {
							$form.departments[i].number = +e.target.value;
						}}
						{...$constraints.departments.number}
					/>
				</div>
				<button
					type="button"
					on:click={() => removeDepartment(i)}
					class="translate-y-1/2 self-center"><Icon name="Trash" /></button
				>
			</div>
		{/each}
		<Button type="button" on:click={addDepartment}>add department</Button>
	</div>

	<div><Button type="submit">Submit</Button></div>
</form>
