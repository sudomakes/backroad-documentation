<script lang="ts">
  // import { split } from 'postcss/lib/list';

  export let code = "";
  export let image: any;
  export let alt = "";
  export let showOnPhone = false;
</script>

<div
  class={`${$$restProps.class} border rounded-lg ${
    showOnPhone ? "flex" : "hidden"
  } lg:flex flex-col bg-primary-focuss`}
>
  <img
    src={image.src}
    class="flex-1 rounded-t-lg w-full"
    alt={`${alt}-example`}
  />
  <div
    class="p-1 lg:p-4 border-t flex flex-col bg-accent-focus text-center text-accent-content rounded-b-lg"
  >
    {#each code.split("\n") as line}
      <code>{line}</code>
    {/each}
  </div>
</div>
