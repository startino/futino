<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Loader2 } from 'lucide-svelte';
	import { type SuperValidated, superForm, type Infer } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { organizationSchema } from '$lib/schemas';
	import { getContext } from '$lib/utils';

	export let validatedForm: SuperValidated<Infer<typeof organizationSchema>>;

	const org = getContext('organization');
	const form = superForm(validatedForm, {
		id: 'organization',
		validators: zodClient(organizationSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				form.id;
				$org.name = form.data.name;
				toast.success('Changes saved!');
			}
		}
	});

	const { form: formData, isTainted, tainted, delayed, enhance } = form;

	$: formData.update(
		($form) => {
			$form.name = $org.name;
			return $form;
		},
		{ taint: false }
	);
</script>

<form action="?/organization" method="post" use:enhance>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
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
		Save
	</Form.Button>
</form>
