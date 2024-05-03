<script lang="ts">
	const pricing = [
		{
			title: 'Cruising',
			price: 500,
			description: 'When development is done, this is how we keep the project thriving.',
			features: ['Bug Fixes', 'Website & App Analytics', 'Hosting & Maintenance']
		},
		{
			title: 'Full-Cycle',
			price: 4000,
			description:
				"End-to-end software development to get your MVP running and iterating to it's road to product-market fit.",
			features: [
				'Software Planning',
				'Architecture Design',
				'Wireframing & Prototyping',
				'Web or Mobile MVP',
				'Marketing Pages (Landing, Pricing, etc.)'
			]
		}
	];
</script>

<section id="pricing" class="isolate w-full overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<h2 class="text-base font-semibold leading-7 text-primary">Pricing</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
				The right price for you, <br class="hidden sm:inline lg:hidden" />whoever you are
			</p>
		</div>
		<div class="relative mt-6">
			<p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit
				doloribus molestiae voluptatum.
			</p>
			<svg
				viewBox="0 0 1208 1024"
				class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
			>
				<ellipse
					cx="604"
					cy="512"
					fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
					rx="604"
					ry="512"
				/>
				<defs>
					<radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
						<stop stop-color="#003825" opacity="0.1" />
						<stop offset="1" stop-color="#003731" opacity="0.1" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	</div>
	<div class="flow-root pb-24 sm:pb-32">
		<div class="-mt-80">
			<div class="mx-auto max-w-7xl px-6 text-left lg:px-8">
				<div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
					{#each pricing as { title, price, description, features }}
						<div
							class="flex flex-col justify-between rounded-3xl bg-surface p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
						>
							<div>
								<h3 id="tier-hobby" class="text-base font-semibold leading-7 text-primary">
									{title}
								</h3>
								<div class="mt-4 flex items-baseline gap-x-2">
									<span class="text-5xl font-bold tracking-tight text-surface-on">${price}</span>
									<span class="text-base font-semibold leading-7 text-surface-on/70">/month</span>
								</div>
								<p
									class=" mt-6
                                text-base leading-7 text-surface-on"
								>
									{description}
								</p>
								<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-surface-on/70">
									{#each features as feature}
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-primary"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											{feature}
										</li>
									{/each}
								</ul>
							</div>
							<a
								href="#"
								aria-describedby="tier-hobby"
								class="mt-8 block rounded-md bg-primary px-3.5 py-2 text-center text-sm font-semibold leading-6 text-primary-on shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
								>Get started today</a
							>
						</div>
					{/each}
					<div
						class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl bg-surface p-8 text-left ring-1 ring-primary sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center"
					>
						<div class="lg:min-w-0 lg:flex-1">
							<h3 class="text-lg font-semibold leading-8 tracking-tight text-primary">
								Sweat equity Discount
							</h3>
							<p class="mt-1 text-base leading-7 text-surface-on/70">
								We're selfish and we like taking a piece of the pie. By doing so, we even further
								align our incentives and really make it a partnership.
							</p>
						</div>
						<a
							href="https://calendly.com/jorge-lewis"
							class="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary transition hover:text-accent hover:ring-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
							>Book a Call <span aria-hidden="true">&rarr;</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
