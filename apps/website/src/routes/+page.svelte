<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import ClientCarousel from '$lib/components/organisms/ClientCarousel.svelte';
	import ChapterMenu from '$lib/components/organisms/ChapterMenu.svelte';
	import { chapters } from './chapters';
	import { onMount } from 'svelte';

	import { inview } from 'svelte-inview';
	import type { Options } from 'svelte-inview';
	import { fade, slide } from 'svelte/transition';
	import InView, { type TransitionOptions } from '$lib/components/organisms/Inview.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import ClientCard from './ClientCard.svelte';
	import { tooltip } from '$lib/components/organisms/tooltip/tooltip';
	import AnimatedCounter from './AnimatedCounter.svelte';
	import InViewSlide from '$lib/components/organisms/InViewSlide.svelte';
	import Inview from '$lib/components/organisms/Inview.svelte';

	let scrollY: number;

	const inviewOptions: Options = {
		rootMargin: '-10%',
		unobserveOnEnter: false,
	};

	const leftSlidePreset: TransitionOptions = {
		delay: 100,
		duration: 300,
		once: true,
		fly: {
			x: -200,
			y: 0,
		},
	};
	const rightSlidePreset: TransitionOptions = {
		delay: 100,
		duration: 300,
		once: true,
		fly: {
			x: 200,
			y: 0,
		},
	};

	const clientCards = [
		{
			index: 0,
			img_path: 'fav_icon.png',
			name: 'John Mackadoo',
			company: 'Flyers Go Crazy',
			body: "I know there's a way i can type loris paragraphs in vscode but I forgot the shortcut, if you could lmk, would be appreciated.",
			vid_path: 'client_websites/ggsoccer_whole_dark.webm',
		},
		{
			index: 1,
			img_path: 'fav_icon.png',
			name: 'John Mackadoo',
			company: 'Flyers Go Crazy',
			body: "I know there's a way i can type loris paragraphs in vscode but I forgot the shortcut, if you could lmk, would be appreciated.",
			vid_path: 'client_websites/ggsoccer_whole_dark.webm',
		},
		{
			index: 2,
			img_path: 'fav_icon.png',
			name: 'John Mackadoo',
			company: 'Flyers Go Crazy',
			body: "I know there's a way i can type loris paragraphs in vscode but I forgot the shortcut, if you could lmk, would be appreciated.",
			vid_path: 'client_websites/ggsoccer_whole_dark.webm',
		},
		{
			index: 3,
			img_path: 'fav_icon.png',
			name: 'John Mackadoo',
			company: 'Flyers Go Crazy',
			body: "I know there's a way i can type loris paragraphs in vscode but I forgot the shortcut, if you could lmk, would be appreciated.",
			vid_path: 'client_websites/ggsoccer_whole_dark.webm',
		},
	];

	const landingPageChapters: {
		chapterNumber: number;
		title: string;
		href: string;
	}[] = [
		{
			chapterNumber: 1,
			title: 'Hero',
			href: '#hero',
		},
		{
			chapterNumber: 2,
			title: 'Services',
			href: '#journey',
		},
		{
			chapterNumber: 3,
			title: 'Recent Work',
			href: '#journey',
		},
		{
			chapterNumber: 4,
			title: 'Pricing',
			href: '#pricing',
		},
		{
			chapterNumber: 5,
			title: 'FAQs',
			href: '#faqs',
		},
	];

	onMount(() => {});
</script>

<svelte:window bind:scrollY />

<Header />
<ChapterMenu chapters={landingPageChapters} />

