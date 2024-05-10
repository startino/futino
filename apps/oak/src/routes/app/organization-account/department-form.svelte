<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Loader2 } from 'lucide-svelte';
	import { type SuperValidated, superForm, type Infer } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { departmentSchema } from '$lib/schemas';
	import { getContext } from '$lib/utils';

	export let validatedForm: SuperValidated<Infer<typeof departmentSchema>>;

	const departments = getContext('departments');
	const form = superForm(validatedForm, {
		id: 'department',
		validators: zodClient(departmentSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				$departments = [form.message, ...$departments];
				toast.success('Department added!');
			}
		}
	});

	const { form: formData, isTainted, tainted, delayed, enhance } = form;
</script>

<form action="?/department" method="post" use:enhance>
	<div class="flex items-end gap-2">
		<Form.Field {form} name="number" class="max-w-40">
			<Form.Control let:attrs>
				<Form.Label>Number</Form.Label>
				<Input
					type="number"
					on:change={(e) => ($formData.number = +e.currentTarget.value)}
					{...attrs}
					bind:value={$formData.number}
				/>
			</Form.Control>
		</Form.Field>

		<Form.Field {form} name="name" class="max-w-md flex-1">
			<Form.Control let:attrs>
				<Form.Label>Name</Form.Label>
				<Input {...attrs} bind:value={$formData.name} />
			</Form.Control>
		</Form.Field>

		<Form.Button
			type="submit"
			variant="outline"
			disabled={!isTainted($tainted) || $delayed}
			class="gap-1"
		>
			{#if $delayed}
				<Loader2 class="animate-spin" />
			{/if}
			Add
		</Form.Button>
	</div>
</form>
