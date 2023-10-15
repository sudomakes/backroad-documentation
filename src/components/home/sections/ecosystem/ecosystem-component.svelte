<script lang="ts">
  export let title = "";
  export let containerClass = "";
</script>

<div class={`p-4 lg:p-10 xl:p-16 ${containerClass}`}>
  <h4 class="text-accent font-medium mb-8">{title}</h4>
  <div class={`lg:flex grid-cols-2 grid justify-between ${$$restProps.class}`}>
    <slot />
  </div>
</div>
