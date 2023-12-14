<script lang="ts">
  import {onMount} from "svelte";

  function cubicEaseInOut(t) {
      return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  let time = 0;
  let duration;

  let scrollY = 0;

  let mounted: bool = false;
  onMount(() => {
    mounted = true;
   
    });


  $: {
      if (mounted == true)
      {
        const totalScroll =
          <HTMLInputElement>document.documentElement.scrollHeight - window.innerHeight;

        const normalizedScroll = scrollY / totalScroll;
    
        // Use the easing function to smooth the time calculation
        const easedTime = cubicEaseInOut(normalizedScroll);
        time = duration * easedTime;
      }
    };

</script>

<svelte:window bind:scrollY />

<video
    bind:currentTime={time}
    bind:duration
    preload="metadata"
    muted
    src="animations/garage_animation_30fps.webm"
    class={$$props.class}
    type="video/webm" />
