<script>
	import '../app.pcss';
</script>

<!-- Header -->
<header class="flex items-center justify-center pt-2">
	<div class="max-w-2xl">
		<div class="grid grid-cols-5 gap-12">
			<a href="/" class="col-span-1">Home</a>
			<a href="/events" class="col-span-1">Upcoming Events Page</a>
			<a href="/classes" class="col-span-1">Contact Us</a>
			<a href="/contact" class="col-span-1">Contact Us</a>
			<a href="/contact" class="col-span-1">Contact Us</a>
		</div>
	</div>
</header>

<!-- Main -->
<main>
	<slot />
</main>

<!-- Footer -->
<footer></footer>
