<script lang="ts">
	import { Prose } from '$lib/components/ui/prose';
	import { Section } from '$lib/components/ui/section';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import PricingSlider from './PricingSlider.svelte';
	import { Icon } from '$lib/components/ui/icon';

	// Current price of slider
	let price = '$0.00';
	// Current percent of slider
	let sliderPercent = 0;
	let hours = 0;

	const cupSizes = [
		{
			label: 'Demi',
			img: 'cups/espresso.png',
			description: 'Bare bone hosting.'
		},
		{
			label: 'Short',
			img: 'cups/cappucino.png',
			description: 'We can keep your menu and all your content up to date.'
		},
		{
			label: 'Tall',
			img: 'cups/mocha.png',
			description: 'We can make a simple yet fully custom-designed website.'
		},

		{
			label: 'Grande',
			img: 'cups/mocha.png',
			description: 'We can make a simple yet fully custom-designed website.'
		},
		{
			label: 'Venti',
			img: 'cups/coldbrew.png',
			description: 'We can make a fully custom website with BIG custom features.'
		}
	];

	const services = [
		{
			label: 'Design',
			features: [
				'Mobile-first Designs',
				'User Experience (UX)',
				'User Interface (UI)',
				'Conversion Optimization',
				'Motion & Animation Design',
				'User Journey Mapping',
				'User Flow Mapping',
				'Scalable Design System',
				'Iconography',
				'Lead-generation Focused',
				'Interaction Design',
				'AI assisted Design',
				'3D Design',
				'Illustration Design'
			]
		},
		{
			label: 'Development',
			features: [
				'Web & Mobile App Development',
				'Mobile-first Development',
				'Performance Optimization',
				'Google Analytics Tracking',
				'Search Engine Optimization (SEO)',
				'Transition Development',
				'Up to 50 Pages'
			]
		},
		{
			label: 'Hosting',
			features: [
				'Live Server',
				'Dedicated Storage of 10GB',
				'Monthly Server Maintenance',
				'Guaranteed 98% Up-time',
				'File uploads'
			]
		}
	];

	const addons = [
		{
			label: 'Google Ads',
			prefix: '$',
			price: 67,
			cycle: 'mo',
			icon: 'advertising',
			description: `Elevate your online visibility with targeted Google Ads. 
        Our experts craft strategic campaigns to drive traffic, increase conversions, and maximize your ROI.
        Boost your presence where it matters most and watch your business flourish.`,
			cta: 'Get Started'
		},
		{
			label: 'Domain Management',
			prefix: '$',
			price: 279,
			cycle: 'yr',
			icon: 'domain',
			description: `Simplify your online presence with hassle-free domain management. 
        We take care of the technicalities, ensuring your domain is secure, up-to-date, and seamlessly integrated with your website.
        Focus on your business while we handle the domain intricacies.`,
			cta: 'Get Started'
		},
		{
			label: 'Task Automation',
			prefix: '$',
			price: 90,
			cycle: 'hr',
			icon: 'automation',
			description: `Streamline your operations and save valuable time with our task automation solutions.
        From routine processes to complex workflows, we design automation tailored to your needs.
        Enjoy efficiency, reduce manual workload, and let technology work for you.`,
			cta: 'Get a Quote'
		},
		{
			label: 'Brand Book',
			prefix: '$',
			price: 527,
			suffix: '',
			icon: 'book',
			description: `Elevate your brand with our Brand Book service. 
        A Forbes study revealed a 23% average revenue increase for businesses maintaining brand consistency. 
        From logo guidelines to tone of voice, we compile a cohesive document ensuring a unified brand image across all platforms.`,
			cta: 'Get Started'
		},
		{
			label: 'Online Ordering',
			price: 2.7,
			suffix: '%',
			icon: 'phone-store',
			description: `Experience the future of sales with our Online Ordering system. 
        With mobile orders driving 20% of Starbucks' total sales, tap into the potential of this lucrative market.
        Seamless integration into your website makes ordering and payment a breeze for your customers. `,
			cta: 'Get Started'
		},
		{
			label: 'E-commerce',
			price: 2.7,
			suffix: '%',
			icon: 'ecommerce',
			description: `Brew success for your coffee business with our tailored Ecommerce solution. 
        From seamless product listings to secure payment gateways, 
        we create an online store that not only showcases your offerings but also ensures a smooth and secure shopping experience.`,
			cta: 'Get Started'
		}
	];

	const common_packages = [
		{
			plans: [
				{
					label: 'Tall',
					duration: 1
				},
				{
					label: 'Short',
					duration: 12
				}
			],
			description:
				'Perfect for a medium coffee shop to get a custom website and then have us maintain it for a year.'
		},
		{
			plans: [
				{
					label: 'Short',
					duration: 2
				},
				{
					label: 'Demi',
					duration: 12
				}
			],
			description:
				'Perfect for a shop with less upfront cash; build your custom website over two months then host it for the year.'
		},
		{
			plans: [
				{
					label: 'Venti ',
					duration: 1
				},
				{
					label: 'Tall',
					duration: 12
				}
			],
			description:
				'Perfect for a large coffee shop that needs custom coded features and higher demands of constant website updates.'
		}
	];
