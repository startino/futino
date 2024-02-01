<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { PaymentForm } from '$lib/components/ui/payment-form';

	export let data;

	$: ({ clientSecret, returnUrl, paymentMethod } = data);
</script>

<Card.Root class="p-10">
	<Card.Header>
		<Card.Title>Monthly Subscription</Card.Title>
		<Card.Description class="font-bold">$500/month</Card.Description>
	</Card.Header>

	<Card.Content>
		<PaymentForm {paymentMethod} bind:clientSecret bind:returnUrl />
	</Card.Content>
	<Card.Footer>
		<Button href="/app/subscription">Go Back</Button>
	</Card.Footer>
</Card.Root>
