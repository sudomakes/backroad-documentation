<script lang="ts">
  import HomePageSection from "../section.svelte";
  import ComponentIcon from "@assets/home-page/sections/components.png";
  import ComponentExample from "./component-example.svelte";
  import radio from "@assets/home-page/sections/components/radio.png";
  import llm from "@assets/home-page/sections/components/llm.png";
  import fileUpload from "@assets/home-page/sections/components/file-upload.png";
  import colorPicker from "@assets/home-page/sections/components/color-picker.png";
  import json from "@assets/home-page/sections/components/json.png";
</script>

<HomePageSection
  title="A Component for every scenario"
  subtitle="COMPONENTS & CONTAINERS"
  icon={ComponentIcon}
  accentColor="#CC6344"
>
  <div class="container">
    <p>
      Backroad allows you to think of your <span class="text-accent font-medium"
        >components</span
      >
      and
      <span class="text-accent font-medium">containers</span> like normal variables,
      allowing you to quickly and declaratively create UIs, without having to think
      about styling or rendering logic.
    </p>
    <a class="btn btn-primary mt-4" href="/docs/api-reference/inputs/"
      >See All Components</a
    >
    <div
      class="lg:grid gap-4 h-full items-start grid-cols-8 py-8 grid-rows-[10]"
    >
      <ComponentExample
        code="const bestOS = br.radio(options)"
        image={radio}
        alt="radio"
        class="row-span-1 lg: col-span-3 row-start-4 col-start-1"
      />
      <ComponentExample
        code={`br.chatMessage({name: msg.by}).write({body:msg.body})`}
        image={llm}
        alt="llm"
        class="row-span-3 col-span-4 col-start-1 row-start-1"
      />
      <ComponentExample
        code={`br.colorPicker({})`}
        image={colorPicker}
        alt="color-picker"
        class="row-span-2 col-span-2 col-start-7 row-start-3"
      />
      <ComponentExample
        code={`const files = br.fileUpload(options)`}
        image={fileUpload}
        showOnPhone
        alt="file-upload"
        class="col-span-3 col-start-4 row-start-4"
      />
      <ComponentExample
        code={`br.json({ src: joke })`}
        image={json}
        alt="json"
        class="col-span-3 col-start-5 row-start-1"
      />
    </div>
  </div></HomePageSection
>
