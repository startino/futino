<script lang="ts">
	import { createClient } from '@supabase/supabase-js';
	import type { Database } from '$lib/supabase.types';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://ekushmqbxanusqyxyzkk.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdXNobXFieGFudXNxeXh5emtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzODQ1NzMsImV4cCI6MTk5Njk2MDU3M30.RTlWWjf6n2PCDkMdN43B0lBjsXe_aEIfTIs2bDCxfSE',
	);

	export let tour: {
		img_path: string;
		name: string;
		tags: string[];
		parks: string;
	} = {
		id: 0,
		name: 'This is a Test Safari Package',
		tags: ['Zanzibar', 'Safari'],
		parks: 'Park One, Park Two, Park Three',
		img_path: '',
	};

	async function registerTour() {
		console.log('inserting test data');
		await supabase.from('bapta').insert([
			{
				name: 'test',
				contact: 'WhatsApp | +12 345 678 9000',
				people: 9,
				choice: 'test-zanzibar',
			},
		]);
	}
</script>

<section class="section py-32 h-screen">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
		<div
			class="flex flex-col h-full w-full text-center transition-all hover:scale-105 place-items-start rounded-lg shadow-lg shadow-black bg-card-surface-on hover:cursor-pointer">
			<div
				class="bg-[url('/images/safari/36.webp')] flex shrink-0 h-44 md:h-64 lg:h-80 w-full bg-cover bg-center relative rounded-t">
				{#if tour.tags.includes('Top Rated')}'

					<div
						class="bg-yellow-500 text-white absolute rounded-2xl px-3 py-1 mt-3 mr-2 font-bold w-fit right-0 top-0">
						<h1 class="uppercase body-large font-bold">Top Rated</h1>
					</div>
				{/if}
			</div>
			<!--Title, Parks, tags, and summary-->
			<div class="rounded-b flex flex-col p-4 h-full gap-y-1 self-center w-full items-center">
				<h1 class="headline-medium font-bold">{tour.name}</h1>
				<h1 class="title-medium">
					({tour.parks})
				</h1>
				<div class="flex flex-row flex-wrap gap-3 py-1">
					{#each tour.tags as tag}
						<div class="[&>*]:rounded-xl body-medium [&>*]:px-2 [&>*]:py-0.5 font-bold">
							{#if tag == 'Safari'}
								<div class="bg-gradient-to-tr from-yellow-700 to-orange-900">
									<h1 class="">
										{tag}
									</h1>
								</div>
							{:else if tag == 'Zanzibar'}
								<div class="bg-gradient-to-tr from-blue-800 to-teal-500">
									<h1 class="">
										{tag}
									</h1>
								</div>
							{:else if tag == 'Kilimanjaro'}
								<div class="bg-gradient-to-tl from-green-900 via-teal-900 to-zinc-500">
									<h1 class="">
										{tag}
									</h1>
								</div>
							{/if}
						</div>
					{/each}
				</div>
				<div class="text-left my-auto max-w-3xl px-4">
					<h1 class="title-large font-bold">Summary</h1>
					<h1 class="body-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur
						voluptates, repellat cumque sequi repudiandae aperiam aliquid nulla. Alias reprehenderit
						deserunt blanditiis incidunt earum veniam repellat ad perferendis sequi molestias dicta
						voluptate architecto dolorum nihil autem in mollitia, obcaecati, recusandae quod magni?
						Voluptate porro corrupti officia optio eveniet ipsam aliquam aspernatur saepe
						doloremque. Omnis magnam fugit eius, esse recusandae tempora eaque saepe commodi quae
						aliquam soluta nam neque nisi aut iure nulla tenetur accusantium iste!
					</h1>
				</div>
			</div>
		</div>

		<button
			on:click={registerTour}
			id="register"
			class="p-5 shadow-lg rounded-lg text-center bg-secondary-light dark:bg-secondary-dark text-secondary-on-light dark:text-secondary-on-dark display-small">
			Register
		</button>

		<div class="self-center" />
	</div>
</section>