<main class="text-center">
	<!--Hero-->
	<section id="hero" class="h-screen place-items-center">
		<div id="tsparticles-hero" class="absolute w-full h-full -z-10" />
		<div class="grid gap-12 justify-items-center inner-section">
			<h1 class="display-medium font-extrabold tracking-tight">
				Designing Dreams, Developing Destinations
			</h1>

			<h3 class="title-medium max-w-md md:max-w-xl">
				Growing startups and companies with Creative <span
					class="text-primary-light dark:text-primary-dark">Design</span
				>, Efficient <span class="text-primary-light dark:text-primary-dark">Development</span>, and
				Strategic <span class="text-primary-light dark:text-primary-dark">Hosting</span> with a hellofa
				pricing model.
			</h3>

			<div class="grid grid-cols-2 gap-y-4 gap-x-4 sm::grid-cols-2">
				<a href="{base}/about">
					<Button class="w-full h-full">
						<p class="p-2 title-medium">See Pricing</p>
					</Button>
				</a>
				<a href="{base}/contact">
					<Button class="w-full h-full">
						<p class="p-2 title-medium">Contact Us</p>
					</Button>
				</a>
			</div>
		</div>
	</section>

	<!--Big-Clients Slideshow-->
	<section id="slideshow" class="z-10 grid self-end">
		<ClientCarousel />
	</section>

	<!--Journey Section-->
	<section
		id="journey"
		class=" shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<!--Absolute screen center ruler element heh
		<div class="absolute z-50 w-1 h-6 -translate-x-1/2 bg-red-500 left-1/2 top-1/2" />
