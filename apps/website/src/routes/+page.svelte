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

	onMount(() => {});
</script>

<svelte:window bind:scrollY />

<Header />
<ChapterMenu {chapters} />

<main
	class="text-center border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40 flex flex-col items-stretch">
	<!--Hero-->
	<section
		id="hero"
		class="grow py-32 h-screen sm:py-34 md:py-44 px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 relative">
		<div id="tsparticles-hero" class="w-full h-full absolute -z-10" />
		<div class="grid justify-items-center space-y-12 h-fit w-full mx-auto self-center">
			<div class="w-fit">
				<h1 class="display-large">A Full-stop</h1>
			</div>

			<div class="w-fit">
				<h3
					class="title-small md:headline-small overflow-hidden border-r-1 border-transparent whitespace-nowrap animate-typingsubtitle">
					Launch Your Business's Online Presence with Confidence And Trust
				</h3>
			</div>

			<div class="gap-y-4 gap-x-4 grid grid-cols-2 sm::grid-cols-2">
				<a href="{base}/about">
					<Button class="w-full h-full">
						<p class="title-medium p-2">Check Out Pricing!</p>
					</Button>
				</a>
				<a href="{base}/contact">
					<Button class="w-full h-full">
						<p class="title-medium p-2">Contact Us!</p>
					</Button>
				</a>
			</div>
		</div>
	</section>

	<!--Big-Clients Slideshow-->
	<section id="slideshow" class="grid self-end z-10">
		<ClientCarousel />
	</section>

	<!--Journey Section-->
	<section
		id="journey"
		class="grow py-32 sm:py-34 md:py-44 shadow-lg px-4 sm:px-6 md:px-8 grid border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center relative">
		<!--Absolute screen center ruler element heh
		<div class="absolute left-1/2 -translate-x-1/2 top-1/2 bg-red-500 z-50 w-1 h-6" />
