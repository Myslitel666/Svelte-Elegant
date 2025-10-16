<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let size = "50px";
  export let fill = "";

  export let widthFactor = 1.0; // 1.0 = оригинал, 2.0 = в 2 раза шире

  $: leftX = 256 - 256 * widthFactor;
  $: rightX = 256 + 256 * widthFactor;
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg
  width={size}
  height={size}
  version="1.1"
  id="_x32_"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512"
  xml:space="preserve"
>
  <g>
    <polygon
      fill={fill || $themeStore.palette.primary}
      points="256,0 {leftX},256 256,512 {rightX},256"
    />
  </g>
</svg>
