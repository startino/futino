<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import ClientCarousel from '$lib/components/organisms/ClientCarousel.svelte';
	import ChapterMenu from '$lib/components/organisms/ChapterMenu.svelte';
	import { servicesChapters } from './serviceChapters';
	import { onMount } from 'svelte';

	import { inview } from 'svelte-inview';
	import type { Options } from 'svelte-inview';
	import InView, { type TransitionOptions } from '$lib/components/organisms/Inview.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import InViewSlide from '$lib/components/organisms/InViewSlide.svelte';
	import { benefits } from './benefits';
	import ContactForm from '$lib/components/organisms/ContactForm.svelte';

	let scrollY: number;
	// Index of the current chapter that is in the viewport, used by chapter menu.
	let chapterInView: number;

	const chapterInViewOptions: Options = {
		rootMargin: '-10%',
		unobserveOnEnter: false,
	};

	const leftFlyPreset: TransitionOptions = {
		delay: 700,
		duration: 300,
		once: true,
		fly: {
			x: -200,
			y: 0,
		},
	};
	const rightFlyPreset: TransitionOptions = {
		delay: 700,
		duration: 300,
		once: true,
		fly: {
			x: 200,
			y: 0,
		},
	};

	const handleChapterInView =
		(inViewChapter: number) =>
		({ detail }: CustomEvent<ObserverEventDetails>) => {
			chapterInView = inViewChapter;
		};

	const landingPageChapters: {
		chapterNumber: number;
		title: string;
		href: string;
	}[] = [
		{
			chapterNumber: 0,
			title: 'Hero',
			href: '#hero',
		},
		{
			chapterNumber: 1,
			title: 'Services',
			href: '#journey',
		},
		{
			chapterNumber: 2,
			title: 'Benefits',
			href: '#benefits',
		},
		{
			chapterNumber: 3,
			title: "Here's How",
			href: '#hereshow',
		},
		{
			chapterNumber: 4,
			title: 'Contact',
			href: '#contact',
		},
		{
			chapterNumber: 5,
			title: 'Founders',
			href: '#founders',
		},
	];

	onMount(() => {});
</script>

<svelte:window bind:scrollY />

<Header />
<ChapterMenu bind:chapterInView chapters={landingPageChapters} />

