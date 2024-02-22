<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { PaymentForm } from '$lib/components/ui/payment-form';
	import * as Card from '$lib/components/ui/card';

	export let data;

	$: ({ clientSecret, paymentMethod } = data);
</script>

<Card.Root class="p-10">
	<Card.Header>
		<Card.Title>Yearly Subscription: $450/month</Card.Title>
		<Card.Description>$5400 billed yearly (save 10% vs billed monthly)</Card.Description>
	</Card.Header>

	<Card.Content>
		<PaymentForm
			{paymentMethod}
			{clientSecret}
			returnUrl={`${window.location.origin}/app/subscription/complete`}
		/>
	</Card.Content>
	<Card.Footer>
		<Button href="/app/subscription">Go Back</Button>
	</Card.Footer>
</Card.Root>
