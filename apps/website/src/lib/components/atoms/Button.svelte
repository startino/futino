<button
	on:click={$$props.click}
	class="{$$props.class} flex overflow-hidden relative justify-center items-center py-3 px-6 font-bold rounded-md shadow-2xl group text-primary-on-light dark:text-primary-on-dark hover:text-secondary-light dark:hover:text-secondary-dark"
>
	<span
		class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark opacity-100 transition duration-300 ease-out group-hover:opacity-0"
	/>
	<span
		class="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary-light to-primary-light opacity-0 transition duration-300 ease-out group-hover:opacity-100"
	/>
	<span class="relative">
		<slot />
	</span></button
>
