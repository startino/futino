<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import TransitionElement from '$lib/components/organisms/Inview.svelte';
	import { fade, slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import TextSection from './TextSection.svelte';
	import Particles from 'svelte-particles';
	import { loadSlim } from 'tsparticles-slim';
	import type { Engine } from 'tsparticles-engine';
	import { particlesConfig } from '../particlesConfig';

	let activeMember: number;

	const handleClick = (newActiveMember: number) => () => {
		if (activeMember == newActiveMember) {
			activeMember = -1; // Deselects all members
		} else {
			activeMember = newActiveMember;
			goto(`#${activeMember}-img`);
		}
		return;
	};

	const team = [
		{
			index: 0,
			name: 'Jorge Lewis',
			position: 'Co-CEO, Business Development',
			body: `Hey 👋. I've got over 6 years of programming experience under my belt, with an expertise in automation software and machine learning. 
      I've found a passion in building both beautiful and highly functional software to bring life to projects like your own through websites and custom software.`,
			imgPath: 'people/jorge_1.jpg',
			socialLinks: {
				instagram: 'https://www.instagram.com/horhey_jorge',
				linkedin: 'https://www.linkedin.com/in/jorge-lewis-0b4848144/',
				github: 'https://github.com/antopiahk'
			}
		},
		{
			index: 1,
			name: 'Jonas Lindberg',
			position: 'Co-CEO, Technology Operations',
			body: `Hi there! With over 6 years of coding experience, I noticed that making a website was either too expensive (hiring someone) or too time
					consuming (website builder) for everyone - individuals, startups, and especially large
					businesses. I wanted to create a solution to these problems.
          I specialize in DevOps and backend development to ensure our programming operations are fully optimised for speed and quality.`,
			imgPath: 'people/jonas-linkedin-pfp.jpg',
			socialLinks: {
				linkedin: 'https://www.linkedin.com/in/eksno/',
				github: 'https://github.com/antopiahk'
			}
		},
		{
			index: 2,
			name: 'Nazif Barassounon',
			position: 'Senior Developer',
			body: `I'm a full-stack developer at Futino with over 3 years of experience using the stack.
      I'm passionate about creating web applications that blend technology and design seamlessly to deliver user-friendly interfaces. 
      I'm dedicated to learning and growing, always staying updated with the latest web development trends to meet the standard at Futino.`,
			imgPath: 'people/nazif_1.jpg',
			socialLinks: {
				linkedin: 'https://www.linkedin.com/in/nazifbara/',
				github: 'https://github.com/nazifbara'
			}
		}
	];

	let onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine: Engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	};
</script>

