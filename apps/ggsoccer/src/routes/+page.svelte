<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import ScrollFadeIn from '$lib/components/organisms/ScrollFadeIn.svelte';

	const camps = [
		{
			date: 'June 3 - 7, 2024',
			time_first: '8:15 - 9:15',
			time_second: '9:30 - 12:00',
			cost_first: '$80',
			cost_second: '$130',
			location: 'Leavenworth County Fairgrounds, Tonganoxie',
			link: 'https://forms.gle/dtp9iyzfQvgzi4Sb9'
		}
	];
</script>

<Header />

<main class="flex flex-col items-stretch border-b border-red-400/40 text-center shadow-2xl">
	<!--Hero-->
	<section
		id="hero"
		class="sm:py-34 relative grid grow justify-items-center space-y-12 border-red-600/20 bg-black px-4 py-32 shadow-lg sm:px-6 md:px-8 md:py-44"
	>
		<img
			src="media/IMG_4905.webp"
			alt=""
			class="absolute h-full
             w-full object-cover opacity-50"
		/>
		<ScrollFadeIn>
			<h1 class="display-large text-white z-10 drop-shadow-md shadow-black font-extrabold">
				Good Game Soccer
			</h1>

			<h3
				class="headline-small z-10 font-bold tracking-wide text-white shadow-black drop-shadow-md"
			>
				Empowering Players, Inspiring Youth: Excellence Through Soccer
			</h3>

			<div class="space-x-6 py-4">
				<a href="#camps">
					<Button>
						<p>Register Now</p>
					</Button>
				</a>
				<a href="#contact">
					<Button>
						<p>Contact Us</p>
					</Button>
				</a>
			</div>
		</ScrollFadeIn>
	</section>

	<!--About section-->
	<section
		id="about"
		class="flex flex-col border-b border-red-600/20 px-4 py-5 text-center shadow-lg sm:px-6 sm:py-10 md:px-8 md:py-20"
	>
		<ScrollFadeIn>
			<div class="mx-auto flex max-w-7xl flex-col">
				<h2 class="display-large">About GG Soccer</h2>
				<p class="body-large mx-auto mt-6 max-w-3xl">
					Good Game (GG) Soccer was founded by college soccer players who have a passion for giving back
					to the younger generation through the sport they love and played their whole lives. At GG
					Soccer we value the development of each of our campers. Our camps are aimed at providing
					each camper a chance to improve their soccer ability while also bringing home a memorable
					experience that is fun, social, and engaging. We are very excited to see you all this
					summer!
				</p>
			</div>
		</ScrollFadeIn>
	</section>

	<!--Camp Options-->
	<section
		id="camps"
		class="flex flex-col border-b border-red-600/20 px-4 py-5 text-center shadow-lg sm:px-6 sm:py-10 md:px-8 md:py-20"
	>
		<div class="mx-auto flex max-w-7xl flex-col">
			<h1 class="display-large">Summer Camps 2024</h1>

			<style>
				.card {
					@apply m-2 flex h-fit max-w-2xl flex-col  rounded-lg p-6 text-gray-950 shadow-2xl;
				}
			</style>
			<div id="camps" class="">
				{#each camps as { date, time_first, time_second, cost_first, cost_second, location, link }}
					<h2 class="display-small pt-14">{date}</h2>
					<div
						class="mx-auto my-8 grid max-w-7xl grid-cols-1 justify-items-stretch lg:grid-cols-2"
						id="jul_camp"
					>
						<div class="card space-y-2">
							<img
								src="media/CampAges36.webp"
								alt="Ages 7-12 Camp"
								class="h-60 object-cover sm:h-96"
							/>
							<h1 class="headline-medium font-bold">Ages 3 - 6</h1>
							<h2 class="title-large">{time_first}</h2>
							<hr class="p-1 opacity-40" />
							<h2 class="title-medium">{location}</h2>
							<h2 class="title-large font-bold text-red-600">
								{cost_first}
							</h2>
							<a href={link}>
								<Button>
									<p>Register Now</p>
								</Button>
							</a>
						</div>
						<div class="card space-y-2">
							<img
								src="media/CampAges712.png"
								alt="Ages 7-12 Camp"
								class="h-60 object-cover sm:h-96"
							/>
							<h1 class="headline-medium font-bold">Ages 7 - 12</h1>
							<h2 class="title-large">{time_second}</h2>
							<hr class="p-1 opacity-40" />
							<h2 class="title-medium">{location}</h2>
							<h2 class="title-large font-bold text-red-600">
								{cost_second}
							</h2>
							<a href={link}>
								<Button>
									<p>Register Now</p>
								</Button>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!--Contact Section-->
	<section
		id="contact"
		class="flex flex-col border-b border-red-600/20 px-4 py-5 text-center shadow-lg sm:px-6 sm:py-10 md:px-8 md:py-20"
	>
		<ScrollFadeIn>
			<div class="mx-auto flex max-w-7xl flex-col">

				<div class="">
					<img src="" alt="">
				</div>
				<!--Contant methods-->
				<div class="grid grid-cols-4 grid-rows-3 gap-2">
					<!--Phone number-->
					<div class="col-span-1 ml-auto h-min w-min rounded-full p-5">
						<Icon icon="phone" height="32px" width="32px" />
					</div>

					<a class="col-span-3 flex items-center" href="tel:9133600394">
						<h1 class="title-small sm:title-large">(913) 360-0394</h1>
					</a>
					<!--Email-->
					<div class="col-span-1 ml-auto h-min w-min rounded-full p-5">
						<Icon icon="email" height="32px" width="32px" fillColor="black" />
					</div>

					<a class="col-span-3 flex items-center" href="mailto:ggsoccercamps@gmail.com">
						<h1 class="title-small sm:title-large">ggsoccercamps@gmail.com</h1>
					</a>
					<!--Email-->
					<div class="col-span-1 ml-auto h-min w-min rounded-full p-5">
						<Icon icon="facebook" height="32px" width="32px" />
					</div>

					<a
						class="col-span-3 flex items-center"
						href="https://www.facebook.com/goodgamesoccercamps"
					>
						<h1 class="title-small sm:title-large">goodgamesoccercamps</h1>
					</a>
				</div>

				<!--Contact form-->

				<!--<div class="flex p-8 shadow-lg shadow-black/40 space-y-12 flex-col">
				<div class="text-left space-y-10">
					<h2 class="display-medium font-extrabold">Contact Us</h2>
					<p>Have any questions? Get in contact with us!</p>
				</div>
				<form method="post" class="flex-1 flex flex-col space-y-5 h-50">
					<input
						class="border border-black/50 border-white/50 p-1 bg-black/5"
						type="text"
						name="name"
						id="name"
						placeholder="Name"
					/>
					<input
						class="border border-black/50 border-white/50 p-1 bg-gray-950/5"
						type="text"
						name="email"
						id="email"
						placeholder="E-Mail"
					/>
					<textarea
						class="flex-1 border border-black/50 border-white/50 p-1 bg-black/5"
						name="message"
						id="message"
						placeholder="Message"
					/>
					<Button><input type="button" value="Send Email" onclick="sendEmail()" /></Button>
				</form>
			</div>-->
			</div>
		</ScrollFadeIn>
	</section>

	<!--Gallery Section-->
	<section
		id="gallery"
		class="self-center px-4 py-5 text-center sm:px-6 sm:py-10 md:max-w-7xl md:px-12 md:py-24"
	>
		<ScrollFadeIn>
			<h1 class="display-large p-4 font-bold">Don't Miss Out!</h1>
			<div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
				<div class="flex flex-col gap-2">
					<img src="media/IMG_4776.webp" alt="" class="h-full object-cover" />
					<img src="media/IMG_4904.webp" alt="" class="" />
					<img src="media/img1.webp" alt="" class="h-full object-cover" />
				</div>

				<div class="flex flex-col gap-2">
					<video controls class="">
						<track kind="captions" />
						<source src="media/IMG_3383.mp4" class="h-full" type="video/mp4" />
						Error Message
					</video>
					<img src="media/img6.webp" alt="" class="object-cover" />
					<img src="media/img7.webp" alt="" class="h-full object-cover" />
				</div>

				<div class="flex flex-col gap-2">
					<video controls>
						<track kind="captions" />
						<source src="media/IMG_4767.mp4" class="h-fit" type="video/mp4" />
						Error Message
					</video>

					<img src="media/IMG_3011.webp" alt="" class="h-full object-cover" />
				</div>
			</div>
		</ScrollFadeIn>
	</section>
</main>

<Footer />
