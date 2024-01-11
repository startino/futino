<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { TransitionOptions, Animation } from "../../../types";

  // Individual Options.
  export let animation: Animation | undefined = undefined;
  export let dontFade: boolean = false;
  export let once: boolean | undefined = undefined;
  export let top: number | undefined = undefined;
  export let bottom: number | undefined = undefined;
  export let fly:
    | {
        x: number;
        y: number;
      }
    | undefined = undefined;

  export let duration: number | undefined = undefined;
  export let delay: number | undefined = undefined;
  export let axis: "x" | "y" | undefined = undefined;
  export let threshold: number | undefined = undefined;

  let defaultOptions: TransitionOptions = {
    once: true, // Later on this should be true, but for testing it's easier to have it as false.
    animation: "fade",
    top: 0,
    bottom: 0,
    delay: 100,
    duration: 500,
    fly: {
      x: 0,
      y: 0,
    },
    axis: "y",
    threshold: 0.5,
  };
  export let presetOptions: TransitionOptions = defaultOptions;
  // This is the formatted version of the given prompts.
  let propOptions: TransitionOptions = {
    ...defaultOptions,
    once: once,
    bottom: bottom,
    delay: delay,
    duration: duration,
    top: top,
    fly: fly,
    animation: animation,
    axis: axis,
    threshold: threshold,
  };
  // Setup the finalizedOptions based on priority.
  let finalizedOptions: TransitionOptions = {
    top: propOptions.top || presetOptions.top || defaultOptions.top,
    bottom: propOptions.bottom || presetOptions.bottom || defaultOptions.bottom,
    once: propOptions.once || presetOptions.once || defaultOptions.once,
    animation:
      propOptions.animation ||
      presetOptions.animation ||
      defaultOptions.animation,
    delay: propOptions.delay || presetOptions.delay || defaultOptions.delay,
    duration:
      propOptions.duration || presetOptions.duration || defaultOptions.duration,
    fly: propOptions.fly || presetOptions.fly || defaultOptions.fly,
    axis: propOptions.axis || presetOptions.axis || defaultOptions.axis,
    threshold:
      propOptions.threshold ||
      presetOptions.threshold ||
      defaultOptions.threshold,
  };

  let element: Element;
  let observer: IntersectionObserver;
  let inView: boolean = false;

  const rootMargin: string = `${finalizedOptions.top}px 10000px ${finalizedOptions.bottom}px 10000px`;
  const options = { rootMargin, threshold: finalizedOptions.threshold };

  const handleIntersect = (entry: IntersectionObserverEntry[]) => {
    if (entry[0].isIntersecting) {
      inView = true;
    } else {
      if (finalizedOptions.once && inView) {
        observer.unobserve(element);
      } else if (!finalizedOptions.once && inView) {
        inView = false;
      }
    }
  };

  onMount(() => {
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
  });
  onDestroy(() => {});
</script>

<div
  bind:this={element}
  class:fade-in={!inView && !dontFade}
  class="{$$props.class} transition delay-200"
  style="transition-duration: {finalizedOptions.duration}ms; transition-delay: {finalizedOptions.delay}ms;"
>
  <div
    class="transition duration-500 h-full w-full"
    style="transition-duration: {finalizedOptions.duration}ms; transition-delay: {finalizedOptions.delay}ms; {!inView
      ? `transform: translate(${finalizedOptions.fly?.x}px, ${finalizedOptions.fly?.y}px)`
      : ''}"
  >
    <slot />
  </div>
</div>

<style>
  .slide-in {
    @apply max-w-[1px] w-1;
  }
  .fade-in {
    @apply opacity-0;
  }
</style>
