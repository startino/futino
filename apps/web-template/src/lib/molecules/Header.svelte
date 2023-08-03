<script lang="ts">
	import ThemeButton from '$lib/atoms/ThemeButton.svelte';
	import Logo from '$lib/atoms/Logo.svelte';
	import { onMount } from 'svelte';

  export const elements = [
    {
      "name": "About",
      "href": "/",
    }
  ]

	let scrollY: number;
  let menuOpen = false;

	let largeHeaderClass =
		'py-12';
	let activeheaderClass = largeHeaderClass;
	let miniHeaderClass =
		'py-3 border-secondary-light/10 dark:border-secondary-dark/10 bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur';

  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }

	onMount(() => {
		const header = document.querySelector('#header');

		window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll > 100) {
				if (activeheaderClass != miniHeaderClass) {
					activeheaderClass = miniHeaderClass;
				}
			} else {
				if (activeheaderClass != largeHeaderClass) {
					activeheaderClass = largeHeaderClass;
				}
			}
		});
	});
</script>

<svelte:window bind:scrollY />

{#if menuOpen}
<div class="z-50 fixed inset-0 bg-black/20 backdrop-blur-sm">
  <ul class="absolute top-6 right-6 p-6 w-full max-w-xs bg-primary-container-light dark:bg-primary-container-dark rounded-lg shadow-lg">
    <button class="absolute top-6 right-6 w-7 h-7 flex items-center justify-center" on:click={toggleMenu}>
      <svg viewBox="0 0 10 10" class="w-3 h-3 overflow-visible"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
    </button>  


    <li class="flex gap-6 text-lg">
      {#each elements as element, i}
      <a
        class="text-primary-container-on-light dark:text-primary-container-on-dark hover:text-tertiary-light dark:hover:text-tertiary-dark"
        href={element.href}>
        {element.name}
      </a>
      {/each}
    </li>
  </ul>
</div>

{/if}

<div
	id="header"
	class="{$$props.class} {activeheaderClass} text-primary-light dark:text-primary-dark fixed top-0 z-40 flex-none w-full transition-all duration-400">
  <div class="flex relative items-center px-10 md:px-20 lg:max-w-5xl xl:max-w-6xl mx-auto">
    <a class="flex gap-3" href="/">
      <Logo />
      <p class="hidden sm:flex text-xl my-auto pb-1">Futino Web-Template</p>
    </a>
    <div class="flex items-center ml-auto">
      <nav class="body-large font-semibold tracking-wide">
        <ul class="flex gap-6">
          <li class="hidden md:flex my-auto pb-1">
            {#each elements as element, i}
            <a
              class="inline hover:text-tertiary-light dark:hover:text-tertiary-dark"
              href={element.href}>
              {element.name}
            </a>
            {/each}
          </li>
          <li class="hidden md:flex border-l border-secondary-light/20 dark:border-secondary-dark/20" />
          <li class="mt-1">
            <ThemeButton />
          </li>
          <li class="flex md:hidden my-auto">
            <button on:click={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
