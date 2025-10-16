<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let size = "50px";
  export let fill = "";
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg
  data-license="MIT"
  data-source="https://www.svgrepo.com/svg/344306/pentagon-fill"
  fill={fill || $themeStore.palette.primary}
  width={size}
  height={size}
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  class="bi bi-pentagon-fill"
>
  <path d="m8 0 8 6.5-3 9.5H3L0 6.5 8 0z" />
</svg>
