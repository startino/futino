<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';

	export let data;
	const contract = data.contract;
</script>

<Breadcrumb.Root class="mb-6">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/app/contracts">Contracts</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>{`#${contract.number} ${contract.vendor.name}`}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<h1>{`#${contract.number} ${contract.vendor.name}`}</h1>
