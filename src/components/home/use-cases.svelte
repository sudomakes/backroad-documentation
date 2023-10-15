<script lang="ts">
  import fileUpload from "@assets/home-page/use-cases/file-upload.png";
  import dashboards from "@assets/home-page/use-cases/dashboards.png";
  import llm from "@assets/home-page/use-cases/llm.png";
  import { getHighlighter, type Highlighter } from "shiki";
  import { onMount } from "svelte";
  import Shiki from "./shiki.svelte";
  // setWasm('/onig.wasm');
  // loadTheme("/")
  const useCases: {
    image: any;
    code: string;
    name: string;
  }[] = [
    {
      name: "File Uploads",
      code: `const [photo] = br.fileUpload({ label: 'Pick Image' });
if (photo) {
    br.write({ body: '# Greyscale image' });
    const image = await Jimp.read(photo.filepath);
    image.greyscale().getBase64(Jimp.AUTO, (err, res) => {
        br.image({ src: res, width: 600 });
    });
}`,
      image: fileUpload,
    },
    {
      name: "Dashboards",
      code: `const [col1, col2] = br.columns({ columnCount: 2 });
const amount = col1.numberInput({ label: 'Investment ($)' });
const rate = col1.numberInput({ label: 'Interest (%)' });
const years = col1.radio({
    options: ['5 Years', '10 Years', '15 Years'],
    label: 'Period',
});
const [finalAmount, chartData] = doMath(amount, rate, years);
col1.write({ body: \`## Final Amount: $\${finalAmount.toFixed()}\` });
col2.pie(chartData);`,
      image: dashboards,
    },
    {
      name: "LLMs",
      code: `const messages = br.getOrDefault('messages', [
    { by: 'ai', content: 'Hi, how can I help you today? 😀' },
]);
br.write({ body: \`# LLM Example\` });
messages.forEach((message) => {
    br.chatMessage({ name: message.by }).write({ body: message.content });
});
const input = br.chatInput({ id: 'input' });
if (input) {
    br.setValue('messages', [
        ...messages,
        { by: 'human', content: input },
        { by: 'ai', content: getGPTResponse(input) },
    ]);
}`,
      image: llm,
    },
  ];
  let activeIdx = 0;
  let highlighter: null | Highlighter = null;
  onMount(async () => {
    highlighter = await getHighlighter({
      theme: "dracula",
      langs: ["javascript"],
    });
  });
  $: activeUseCase = useCases[activeIdx];
  // shiki.setWasm(join());
</script>

<div class="container mx-auto mt-10">
  <div class="tabs tabs-boxed justify-center">
    {#each useCases as useCase, idx}
      <a
        class={`tab tab-lg ${idx === activeIdx && "tab-active"}`}
        on:click={() => (activeIdx = idx)}
      >
        {useCase.name}</a
      >
    {/each}
  </div>
  <div class="grid lg:grid-cols-2 gap-3 mt-10 items-start">
    <div>
      <img
        src={activeUseCase.image.src}
        alt={`${activeUseCase.name} example`}
        class="rounded-xl border-4 w-full"
      />
    </div>
    <Shiki code={activeUseCase["code"]} class="" />
  </div>
</div>
