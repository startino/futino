<script lang="ts">
	import { createClient } from '@supabase/supabase-js';
	import Authenticate from '$lib/components/atoms/Authenticate.svelte';
	import type { Database } from '$lib/supabase.types';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://ekushmqbxanusqyxyzkk.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdXNobXFieGFudXNxeXh5emtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzODQ1NzMsImV4cCI6MTk5Njk2MDU3M30.RTlWWjf6n2PCDkMdN43B0lBjsXe_aEIfTIs2bDCxfSE',
	);
</script>

<Authenticate>
	<div
		class="flex flex-col w-full h-full shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 py-40 justify-center place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40">
		<h1 class="font-bold text-primary-dark display-medium">Admin Board</h1>

		<hr class="w-40 py-4" />

		<div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
			{#await supabase.from('bapta').select('*')}
				<p>Loading...</p>
			{:then bapta}
				{#if bapta.data}
					{#each bapta.data as tour}
						<div class="rounded-lg shadow-lg shadow-black bg-surface-dark/70 h-full">
							<div
								class="p-5 text-surface-variant-on-dark prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert prose-main justify-items-center mx-auto">
								<p>Full Name: {tour.name}</p>
								<p>Tour: {tour.choice}</p>
								<p>Contact: {tour.contact}</p>
								<p>People: {tour.people}</p>
								<p>Request Date: {tour.created_at}</p>
							</div>
						</div>
					{/each}
				{/if}
			{/await}
		</div>
	</div>
</Authenticate>
