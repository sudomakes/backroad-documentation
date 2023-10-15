<script lang="ts">
  import Youtube from "svelte-youtube-embed";
  import Annotation from "@assets/home-page/intro/annotation.svg";
</script>

<div class="container relative my-20">
  <h2 class="text-center text-5xl font-bold mb-8">A Quick Intro to Backroad</h2>
  <div class="max-w-[900px] mx-auto mb-10">
    <div class="float-left">
      <img
        src="https://www.gravatar.com/avatar/e68fd5f99ae803cfee10b57768137549?s=600"
        class="h-10 w-10 lg:h-20 lg:w-20 mr-4 rounded-full"
        alt="sudo-vaibhav"
      />
      <div class="hidden lg:relative w-10 mt-10 left-[-150px]">
        <img src={Annotation.src} alt="learn backroad in just 3 minutes" />
      </div>
    </div>
    <div class="text-justify">
      <span class="font-medium">Hi, I'm Vaibhav, creator of Backroad 👋</span>
      <p>
        Over the course of building several web apps with Node.JS over the
        years, a major pain point always was having to take tons of decisions
        regarding framework choices, styling libraries, choosing form elements,
        handling file uploads etc.
      </p>
      <p>
        But over time I have realised that more than 80% of use cases can be
        achieved using a basic set of inputs and components. With backroad, you
        can focus on your core problem, without having to worry about writing
        css or defining api routes,. Backroad is here to help do away with all
        this complexity. Its so simple - you can learn it in 3 minutes!!
      </p>
    </div>
  </div>
  <Youtube id="dQw4w9WgXcQ" />
</div>
