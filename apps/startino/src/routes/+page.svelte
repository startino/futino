<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Brain } from 'lucide-svelte';

	const process = [
		{
			title: 'Plan',
			body: 'It starts with a conversation where we understand your vision, followed by strategic planning to align our goals. Then, wrapped up with a deal and assigning a partner.'
		},
		{
			title: 'Build',
			body: 'Throughout this journey, we remain partners, offering not just our technical skills but also our strategic insights. We’ll be talking to users, iterating on their feedback, then all over again - until product market fit.'
		},
		{
			title: 'Maintain',
			body: 'Once product market fit is found, you can leave everything to us. We’ll be the backbone of your product, keeping it stable and ensuring scalability.'
		}
	];
</script>

<!-- Hero -->
<section
	class="md:prose-md prose prose-sm prose-main flex h-screen w-full max-w-7xl flex-col items-center justify-center gap-2 px-5 text-lg sm:prose-base lg:prose-lg xl:prose-xl sm:px-10 sm:text-xl md:text-2xl lg:text-4xl"
>
	<img class="size-32" src="/favicon.png" alt="Futino's Logo" />
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
	<!-- TODO: Make these buttons functional and uncomment them -->
	<!-- <div class="flex gap-4"> -->
	<!-- 	<button -->
	<!-- 		class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded bg-primary p-8 text-xl font-bold text-primary-on ring-offset-background transition-colors hover:scale-[98%] hover:bg-tertiary hover:text-tertiary-on focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" -->
	<!-- 	> -->
	<!-- 		Contact Us -->
	<!-- 	</button> -->
	<!-- 	<button -->
	<!-- 		class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded border border-input bg-transparent p-8 text-xl font-medium text-primary ring-offset-background transition-colors hover:scale-[98%] hover:border-tertiary hover:text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" -->
	<!-- 	> -->
	<!-- 		Book a Meeting -->
	<!-- 	</button> -->
	<!-- </div> -->
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
		Choosing Futino means engaging in a partnership that offers more than just technical expertise.
		We provide <b class="underline decoration-secondary decoration-2 underline-offset-4"
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
		enhanced by the
		<b class="underline decoration-primary decoration-2 underline-offset-4"
			>professional execution</b
		>
		of a seasoned development agency. Beyond just coding, we’ll be at your side to provide
		<b class="underline decoration-secondary decoration-2 underline-offset-4">strategic insights</b>
		and
		<b class="underline decoration-primary decoration-2 underline-offset-4">ongoing support</b> to ensure
		your product not only reaches the market but thrives.
	</p>
</section>

<!-- Process Section -->
<section
	class="md:prose-md prose prose-sm prose-main flex max-w-7xl flex-col items-center justify-center px-5 sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl sm:px-10"
