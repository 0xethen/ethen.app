<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <title>welcome / ethen.app</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="">
  {@render children()}
  <p class="hidden">
    Your adblocker may be blocking some content. Please disable your adblocker
    and go through the main page (https://ethen.app/). We don't show ads!
  </p>
</div>
