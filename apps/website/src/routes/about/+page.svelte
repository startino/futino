<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import TransitionElement from '$lib/components/organisms/TransitionElement.svelte';
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
			body: 'Some words that you believe in and a short about',
			imgPath: './favicon.png'
		},
		{
			index: 1,
			name: 'Jonas Lindberg',
			position: 'Chief Technology Officer, Lead Developer',
			body: 'Some words that you believe in and a short about',
			imgPath: './favicon.png'
		},
		{
			index: 2,
			name: 'Alexey Skachkov',
			position: 'Chief Marketing Officer',
			body: 'Some words that you believe in and a short about',
			imgPath: './favicon.png'
		},
		{
			index: 3,
			name: 'Stephen Anzelmo',
			position: 'Chief Financial Officer, Developer',
			body: 'Some words that you believe in and a short about',
			imgPath: './favicon.png'
		},
		{
			index: 4,
			name: 'Kale Bishop',
			position: 'Chief Human Resources Officer, Developer',
			body: 'Some words that you believe in and a short about',
			imgPath: './favicon.png'
		}
	];
</script>

<Header />

<main
	class="text-center border-b w shadow-2xl border-primary-light/40 dark:border-primary-dark/40 flex flex-col items-stretch"
>
	<section
		id="hero"
		class="grow py-32 sm:py-34 h-screen md:py-44 px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 shadow-lg"
	>
		<div class="grid justify-items-center space-y-12 h-fit w-full mx-auto self-center">
			<div class="w-fit">
				<h1 class="display-large">Let's Turn Potential into Growth</h1>
			</div>

			<div class="w-fit">
				<h3 class="title-small md:headline-small">
					Your business problems demand to be seen through an entirely new lens.
				</h3>
			</div>

			<a href="{base}/contact">
				<Button class="w-full h-full">
					<p class="title-medium p-1">Let's talk growth</p>
				</Button>
			</a>
		</div>
	</section>

	<TransitionElement>
		<section
			id="about-transparency"
			class="grow py-32 sm:py-34 md:py-32 px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 border-b border-primary-light/20 dark:border-primary-dark/20"
		>
			<div class="flex flex-col text-left w-full pl-12 max-w-7xl space-y-8">
				<!--Any sort of glass effect would be good here-->
				<h1 class="display-large text-left">Glass like Transparency.</h1>
				<p class="body-large max-w-3xl">
					We believe that transparency builds trust and fosters strong, long-lasting relationships
					with our clients. When it comes to pricing, we believe in fair and
					<span class="text-primary-light dark:text-primary-dark font-bold">upfront pricing</span>
					, without any hidden fees or surprises.
				</p>
				<p class="body-large max-w-3xl">
					Additionally, we embrace the use of
					<span class="text-primary-light dark:text-primary-dark font-bold"
						>open-source software</span
					>
					, leveraging the power of community-driven innovation and collaboration. By utilizing open-source
					frameworks, libraries, and tools, we ensure flexibility, security, and cost-effectiveness for
					our clients.
				</p>
				<Button class="w-fit">
					<h1 class="title-small">Don't believe us? Ask us.</h1>
				</Button>
			</div>
		</section>
	</TransitionElement>

	<TransitionElement>
		<section
			id="about-people"
			class="grow py-32 h-screen sm:py-34 md:py-32 px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 border-b border-primary-light/20 dark:border-primary-dark/20"
		>
			<div class="flex flex-col text-left w-full pl-12 max-w-7xl space-y-8">
				<!--Any sort of glass effect would be good here-->
				<h1 class="display-large text-left">[Y]our People</h1>
				<h2 class="headline-small max-w-3xl">
					Rest assured, our team will know your business. Highly skilled developers assigned
					specifically to you.
				</h2>

				<TransitionElement transition="slide" delay={200} duration={1000}>
					<div class="flex flex-col divide-y title-medium border-y">
						{#each team as { index, name, position, body, imgPath }}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div class="flex flex-col" on:click={handleClick(index)}>
								<div
									class="grid grid-rows-2 grid-cols-3 md:grid-cols-7 md:grid-rows-1 place-content-between items-center py-3 group hover:text-primary-light dark:hover:text-primary-dark"
								>
									<h1 class="col-span-2 md:col-span-3 font-bold tracking-wide">{name}</h1>
									<h1 class="col-span-2 md:col-span-3">{position}</h1>
									<Icon
										class="row-span-2 row-start-1 col-start-3 col-span-1 md:col-start-7 group-hover:translate-y-1 transition-transform justify-self-end pr-1"
										fillColor="white"
										icon="down-arrow"
										height="24"
										width="24"
									/>
								</div>
								{#if index == activeMember}
									<div class="flex flex-row items-center" in:slide out:slide>
										<img src={imgPath} alt="no img" class="w-24 h-24" />
										<h1 class="body-medium max-w-3xl">{body}</h1>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</TransitionElement>
				<Button class="w-fit">
					<h1 class="title-small">Meet the Team</h1>
				</Button>
			</div>
		</section>
	</TransitionElement>
</main>

<Footer />
