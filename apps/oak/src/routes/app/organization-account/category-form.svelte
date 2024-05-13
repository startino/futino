<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Loader2 } from 'lucide-svelte';
	import { type SuperValidated, superForm, type Infer } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { spendCategorySchema } from '$lib/schemas';
	import { getContext } from '$lib/utils';

	export let validatedForm: SuperValidated<Infer<typeof spendCategorySchema>>;

	const categories = getContext('spendCategories');
	const form = superForm(validatedForm, {
		id: 'category',
		validators: zodClient(spendCategorySchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				$categories = [form.message, ...$categories];
				toast.success('Category added!');
			}
		}
	});

	const { form: formData, isTainted, tainted, delayed, enhance } = form;
</script>

<form action="?/category" method="post" use:enhance>
	<div class="flex items-end gap-2">
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
