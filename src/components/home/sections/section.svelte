<script lang="ts">
  export let icon: any;
  export let title: string;
  export let subtitle: string;
  export let accentColor: string;
</script>

<section>
  <div class="container my-10">
    <img src={icon.src} alt={title} class="w-24" />
    <p style={`color:${accentColor}`} class="text-xl font-medium mb-2">
      {subtitle}
    </p>
    <h2 class="text-5xl font-bold">{title}</h2>
  </div>
  <slot />
</section>
