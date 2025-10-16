<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let size = "50px";
  export let fill = "";
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg
  data-source="https://www.svgrepo.com/svg/535440/hexagon"
  data-license="PD"
  width={size}
  height={size}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 0L15 4V12L8 16L1 12V4L8 0Z"
    fill={fill || $themeStore.palette.primary}
  />
</svg>
