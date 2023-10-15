<script lang="ts">
  export let image = "";
  export let name = "";
  export let href = "";
</script>

<a
  {href}
  rel="noreferrer"
  target="_blank"
  class="text-center my-4 text-base-content no-underline flex flex-col justify-between items-center whitespace-nowrap"
>
  <img src={image} class="w-20" alt={name} />
  <div class="mt-2">{name}</div>
</a>
