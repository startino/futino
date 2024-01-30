<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
</script>

<Card.Root>
	<Card.Header>
		<h1 class="text-3xl font-bold">Cancellation completed</h1>
	</Card.Header>
	<Card.Content>
		<p class="text-destructive">Your subscription has been canceled</p>
	</Card.Content>
	<Card.Footer>
		<Button href="/app/subscription">Go Back</Button>
	</Card.Footer>
</Card.Root>
