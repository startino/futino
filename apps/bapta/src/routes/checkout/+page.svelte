<script lang="ts">
	import CheckoutForm from '$lib/components/organisms/CheckoutForm.svelte';
	import ContactForm from '$lib/components/organisms/ContactForm.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import { stringify } from 'postcss';

	export let tour: {
		id: number;
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
</script>

<Header />

<section class="section py-32 h-screen">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
		<div
			class="flex flex-col h-full w-full text-center transition-all hover:scale-105 place-items-start rounded-lg shadow-lg shadow-black bg-card-surface-on hover:cursor-pointer">
			<div
				class="bg-[url('/images/safari/36.jpeg')] flex shrink-0 h-44 md:h-64 lg:h-80 w-full bg-cover bg-center relative rounded-t">
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

		<div class="self-center">
			<CheckoutForm />
		</div>
	</div>
</section>

<Footer />
