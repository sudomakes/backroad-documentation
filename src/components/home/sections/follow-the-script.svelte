<script lang="ts">
  import HomePageSection from "./section.svelte";
  import ScriptIcon from "@assets/home-page/sections/script.png";
  import Shiki from "../shiki.svelte";
  const brCode = `const dogPerson = br.toggle({
    defaultValue: true,
    label: 'Are you a Dog Person?',
});
if (dogPerson) {
    br.write({ 
        body: "Of course! They are man's best friend." 
    });
    br.image({src: '<dog-image>'});
} else {
    br.write({ body: 'Well, how about cats?' });
    br.image({src: '<cat-image>'});
}`;
  let dogPerson = true;
  $: imgUrl = dogPerson
    ? "https://unsplash.com/photos/2l0CWTpcChI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk3MjgxNDM0fA&force=true&w=640"
    : "https://unsplash.com/photos/yMSecCHsIBc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk3MjgzNDc1fA&force=true&w=640";
  $: content = dogPerson
    ? "Of course! They are man's best friend."
    : "Well how about cats?";
  let running = false;
</script>

<HomePageSection
  title="Just Follow the Script"
  subtitle="CONTROL FLOW BASED RENDERING"
  icon={ScriptIcon}
  accentColor="#c54ca6"
>
  <div class="container flex flex-col lg:flex-row gap-4">
    <div class="flex-1 flex flex-col gap-4">
      <p class="">
        Every time you change a value from the interface, backroad reruns the
        script from the beginning, so rendering a different UI is just a matter
        of an <span class="italic font-medium text-accent">if</span> statement, no
        complex rendering logic required. Backroad automatically takes care of only
        re-rendering the bits which change across runs 🏃‍♂️
      </p>
      <p class="text-lg font-medium text-accent">
        Click on the switch on the phone to try it out!
      </p>
      <Shiki code={brCode} highlightLines={[dogPerson ? 5 : 10]} />
    </div>
    <div class="grid items-center">
      <div class="mockup-phone">
        <div class="camera" />
        <div class="display">
          <div
            class="artboard pt-10 px-4 phone-1 bg-neutral text-neutral-content relative flex flex-col gap-3"
          >
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="font-medium">Are you a Dog Person?</span>
                <input
                  type="checkbox"
                  class="toggle toggle-primary"
                  checked={dogPerson}
                  on:change={() => {
                    dogPerson = !dogPerson;
                    running = true;
                    setTimeout(() => {
                      running = false;
                    }, 1000);
                  }}
                />
              </label>
            </div>
            <p>{content}</p>
            <img src={imgUrl} alt={content} class="w-4/5" />
            {#if running}
              <div class="flex gap-3 absolute bottom-4 right-4">
                <span>Running</span>
                <span class="loading loading-spinner loading-md" />
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</HomePageSection>
