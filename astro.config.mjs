import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://backroad.sudomakes.art",
  integrations: [
    // tailwind(),
    starlight({
      head: [
        {
          // <meta property="og:image" content="https://example.com/images/image.jpg">

          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/meta-image.png",
          },
        },
        {
          // <meta property="og:image" content="https://example.com/images/image.jpg">

          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "/meta-image.png",
          },
        },
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-6GJXBWMVYT",
          },
        },
        {
          tag: "script",
          content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6GJXBWMVYT');`,
        },
      ],
      title: "Backroad",
      tableOfContents: false,
      social: {
        github: "https://github.com/sudomakes/backroad",
      },
      components: {
        ContentPanel: "./src/components/ConditionalPanel.astro",
        PageTitle: "./src/components/ConditionalPageTitle.astro",
        Footer: "./src/components/ConditionalFooter.astro",
      },
      logo: {
        src: "./src/assets/logo.svg",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
        "./src/tailwind.css",
      ],
      sidebar: [
        {
          label: "Fundamentals",
          autogenerate: { directory: "docs/Fundamentals" },
        },
        {
          label: "API Reference",
          autogenerate: { directory: "docs/API Reference" },
        },
        {
          label: "Configuration",
          autogenerate: { directory: "docs/Configuration" },
        },
        {
          label: "Internals",
          autogenerate: { directory: "docs/Internals" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
      configFile: "./tailwind.config.mjs",
    }),
    react(),
    svelte(),
  ],
});
