<script lang="ts">
  let { children } = $props();
</script>

<header
  class="flex items-center justify-between p-4 bg-amber-950 text-white select-none"
>
  <h1 class="text-xl font-bold">
    Our Creators <a class="unstyled-link font-light text-white/80" href="/"
      >/ ethen</a
    >
  </h1>
  <nav class="hidden sm:inline">
    <a href="/creators/nfheat" class="">NFHEAT</a>
    &bull;
    <a href="/creators/poppa" class="">Poppa E's Kitchen</a>
    &bull;
    <a href="/creators">More...</a>
  </nav>
</header>

{@render children()}
