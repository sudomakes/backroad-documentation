<script lang="ts">
  import { onMount } from "svelte";
  import { getHighlighter, type Highlighter } from "shiki";
  export let code = "";
  export let highlightLines: number[] = [];
  let highlighter: null | Highlighter = null;
  onMount(async () => {
    highlighter = await getHighlighter({
      theme: "dracula",
      langs: ["javascript"],
    });
  });
  $: html = highlighter?.codeToHtml(code, {
    lang: "javascript",
    theme: "dracula",
    lineOptions: highlightLines.map((lineToHighlight) => ({
      line: lineToHighlight,
      classes: ["bg-accent"],
    })),
  });
</script>

<div
  class={`mockup-window bg-[#282a36] max-h-[50vh] overflow-auto border-4 ${$$restProps.class}`}
>
  <div class="p-4">
    {@html html || code}
  </div>
</div>
