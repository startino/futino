<script lang="ts">
	import * as Form from '$lib/components/ui/form';
</script>

<Form.Root {schema} {form} let:config>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label />
			<Form.Input />
			<Form.Description />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
</Form.Root>
