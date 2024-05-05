<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';

	import { formSchema, type FormSchema, budgetOptions, sourceOptions } from './schema';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

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

<form method="POST" class="w-2/3 space-y-6 text-left" use:enhance>
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
					<Select.Value placeholder="Select a verified email to display" />
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
				selected={selectedBudget}
				onSelectedChange={(v) => {
					v && ($formData.budget = v.value);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select where you heard about us from" />
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

	<Form.Button size="lg">Submit</Form.Button>
</form>
