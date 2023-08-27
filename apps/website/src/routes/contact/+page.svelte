<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import ContactForm from '$lib/components/organisms/ContactForm.svelte';

	const FAQs = [
		{
			index: 0,
			question: 'What is the best time of year to climb Kilimanjaro?',
			answer:
				'The best time to climb Kilimanjaro is during the dry season, which runs from June to October and January to March. However, it is possible to climb at other times of the year as well.',
		},
	];
</script>

<Header />
<main>
	<!--Hero-->
	<section
		id="hero"
		class="grow py-32 sm:py-34 h-screen md:py-44 px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 shadow-lg">
		<div class="grid justify-items-center space-y-12 h-fit w-full mx-auto self-center">
			<div class="w-fit">
				<h1 class="display-large">Let's Talk Growth</h1>
			</div>

			<div class="w-fit">
				<h3 class="title-small md:headline-small">
					No automated calls. Person-to-person, with you in mind.
				</h3>
			</div>

			<div class="grid grid-cols-2 gap-x-4">
				<Button class="" href="/booking">
					<p class="px-3 sm:px-5 md:px-6 title-medium">Book a Call</p>
				</Button>

				<Button class="" href="#contact-form" secondary={true}>
					<p class="px-3 sm:px-5 md:px-6 title-medium">Send a Message</p>
				</Button>
			</div>
		</div>
	</section>

	<section
		id="contact-form"
		class="border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40">
		<!--Contact Section-->
		<div
			class="grid grid-cols-1 md:grid-cols-2 inner-section text-center md:text-left gap-6 items-center justify-items-center">
			<div
				class="bg-surface-dark flex flex-col rounded-xl dark:bg-surface-dark py-10 px-10 space-y-4 max-w-xl self-start">
				<h3 class="font-extrabold headline-large">Get in touch.</h3>
				<h4 class="title-medium my-auto max-w-md">
					Need assistance or have ideas to discuss? Reach out to us! We're ready for your questions,
					understand your needs, and collaborate to bring your digital aspirations to life. Contact
					us today and let's start shaping your online presence.
				</h4>
			</div>
			<div class="w-full">
				<ContactForm />
			</div>
		</div>
	</section>
</main>
<Footer />
