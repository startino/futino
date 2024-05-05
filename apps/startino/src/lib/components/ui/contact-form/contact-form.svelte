<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from '$lib/components/ui/select';

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

<form method="POST" class="w-2/3 space-y-6" use:enhance>
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
						<Select.Item value={option} label={option} />
					{/each}
				</Select.Content>
			</Select.Root>
			<input hidden bind:value={$formData.budget} name={attrs.name} />
		</Form.Control>
		<Form.Description>
			You can manage email address in your <a href="/examples/forms">email settings</a>.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
