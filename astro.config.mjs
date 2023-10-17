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
        {
          tag: "script",
          content: `var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement('script'),
    s0 = document.getElementsByTagName('script')[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/6522af59eb150b3fb99f4378/1hc7npufb';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();`,
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
        { label: "Quickstart", autogenerate: { directory: "docs/Quickstart" } },
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