-->
		<div class="flex flex-col max-w-4xl gap-4">
			<h1 class="display-medium pb-12">Areas of Expertise</h1>
			{#each chapters as { chapterNumber, inView, title, images, content }}
				<div class="grid grid-cols-1 sm:grid-cols-2 w-full relative place-items-center gap-12">
					<!--Center line and Chapter checkmark-->

					<div
						class="absolute flex-col text-center flex items-center left-1/2 -translate-x-1/2 h-full">
						<div
							class="w-10 text-center flex items-center absolute h-10 z-20 rounded-full bg-surface-dark -top-5">
							<h1 class="display-small mx-auto">
								{chapterNumber}
							</h1>
						</div>
						<div
							class="w-11 text-center items-center h-11 z-0 rounded-full absolute bg-primary-dark blur-md -top-5" />

						<div class="w-4 mx-auto hidden sm:flex h-full relative overflow-y-hidden">
							<div class="border-l-4 z-10 border-black h-full absolute left-1/2 -translate-x-1/2" />
							<div
								class="border-l-8 z-0 absolute rounded-lg border-primary-dark blur-lg h-full left-1/2 -translate-x-1/2" />
						</div>
					</div>

					<!--Content of Chapter-->
					<img
						src={images[0]}
						alt=""
						class="w-1/2 sm:w-full mx-auto object-cover bg-no-repeat object-center order-last sm:order-first" />
					<div class="flex flex-col gap-1 justify-self-start text-left max-w-md">
						<h1 class="display-small">
							{title}
						</h1>
						<p class="body-medium">
							{content[0].body}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!--Analytics Snippet-->
	<section
		id="analytics"
		class="grow px-4 sm:px-6 md:px-8 grid border-secondary-light/20 dark:border-secondary-dark/20 bg-primary-light/20 dark:bg-primary-dark/10">
		<InView transition="slide" duration={200} delay={100}>
			<div class="flex flex-wrap md:flex-row px-4 justify-around text-center">
				<div class="flex flex-col p-4">
					<AnimatedCounter class="headline-large font-extrabold" finalValue={50} duration={700} />
					<h2 class="body-medium font-light">Sites Made</h2>
				</div>
				<div class="border-r border-white/20 my-4" />
				<div class="flex flex-col p-4 justify-self-end">
					<h2 class="headline-large font-extrabold inline">
						<AnimatedCounter
							class="headline-large font-extrabold inline"
							finalValue={21}
							duration={700} />
						K
					</h2>
					<h2 class="body-medium font-light">Hours Used</h2>
				</div>
				<div class="border-r border-white/20 my-4" />
				<div class="flex flex-col p-4">
					<h2 class="headline-large font-extrabold inline">
						<span class="-mr-1">$</span>
						<AnimatedCounter
							class="headline-large font-extrabold inline"
							finalValue={200}
							duration={700} />
						K
					</h2>
					<h2 class="body-medium font-light">Transacted</h2>
				</div>
				<div class="border-r border-white/20 my-4" />
				<div class="flex flex-col p-4">
					<h2 class="headline-large font-extrabold inline">
						<AnimatedCounter
							class="headline-large font-extrabold inline"
							finalValue={99.9}
							duration={700} />%
					</h2>
					<h2 class="body-medium font-light">Pure Waffle</h2>
				</div>
			</div>
		</InView>
	</section>

	<!--Clients Section-->
	<section
		id="clients"
		class="grow py-32 sm:py-34 md:py-44 shadow-lg px-4 sm:px-6 md:px-8 grid space-y-12 border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={500}>
			<h1 class="display-large py-12">Our Clients</h1>
			<div class="flex flex-wrap gap-12 items-center justify-items-center max-w-7xl overflow-clip">
				{#each clientCards as { index, name, company, body, vid_path }}
					<ClientCard {name} {company} {body} {vid_path} />{/each}
			</div>
		</InView>
	</section>

	<!--Contact Section-->
	<section
		id="contact"
		class="grow py-32 sm:py-34 md:py-44 shadow-lg px-4 sm:px-6 md:px-8 grid space-y-12 border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={500}>
			<h1 class="display-large py-12">We'd Love to Hear From You</h1>

			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto max-w-7xl items-center justify-items-center">
				<!--PM Option-->
				<div class="flex p-8 shadow-lg shadow-black/40 space-y-12 flex-col w-full h-full">
					<div class="text-left space-y-10">
						<h2 class="display-medium font-extrabold">Give us a PM</h2>
						<p class="title-medium max-w-3xl">
							Send us message on one of these platforms. We'll get back to you within a couple
							hours.
						</p>
						<div class="flex-1 flex flex-col space-y-5">
							<div class="grid grid-cols-4 grid-rows-3 gap-4">
								<!--Phone number-->
								<div
									class="col-span-1 rounded-full bg-surface-variant-light w-min h-min justify-self-end p-5">
									<Icon icon="phone" height="32px" width="32px" />
								</div>

								<a class="col-span-3 flex items-center" href="tel:9133600394">
									<h1 class="title-small sm:title-large pl-2">+852 9747 3013</h1>
								</a>
								<!--WhatsApp-->
								<div
									class="col-span-1 rounded-full bg-surface-variant-light w-min h-min justify-self-end p-5">
									<Icon icon="email" height="32px" width="32px" fillColor="black" />
								</div>

								<a class="col-span-3 flex items-center" href="mailto:contact@futi.no">
									<h1 class="title-small sm:title-large pl-2">Futino Whatsapp</h1>
								</a>
								<!--Email-->
								<div
									class="col-span-1 rounded-full bg-surface-variant-light w-min h-min justify-self-end p-5">
									<Icon icon="instagram" height="32px" width="32px" fillColor="black" />
								</div>

								<a class="col-span-3 flex items-center" href="mailto:ggsoccercamps@gmail.com">
									<h1 class="title-small sm:title-large pl-2">@Futino</h1>
								</a>
								<!--Email-->
								<div
									class="col-span-1 rounded-full bg-surface-variant-light w-min h-min justify-self-end p-5">
									<Icon icon="email" height="32px" width="32px" fillColor="black" />
								</div>

								<a class="col-span-3 flex items-center" href="mailto:contact@futi.no">
									<h1 class="title-small sm:title-large pl-2">contact@futi.no</h1>
								</a>
							</div>
						</div>
					</div>
				</div>
				<!--Contact form Option-->
				<div class="flex p-8 shadow-lg shadow-black/40 space-y-12 flex-col w-full h-full">
					<div class="text-left space-y-10">
						<h2 class="display-medium font-extrabold">Contact Us</h2>
						<p class="title-medium">
							Feel free to us an email for any requests or questions. We'll get back to you within a
							couple hours.
						</p>
					</div>
					<form method="post" class="flex-1 flex flex-col space-y-5 h-64">
						<input
							class="border border-black/50 dark:border-white/50 p-1 dark:bg-black/5"
							type="text"
							name="name"
							id="name"
							placeholder="Name" />
						<input
							class="border border-black/50 dark:border-white/50 p-1 dark:bg-surface-dark/5"
							type="text"
							name="email"
							id="email"
							placeholder="E-Mail" />
						<textarea
							class="flex-1 border border-black/50 dark:border-white/50 p-1 dark:bg-black/5"
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
		class="grow py-24 sm:py-28 md:py-32 shadow-lg px-4 sm:px-6 md:px-8 grid space-y-12 border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={500} class="">
			<div class="flex flex-col max-w-7xl mx-auto place-items-center space-y-6">
				<h1 class="display-large py-12">Meet The Founders</h1>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
					<!--Jorge's Card-->
					<div
						class="flex flex-col bg-surface-variant-light/20 shadow-lg dark:bg-surface-variant-dark/20 rounded-lg p-6">
						<img src="" alt="Not found" class="rounded-full h-24 w-24 self-center bg-black" />
						<h2 class="display-small pt-2">Jorge Lewis</h2>
						<h3 class="title-small pb-4 text-gray-400">COO & Co-founder of Futino</h3>
						<h2 class="body-large">
							I noticed that making a website was either too expensive or too time consuming for
							everyone, including individuals, startups, even large businesses. I wanted to create a
							solution to these problems.
						</h2>
					</div>
					<!--Jonas' Card-->
					<div
						class="flex flex-col bg-surface-variant-light/20 shadow-lg dark:bg-surface-variant-dark/20 rounded-lg p-6">
						<img src="" alt="Not found" class="rounded-full h-24 w-24 self-center bg-black" />
						<h2 class="display-small pt-2">Jonas Lindberg</h2>
						<h3 class="title-small pb-4 text-gray-400">CTO & Co-founder of Futino</h3>
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
		class="grow py-24 sm:py-28 md:py-32 shadow-lg px-4 sm:px-6 md:px-8 grid space-y-12 border-secondary-light/20 dark:border-secondary-dark/20 justify-items-center">
		<InView transition="fade" duration={300}>
			<div class="flex flex-col space-y-12">
				<h1 class="display-large">Let's Get Started</h1>
				<div class="gap-y-4 gap-x-4 grid grid-cols-2 sm::grid-cols-2">
					<a href="{base}/about">
						<Button class="w-full h-full">
							<p class="title-medium p-2">Check Out Pricing!</p>
						</Button>
					</a>
					<a href="{base}/contact">
						<Button class="w-full h-full">
							<p class="title-medium p-2">Contact Us!</p>
						</Button>
					</a>
				</div>
			</div></InView>
	</section>
</main>

<Footer />
