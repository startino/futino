<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import TextField from '$lib/components/molecules/TextField.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';
	import ContactForm from '$lib/components/organisms/ContactForm.svelte';
	import FaqSection from '$lib/components/organisms/FAQSection.svelte';
	import safariFaq from '$lib/components/tsData/safariFaq';
</script>

<svelte:head>
	<title>Bapta - Contact Us</title>
</svelte:head>

<Header />

<!--Hero-->
<div
	class="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-about bg-cover object-contain bg-top">
	<div class="flex flex-col max-w-2xl mx-auto mt-44 mb-64 text-center space-y-2">
		<h1 class="font-bold text-primary-dark display-medium">Get In Touch</h1>
		<h1 class="pb-6 text-white body-large">Bapta at Your Service, to Provide the Best Service</h1>

		<div class="mx-auto">
			<OutlineButton>
				<h1 class="p-4 title-medium">Contact Us</h1>
			</OutlineButton>
		</div>
	</div>
</div>

<div class="border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40">
	<!--Contact Section-->
	<div class="flex flex-row mx-10 my-20 lg:mx-32 md:mx-20 sm:mx-10 xs:mx-4 space-x-12">
		<div
			class="bg-surface-dark flex flex-col rounded-xl dark:bg-surface-dark my-auto py-10 px-10 space-y-6 max-w-xl">
			<h3 class="font-bold text-left headline-medium text-primary-dark">Get in touch.</h3>
			<h4 class=" text-lg font-thin text-left text-secondary-dark my-auto">
				"Lorem ipsum dolor sit amet enim amet ad eleifend consequat elit per morbi nullam metus nam
				class hac curabitur praesent sociosqu vulputate torquent sapien volutpat nostra vel curae
				consectetur curabitur."
			</h4>
			<img src="images/safari/47.webp" alt="" class="object-cover w-full rounded-xl h-96" />
		</div>
		<div class="w-full">
			<ContactForm />
		</div>
	</div>
</div>

<div class="my-20">
	<FaqSection faqs={safariFaq} />
</div>
