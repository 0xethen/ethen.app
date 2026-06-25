<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <title>welcome / ethen.app</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center select-none">
  {@render children()}
</div>
