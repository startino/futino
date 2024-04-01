<button
	on:click={$$props.click}
	class="{$$props.class} hover:text-green-600-on group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold text-white shadow-2xl"
>
	<span
		class="absolute inset-0 h-full w-full bg-red-600 opacity-100 transition duration-300 ease-out group-hover:opacity-0"
	/>
	<span
		class="absolute inset-0 h-full w-full bg-green-600 opacity-0 transition duration-300 ease-out group-hover:opacity-100"
	/>
	<span class="relative">
		<slot />
	</span></button
>