-->
		<div class="flex flex-col max-w-4xl inner-section">
			<h1 class="pb-12 display-medium">Areas of Expertise</h1>
			{#each chapters as { chapterNumber, inView, title, image, body }}
				<div
					class="relative grid w-full grid-cols-1 gap-14 sm:grid-cols-2 place-items-center overflow-y-hidden py-16">
					<!--Center line and Chapter checkmark-->

					<div
						class="absolute hidden sm:flex flex-col items-center h-full text-center sm:-translate-x-1/2 sm:left-1/2 top-12">
						<!--Circle-->
						<div
							class="absolute z-20 flex items-center w-10 h-10 text-center rounded-full bg-surface-dark -top-5">
							<h1 class="mx-auto display-small">
								{chapterNumber}
							</h1>
						</div>
						<!--Glow circle-->
						<InView
							once={true}
							bottom={-200}
							class="absolute z-0 items-center text-center rounded-full w-11 h-11 bg-gradient-to-t animate-spin from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark blur-md -top-5" />

						<InViewSlide
							once={true}
							duration={1000}
							axis={'y'}
							delay={300}
							bottom="-30%"
							class="relative hidden w-6 sm:h-[350px] md:h-[400px] mx-auto sm:flex">
							<!--Glow Line-->
							<div
								class="absolute z-0 h-full bottom-2 bg-gradient-to-b from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark -translate-x-1/2 w-2 blur-sm left-1/2" />
							<!--Line-->
							<div
								class="absolute z-10 h-full bottom-4 -translate-x-1/2 bg-surface-light dark:bg-surface-dark rounded-lg w-1 left-1/2" />
						</InViewSlide>
					</div>

					<!--Content of Chapter-->
					<img
						src={image}
						alt=""
						class="order-last object-cover object-center w-1/2 mx-auto bg-no-repeat sm:w-full sm:order-first" />
					<div
						class="flex flex-col max-w-md gap-2 text-left overflow-hidden justify-self-start p-1">
						<div class="flex flex-row gap-3 pt-1 pl-1 sm:p-0 items-center">
							<div class="relative w-12 h-12 flex place-items-center sm:hidden">
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
							<h1 class="display-small font-bold">
								{title}
							</h1>
						</div>
						<InView fly={{ x: -100, y: 0 }} class="sm:hidden">
							<div class=" border-t border-primary-light dark:border-primary-dark w-1/4 h-1" />
						</InView>

						<p class="body-medium">
							{body}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!--Analytics Snippet-->
	<section
		id="analytics"
		class="grid px-4 grow sm:px-6 md:px-8 border-secondary-light/20 dark:border-secondary-dark/20 bg-primary-light/20 dark:bg-primary-dark/10">
		<div class="flex flex-wrap justify-around px-4 text-center md:flex-row">
			<div class="flex flex-col p-4">
				<AnimatedCounter class="font-extrabold headline-large" finalValue={50} duration={700} />
				<h2 class="font-light body-medium">Sites Made</h2>
			</div>
			<div class="my-4 border-r border-white/20" />
			<div class="flex flex-col p-4 justify-self-end">
				<h2 class="inline font-extrabold headline-large">
					<AnimatedCounter
						class="inline font-extrabold headline-large"
						finalValue={21}
						duration={700} />
					K
				</h2>
				<h2 class="font-light body-medium">Hours Used</h2>
			</div>
			<div class="my-4 border-r border-white/20" />
			<div class="flex flex-col p-4">
				<h2 class="inline font-extrabold headline-large">
					<span class="-mr-1">$</span>
					<AnimatedCounter
						class="inline font-extrabold headline-large"
						finalValue={200}
						duration={700} />
					K
				</h2>
				<h2 class="font-light body-medium">Transacted</h2>
			</div>
			<div class="my-4 border-r border-white/20" />
			<div class="flex flex-col p-4">
				<h2 class="inline font-extrabold headline-large">
					<AnimatedCounter
						class="inline font-extrabold headline-large"
						finalValue={99.9}
						duration={700} />%
				</h2>
				<h2 class="font-light body-medium">Pure Waffle</h2>
			</div>
		</div>
	</section>

	<!--Clients Section-->
	<section
		id="clients"
		class="shadow-lg border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<div class="inner-section">
			<InView transition="fade" duration={500}>
				<h1 class="py-12 display-large">Our Clients</h1>
				<div
					class="flex flex-wrap items-center gap-12 justify-items-center max-w-7xl overflow-clip">
					{#each clientCards as { index, name, company, body, vid_path }}
						<ClientCard {name} {company} {body} {vid_path} />{/each}
				</div>
			</InView>
		</div>
	</section>

	<!--Contact Section-->
	<section
		id="contact"
		class="grid px-4 py-32 space-y-12 shadow-lg grow sm:py-34 md:py-44 sm:px-6 md:px-8 border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={500}>
			<h1 class="py-12 display-large">We'd Love to Hear From You</h1>

			<div
				class="grid items-center grid-cols-1 gap-6 mx-auto lg:grid-cols-2 max-w-7xl justify-items-center">
				<!--PM Option-->
				<div class="flex flex-col w-full h-full p-8 space-y-12 shadow-lg shadow-black/40">
					<div class="space-y-10 text-left">
						<h2 class="font-extrabold display-medium">Give us a PM</h2>
						<p class="max-w-3xl title-medium">
							Send us message on one of these platforms. We'll get back to you within a couple
							hours.
						</p>
						<div class="flex flex-col flex-1 space-y-5">
							<div class="grid grid-cols-4 grid-rows-3 gap-4">
								<!--Phone number-->
								<div
									class="col-span-1 p-5 rounded-full bg-surface-variant-light w-min h-min justify-self-end">
									<Icon icon="phone" height="32px" width="32px" />
								</div>

								<a class="flex items-center col-span-3" href="tel:9133600394">
									<h1 class="pl-2 title-small sm:title-large">+852 9747 3013</h1>
								</a>
								<!--WhatsApp-->
								<div
									class="col-span-1 p-5 rounded-full bg-surface-variant-light w-min h-min justify-self-end">
									<Icon icon="email" height="32px" width="32px" fillColor="black" />
								</div>

								<a class="flex items-center col-span-3" href="mailto:contact@futi.no">
									<h1 class="pl-2 title-small sm:title-large">Futino Whatsapp</h1>
								</a>
								<!--Email-->
								<div
									class="col-span-1 p-5 rounded-full bg-surface-variant-light w-min h-min justify-self-end">
									<Icon icon="instagram" height="32px" width="32px" fillColor="black" />
								</div>

								<a class="flex items-center col-span-3" href="mailto:ggsoccercamps@gmail.com">
									<h1 class="pl-2 title-small sm:title-large">@Futino</h1>
								</a>
								<!--Email-->
								<div
									class="col-span-1 p-5 rounded-full bg-surface-variant-light w-min h-min justify-self-end">
									<Icon icon="email" height="32px" width="32px" fillColor="black" />
								</div>

								<a class="flex items-center col-span-3" href="mailto:contact@futi.no">
									<h1 class="pl-2 title-small sm:title-large">contact@futi.no</h1>
								</a>
							</div>
						</div>
					</div>
				</div>
				<!--Contact form Option-->
				<div class="flex flex-col w-full h-full p-8 space-y-12 shadow-lg shadow-black/40">
					<div class="space-y-10 text-left">
						<h2 class="font-extrabold display-medium">Contact Us</h2>
						<p class="title-medium">
							Feel free to us an email for any requests or questions. We'll get back to you within a
							couple hours.
						</p>
					</div>
					<form method="post" class="flex flex-col flex-1 h-64 space-y-5">
						<input
							class="p-1 border border-black/50 dark:border-white/50 dark:bg-black/5"
							type="text"
							name="name"
							id="name"
							placeholder="Name" />
						<input
							class="p-1 border border-black/50 dark:border-white/50 dark:bg-surface-dark/5"
							type="text"
							name="email"
							id="email"
							placeholder="E-Mail" />
						<textarea
							class="flex-1 p-1 border border-black/50 dark:border-white/50 dark:bg-black/5"
							name="message"
							id="message"
							placeholder="Message" />
						<Button><input type="button" value="Send Email" /></Button>
					</form>
				</div>
			</div>
		</InView>
	</section>

	<section
		id="about"
		class="grid px-4 py-24 space-y-12 shadow-lg grow sm:py-28 md:py-32 sm:px-6 md:px-8 border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={500} class="">
			<div class="flex flex-col mx-auto space-y-6 max-w-7xl place-items-center">
				<h1 class="py-12 display-large">Meet The Founders</h1>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
					<!--Jorge's Card-->
					<div
						class="flex flex-col p-6 rounded-lg shadow-lg bg-surface-variant-light/20 dark:bg-surface-variant-dark/20">
						<img src="" alt="Not found" class="self-center w-24 h-24 bg-black rounded-full" />
						<h2 class="pt-2 display-small">Jorge Lewis</h2>
						<h3 class="pb-4 text-gray-400 title-small">COO & Co-founder of Futino</h3>
						<h2 class="body-large">
							I noticed that making a website was either too expensive or too time consuming for
							everyone, including individuals, startups, even large businesses. I wanted to create a
							solution to these problems.
						</h2>
					</div>
					<!--Jonas' Card-->
					<div
						class="flex flex-col p-6 rounded-lg shadow-lg bg-surface-variant-light/20 dark:bg-surface-variant-dark/20">
						<img src="" alt="Not found" class="self-center w-24 h-24 bg-black rounded-full" />
						<h2 class="pt-2 display-small">Jonas Lindberg</h2>
						<h3 class="pb-4 text-gray-400 title-small">CTO & Co-founder of Futino</h3>
						<h2 class="body-large">
							I noticed that making a website was either too expensive or too time consuming for
							everyone, including individuals, startups, even large businesses. I wanted to create a
							solution to these problems.
						</h2>
					</div>
				</div>
				<Button>
					<h1 class="p-2">Learn More</h1>
				</Button>
			</div>
		</InView>
	</section>

	<section
		id="calltoaction"
		class="grid px-4 py-24 space-y-12 shadow-lg grow sm:py-28 md:py-32 sm:px-6 md:px-8 border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={300}>
			<div class="flex flex-col space-y-12">
				<h1 class="display-large">Let's Get Started</h1>
				<div class="grid grid-cols-2 gap-y-4 gap-x-4 sm::grid-cols-2">
					<a href="{base}/about">
						<Button class="w-full h-full">
							<p class="p-2 title-medium">Check Out Pricing!</p>
						</Button>
					</a>
					<a href="{base}/contact">
						<Button class="w-full h-full">
							<p class="p-2 title-medium">Contact Us!</p>
						</Button>
					</a>
				</div>
			</div></InView>
	</section>
</main>

<Footer />
