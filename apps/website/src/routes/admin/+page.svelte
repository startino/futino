<script lang="ts">
	import { createClient } from '@supabase/supabase-js';
	import Authenticate from '$lib/components/atoms/Authenticate.svelte';
	import type { Database } from '$lib/supabase.types';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://qnzxoapdhdycrblbeovn.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs',
	);
</script>

<Authenticate>
	<main class="">
		<section>
			<div class="inner-section">
				<h1 class="font-bold text-primary display-medium">Admin Board</h1>

				<div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
					{#await supabase.from('Contact Forms').select('*')}
						<p>Loading...</p>
					{:then bapta}
						{#if bapta.data}
							{#each bapta.data as { name, message, email, created_at }}
								<div class="rounded-lg shadow-lg bg-surface h-full">
									<div
										class="p-8 text-left text-surface-variant-on prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-invert prose-main">
										<p>Name: {name}</p>
										<p>Message: {message}</p>
										<p>Email: {email}</p>
										<p>Request Date: {created_at}</p>
									</div>
								</div>
							{/each}
						{/if}
					{/await}
				</div>
			</div>
		</section>
	</main>
</Authenticate>
