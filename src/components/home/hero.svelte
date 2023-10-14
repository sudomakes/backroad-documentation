<script lang="ts">
  import ClipboardIcon from "~icons/ri/clipboard-line";
  import CheckIcon from "~icons/ri/check-line";
  import { copy } from "svelte-copy";
  let showTick = false;
</script>

<div class="container text-center">
  <h1 class="text-7xl font-black mt-24 mb-10">Code Less, Create Fast</h1>
  <h2 class="max-w-[600px] mx-auto font-medium">
    Backroad re-imagines the process of creating web apps, requiring no
    frontend-experience, all with Node.JS!
  </h2>
  <div
    use:copy={`npx degit sudomakes/trybackroad trybackroad`}
    on:svelte-copy={() => {
      showTick = true;
      setTimeout(() => {
        showTick = false;
      }, 1000);
    }}
    class="border-2 bg-secondary hover:bg-secondary-focus cursor-pointer max-w-[600px] mx-auto mt-10 flex items-center justify-between p-4 rounded-xl text-secondary-content"
  >
    <code>npx degit sudomakes/trybackroad trybackroad</code>
    {#if showTick}
      <CheckIcon />
    {:else}
      <ClipboardIcon />
    {/if}
  </div>
  <!-- <div class="mockup-code mx-auto max-w-[600px] mt-10"> -->
  <!-- </div> -->
</div>
