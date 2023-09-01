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
	import ContactMethod from '$lib/components/molecules/ContactMethod.svelte';

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
			title: 'Contact',
			href: '#contact',
		},
		{
			chapterNumber: 4,
			title: 'Founders',
			href: '#founders',
		},
	];

	onMount(() => {});
</script>

<svelte:window bind:scrollY />

<ChapterMenu bind:chapterInView chapters={landingPageChapters} />

<main class="text-center">
	<!--Hero-->
	<section
		id="hero"
		use:inview={chapterInViewOptions}
		on:inview_enter={handleChapterInView(0)}
		class="h-screen place-items-center bg-[url('/glow_bg_2.png')] bg-no-repeat bg-fit bg-top">
		<div id="tsparticles-hero" class="absolute w-full h-full -z-10" />
		<div class="bg-black/30 w-full h-full absolute" />

		<div class="relative grid gap-12 z-10 justify-items-center inner-section">
			<h1 class="font-extrabold tracking-tight display-medium lg:display-large">
				Website Design and Development
			</h1>

			<h3 class=" headline-small lg:headline-medium max-w-3xl">
				Growing startups and companies with Creative <span class="text-primary-dark"
					>Web Design</span
				>, Efficient
				<span class="text-primary-dark">Web Development</span>, and Strategic
				<span class="text-primary-dark">Hosting</span> with a unique pricing model.
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

		<div class="flex flex-col inner-section">
			<h1 class="pb-12 display-medium">Areas of Expertise</h1>
			{#each servicesChapters as { chapterNumber, inView, title, image, body }}
				<div
					class="relative grid w-full grid-cols-1 py-16 overflow-y-hidden gap-y-14 gap-x-0 sm:grid-cols-2 place-items-center">
					<!--Center line and Chapter checkmark-->

					<div
						class="absolute flex-col items-center hidden h-full text-center sm:flex -translate-x-1/2 left-1/2 top-8">
						<!--Circle-->
						<div
							class="flex items-center w-11 h-11 text-center rounded-full bg-surface-dark circle-shadow">
							<h1 class="mx-auto display-small z-20">
								{chapterNumber}
							</h1>
						</div>

						<InView
							once={true}
							duration={800}
							dontFade={true}
							fly={{ x: 0, y: -500 }}
							axis={'y'}
							delay={100}
							bottom={300}
							class="flex justify-items-center h-full sm:flex w-full pb-2 mb-2">
							<!--Line-->
							<div
								class=" -mt-6 flex w-1 mx-auto h-full rounded-full bg-surface-light dark:bg-surface-dark line-shadow" />
						</InView>
					</div>

					<!--Content of Chapter-->

					<InView presetOptions={rightFlyPreset} class="sm:pr-7">
						<img
							src={image}
							alt=""
							class="order-last object-cover object-center w-1/2 mx-auto bg-no-repeat sm:w-full sm:order-first" />
					</InView>

					<div
						class="flex flex-col max-w-xl gap-2 p-1 overflow-hidden text-left justify-self-start">
						<div class="flex flex-row items-center gap-3 pt-1 pl-1 sm:p-0">
							<div class="relative flex w-12 h-12 place-items-center sm:hidden">
								<div
									class="flex items-center w-11 h-11 text-center rounded-full bg-surface-dark circle-shadow shadow-primary-dark">
									<h1 class="mx-auto display-small z-20">
										{chapterNumber}
									</h1>
								</div>
							</div>
							<h1 class="font-bold headline-medium sm:hidden">
								{title}
							</h1>
						</div>
						<InView fly={{ x: -100, y: 0 }} class="sm:hidden">
							<div class="w-1/4 h-0.5 mt-3 border-t border-outline-dark" />
						</InView>
						<InView presetOptions={leftFlyPreset} class="sm:pl-7">
							<h1 class="font-bold display-small lg:display-medium hidden sm:flex pb-4">
								{title}
							</h1>
							<p class="title-large">
								{body}
							</p>
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
			<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
				{#each benefits as { titleFirst, titleSecond, body, image }, i}
					<div
						class="relative grid grid-cols-5 px-6 pt-12 pb-6 overflow-hidden text-left rounded-md drop-shadow-glow-md-dark border-1 border-primary-dark justify-items-center bg-surface-dark">
						<div class="col-span-4 flex flex-col w-full gap-3 z-10">
							<h1 class=" headline-large leading-tight border-outline-dark">
								{titleFirst} <br />
								{titleSecond}
							</h1>
							<hr />
							<h3 class="body-large">{body}</h3>
						</div>
						<div class="absolute top-3 right-3 z-0 flex w-fit h-fit">
							<img src={image} alt="" class="object-cover object-center mx-auto w-36 h-36" />
						</div>
					</div>
				{/each}
			</div>

			<Button class="" href="/pricing">
				<p class="px-3 sm:px-5 md:px-6 headline-medium uppercase">Pricing</p>
			</Button>
		</div>
	</section>

	<!--Contact Section-->
	<section
		id="contact"
		use:inview={chapterInViewOptions}
		on:inview_enter={handleChapterInView(3)}
		class="shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<div
			class="inner-section flex flex-col w-full gap-12
		">
			<div class="grid grid-cols-1 md:grid-cols-5 w-full gap-12">
				<InView
					duration={250}
					fly={{ x: -500, y: 0 }}
					class="z-10 w-full h-full overflow-visible md:col-span-1 justify-self-center md:justify-self-end">
					<!--PM Option-->

					<div
						class="flex flex-row md:flex-col h-full md:items-end justify-around w-full place-content-between text-surface-on-dark font-extrabold title-large">
						<!--Phone-->
						<ContactMethod
							img="artwork/call_logo_2.png"
							href="tel:9133600394"
							label="+852 9747 3013"
							class="hover:text-violet-400"
							imgClass="drop-shadow-phone group-hover:drop-shadow-phone-hover " />
						<!--WhatsApp-->
						<ContactMethod
							img="artwork/whatsapp_logo_6.png"
							href="https://wa.me/+85297473013"
							label="Futino Whatsapp"
							class="hover:text-lime-400"
							imgClass="drop-shadow-whatsapp group-hover:drop-shadow-whatsapp-hover" />
						<!--Instagram-->
						<ContactMethod
							img="artwork/instagram_logo_1.png"
							href=""
							label="@Futino"
							class="hover:text-fuchsia-400"
							imgClass="drop-shadow-instagram group-hover:drop-shadow-instagram-hover" />

						<!--Email-->
						<ContactMethod
							img="artwork/email_1.png"
							href="mailto:contact@futi.no"
							label="contact@futi.no"
							class="hover:text-blue-400"
							imgClass="drop-shadow-email group-hover:drop-shadow-email-hover" />
					</div>
				</InView>
				<InView
					duration={350}
					fly={{ x: -700, y: 0 }}
					delay={300}
					class="z-0 overflow-visible h-full md:col-span-4 max-w-4xl">
					<!--Contact form Option-->
					<div
						class="flex flex-col p-8 gap-y-8 text-left shadow-xl shadow-black bg-surface-dark border-1 border-primary-dark rounded-md">
						<div class="flex flex-col ml-2">
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
		on:inview_enter={handleChapterInView(4)}
		id="founders"
		class=" shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={500} class="">
			<div class="flex flex-col mx-auto gap-y-12 place-items-center inner-section">
				<div class="grid grid-cols-1 gap-x-4 gap-y-4">
					<!--Jorge's Card-->
					<div
						class="drop-shadow-glow-lg-dark border-1 flex flex-col max-w-xl p-6 rounded-lg bg-surface-dark border-primary-dark">
						<img
							src="/people/jorge_6.jpg"
							alt="Not found"
							class="self-center object-cover object-center w-24 h-24 bg-black rounded-full" />
						<h2 class="pt-2 display-small">Jorge Lewis</h2>
						<h3 class="pb-4 text-tertiary-dark title-small">CEO & Founder of Futino</h3>
						<h2 class="title-medium max-w-2xl">
							I noticed that making a website was either too expensive (hiring an agency) or too
							time consuming (website builder) for everyone - individuals, startups, especially
							large businesses. I wanted to create the solution to these problems.
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

<style>
	.circle-shadow {
		@apply relative;
	}

	.circle-shadow:before {
		@apply absolute left-0 right-0 bottom-0 top-0 z-0 rounded-full shadow-glow shadow-primary-dark/80 content-[''];
	}
	.line-shadow {
		@apply relative;
	}

	.line-shadow::before {
		@apply absolute left-0 right-0 bottom-0 top-0 rounded-full -z-10  shadow-glow shadow-primary-dark/80 content-[''];
	}
</style>