<svelte:head>
	{#each team as { imgPath }}
		<link rel="preload" as="image" href={imgPath} />
	{/each}
</svelte:head>

<main class="border-primary/40 flex flex-col items-stretch border-b text-center">
	<section
		id="hero"
		class="bg-fit grid h-screen grow justify-items-center bg-[url('/glow_bg_4.png')] bg-top bg-no-repeat"
	>
		<div
			class="pointer-events-none absolute z-10 h-full w-full bg-gradient-to-b from-black/50 from-90% to-black/30"
		/>
		<Particles
			id="tsparticles"
			class="absolute z-0 h-full w-full"
			options={particlesConfig}
			on:particlesLoaded={onParticlesLoaded}
			{particlesInit}
		/>

		<div class="z-20 mx-auto grid h-fit w-full justify-items-center space-y-12 self-center">
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
					<p class="title-medium px-3 sm:px-5 md:px-6">The Team</p>
				</Button>

				<Button class="" href="/contact" secondary={true}>
					<p class="title-medium px-3 sm:px-5 md:px-6">Contact Us</p>
				</Button>
			</div>
		</div>
	</section>

	<section class=" grid justify-items-center bg-gradient-to-b from-black/30 to-transparent to-30%">
		<div class="inner-section flex w-full flex-col items-center gap-44 text-center">
			<div class="flex flex-col items-center gap-4">
				<h1 class="title-medium md:title-large text-primary uppercase md:uppercase">Our mission</h1>
				<h3 class="headline-small sm:headline-medium md:display-small lg:display-medium max-w-3xl">
					Leverage the power of modern technologies to
					<span class="text-tertiary"> design & develop websites </span>
					in a more cost efficient manner for startups and businesses.
				</h3>
			</div>
		</div>
	</section>

	<section class=" relative grid justify-items-center">
		<div class="inner-section flex w-full flex-col items-center gap-44 text-center">
			<div class="grid grid-cols-1 lg:grid-cols-3">
				<div class="z-10 flex w-full flex-col gap-24 lg:col-span-2">
					<TextSection title="What we do">
						At Futino, we specialize in web design, development, & hosting. We understand the
						challenges faced by businesses in establishing their online presence and staying
						competitive.
					</TextSection>

					<TextSection title="Why we do it">
						We were inspired to create Futino when we observed that traditional web design &
						development was almost always too expensive and time-consuming, often leaving smaller
						businesses at a disadvantage. We wanted the possibilty for companies with less upfront
						resources or companies with less possibility for risk to have access to efficient,
						top-quality web solutions that wouldn't break the bank and require any risk analysis.
					</TextSection>
					<TextSection title="How we do it">
						Our secret sauce lies in harnessing the power of AI and mixing it with the most modern
						technologies out there. We infuse AI technology into our design and development
						processes to streamline workflows and enhance overall efficiency. By doing so, we not
						only deliver visually stunning websites but also significantly reduce the time and cost
						associated with web projects.
						<br /> <br />
						Our unique pricing model is also what differs us from the other design and development companies.
						Instead of paying highly unpredictable & highly inflated billable hours (also totally determined
						by the other party), you pay a flat monthly price for a fixed amount of work from us. It
						is by far a more preferred and just better model for startups and growing businesses.
					</TextSection>
				</div>

				<img
					src="artwork/star_3.png"
					alt=""
					class="drop-shadow-star absolute right-0 z-0 hidden aspect-square h-full lg:flex"
				/>
			</div>
		</div>
	</section>
	<section id="team" class=" grid justify-items-center shadow-2xl">
		<div class="inner-section flex w-full flex-col gap-12 text-left">
			<TransitionElement transition="slide" delay={200} duration={1000}>
				<!--Any sort of glass effect would be good here-->
				<h1 class="display-medium pb-4">
					<span class="text-primary">[Y]</span>our People
				</h1>

				<div
					class="title-medium border-primary divide-primary shadow-glow flex flex-col divide-y border-y"
				>
					{#each team as { index, name, position, body, imgPath, socialLinks }}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<button class="group flex flex-col" on:click={handleClick(index)}>
							<div
								class="group-hover:text-tertiary hover:text-primary group my-6 grid grid-cols-3 grid-rows-2 place-content-between text-left md:grid-cols-7 md:grid-rows-1 md:text-center"
							>
								<h1 class="title-large col-span-2 row-start-1 my-auto tracking-wide md:col-span-3">
									{name}
								</h1>
								<h1
									class="text-outline col-span-2 row-start-2 my-auto md:col-span-3 md:row-start-1"
								>
									{position}
								</h1>

								<Icon
									class="text-primary group-hover:text-tertiary col-span-1 col-start-7 row-span-2 row-start-1 flex place-items-center justify-self-end px-1 transition-all md:col-start-7 {index ==
									activeMember
										? 'rotate-180 group-hover:-translate-y-1'
										: 'group-hover:translate-y-1'} "
									icon="down-arrow"
									height="24"
									width="24"
								/>
							</div>
							{#if index == activeMember}
								<div
									class="my-4 mb-8 mr-4 grid grid-cols-5 gap-6 md:grid-cols-7 md:grid-rows-1"
									in:slide
									out:slide
								>
									<img
										src={imgPath}
										id="{index}-img"
										alt="no img"
										in:fade
										out:fade
										class="col-span-2 aspect-[0.6] w-full self-start justify-self-center rounded-xl object-cover object-center sm:aspect-[0.8] sm:w-1/2 md:col-span-3 md:h-48 md:w-48 md:place-self-center"
									/>

									<div
										class="col-span-3 row-span-2 h-fit w-full place-items-center gap-y-2 justify-self-start md:col-span-3 md:row-span-1 md:self-center"
										in:fade
										out:fade
									>
										<p class="my-auto text-balance text-left">{body}</p>
									</div>

									<div
										in:fade
										out:fade
										class="text-tertiary col-span-2 row-start-2 mt-auto flex flex-row justify-between gap-x-4 py-1 sm:justify-center md:col-span-1 md:col-start-7 md:row-start-auto md:mt-0 md:flex-col md:gap-6 md:justify-self-end"
									>
										{#if socialLinks['instagram']}
											<a href={socialLinks['instagram']} target="_blank">
												<img
													src="artwork/instagram_logo_1.png"
													alt="instagram"
													class="drop-shadow-instagram-sm hover:drop-shadow-instagram-sm-hover h-8 w-8 transition-all md:h-12 md:w-12"
												/>
											</a>
										{/if}
										{#if socialLinks['facebook']}
											<a href={socialLinks['facebook']} target="_blank">
												<img
													src="artwork/facebook_1.png"
													alt="instagram"
													class="drop-shadow-facebook hover:drop-shadow-facebook-hover h-8 w-8 transition-all md:h-12 md:w-12"
												/>
											</a>
										{/if}
										{#if socialLinks['linkedin']}
											<a href={socialLinks['linkedin']} target="_blank">
												<img
													src="artwork/linkedin_1.png"
													alt="instagram"
													class="drop-shadow-linkedin hover:drop-shadow-linkedin-hover h-8 w-8 transition-all md:h-12 md:w-12"
												/>
											</a>
										{/if}
										{#if socialLinks['github']}
											<a href={socialLinks['github']} class="">
												<img
													src="artwork/github_outline_7.png"
													alt="instagram"
													class="drop-shadow-github hover:drop-shadow-github-hover h-8 w-8 transition-all md:h-12 md:w-12"
												/>
											</a>
										{/if}
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
