<script lang="ts">
  // import { RiClipboardLine, RiCheckLine } from "svelte-remixicon";
  import { copy } from "svelte-copy";
  let showTick = false;
</script>

<div class="container text-center flex flex-col items-center">
  <h1 class="text-5xl lg:text-7xl font-black mt-24 mb-10">
    Code Less, Create Fast
  </h1>
  <h2 class="max-w-[600px] mx-auto font-light">
    Backroad re-imagines the process of creating web apps, requiring no
    frontend-experience, all with Node.JS!
  </h2>
  <div class="flex lg:flex-row flex-col gap-3 items-center my-10">
    <div
      use:copy={`npx degit sudomakes/trybackroad trybackroad`}
      on:svelte-copy={() => {
        showTick = true;
        setTimeout(() => {
          showTick = false;
        }, 1000);
      }}
      class="border-2 border-accent text-accent cursor-pointer flex items-center justify-between py-2 px-4 rounded-xl"
    >
      <code class="mr-4">npx degit sudomakes/trybackroad trybackroad</code>
      {#if showTick}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
          />
          <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
          />
        </svg>
      {/if}
    </div>
    <a
      href="/docs/fundamentals/introduction/"
      class="btn btn-primary w-full lg:w-auto">Docs</a
    >
  </div>
  <a
    href="https://www.producthunt.com/posts/backroad?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-backroad"
    target="_blank"
    ><img
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=420460&theme=light"
      alt="Backroad - Code Less, Create Fast | Product Hunt"
      style="width: 250px; height: 54px;"
      width="250"
      height="54"
    /></a
  >
</div>
