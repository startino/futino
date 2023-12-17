<script lang="ts">
  import { onMount } from "svelte";

  function cubicEaseInOut(t) {
    return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  let time = 0;
  let duration: number;

  let scrollY = 0;

  let mounted: boolean = false;
  onMount(() => {
    mounted = true;
  });

  $: {
    if (mounted == true) {
      const totalScroll =
        <HTMLInputElement>document.documentElement.scrollHeight -
        window.innerHeight;

      const normalizedScroll = scrollY / totalScroll;

      // Use the easing function to smooth the time calculation
      const easedTime = cubicEaseInOut(normalizedScroll);
      time = duration * easedTime;
    }
  }
</script>

<svelte:window bind:scrollY />

<div class="fixed w-screen h-screen">
  <video
    bind:currentTime={time}
    bind:duration
    muted
    src="animations/garage_animation_parsed_120fps.mp4"
    class={$$props.class}
    playsinline="true"
    webkit-playsinline="true"
    preload="auto"
  />
</div>
