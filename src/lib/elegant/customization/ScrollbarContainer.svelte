<script>
  import { headerHeight } from "$lib/stores/headerStore.js";
  import "$styles/app.css";
  import "../../font.css";

  export let height = "";
  export let maxHeight = "";
  export let width = "100%";
</script>

<div
  style:height={height ? height : `calc(100dvh - ${$headerHeight})`}
  style:max-height={maxHeight}
  style:width
  class="app scrollable-content"
>
  <slot />
</div>

<style>
  :root {
    overflow: hidden;
  }
</style>
