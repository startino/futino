<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { RotateCw } from 'lucide-svelte';

	import { formSchema, type FormSchema, budgetOptions, sourceOptions } from './schema';
	import DialogOverlay from '../dialog/dialog-overlay.svelte';

	export let data: SuperValidated<Infer<FormSchema>>;

	let showMessage = false;
	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated({ form }) {
			if (form.valid) {
				showMessage = true;
			}
		}
	});

	const { form: formData, enhance, delayed } = form;

	$: selectedBudget = $formData.budget
		? {
				label: $formData.budget,
				value: $formData.budget
			}
		: undefined;
	$: selectedSource = $formData.source
		? { label: $formData.source, value: $formData.source }
		: undefined;
</script>

<form method="POST" class="w-full max-w-md space-y-6 text-left" use:enhance>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} placeholder="Enter your name" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} placeholder="Enter your email" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="description">
		<Form.Control let:attrs>
			<Form.Label>Description</Form.Label>
			<Textarea
				{...attrs}
				placeholder="Tell us a little about your software idea"
				class="w-full"
				bind:value={$formData.description}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="budget">
		<Form.Control let:attrs>
			<Form.Label>What's your budget?</Form.Label>
			<Select.Root
				selected={selectedBudget}
				onSelectedChange={(v) => {
					v && ($formData.budget = v.value);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a budget" />
				</Select.Trigger>
				<Select.Content>
					{#each budgetOptions as option}
						<Select.Item value={option} label={option}>{option}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			<input hidden bind:value={$formData.budget} name={attrs.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="source">
		<Form.Control let:attrs>
			<Form.Label>How did you hear about us?</Form.Label>
			<Select.Root
				selected={selectedSource}
				onSelectedChange={(v) => {
					v && ($formData.source = v.value);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Let us know where you're from" />
				</Select.Trigger>
				<Select.Content>
					{#each sourceOptions as option}
						<Select.Item value={option} label={option}>{option}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			<input hidden bind:value={$formData.source} name={attrs.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button size="lg" class="w-full" disabled={$delayed}>
		{#if $delayed}
			<RotateCw class="mr-2 h-4 w-4 animate-spin" />
		{/if}
		Submit
	</Form.Button>
	{#if showMessage}
		<p class="text-emerald-400">Message sent successfully!</p>
	{/if}
</form>
