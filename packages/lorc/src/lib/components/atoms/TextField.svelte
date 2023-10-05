<script lang="ts">
  export let value: string;
  export let placeholder: string;
  export let label: string;
  export let textArea: boolean = false;
  export let required: boolean = false;
</script>

<div class="relative mt-8 h-fit w-full group overflow-visible mx-1.5">
  {#if !textArea}
    <label
      for={label.toLowerCase()}
      class=" {value
        ? 'font-bold text-surface-on -top-1/2 -translate-y-5 left-0'
        : 'font-normal left-3 top-1/2'} block group-hover:font-bold text-surface-on group-hover:text-surface-on absolute -translate-y-1/2 duration-[400ms] ease-in-out group-hover:left-0 group-hover:-top-1/2 group-hover:-translate-y-5 transition-all"
      >{label}</label
    >
    <div class="absolute w-full h-full overflow-hidden pointer-events-none">
      <h3
        class="absolute invisible text-left transition-all duration-[400ms] ease-out -translate-y-1/2 pointer-events-none -left-1/2 group-hover:visible group-hover:left-3 group-hover:right-auto top-1/2 text-surface-on"
      >
        {#if !value}
          {placeholder}
        {/if}
      </h3>
    </div>
    <input
      {required}
      name={label.toLowerCase()}
      bind:value
      class="w-full h-fit px-3 py-3 leading-tight text-surface-on bg-surface/50 border border-primary rounded focus:shadow-glow focus:shadow-tertiary/20 focus:outline-none appearance-none"
    />
  {:else}
    <label
      for={label.toLowerCase()}
      class="{value
        ? 'font-bold text-surface-on -top-1 -translate-y-full left-0'
        : 'font-normal left-3 top-2.5'} block group-hover:font-bold text-surface-on group-hover:text-surface-on absolute group-hover:-top-1 duration-[400ms] ease-in-out group-hover:-translate-y-full group-hover:left-0 transition-all"
      >{label}</label
    >
    <div class="overflow-hidden w-full h-full absolute pointer-events-none">
      <h3
        class="absolute not-prose pointer-events-none -left-1/2 invisible group-hover:visible group-hover:left-3 group-hover:right-auto text-left top-0 transition-all duration-[400ms] ease-out text-surface-on"
      >
        {#if !value}
          {placeholder}
        {/if}
      </h3>
    </div>
    <textarea
      id="message"
      required
      rows="4"
      name="message"
      bind:value
      class="w-full h-fit px-3 py-3 leading-tight text-surface-on bg-surface/50 border border-primary rounded focus:shadow-glow focus:shadow-tertiary/20 focus:outline-none appearance-none"
    />
  {/if}
</div>
