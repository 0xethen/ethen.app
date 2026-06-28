<script lang="ts">
  import { onMount } from "svelte";

  const target = "https://youtube.com/@poppaeskitchen";

  onMount(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.location.href = target;
      }, 5000);
    }
  });
</script>

<a href="https://www.youtube.com/@poppaeskitchen"
  >Moved to About section on YouTube - "content will be uploaded very soon"</a
>
<p class="italic text-sm">Poppa E's Kitchen Rumble page has been deactivated</p>
