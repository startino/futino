<script lang="ts">
	import { Hero, Prose } from 'lorc';
	import { Button } from 'lorc';

	const heroBg = '/pre_mockup_designs/garage_ref.png';

	const CTAButtons = {
		'Our work': {
			href: '/',
			secondary: false,
		},
		'Contact us': {
			href: '/',
			secondary: true,
		},
	};
</script>

<Hero
	{CTAButtons}
	title="Lorem ipsum, dolor sit amet consectetur adipisicing."
	subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio mollitia excepturi laudantium nostrum sit!"
	justified="center"
	bgImg={heroBg} />

<!-- 
<section
	class="h-screen bg-[url('/pre_mockup_designs/garage_ref.png')] bg-center bg-cover w-full grid">
	<div class="flex flex-col items-center my-auto gap-6">
		<h1 class="m-0" style="margin: 0px">Lorem ipsum dolor sit amet.</h1>
		<h5 class="" style="margin: 0px">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quo.
		</h5>
		<div class="grid grid-cols-2 gap-6 md:gap-8 mt-6 place-items-center">
			<Button>
				<h6 class="" style="margin: 0px">Our Work</h6>
			</Button>
			<Button>
				<h6 class="" style="margin: 0px">Contact Us</h6>
			</Button>
		</div>
	</div>
</section> -->
