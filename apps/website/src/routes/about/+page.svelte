<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import TransitionElement from '$lib/components/organisms/Inview.svelte';
	import { fade, slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import BigCard from '../BigCard.svelte';
	import SmallCard from './SmallCard.svelte';

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
		id="team"
		class=" shadow-2xl grid justify-items-center border-b border-primary-light/20 dark:border-primary-dark/20">
		<div class="flex w-full flex-col text-left md:pl-24 inner-section gap-12">
			<TransitionElement transition="slide" delay={200} duration={1000}>
				<!--Any sort of glass effect would be good here-->
				<h1 class="display-large pb-4">[Y]our People</h1>

				<div class="flex flex-col divide-y title-medium border-y">
					{#each team as { index, name, position, body, imgPath, socialLinks }}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<button class="flex flex-col group" on:click={handleClick(index)}>
							<div
								class="grid grid-cols-3 grid-rows-2 group-hover:text-tertiary-dark md:grid-rows-1 md:grid-cols-7 place-content-between text-left md:text-center my-3 group hover:text-primary-dark">
								<h1 class="col-span-2 row-start-1 md:col-span-3 font-bold tracking-wide">
									{name}
								</h1>
								<h1 class="col-span-2 row-start-2 md:row-start-1 md:col-span-3">
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
									class="flex flex-row gap-4 md:grid md:grid-rows-1 md:grid-cols-7 my-4"
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
												<Icon
													icon="instagram"
													class="text-[#833AB4] hover:scale-105 transition-all"
													height="48"
													width="48" />
											</a>
										{/if}
										{#if socialLinks['facebook']}
											<a href={socialLinks['facebook']} class="">
												<Icon
													icon="facebook"
													class="text-[#1877F2]hover:scale-105 transition-all"
													height="48"
													width="48" />
											</a>
										{/if}
										{#if socialLinks['linkedin']}
											<Icon
												icon="linkedin"
												class="text-[#0077B5] hover:scale-105 transition-all"
												height="48"
												width="48" />
										{/if}
										{#if socialLinks['github']}
											<Icon
												icon="github"
												class="text-white hover:scale-105 transition-all"
												height="48"
												width="48" />
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