</script>

<Prose class="w-screen">
	<main
		class="flex flex-col justify-center place-items-center mx-auto items-center text-background-on overflow-hidden"
	>
		<!-- Hero -->
		<div
			class="h-screen max-w-none w-screen grid gap-y-4 justify-center items-center bg-gradient-to-b from-primary from-50% to-background
	"
		>
			<Section class="gap-y-8">
				<div
					class="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 items-start justify-items-start"
				>
					<div
						class="text-left text-primary flex flex-col -space-y-1 w-full justify-center items-start uppercase justify-self-start"
					>
						<h1
							class="bg-gradient-to-b from-surface-highlight/60 to-surface bg-clip-text text-transparent"
						>
							Brew
						</h1>
						<h1 class="font-light text-surface">Your</h1>
						<h1
							class="bg-gradient-to-b from-surface-highlight/70 to-surface bg-clip-text text-transparent whitespace-nowrap"
						>
							Digital Presence
						</h1>
						<h1 class="font-light text-surface">With a</h1>
						<h1
							class="bg-gradient-to-b from-surface-highlight/80 to-surface bg-clip-text text-transparent whitespace-nowrap"
						>
							Custom Website
						</h1>
					</div>
					<div
						class="flex flex-col gap-5 md:bg-surface-highlight text-surface rounded-3xl md:p-8 md:text-surface-highlight-on place-self-end"
					>
						<p class="max-w-lg">
							Your coffee shop needs a website that can boost sales, enhance branding, and improve
							customer satisfaction.
						</p>
						<Button class="w-fit" size="long" variant="card-highlighted">Get Started</Button>
					</div>
				</div>
				<div
					class="flex flex-col flex-nowrap md:flex-row gap-4 max-w-7xl justify-self-start md:items-end"
				>
					<img
						src="brooke.jpg"
						alt="coffee"
						class="h-28 w-full md:h-48 max-w-[60%] md:aspect-[0.85] rounded-3xl not-prose object-cover"
					/>
					<div class="flex flex-row md:flex-col gap-4 max-w-[80%] w-full">
						<img
							src="jarek.jpg"
							alt="coffee"
							class="h-28 md:h-32 w-full md:aspect-[1.55] rounded-3xl not-prose object-cover"
						/>
						<img
							src="james.jpg"
							alt="coffee"
							class="h-28 md:h-32 w-full aspect-[1.55] rounded-3xl not-prose object-cover"
						/>
					</div>
					<img
						src="jennifer.jpg"
						alt="coffee"
						class="h-44 md:h-32 w-full aspect-[4] rounded-3xl not-prose object-cover"
					/>
				</div>
			</Section>
		</div>

		<!-- Services -->
		<section class="max-w-5xl hiddenfornowgrid grid-cols-4 gap-4 hidden">
			<Card.Root>
				<Card.Header>
					<Card.Title>Design</Card.Title>
					<Card.Description>
						We create eye-catching and user-friendly coffee shop websites that uniquely reflect your
						brand. Our designs are all about making a memorable impression for your visitors.
					</Card.Description>
				</Card.Header>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<Card.Title>Development</Card.Title>
					<Card.Description>
						We build seamless and scalable coffee shop websites using the latest web tech. From
						smooth menus to online ordering, our solutions simplify operations and elevate customer
						engagement.
					</Card.Description>
				</Card.Header>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<Card.Title>Hosting</Card.Title>
					<Card.Description>
						Experience top-tier website performance with our reliable hosting services. Our
						cutting-edge servers ensure fast loading, high uptime, and secure data management,
						providing a consistently smooth online experience.
					</Card.Description>
				</Card.Header>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<Card.Title>Search Engine Optimization</Card.Title>
					<Card.Description>
						We use smart strategies to make sure your coffee shop pops up first when people search
						online. Think of it as giving your business a spotlight on the internet stage.
					</Card.Description>
				</Card.Header>
			</Card.Root>
		</section>

		<Section>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-items-start">
				<img
					src="coffee_cup.png"
					alt="art"
					class="w-full h-fit aspect-[5/4] rounded-3xl bg-secondary not-prose object-cover"
				/>
				<div class="flex flex-col gap-6 text-center sm:text-left">
					<h2 class="pb-3">THE #1 COFFEE <br /> WEB-SERVICES AGENCY</h2>
					<p>
						Welcome to Caffeino, where passion for coffee meets digital excellence. As a specialized
						web-services agency tailored for coffee shops and roasters, we’ve navigated the unique
						landscape of the digital coffee landscape to gain an expertise that extends beyond
						anyother freelancer or agency.
					</p>
					<p>
						At Caffeino, we understand what it takes for a coffee shop to stand out. Beyond just
						creating websites, we craft digital experiences that resonate with coffee enthusiasts —
						where every click, scroll, and interaction brews a blend of technology and coffee
						culture. Join us in this journey as we elevate your coffee brand in the digital world.
						Your success is our daily grind.
					</p>
				</div>
			</div>
		</Section>
		<Section>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-items-start">
				<div class="flex flex-col gap-6 text-center sm:text-left">
					<h2 class="">OUR BEST BEANS</h2>
					<p>
						Meet the talented individuals who bring life to Caffeino's mission. Our team is a rich
						blend of creativity, technical expertise, and a shared love for coffee. From seasoned
						developers crafting seamless web experiences to visionary designers weaving visual
						magic.
					</p>
				</div>
				<div class="flex flex-row gap-x-12 [&>*]:w-full [&>*]:aspect-[2/3] [&>*]:h-full">
					<img
						src="people/jorge_3.jpg"
						alt="Jorge"
						class="w-full object-cover h-full rounded-3xl bg-amber-900 not-prose"
					/>
					<img src=".." alt="Jonas" class="w-full h-full rounded-3xl bg-amber-900 not-prose" />
					<img src=".." alt="Daniel" class="w-full h-full rounded-3xl bg-amber-900 not-prose" />
				</div>
			</div>
		</Section>
		<Section>
			<div
				class="flex flex-col text-center sm:text-left sm:flex-row sm:justify-between w-full gap-6"
			>
				<div class="flex flex-col gap-3">
					<h2>PRICING</h2>
					<p class="max-w-prose">
						We’ve replaced the traditional path of unreliable freelancers and expensive agencies
						with a scalable subscription. Got big plans next month? Get a big plan for that month.
						Want to take it slow? Spread the costs over multiple months.
					</p>
				</div>
				<div class="flex flex-col md:gap-3 text-center sm:text-right">
					<h2 class="text-tertiary whitespace-nowrap">
						{price} / mo
					</h2>
					<h3 class="whitespace-nowrap">
						{hours} / mo
					</h3>
				</div>
			</div>
			<Prose size="sm" class="w-full">
				<div class="w-full py-12 md:py-24 flex flex-col gap-6 px-[3rem]">
					<div class="relative flex flex-row justify-between h-full w-full text-center">
						{#each cupSizes as cupSize, i}
							<div
								class="flex place-items-center text-left w-[3.5rem] sm:w-[7rem] md:w-[8rem] lg:w-[8rem] overflow-x-visible flex-col gap-2 {i ==
								0
									? 'right-full -translate-x-1/2'
									: ''} 
                {i == 1 ? 'left-1/4 -translate-x-1/4 ' : ''}
                {i == 2 ? 'right-1/2 -stranslate-x-1/4' : ''}
                {i == 3 ? 'right-1/4 translate-x-1/4' : ''}
                {i == 4 ? 'right-full translate-x-1/2' : ''}
                "
							>
								<img
									src={cupSize.img}
									alt="s"
									class="rounded-2xl lg:rounded-3xl object-cover w-full sm:w-2/3 px-1 py-1 aspect-[2/3] not-prose"
								/>
								<h6
									class="uppercase whitespace-normal font-bold {sliderPercent >=
									i / (cupSizes.length - 1)
										? 'text-primary'
										: ''} "
								>
									{cupSize.label}
								</h6>
							</div>
						{/each}
					</div>
					<PricingSlider bind:price bind:hours bind:sliderPercent />
					<div class="relative flex flex-row h-full justify-between w-full text-center">
						{#each cupSizes as cupSize, i}
							<div
								class="flex place-items-center text-left w-0 overflow-x-visible flex-col gap-4 {i ==
								0
									? 'right-full -translate-x-1/2'
									: ''} 
                {i == 1 ? 'invisible left-1/4 -translate-x-1/4 ' : ''}
                {i == 2 ? 'right-1/2 translate-x-1/2 ' : ''}
                {i == 3 ? 'invisible right-1/4 translate-x-1/4' : ''}
                {i == 4 ? 'left-full translate-x-1/2' : ''}
                {sliderPercent >= i / (cupSizes.length - 1) ? 'text-primary' : ''} 
                "
							>
								<svg
									width="42"
									viewBox="0 0 48
                  {i == 0 ? '45' : ''}
                  {i == 1 ? '162' : ''}
                  {i == 2 ? '45' : ''}
                  {i == 3 ? '162' : ''}
                  {i == 4 ? '45' : ''}
                  "
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									/><g id="SVGRepo_iconCarrier">
										<path
											d="M24 6L24  
                      {i == 0 ? '43' : ''}
                      {i == 1 ? '160' : ''}
                      {i == 2 ? '43' : ''}
                      {i == 3 ? '160' : ''}
                      {i == 4 ? '43' : ''}
                      "
											stroke="currentColor"
											stroke-width="4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M12 18L24 6L36 18"
											stroke="currentColor"
											stroke-width="4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g></svg
								>
								<p class="text-center text-background-on w-28 sm:w-28 md:w-32 lg:w-36 xl:w-44">
									{cupSize.description}
								</p>
							</div>
						{/each}
					</div>
				</div>
				<div
					class=" bg-surface p-4 py-8 md:p-6 text-surface-on rounded-3xl flex flex-col items-start gap-12 place-items-center md:items-start"
				>
					<h2 class="text-center w-full uppercase">Most Common Packages</h2>
					<div class="flex flex-col place-items-center gap-24 text-center mx-auto">
						<div
							class="grid grid-cols-1 md:grid-cols-2 w-full justify-items-start gap-x-12 gap-y-4 md:gap-y-12 place-items-center"
						>
							{#each common_packages as { plans, description }, i}
								<div
									class="flex flex-row md:grid md:grid-cols-7 w-full gap-y-8 gap-x-2 md:gap-8 justify-between px-4 sm:px-12 md:justify-start text-center md:text-left"
								>
									<div
										class="flex flex-row justify-between w-fit place-items-center gap-2 col-span-3"
									>
										<img
											src="cups/mocha.png"
											alt="grande"
											class="inline-block object-cover h-10 w-6 not-prose rounded-3xl"
										/>
										<div class="flex flex-col w-fit justify-start">
											<h6 class="uppercase font-bold whitespace-nowrap">{plans[0].label}</h6>
											<h6 class="uppercase whitespace-nowrap">
												{plans[0].duration}
												{plans[0].duration > 1 ? 'months' : 'month'}
											</h6>
										</div>
									</div>

									<h1 class="place-self-center">+</h1>
									<div class="flex flex-row place-items-center gap-2 col-span-3">
										<img
											src="cups/mocha.png"
											alt="grande"
											class="inline-block object-cover h-10 w-6 not-prose rounded-3xl"
										/>
										<div class="flex flex-col w-fit justify-start">
											<h6 class="uppercase font-bold whitespace-nowrap">{plans[1].label}</h6>
											<h6 class="uppercase whitespace-nowrap">
												{plans[1].duration}
												{plans[1].duration > 1 ? 'months' : 'month'}
											</h6>
										</div>
									</div>
								</div>
								<p class="max-w-sm md:text-left pb-12 md:pb-0">
									{description}
								</p>
							{/each}
						</div>
					</div>
				</div>
			</Prose>
		</Section>
		<Section>
			<div class="grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-y-20">
				{#each services as service, i}
					<h2 class="uppercase col-span-2 pt-4 md:pt-0">{service.label}</h2>
					<ul class="grid grid-cols-2 col-span-3 gap-x-6 gap-y-2">
						{#each service.features as feature, i}
							<li>
								<p>
									{feature}
								</p>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		</Section>
		<Section class="text-center">
			<div class="flex flex-col place-items-center gap-6">
				<h2>
					WE’VE GOT IT ALL <span class="hidden md:visible">-</span> <br class="md:hidden" /> TO THE CHERRIES
					ON THE TOP
				</h2>
				<h6 class="max-w-prose">
					Looking for more than just the perfect website? We’ve got you covered with our add-on
					products & services.
				</h6>
				<div
					class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 py-6 text-left"
				>
					{#each addons as addon, i}
						<Card.Root class="h-full">
							<Card.Header>
								<div class="flex flex-row justify-between">
									<div class="bg-surface-on rounded-full text-surface p-3">
										<Icon icon={addon.icon} width="32" height="32" />
									</div>
									<div class="flex flex-row text-right items-end [&>*]:text-primary">
										{#if addon.prefix}
											<h2 class="">
												{addon.prefix}
											</h2>
										{/if}
										<h2 class="">
											{addon.price}
										</h2>
										{#if addon.suffix}
											<h2 class="">
												{addon.suffix}
											</h2>
										{/if}
										{#if addon.cycle}
											<p class="pb-1">/{addon.cycle}</p>
										{/if}
									</div>
								</div>
							</Card.Header>
							<Card.Content>
								<Card.Title>{addon.label}</Card.Title>
								<Card.Description>
									{addon.description}
								</Card.Description>
								<Card.Footer>
									<Button size="long" variant="card">{addon.cta}</Button>
								</Card.Footer>
							</Card.Content>
						</Card.Root>
					{/each}
				</div>
			</div>
		</Section>
	</main>
</Prose>

<style>
	h2 {
		margin: 0;
	}
	h1 {
		margin: 0;
	}
	h3 {
		margin: 0;
	}
	h4 {
		margin: 0;
	}
	h5 {
		margin: 0;
	}
	h6 {
		margin: 0;
	}
	p {
		margin: 0;
	}
	li {
		margin: 0;
	}
	ul {
		margin: 0;
	}
</style>
