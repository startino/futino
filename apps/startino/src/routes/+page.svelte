<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Brain } from 'lucide-svelte';
</script>

<!-- Hero -->
<section
	class="md:prose-md prose prose-sm prose-main flex h-screen w-screen max-w-7xl flex-col items-center justify-center gap-2 px-5 text-lg sm:prose-base lg:prose-lg xl:prose-xl sm:px-10 sm:text-xl md:text-2xl lg:text-4xl"
>
	<img class="size-32" src="https://futi.no/favicon.png" alt="Futino's Logo" />
	<div class="flex flex-col">
		<h1 class="m-0 sm:m-0">
			<span
				class="m-0 bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent sm:m-0"
			>
				Tech
			</span>
			Co-Founder
			<br />
		</h1>
		<h1 class="m-0 sm:m-0">
			as a
			<span
				class="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent"
			>
				Service
			</span>
		</h1>
	</div>
	<p class="text-pretty opacity-80">
		Many non-tech founders struggle to build out their software idea in a holistic manner; retiring
		before they finish their MVP or giving half their business to someone untrustworthy.
	</p>
	<div class="flex gap-4">
		<button
			class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded bg-primary p-8 text-xl font-bold text-primary-on ring-offset-background transition-colors hover:scale-[98%] hover:bg-accent hover:text-accent-on focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
		>
			Contact Us
		</button>
		<button
			class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded border border-input bg-background p-8 text-xl font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
		>
			Book a Meeting
		</button>
	</div>
</section>

<!-- Solution -->
<section
	class="md:prose-md prose prose-sm prose-main flex max-w-7xl flex-col items-center justify-center px-5 sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl sm:px-10"
>
	<h2 class="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent">
		The Solution
	</h2>
	<p>
		By partnering with us, you gain not just a service provider, but a committed tech co-founder
		who's invested in your success. With Futino, enjoy the reliability, passion, and effectiveness
		of having a co-founder, paired with the legal security and speed of an established agency. Our
		model means we succeed when you do, ensuring a partnership rooted in mutual growth and success.
	</p>
</section>

<!-- Our Specialties -->
<!-- TODO: Improve this section by adding descriptions to the specialties -->
<section
	class="md:prose-md prose prose-sm prose-main flex max-w-7xl flex-col items-center justify-center px-5 sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl sm:px-10"
>
	<h2
		class="m-0 bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent sm:m-0"
	>
		Our Specialties
	</h2>
	<dl class="grid grid-cols-2 gap-8 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
		<dt class="flex items-center justify-center gap-1 font-semibold text-primary-container-on">
			<Brain class="h-5 w-5" />
			Machine Learning.
		</dt>
		<dt class="flex items-center justify-center gap-1 font-semibold text-primary-container-on">
			<Brain class="h-5 w-5" />
			Product Development.
		</dt>
		<dt class="flex items-center justify-center gap-1 font-semibold text-primary-container-on">
			<Brain class="h-5 w-5" />
			SaaS Development.
		</dt>
		<dt class="flex items-center justify-center gap-1 font-semibold text-primary-container-on">
			<Brain class="h-5 w-5" />
			Web Design.
		</dt>
		<dt class="flex items-center justify-center gap-1 font-semibold text-primary-container-on">
			<Brain class="h-5 w-5" />
			System Architecture.
		</dt>
		<dt class="flex items-center justify-center gap-1 font-semibold text-primary-container-on">
			<Brain class="h-5 w-5" />
			UI/UX Design.
		</dt>
	</dl>
</section>

<!-- What we offer -->
<section
	class="md:prose-md prose prose-sm prose-main flex max-w-7xl flex-col items-center justify-center px-5 sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl sm:px-10"
>
	<h2 class="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent">
		Our Offer
	</h2>
	<p class="text-pretty">
		Choosing Startino means engaging in a partnership that offers more than just technical
		expertise. We provide <b class="underline decoration-secondary decoration-2 underline-offset-4"
			>cost-effective development</b
		>
		through a unique and simple model, ensuring our
		<b class="underline decoration-primary decoration-2 underline-offset-4"
			>goals align with yours.</b
		>
		Benefit from a partnership that offers the long-term dedication and
		<b class="underline decoration-secondary decoration-2 underline-offset-4"
			>passion of a co-founder,</b
		>
		enhanced by the <b>professional execution</b> of a seasoned development agency. Beyond just
		coding, we’ll be at your side to provide
		<b class="underline decoration-primary decoration-2 underline-offset-4">strategic insights</b>
		and
		<b class="underline decoration-secondary decoration-2 underline-offset-4">ongoing support</b> to
		ensure your product not only reaches the market but thrives.
	</p>
</section>

<!-- How it works -->

<section>
	<div class="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
		<div
			class="md:prose-md prose prose-sm prose-main mx-auto flex flex-col items-center justify-center px-5 sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl sm:px-10"
		>
			<h2
				class="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent"
			>
				<span class="opacity-30">Y</span>our People
			</h2>
			<p class="mt-6 text-lg leading-8 opacity-80">
				We’re a dynamic group of individuals who are passionate about what we do and dedicated to
				delivering the best results for our Co-Founders.
			</p>
		</div>
		<ul
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 text-left sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
		>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="https://futi.no/favicon.png"
					alt=""
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Jorge Lewis</h3>
					<p class="text-base leading-7 text-primary">Co-Founder</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda.
						Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab.
						Magni labore molestiae nulla qui.
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="https://futi.no/favicon.png"
					alt=""
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Jonas Lindberg</h3>
					<p class="text-base leading-7 text-primary">Co-Founder</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda.
						Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab.
						Magni labore molestiae nulla qui.
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="https://futi.no/favicon.png"
					alt=""
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">
						Nazif Barassounon
					</h3>
					<p class="text-base leading-7 text-primary">Web Developer</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda.
						Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab.
						Magni labore molestiae nulla qui.
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="https://futi.no/favicon.png"
					alt=""
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Minilik Zeru</h3>
					<p class="text-base leading-7 text-primary">Web Developer</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda.
						Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab.
						Magni labore molestiae nulla qui.
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="https://futi.no/favicon.png"
					alt=""
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Leon Nilsson</h3>
					<p class="text-base leading-7 text-primary">Backend Developer</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda.
						Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab.
						Magni labore molestiae nulla qui.
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="https://futi.no/favicon.png"
					alt=""
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight lading-8 text-lg font-semibold text-primary">Joshua Heath</h3>
					<p class="text-base leading-7 text-primary">Sales</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda.
						Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab.
						Magni labore molestiae nulla qui.
					</p>
				</div>
			</li>
		</ul>
	</div>
</section>
