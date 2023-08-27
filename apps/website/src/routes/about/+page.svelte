<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import TransitionElement from '$lib/components/organisms/Inview.svelte';
	import { slide } from 'svelte/transition';

	let activeMember: number;

	const handleClick = (newActiveMember: number) => () => {
		if (activeMember == newActiveMember) {
			activeMember = -1;
		} else {
			activeMember = newActiveMember;
		}

		return;
	};

	const team = [
		{
			index: 0,
			name: 'Jorge Lewis',
			position: 'Chief Executive Officer, Lead Developer',
			body: `I noticed that making a website was either too expensive (hiring someone) or too time
					consuming (websitebuilder) for everyone - individuals, startups, especially large
					businesses. I wanted to create a solution to these problems.`,
			imgPath: 'people/jorge_1.jpg',
		},
		{
			index: 1,
			name: 'Alexey Skachkov',
			position: 'Chief Marketing Officer',
			body: `I noticed that making a website was either too expensive (hiring someone) or too time
					consuming (websitebuilder) for everyone - individuals, startups, especially large
					businesses. I wanted to create a solution to these problems.`,
			imgPath: './favicon.png',
		},
	];
</script>

<Header />

<main
	class="text-center border-b w border-primary-light/40 dark:border-primary-dark/40 flex flex-col items-stretch">
	<section id="hero" class="grow h-screen grid justify-items-center space-y-12 shadow-lg">
		<div class="grid justify-items-center space-y-12 h-fit w-full mx-auto self-center">
			<div class="w-fit">
				<h1 class="display-large">Let's Turn Potential into Growth</h1>
			</div>

			<div class="w-fit">
				<h3 class="title-small md:headline-small">
					We aren't just giving you an amazing website, we're giving you a solution.
				</h3>
			</div>

			<div class="grid grid-cols-2 gap-x-4">
				<Button class="" href="#team">
					<p class="px-3 sm:px-5 md:px-6 title-medium">The Team</p>
				</Button>

				<Button class="" href="/contact" secondary={true}>
					<p class="px-3 sm:px-5 md:px-6 title-medium">Contact Us</p>
				</Button>
			</div>
		</div>
	</section>

	<section
		id="about-transparency"
		class=" shadow-2xl grid justify-items-center border-b border-primary-light/20 dark:border-primary-dark/20">
		<div class="flex flex-col text-left w-full md:pl-24 space-y-8 inner-section">
			<TransitionElement transition="slide" delay={200} duration={1000}>
				<!--Any sort of glass effect would be good here-->
				<h1 class="display-large text-left pb-4">Glass like Transparency.</h1>
				<p class="title-medium max-w-2xl py-2">
					We believe that transparency builds trust and fosters strong, long-lasting relationships
					with our clients. When it comes to pricing, we believe in fair and
					<span class="text-primary-light dark:text-primary-dark font-bold">upfront pricing</span>
					, without any hidden fees or surprises.
				</p>
				<p class="title-medium max-w-2xl py-2">
					Additionally, we embrace the use of
					<span class="text-primary-light dark:text-primary-dark font-bold"
						>open-source software</span>
					, leveraging the power of community-driven innovation and collaboration. By utilizing open-source
					frameworks, libraries, and tools, we ensure flexibility, security, and cost-effectiveness for
					our clients.
				</p>
				<Button class="w-fit my-6" href="/contact" secondary={true}>
					<h1 class="title-small">Contact Us</h1>
				</Button>
			</TransitionElement>
		</div>
	</section>

	<section
		id="team"
		class=" shadow-2xl grid justify-items-center border-b border-primary-light/20 dark:border-primary-dark/20">
		<div class="flex w-full flex-col text-left md:pl-24 inner-section gap-12">
			<TransitionElement transition="slide" delay={200} duration={1000}>
				<!--Any sort of glass effect would be good here-->
				<h1 class="display-large pb-4">[Y]our People</h1>

				<div class="flex flex-col divide-y title-medium border-y">
					{#each team as { index, name, position, body, imgPath }}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<button class="flex flex-col" on:click={handleClick(index)}>
							<div
								class="grid grid-rows-2 grid-cols-3 md:grid-cols-7 md:grid-rows-1 place-content-between items-center my-3 group hover:text-primary-light dark:hover:text-primary-dark">
								<h1 class="col-span-2 md:col-span-3 font-bold tracking-wide">{name}</h1>
								<h1 class="col-span-2 md:col-span-3">{position}</h1>
								<Icon
									class="row-span-2 row-start-1 col-start-3 col-span-1 md:col-start-7 group-hover:translate-y-1 transition-transform justify-self-end pr-1"
									fillColor="white"
									icon="down-arrow"
									height="24"
									width="24" />
							</div>
							{#if index == activeMember}
								<div
									class="my-3 grid grid-rows-2 grid-cols-3 md:grid-cols-7 md:grid-rows-1 place-content-between items-center"
									in:slide
									out:slide>
									<div class="col-span-2 md:col-span-3 flex mx-auto">
										<img
											src={imgPath}
											alt="no img"
											class=" object-center object-cover rounded-xl w-32 h-32" />
									</div>
									<div
										class="flex flex-row gap-4 w-full justify-items-center place-items-center col-span-2 md:col-span-3">
										<div class="bg-purple-500 w-12 h-12 rounded-full" />
										<div class="bg-blue-500 w-12 h-12 rounded-full" />
										<div class="bg-blue-900 w-12 h-12 rounded-full" />
									</div>
								</div>
							{/if}
						</button>
					{/each}
				</div>
			</TransitionElement>
		</div>
	</section>
</main>

<Footer />
