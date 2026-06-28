<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  const target = "https://youtube.com/@poppaeskitchen";

  let countdown = $state(5);

  let redirect: ReturnType<typeof setTimeout> | undefined;
  let ticker: ReturnType<typeof setInterval> | undefined;

  onMount(() => {
    ticker = setInterval(() => {
      countdown -= 1;
    }, 1000);

    redirect = setTimeout(() => {
      countdown = 0;
      window.location.href = target;
    }, 5500);
  });

  onDestroy(() => {
    if (ticker) clearInterval(ticker);
    if (redirect) clearTimeout(redirect);
  });
</script>

<p>
  Redirecting in {countdown || 5}... (<a
    href="https://www.youtube.com/@poppaeskitchen"
    >Moved to About section on YouTube</a
  > - "content will be uploaded very soon")
</p>
<p class="italic text-sm">Poppa E's Kitchen Rumble page has been deactivated</p>
