<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';

	export let data: PageData;
</script>

<Card.Root>
	<Card.Header>
		<h1 class="text-3xl font-bold">Checkout complete</h1>
	</Card.Header>
	<Card.Content>
		<p class="text-primary-500">{data.message}</p>
	</Card.Content>
</Card.Root>
