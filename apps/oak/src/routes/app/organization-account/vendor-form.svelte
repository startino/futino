<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Loader2 } from 'lucide-svelte';
	import { type SuperValidated, superForm, type Infer } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { vendorSchema } from '$lib/schemas';
	import { getContext } from '$lib/utils';

	export let validatedForm: SuperValidated<Infer<typeof vendorSchema>>;

	const vendors = getContext('vendors');
	const form = superForm(validatedForm, {
		id: 'vendor',
		validators: zodClient(vendorSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				$vendors = [form.message, ...$vendors];
				toast.success('Vendor added!');
			}
		}
	});

	const { form: formData, isTainted, tainted, delayed, enhance } = form;
</script>

<form action="?/vendor" method="post" use:enhance>
	<Form.Field {form} name="name">
		<div class="flex items-center gap-2">
			<Form.Control let:attrs>
				<Input {...attrs} bind:value={$formData.name} class="max-w-md" />
			</Form.Control>
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
		<Form.FieldErrors />
	</Form.Field>
</form>
