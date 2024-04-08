<script lang="ts">
	import * as Resizable from '$lib/components/ui/resizable';
	import DataTable from '$lib/components/ui/data-table/data-table.svelte';
</script>

<Resizable.PaneGroup direction="horizontal" class="rounded-lg border">
	<Resizable.Pane defaultSize={50}>
		<div class="flex items-center justify-center p-6">
			<DataTable />
		</div>
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane defaultSize={50}>Submission Editor</Resizable.Pane>
</Resizable.PaneGroup>

