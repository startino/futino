<button
	on:click={$$props.click}
	class="{$$props.class} inline-flex overflow-hidden relative justify-center items-center py-3 px-6 font-bold rounded-md shadow-2xl group  dark:text-primary-on-dark dark:hover:text-secondary-on-dark">
	<span
		class="absolute inset-0 w-full h-full  dark:bg-primary-dark opacity-100 transition duration-300 ease-out group-hover:opacity-0" />
	<span
		class="absolute inset-0 w-full h-full  dark:bg-secondary-dark opacity-0 transition duration-300 ease-out group-hover:opacity-100" />
	<span class="relative">
		<slot />
	</span></button>
