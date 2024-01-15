<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Prose from '$lib/components/atoms/Prose.svelte';
</script>

<!-- Hero section -->
<div class="absolute top-0 isolate h-screen w-full overflow-hidden">
	<svg
		class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
		aria-hidden="true"
	>
		<defs>
			<pattern
				id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
				width="200"
				height="200"
				x="50%"
				y="-1"
				patternUnits="userSpaceOnUse"
			>
				<path d="M.5 200V.5H200" fill="none" />
			</pattern>
		</defs>
		<svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
			<path
				d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
				stroke-width="0"
			/>
		</svg>
		<rect
			width="100%"
			height="100%"
			stroke-width="0"
			fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
		/>
	</svg>
	<div
		class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
		aria-hidden="true"
	>
		<div
			class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
			style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
		></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
		<div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
			<img
				class="not-prose h-11"
				src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
				alt="Your Company"
			/>
			<div class="mt-24 sm:mt-32 lg:mt-16">
				<a href="#" class="inline-flex space-x-6">
					<span
						class="bg-primary-500/10 text-primary-500 ring-primary-500/20 rounded-full px-3 py-1 text-sm ring-1 ring-inset"
						>Latest updates</span
					>
					<span class="text-foreground/70 inline-flex items-center space-x-2 text-sm">
						<span>Just shipped v1.0</span>
						<svg
							class="h-5 w-5 text-gray-500"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</a>
			</div>
			<h2 class="m-0 pt-12 font-bold tracking-tight sm:m-0">
				Create & Manage Your Contracts In One Place
			</h2>
			<p class="m-0 pt-6 tracking-tight sm:m-0">
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.
			</p>
			<div class="mt-10 flex items-center gap-x-6">
				<Button href="/register" size="lg">
					<h4 class="m-0 sm:m-0">Get Started</h4>
				</Button>
			</div>
		</div>
		<div
			class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
		>
			<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
				<img
					src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
					alt="App screenshot"
					width="2432"
					height="1442"
					class="not-prose w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
				/>
			</div>
		</div>
	</div>
</div>