>
	<div class="inner-section flex flex-col md:gap-24">
		<div class="mx-auto w-fit max-w-xl">
			<h2
				class="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent"
			>
				How We Roll
			</h2>
			<p>The lifecycle of our partnership in three easy steps.</p>
		</div>
		<div class="grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-3">
			{#each process as { title, body }, i}
				<div class="relative flex h-full w-full">
					<!-- md+ Journey line and Chapter checkmark -->
					<div class="hidden md:flex">
						<div
							class="not-prose absolute top-0 hidden h-full w-full -translate-y-1/2 flex-row place-items-center text-center md:flex"
						>
							<!-- Circle -->
							<div
								class="z-10 flex h-11 w-11 items-center rounded-full bg-primary text-center text-primary-on"
							>
								<b class="z-20 mx-auto text-lg">{i + 1}</b>
							</div>

							<!-- Line -->
							<div class="my-2 -ml-6 flex h-1 w-2/3 rounded-full bg-primary" />
						</div>
						<div
							class="my-2 ml-12 mt-14 flex w-full flex-col py-4 pl-1 pr-8 text-left md:ml-0 md:mr-2"
						>
							<h3
								class="mt-0 bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent sm:mt-0"
							>
								{title}
							</h3>
							<p class="title-medium md:headline-large max-w-xs">
								{body}
							</p>
						</div>
					</div>

					<!-- Mobile Journey line and Chapter checkmark -->
					<div class="flex flex-col md:hidden">
						<div
							class="not-prose absolute -top-2 left-4 flex h-full flex-col items-center text-center"
						>
							<!-- Circle -->
							<div
								class="z-10 flex h-12 w-11 items-center rounded-full bg-primary text-center text-primary-on"
							>
								<b class="z-20 mx-auto text-lg">
									{i + 1}
								</b>
							</div>

							<!-- Line -->
							<div class="mx-auto -mt-6 flex h-full w-1 rounded-full bg-primary" />
						</div>
						<div class="flex w-full flex-col pl-16 pr-4 pt-8 text-left">
							<h3
								class="mt-0 bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent sm:mt-0"
							>
								{title}
							</h3>
							<p>
								{body}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
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
				Our People
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
					src="/portraits/jorge-lewis.jpg"
					alt="Portrait of Jorge Lewis"
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Jorge Lewis</h3>
					<p class="text-base leading-7 text-primary">Co-Founder</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Hey 👋. I've got over 6 years of programming experience under my belt, with an expertise
						in automation software and machine learning. I've found a passion in building both
						beautiful and highly functional software to bring life to projects like your own through
						websites and custom software.
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="/portraits/jonas-lindberg.jpg"
					alt="Portrait of Jonas Lindberg"
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Jonas Lindberg</h3>
					<p class="text-base leading-7 text-primary">Co-Founder</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						Since the age of 14, my passion for coding has been a driving force in my life. I've
						been deeply engaged in the creation of websites and bespoke software solutions in
						collaboration with startups. Eager to dive into emerging tech, I'm all about driving
						innovation and sharing the excitement!
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="/portraits/nazif-barassounon.jpg"
					alt="Portrait of Nazif Barassounon"
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">
						Nazif Barassounon
					</h3>
					<p class="text-base leading-7 text-primary">Web Developer</p>
					<p class="mt-6 text-base leading-7 opacity-80">
						I'm a full-stack developer at Futino with over 3 years of experience. I'm passionate
						about creating web applications that blend technology and design seamlessly to deliver
						user-friendly interfaces. I'm dedicated to learning and growing, always staying updated
						with the latest web development trends.
					</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="/favicon.png"
					alt="Portrait of Minilik Zeru"
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Minilik Zeru</h3>
					<p class="text-base leading-7 text-primary">Web Developer</p>
					<p class="mt-6 text-base leading-7 opacity-80">Coming Soon...</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="/portraits/leon-nilsson.jpg"
					alt="Portrait of Leon Nilsson"
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight text-lg font-semibold leading-8 text-primary">Leon Nilsson</h3>
					<p class="text-base leading-7 text-primary">Backend Developer</p>
					<p class="mt-6 text-base leading-7 opacity-80">Coming Soon...</p>
				</div>
			</li>
			<li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl bg-primary/10 object-cover"
					src="/favicon.png"
					alt="Portrait of Joshua Heath"
				/>
				<div class="flex-auto">
					<h3 class="trackng-tight lading-8 text-lg font-semibold text-primary">Joshua Heath</h3>
					<p class="text-base leading-7 text-primary">Sales</p>
					<p class="mt-6 text-base leading-7 opacity-80">Coming Soon...</p>
				</div>
			</li>
		</ul>
	</div>
</section>

<section class="mx-auto flex flex-col gap-8 px-6 pb-20 xl:px-16 2xl:px-64">
	<div
		class="md:prose-md prose prose-sm prose-main mx-auto flex flex-col items-center justify-center px-5 sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl sm:px-10"
	>
		<h2 class="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-transparent">
			Our Secret Sauce
		</h2>
		<p class="mt-6 text-pretty text-lg leading-8 opacity-80">
			The Robust and Agile Tech Stack Empowering Innovation, Efficiency, and Scalability.
		</p>
	</div>
	<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
		<li class="col-span-1 rounded-xl border border-primary shadow">
			<a href="https://svelte.dev/" class="flex items-center justify-between space-x-6 p-6">
				<div class="flex-1">
					<div class="flex items-center space-x-3">
						<h3 class="text-nowrap text-sm font-medium text-background-on">Svelte & SvelteKit</h3>
						<span
							class="inline-flex flex-shrink-0 items-center rounded-full bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-on ring-1 ring-inset ring-green-600/20"
							>Web Framework</span
						>
					</div>
					<p class="mt-1 w-full text-pretty text-left text-sm text-background-on/80">
						A web framework that shifts work out of the browser and into the build step, resulting
						in faster and more efficient apps.
					</p>
				</div>
				<img
					class="h-10"
					src="https://external-content.duckduckgo.com/ip3/svelte.dev.ico"
					alt="Svelte Logo"
				/>
			</a>
		</li>
		<li class="col-span-1 rounded-xl border border-primary shadow">
			<a
				href="https://www.typescriptlang.org/"
				class="flex items-center justify-between space-x-6 p-6"
			>
				<div class="flex-1">
					<div class="flex items-center space-x-3">
						<h3 class="text-sm font-medium text-background-on">TypeScript</h3>
						<span
							class="inline-flex flex-shrink-0 items-center rounded-full bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-on ring-1 ring-inset ring-green-600/20"
							>Language</span
						>
					</div>
					<p class="mt-1 w-full text-pretty text-left text-sm text-background-on/80">
						TypeScript is a strongly typed programming language that builds on JavaScript, giving
						you better tooling at any scale.
					</p>
				</div>
				<img
					class="h-10"
					src="https://external-content.duckduckgo.com/ip3/www.typescriptlang.org.ico"
					alt="TypeScript Logo"
				/>
			</a>
		</li>
		<li class="col-span-1 rounded-xl border border-primary shadow">
			<a href="https://vercel.com" class="flex items-center justify-between space-x-6 p-6">
				<div class="flex-1">
					<div class="flex items-center space-x-3">
						<h3 class="text-sm font-medium text-background-on">Vercel</h3>
						<span
							class="inline-flex flex-shrink-0 items-center rounded-full bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-on ring-1 ring-inset ring-green-600/20"
							>Host</span
						>
					</div>
					<p class="mt-1 w-full text-pretty text-left text-sm text-background-on/80">
						Vercel is a platform that helps developers build, scale, and secure fast and
						personalized web products.
					</p>
				</div>
				<img
					class="h-10"
					src="https://external-content.duckduckgo.com/ip3/vercel.com.ico"
					alt="Vercel Logo"
				/>
			</a>
		</li>
		<li class="col-span-1 rounded-xl border border-primary shadow">
			<a href="https://www.cloudflare.com/" class="flex items-center justify-between space-x-6 p-6">
				<div class="flex-1">
					<div class="flex items-center space-x-3">
						<h3 class="text-sm font-medium text-background-on">Cloudflare</h3>
						<span
							class="inline-flex flex-shrink-0 items-center rounded-full bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-on ring-1 ring-inset ring-green-600/20"
							>Networking</span
						>
					</div>
					<p class="mt-1 w-full text-pretty text-left text-sm text-background-on/80">
						Cloudflare is a global cloud platform that provides network services to protect and
						optimize websites.
					</p>
				</div>
				<img
					class="h-10"
					src="https://external-content.duckduckgo.com/ip3/www.cloudflare.com.ico"
					alt="Cloudflare Logo"
				/>
			</a>
		</li>
		<li class="col-span-1 rounded-xl border border-primary shadow">
			<a
				href="https://fastapi.tiangolo.com/"
				class="flex items-center justify-between space-x-6 p-6"
			>
				<div class="flex-1">
					<div class="flex items-center space-x-3">
						<h3 class="text-sm font-medium text-background-on">FastAPI</h3>
						<span
							class="inline-flex flex-shrink-0 items-center rounded-full bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-on ring-1 ring-inset ring-green-600/20"
							>API Framework</span
						>
					</div>
					<p class="mt-1 w-full text-pretty text-left text-sm text-background-on/80">
						FastAPI is a modern, fast (high-performance), web framework for building APIs with
						Python.
					</p>
				</div>
				<img
					class="h-10"
					src="https://external-content.duckduckgo.com/ip3/fastapi.tiangolo.com.ico"
					alt="FastAPI Logo"
				/>
			</a>
		</li>
		<li class="col-span-1 rounded-xl border border-primary shadow">
			<a href="https://www.python.org/" class="flex items-center justify-between space-x-6 p-6">
				<div class="flex-1">
					<div class="flex items-center space-x-3">
						<h3 class="text-sm font-medium text-background-on">Python</h3>
						<span
							class="inline-flex flex-shrink-0 items-center rounded-full bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-on ring-1 ring-inset ring-green-600/20"
							>Language</span
						>
					</div>
					<p class="mt-1 w-full text-pretty text-left text-sm text-background-on/80">
						Python is a versatile and powerful language that lets you work quickly and integrate
						systems more effectively.
					</p>
				</div>
				<img
					class="h-10"
					src="https://external-content.duckduckgo.com/ip3/www.python.org.ico"
					alt="Python Logo"
				/>
			</a>
		</li>
	</ul>
</section>