<main class="text-center">
	<!--Hero-->
	<section
		id="hero"
		use:inview={chapterInViewOptions}
		on:inview_enter={handleChapterInView(0)}
		class="h-screen place-items-center">
		<div id="tsparticles-hero" class="absolute w-full h-full -z-10" />
		<div class="grid gap-12 justify-items-center inner-section">
			<h1 class="font-extrabold tracking-tight display-medium">Website Design and Development</h1>

			<h3 class="max-w-md title-large md:max-w-xl">
				Growing startups and companies with Creative <span
					class="text-primary-light dark:text-primary-dark">Web Design</span
				>, Efficient <span class="text-primary-light dark:text-primary-dark">Web Development</span>,
				and Strategic <span class="text-primary-light dark:text-primary-dark">Hosting</span> with a unique
				pricing model.
			</h3>

			<div class="grid grid-cols-2 gap-x-4">
				<Button class="" href="/pricing">
					<p class="px-3 sm:px-5 md:px-6 title-medium">See Pricing</p>
				</Button>

				<Button class="" href="/contact" secondary={true}>
					<p class="px-3 sm:px-5 md:px-6 title-medium">Contact Us</p>
				</Button>
			</div>
		</div>
	</section>

	<!--Big-Clients Slideshow-->
	<ClientCarousel />

	<!--Journey Section-->
	<section
		id="journey"
		use:inview={chapterInViewOptions}
		on:inview_enter={handleChapterInView(1)}
		class="shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<!--Absolute center line
		<div class="absolute z-50 w-1 h-6 -translate-x-1/2 bg-red-500 left-1/2 top-1/2" />
		-->

		<div class="flex flex-col max-w-4xl inner-section">
			<h1 class="pb-12 display-medium">Areas of Expertise</h1>
			{#each servicesChapters as { chapterNumber, inView, title, image, body }}
				<div
					class="relative grid w-full grid-cols-1 py-16 overflow-y-hidden gap-y-14 gap-x-0 sm:grid-cols-2 place-items-center">
					<!--Center line and Chapter checkmark-->

					<div
						class="absolute flex-col items-center hidden h-fit text-center sm:flex -translate-x-1/2 left-1/2 top-8">
						<!--Circle-->
						<div
							class="flex items-center w-11 h-11 text-center rounded-full bg-surface-dark circle-shadow">
							<h1 class="mx-auto display-small z-20">
								{chapterNumber}
							</h1>
						</div>

						<InViewSlide
							once={true}
							duration={800}
							axis={'y'}
							delay={100}
							bottom="-20%"
							class="flex items-center h-[350px] md:h-[400px] sm:flex w-1">
							<!--Line-->
							<div
								class=" flex w-1 h-full rounded-full bg-surface-light dark:bg-surface-dark line-shadow" />
						</InViewSlide>
					</div>

					<!--Content of Chapter-->

					<InView presetOptions={rightFlyPreset} class="sm:pr-7">
						<img
							src={image}
							alt=""
							class="order-last object-cover object-center w-1/2 mx-auto bg-no-repeat sm:w-full sm:order-first" />
					</InView>

					<div
						class="flex flex-col max-w-md gap-2 p-1 overflow-hidden text-left justify-self-start">
						<div class="flex flex-row items-center gap-3 pt-1 pl-1 sm:p-0">
							<div class="relative flex w-12 h-12 place-items-center sm:hidden">
								<!--Circle-->
								<div
									class="z-20 flex items-center w-10 h-10 text-center rounded-full bg-surface-dark">
									<h1 class="mx-auto display-small">
										{chapterNumber}
									</h1>
								</div>
								<!--Glow circle-->
								<InView
									once={true}
									class="absolute z-0 text-center rounded-full w-11 h-11 bg-gradient-to-t from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark blur-sm" />
							</div>
							<h1 class="font-bold display-small sm:hidden">
								{title}
							</h1>
						</div>
						<InView fly={{ x: -100, y: 0 }} class="sm:hidden">
							<div class="w-1/4 h-1 border-t border-primary-light dark:border-primary-dark" />
						</InView>
						<InView presetOptions={leftFlyPreset} class="sm:pl-7">
							<h1 class="font-bold display-small hidden sm:flex">
								{title}
							</h1>
							<p class="title-medium">
								{body}
							</p>
							<Button class="w-fit mt-6" secondary={true} href="/about">
								<h1 class="title-medium uppercase">Learn More</h1>
							</Button>
						</InView>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!--Member Benefits Section-->
	<section
		id="benefits"
		use:inview={chapterInViewOptions}
		on:inview_enter={handleChapterInView(2)}
		class="items-center shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<div class="flex flex-col items-center gap-6 inner-section justify-items-center">
			<div class="max-w-xl py-6 w-fit">
				<h1 class="display-medium">Membership Benefits</h1>
				<h2 class="body-medium">
					Perks that are simply too good to look anywhere else for your website needs. Seriously.
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				{#each benefits as { titleFirst, titleSecond, body, image }, i}
					<div
						class="relative grid grid-cols-5 px-6 pt-16 pb-6 overflow-hidden text-left rounded-lg shadow-glow shadow-secondary-dark/30 justify-items-center bg-surface-dark">
						<div class="col-span-3 flex flex-col w-full gap-2 z-10">
							<h1
								class=" headline-large border-outline-light leading-tight dark:border-outline-dark">
								{titleFirst} <br />
								{titleSecond}
							</h1>
							<hr />
							<h3 class="body-large">{body}</h3>
						</div>
						<div class="absolute top-3 right-3 z-0 flex w-fit h-fit">
							<img src={image} alt="" class="object-cover object-center mx-auto w-44 h-44" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!--CTA section-->
	<section id="hereshow" class="shadow-lg border-secondary-light/20 dark:border-secondary-dark/20">
		<InView transition="fade" duration={300}>
			<div class="flex flex-col space-y-12 inner-section items-center">
				<h1 class="display-large">Let's Get Started</h1>
				<div class="grid grid-cols-2 gap-x-4">
					<Button class="" href="/pricing">
						<p class="px-3 sm:px-5 md:px-6 title-medium">See Pricing</p>
					</Button>

					<Button class="" secondary={true} href="/contact">
						<p class="px-3 sm:px-5 md:px-6 title-medium">Book an intro call</p>
					</Button>
				</div>
			</div>
		</InView>
	</section>
	<!--Contact Section-->
	<section
		id="contact"
		use:inview={chapterInViewOptions}
		on:inview_enter={handleChapterInView(5)}
		class="shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<div
			class="inner-section flex flex-col gap-y-12 w-full
		">
			<h1 class="display-large">We'd Love to Hear From You</h1>

			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 text-left">
				<InView duration={250} fly={{ x: -500, y: 0 }} class="z-10 w-full h-full">
					<!--PM Option-->
					<div
						class="flex flex-col h-full p-8 gap-y-12 shadow-lg shadow-black/40 bg-surface-dark border-1 border-primary-dark rounded-md">
						<div class="flex flex-col">
							<h2 class="font-extrabold display-medium">Give us a PM</h2>
							<p class="max-w-3xl title-medium">
								Send us message on one of these platforms. <br />
								We'll get back to you within a couple hours.
							</p>
						</div>
						<div class="flex flex-col h-full flex-1 gap-y-5">
							<div class="grid grid-cols-4 grid-rows-4 gap-6 text-tertiary-dark">
								<!--Phone number-->
								<div class="pm-icon">
									<Icon icon="phone" height="32px" width="32px" />
								</div>

								<a class="pm-text" href="tel:9133600394">
									<h1 class="pl-2 title-small sm:title-large">+852 9747 3013</h1>
								</a>
								<!--WhatsApp-->
								<div class="pm-icon">
									<Icon icon="whatsapp" height="32px" width="32px" />
								</div>

								<a class="pm-text" href="mailto:contact@futi.no">
									<h1 class="pl-2 title-small sm:title-large">+852 9747 3013</h1>
								</a>
								<!--Email-->
								<div class="pm-icon">
									<Icon icon="instagram" height="32px" width="32px" />
								</div>

								<a class="pm-text" href="mailto:ggsoccercamps@gmail.com">
									<h1 class="pl-2 title-small sm:title-large">@Futino</h1>
								</a>
								<!--Email-->
								<div class="pm-icon">
									<Icon icon="email" height="32px" width="32px" />
								</div>

								<a class="pm-text" href="mailto:contact@futi.no">
									<h1 class="pl-2 title-small sm:title-large">contact@futi.no</h1>
								</a>
							</div>
						</div>
					</div>
				</InView>

				<InView
					duration={350}
					fly={{ x: -700, y: 0 }}
					delay={300}
					class="z-0 overflow-visible h-full w-full">
					<!--Contact form Option-->
					<div
						class="flex flex-col p-8 gap-y-8 text-left shadow-lg shadow-black/40 bg-surface-dark border-1 border-primary-dark rounded-md">
						<div class="flex flex-col">
							<h2 class="font-extrabold display-medium">Contact Us</h2>
							<p class="title-medium">
								Feel free to send us an email for any requests or questions. <br />
								We'll get back to you within a couple hours.
							</p>
						</div>

						<ContactForm />
					</div>
				</InView>
			</div>
		</div>
	</section>

	<!--Founders Section-->
	<section
		use:inview={chapterInViewOptions}
		on:inview_enter={handleChapterInView(5)}
		id="founders"
		class=" shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={500} class="">
			<div class="flex flex-col mx-auto gap-y-12 place-items-center inner-section">
				<div class="grid grid-cols-1 gap-x-4 gap-y-4">
					<!--Jorge's Card-->
					<div class="founder-card">
						<img
							src="/people/jorge_6.jpg"
							alt="Not found"
							class="self-center object-cover object-center w-24 h-24 bg-black rounded-full" />
						<h2 class="pt-2 display-small">Jorge Lewis</h2>
						<h3 class="pb-4 text-gray-400 title-small">CEO & Founder of Futino</h3>
						<h2 class="body-large max-w-2xl">
							I noticed that making a website was either too expensive (hiring someone) or too time
							consuming (websitebuilder) for everyone - individuals, startups, especially large
							businesses. I wanted to create a solution to these problems.
						</h2>
						<Button href="/about#team" class=" my-4" secondary={true}>
							<h1 class="p-2">Learn More</h1>
						</Button>
					</div>
				</div>
			</div>
		</InView>
	</section>
</main>

<Footer />

<style>
	.pm-text {
		@apply flex items-center col-span-3 text-surface-on-dark justify-self-start;
	}
	.pm-icon {
		@apply col-span-1 p-5 rounded-full bg-surface-dark text-surface-on-dark border w-min h-min justify-self-end;
	}
	.founder-card {
		@apply flex flex-col max-w-xl p-6 rounded-lg bg-surface-dark shadow-glow shadow-secondary-dark/30 border-primary-dark;
	}
	.circle-shadow {
		@apply relative;
	}

	.circle-shadow:before {
		@apply absolute left-0 right-0 bottom-0 top-0 -z-10 rounded-full shadow-glow shadow-primary-dark/80 content-[''];
	}
	.line-shadow {
		@apply relative;
	}

	.line-shadow::before {
		@apply absolute left-0 right-0 bottom-0 top-0 rounded-full -z-10  shadow-glow shadow-primary-dark/80 content-[''];
	}
</style>
