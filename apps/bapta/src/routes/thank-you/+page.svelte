<script>
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
</script>

<section class="section">
	<div class="inner-section flex flex-col place-items-center pt-32 gap-4">
		<h1 class="display-small md:display-large text-primary">Thank you!</h1>
		<p class="title-small md:title-large max-w-xl">
			Your journey has been sent to our tour operators. We'll get back to you via Email within a few
			days. From there we can plan in more detail your journey!
		</p>
		<OutlineButton class="py-4" href="/tours">
			<h1 class="title-large">Continue browsing</h1>
		</OutlineButton>
	</div>
</section>
