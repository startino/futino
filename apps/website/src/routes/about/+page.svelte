<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import TransitionElement from '$lib/components/organisms/Inview.svelte';
	import { fade, slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import TextSection from './TextSection.svelte';

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
			position: 'Chief Executive Officer, Lead Developer',
			body: `I noticed that making a website was either too expensive (hiring someone) or too time
					consuming (websitebuilder) for everyone - individuals, startups, especially large
					businesses. I wanted to create a solution to these problems.`,
			imgPath: 'people/jorge_1.jpg',
			socialLinks: {
				instagram: 'https://www.instagram.com/horhey_jorge',
				linkedin: 'https://www.linkedin.com/in/jorge-lewis-0b4848144/',
				github: 'https://github.com/antopiahk',
			},
		},
		{
			index: 1,
			name: 'Alexey Skachkov',
			position: 'Chief Marketing Officer',
			body: `I noticed that making a website was either too expensive (hiring someone) or too time
					consuming (websitebuilder) for everyone - individuals, startups, especially large
					businesses. I wanted to create a solution to these problems.`,
			imgPath: 'people/alexey_1.jpg',
			socialLinks: {
				facebook: 'https://www.facebook.com/alexey.skachkov.54',
			},
		},
	];
</script>

<svelte:head>
	{#each team as { imgPath }}
		<link rel="preload" as="image" href={imgPath} />
	{/each}
</svelte:head>

<main class="text-center border-b border-primary-dark/40 flex flex-col items-stretch">
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

	<section class="shadow-2xl grid justify-items-center">
		<div class="flex w-full flex-col text-center inner-section gap-44 items-center">
			<div class="flex flex-col gap-4 items-center">
				<h1 class="title-medium md:title-large uppercase text-primary-dark md:uppercase">
					Our mission
				</h1>
				<h3 class="headline-small sm:headline-medium md:display-small lg:display-medium max-w-3xl">
					Leverage the power of modern technologies to
					<span class="text-tertiary-dark"> design & develop websites </span>
					in a more cost efficient manner for startups and small businesses.
				</h3>
			</div>
		</div>
	</section>

	<section class="shadow-2xl grid justify-items-center relative">
		<div class="flex w-full flex-col text-center inner-section gap-44 items-center">
			<div class="grid grid-cols-1 lg:grid-cols-3">
				<div class="flex flex-col lg:col-span-2 gap-24 w-full z-10">
					<TextSection title="What we do">
						At Futino, we specialize in web design, development, & hosting. We understand the
						challenges faced by startups and small businesses in establishing their online presence
						and staying competitive.
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
						is by far a more preferred and just better model for startups and smaller companies.
					</TextSection>
				</div>

				<img
					src="artwork/star_3.png"
					alt=""
					class="h-full drop-shadow-star hidden lg:flex z-0 aspect-square right-0 absolute" />
			</div>
		</div>
	</section>
	<section id="team" class=" shadow-2xl grid justify-items-center">
		<div class="flex w-full flex-col text-left inner-section gap-12">
			<TransitionElement transition="slide" delay={200} duration={1000}>
				<!--Any sort of glass effect would be good here-->
				<h1 class="display-medium pb-4">
					<span class="text-primary-dark">[Y]</span>our People
				</h1>

				<div
					class="flex flex-col divide-y title-medium border-y border-primary-dark divide-primary-dark shadow-glow">
					{#each team as { index, name, position, body, imgPath, socialLinks }}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<button class="flex flex-col group" on:click={handleClick(index)}>
							<div
								class="grid grid-cols-3 grid-rows-2 group-hover:text-tertiary-dark md:grid-rows-1 md:grid-cols-7 place-content-between text-left md:text-center my-6 group hover:text-primary-dark">
								<h1 class="col-span-2 row-start-1 my-auto md:col-span-3 tracking-wide title-large">
									{name}
								</h1>
								<h1
									class="col-span-2 row-start-2 md:row-start-1 my-auto md:col-span-3 text-outline-dark">
									{position}
								</h1>

								<Icon
									class="row-span-2 text-primary-dark group-hover:text-tertiary-dark row-start-1 flex place-items-center col-start-7 col-span-1 md:col-start-7 transition-all justify-self-end px-1 {index ==
									activeMember
										? 'rotate-180 group-hover:-translate-y-1'
										: 'group-hover:translate-y-1'} "
									icon="down-arrow"
									height="24"
									width="24" />
							</div>
							{#if index == activeMember}
								<div
									class="flex flex-row gap-4 md:grid md:grid-rows-1 md:grid-cols-7 my-4 mb-8"
									in:slide
									out:slide>
									<div
										class="col-span-1 flex md:col-span-3 self-start md:justify-self-center"
										in:fade
										out:fade>
										<img
											src={imgPath}
											id="{index}-img"
											alt="no img"
											class=" object-center object-cover rounded-xl w-44 h-52 md:w-48 md:h-48" />
									</div>
									<div
										in:fade
										out:fade
										class="flex flex-col text-tertiary-dark md:flex-row justify-self-start py-1 md:h-fit justify-between md:w-fit md:gap-6 md:mx-auto md:self-center md:col-start-4 md:col-span-3">
										{#if socialLinks['instagram']}
											<a href={socialLinks['instagram']} class="">
												<img
													src="artwork/instagram_logo_1.png"
													alt="instagram"
													class="drop-shadow-instagram-sm hover:drop-shadow-instagram-sm-hover h-12 w-12 transition-all" />
											</a>
										{/if}
										{#if socialLinks['facebook']}
											<a href={socialLinks['facebook']} class="">
												<img
													src="artwork/facebook_1.png"
													alt="instagram"
													class="drop-shadow-facebook hover:drop-shadow-facebook-hover h-12 w-12 transition-all" />
											</a>
										{/if}
										{#if socialLinks['linkedin']}
											<a href={socialLinks['linkedin']} class="">
												<img
													src="artwork/linkedin_1.png"
													alt="instagram"
													class="drop-shadow-linkedin hover:drop-shadow-linkedin-hover h-12 w-12 transition-all" />
											</a>
										{/if}
										{#if socialLinks['github']}
											<a href={socialLinks['github']} class="">
												<img
													src="artwork/github_outline_7.png"
													alt="instagram"
													class="drop-shadow-github hover:drop-shadow-github-hover h-12 w-12 transition-all" />
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
