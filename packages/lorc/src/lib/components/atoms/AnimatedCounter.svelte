<script lang="ts">
  import { onMount } from "svelte";

  /** Provide the final value that the counter should show.
   * @remarks
   * If no value is provided, it will use the value of the value slot.
   */
  export let finalValue: number = 1200;
  /** Provide the duration that the counter be animating*/
  export let duration: number = 1000; //TODO duration isn't correct atm. somehow based on valu. somehow based on value.
  /** Provide the duration that the counter be animating*/
  export let startValue = 0;
  /** Provide the increment that the counter should use.
   * @remarks
   * This will not affect duration.
   */
  export let increment: number = (finalValue - startValue) / duration;

  let step: number;
  let numberElement: HTMLHeadingElement;
  const bindValue = (node) => {
    numberElement = node.firstChild;
  };

  function animateCounter() {
    let currentValue: number = startValue;
    step = (finalValue - startValue) / duration;
    const handle = setInterval(() => {
      if (currentValue < finalValue) {
        currentValue += step;
      } else {
        clearInterval(handle);
        currentValue = finalValue;
      }
      //console.log('current: ', currentValue);
      if (numberElement != null) {
        numberElement.textContent = String(Math.ceil(currentValue));
      }
    }, duration / finalValue);
  }

  onMount(() => {
    finalValue = parseInt(numberElement.textContent);

    console.log(finalValue, step);
    animateCounter();
  });
</script>

<div class="flex flex-col gap-4 items-center {$$props.class} ">
  <div class="flex flex-row" use:bindValue>
    <slot name="value" />
    <slot name="unit" />
  </div>
  <slot name="label" />
</div>
