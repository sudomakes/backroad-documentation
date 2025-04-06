<script lang="ts">
  import HomePageSection from "../section.svelte";
  import EcosystemIcon from "@assets/home-page/sections/ecosystem.png";
  import Docker from "@assets/home-page/sections/ecosystem/docker.svg";
  import OpenAi from "@assets/home-page/sections/ecosystem/open-ai.png";
  import EcosystemComponent from "./ecosystem-component.svelte";
  import TechnologyLogo from "./technology-logo.svelte";
</script>

<HomePageSection
  title="Works With... Everything!"
  subtitle="UNLEASH THE NODE.JS ECOSYSTEM"
  icon={EcosystemIcon}
  accentColor="#d67d8c"
>
  <div class="container">
    <p class="mb-4 max-w-[700px] mr-auto">
      Since backroad transpiles down to Node.JS, any package from npm should
      work. This allows you to quickly prototype while still getting to take
      advantage of the full Node.JS ecosystem should you want to, unlike other
      low-code tools
    </p>
  </div>
  <div class="container lg:grid grid-cols-2">
    <EcosystemComponent
      title="Works With"
      containerClass="lg:border-r border-b"
    >
      <TechnologyLogo
        image={"https://codelabs.developers.google.com/static/codelabs/tensorflowjs-object-detection/img/1aee0ede85885520.png"}
        name="TensorFlow.JS"
        href="https://www.tensorflow.org/"
      />
      <TechnologyLogo
        image={OpenAi.src}
        name="OpenAI"
        href="https://openai.com/"
      />
      <TechnologyLogo
        image={"https://avatars.githubusercontent.com/u/124403982?s=200&v=4"}
        name="Jimp"
        href="https://github.com/jimp-dev/jimp"
      />
      <TechnologyLogo
        image={"https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg"}
        name="etc..."
        href="https://www.npmjs.com/"
      />
    </EcosystemComponent>
    <EcosystemComponent title="Built With" class="" containerClass="border-b">
      <TechnologyLogo
        image={"https://avatars.githubusercontent.com/u/10342521?s=280&v=4"}
        href="https://www.chartjs.org/"
        name="Chart.js"
      />
      <TechnologyLogo
        image={"https://cdn.worldvectorlogo.com/logos/socket-io-1.svg"}
        href="https://socket.io/"
        name="Socket.IO"
      />
      <TechnologyLogo
        image={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"}
        href="https://react.dev/"
        name="React"
      />
      <TechnologyLogo
        image={"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"}
        href="https://tailwindcss.com/"
        name="Tailwind CSS"
      />
    </EcosystemComponent>
    <div class="col-span-2">
      <EcosystemComponent title="Deployable On" class="">
        <TechnologyLogo
          image={Docker.src}
          name="Docker"
          href="https://www.docker.com/"
        />
        <TechnologyLogo
          image={"https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"}
          name="Azure"
          href="https://azure.com/"
        />
        <TechnologyLogo
          image={"https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"}
          name="AWS"
          href="https://aws.amazon.com/"
        />
        <TechnologyLogo
          image={"https://www.vectorlogo.zone/logos/digitalocean/digitalocean-tile.svg"}
          name="DigitalOcean"
          href="https://www.digitalocean.com/"
        />
        <TechnologyLogo
          image={"https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"}
          name="Heroku"
          href="https://www.heroku.com/"
        />
        <TechnologyLogo
          image={"https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"}
          name="Google Cloud"
          href="https://cloud.google.com/"
        />
      </EcosystemComponent>
    </div>

    <!-- compatible with, built with, deployable to -->
  </div>
</HomePageSection>
