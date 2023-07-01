<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import ScrollFadeIn from '$lib/components/organisms/ScrollFadeIn.svelte';
</script>

<Header />

<main
	class="text-center border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40 flex flex-col items-stretch"
>
	<!--Hero-->
	<section
		id="hero"
		class="grow py-32 sm:py-34 md:py-44 shadow-lg px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 border-secondary-light/20 dark:border-secondary-dark/20 bg-black relative"
	>
		<img
			src="media/IMG_4905.webp"
			alt=""
			class="absolute opacity-50
             w-full h-full object-cover"
		/>
		<ScrollFadeIn>
			<h1 class="display-large text-white z-10 drop-shadow-md shadow-black font-extrabold">
				Good Game Soccer
			</h1>

			<h3
				class="headline-small text-white z-10 drop-shadow-md shadow-black font-bold tracking-wide"
			>
				Empowering Players, Inspiring Youth: Excellence Through Soccer
			</h3>

			<div class="space-x-6">
				<a href="https://forms.gle/8Aez3YWynF7PMAz66">
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
		class="flex flex-col text-center py-5 sm:py-10 md:py-20 px-4 sm:px-6 md:px-8 shadow-lg border-b border-secondary-light/20 dark:border-secondary-dark/20"
	>
		<ScrollFadeIn>
			<div class="flex flex-col max-w-7xl mx-auto">
				<h2 class="display-large">About GG Soccer</h2>
				<p class="mt-6 max-w-3xl mx-auto body-large">
					Good Game (GG) Soccer was founded by college soccer players who have a passion for giving
					back to the younger generation through the sport they love and played their whole lives.
					At GG Soccer we value the development of each of our campers. Our camps are aimed at
					providing each camper a chance to improve their soccer ability while also bringing home a
					memorable experience that is fun, social, and engaging. We are very excited to see you all
					this summer!
				</p>
			</div>
		</ScrollFadeIn>
	</section>

	<!--Camp Options-->
	<section
		id="camps"
		class="flex flex-col text-center py-5 sm:py-10 md:py-20 px-4 sm:px-6 md:px-8 shadow-lg border-b border-secondary-light/20 dark:border-secondary-dark/20"
	>
		<ScrollFadeIn>
			<div class="flex flex-col max-w-7xl mx-auto">
				<h1 class="display-large">Summer Camps 2023</h1>
				<h2 class="headline-medium">May 29 - June 2</h2>
				<style>
					.card {
						@apply rounded-lg max-w-2xl shadow-2xl flex flex-col text-surface-on-light dark:text-surface-on-dark m-2 p-6 h-fit;
					}
				</style>
				<div
					id="camps"
					class="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-2 my-12 justify-items-stretch"
				>
					<div class="card space-y-2 bg-surface-light/5">
						<img
							src="media/CampAges36.webp"
							alt="Ages 7-12 Camp"
							class="object-cover h-60 sm:h-96"
						/>
						<h1 class="headline-medium font-bold">Ages 3 - 6</h1>
						<h2 class="title-large font-light">8:15 - 9:15</h2>
						<hr class="p-1 opacity-40" />
						<h2 class="title-medium font-light">Atchison Recreation Sports Complex</h2>
						<h2 class="font-bold title-large text-secondary-light dark:text-secondary-dark">$80</h2>
						<a href="https://forms.gle/8Aez3YWynF7PMAz66">
							<Button>
								<p>Register Now</p>
							</Button>
						</a>
					</div>
					<div class="card space-y-2 bg-surface-light/5">
						<img
							src="media/CampAges712.png"
							alt="Ages 7-12 Camp"
							class="object-cover h-60 sm:h-96"
						/>
						<h1 class="headline-medium font-bold">Ages 7 - 12</h1>
						<h2 class="title-large font-light">9:30 - 12:30</h2>
						<hr class="p-1 opacity-40" />
						<h2 class="title-medium font-light">Atchison Recreation Sports Complex</h2>
						<h2 class="font-bold title-large text-secondary-light dark:text-secondary-dark">
							$130
						</h2>
						<a href="https://forms.gle/8Aez3YWynF7PMAz66">
							<Button>
								<p>Register Now</p>
							</Button>
						</a>
					</div>
				</div>
			</div>
		</ScrollFadeIn>
	</section>

	<!--Contact Section-->
	<section
		id="contact"
		class="flex flex-col text-center py-5 sm:py-10 md:py-20 px-4 sm:px-6 md:px-8 shadow-lg border-b border-secondary-light/20 dark:border-secondary-dark/20"
	>
		<ScrollFadeIn>
			<div class="flex flex-col max-w-7xl mx-auto">
				<!--Contant methods-->
				<div class="grid grid-cols-4 grid-rows-3 gap-2">
					<!--Phone number-->
					<div class="col-span-1 rounded-full bg-surface-variant-light w-min h-min ml-auto p-5">
						<Icon icon="phone" height="32px" width="32px" />
					</div>

					<a class="col-span-3 flex items-center" href="tel:9133600394">
						<h1 class="title-small sm:title-large">(913) 360-0394</h1>
					</a>
					<!--Email-->
					<div class="col-span-1 rounded-full bg-surface-variant-light w-min h-min ml-auto p-5">
						<Icon icon="email" height="32px" width="32px" fillColor="black" />
					</div>

					<a class="col-span-3 flex items-center" href="mailto:ggsoccercamps@gmail.com">
						<h1 class="title-small sm:title-large">ggsoccercamps@gmail.com</h1>
					</a>
					<!--Email-->
					<div class="col-span-1 rounded-full bg-surface-variant-light w-min h-min ml-auto p-5">
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
						class="border border-black/50 dark:border-white/50 p-1 dark:bg-black/5"
						type="text"
						name="name"
						id="name"
						placeholder="Name"
					/>
					<input
						class="border border-black/50 dark:border-white/50 p-1 dark:bg-surface-dark/5"
						type="text"
						name="email"
						id="email"
						placeholder="E-Mail"
					/>
					<textarea
						class="flex-1 border border-black/50 dark:border-white/50 p-1 dark:bg-black/5"
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
		class="text-center py-5 sm:py-10 md:py-24 px-4 sm:px-6 md:px-12 md:max-w-7xl self-center"
	>
		<ScrollFadeIn>
			<h1 class="display-large font-bold p-4">Don't Miss Out!</h1>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
				<div class="flex flex-col gap-2">
					<img src="media/IMG_4776.webp" alt="" class="object-cover h-full" />
					<img src="media/IMG_4904.webp" alt="" class="" />
					<img src="media/img1.webp" alt="" class="object-cover h-full" />
				</div>

				<div class="flex flex-col gap-2">
					<video controls class="">
						<track kind="captions" />
						<source src="media/IMG_3383.mp4" class="h-full" type="video/mp4" />
						Error Message
					</video>
					<img src="media/img6.webp" alt="" class="object-cover" />
					<img src="media/img7.webp" alt="" class="object-cover h-full" />
				</div>

				<div class="flex flex-col gap-2">
					<video controls>
						<track kind="captions" />
						<source src="media/IMG_4767.mp4" class="h-fit" type="video/mp4" />
						Error Message
					</video>

					<img src="media/IMG_3011.webp" alt="" class="object-cover h-full" />
				</div>
			</div>
		</ScrollFadeIn>
	</section>
</main>

<Footer />
