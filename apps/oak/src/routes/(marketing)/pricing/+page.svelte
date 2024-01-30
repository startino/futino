<script lang="ts">
	import PromotionToggle from './PromotionToggle.svelte';
	const promotions: {
		label: string;
		index: number;
		for: string;
		discount: string;
	}[] = [
		{ label: 'Monthly', index: 0, for: 'monthly', discount: '' },
		{ label: 'Yearly', index: 1, for: 'yearly', discount: '' }
	];

	let cycle: string = 'yearly';
</script>

<main class="my-32">
	<div>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="mt-24">Pricing</h1>
			</div>
			<p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8">
				Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut
				non voluptas in. Explicabo id ut laborum.
			</p>

			<PromotionToggle class="my-4" bind:cycle {promotions} />

			<div class="isolate mx-auto mt-16 max-w-md sm:mt-20 lg:mx-0 lg:max-w-none">
				<div
					class="mx-auto flex max-w-md flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-primary-500 lg:z-10 xl:p-10"
				>
					<div>
						<h3
							id="tier-startup"
							class="!mb-6 !mt-0 text-lg font-semibold leading-8 text-primary-500"
						>
							Standard <span class="text-base">/ {cycle}</span>
						</h3>
						<p class="mt-4 text-sm leading-6">
							A plan that scales with your rapidly growing business.
						</p>

						<p class="mt-6 flex items-baseline gap-x-1">
							<span class="text-4xl font-bold tracking-tight text-white">
								{cycle === 'yearly' ? '$450' : '$500'}
							</span>
							<span class="text-sm font-semibold leading-6">/month/company</span>
						</p>
						{#if cycle === 'yearly'}
							<p
								class="max-w-fit rounded-full bg-primary-foreground p-2 text-sm font-bold text-primary-500"
							>
								$5400 billed yearly (save 10% vs billed monthly)
							</p>
						{/if}
						<ul role="list" class="mt-8 space-y-3 text-sm leading-6">
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-primary-600"
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
								25 products
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-primary-600"
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
								Up to 10,000 subscribers
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-primary-600"
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
								Advanced analytics
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-primary-600"
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
								24-hour support response time
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-primary-600"
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
								Marketing automations
							</li>
						</ul>
					</div>
					<a
						href="#"
						aria-describedby="tier-startup"
						class="mt-8 block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Buy plan</a
					>
				</div>
			</div>
		</div>
	</div>
</main>
