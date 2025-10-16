<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let size = "50px";
  export let fill = "";
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg
  data-source="https://www.svgrepo.com/svg/514133/heart"
  data-license="MIT"
  fill={fill || $themeStore.palette.primary}
  width={size}
  height={size}
  viewBox="0 0 32 32"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>heart</title>
  <path
    d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"
  ></path>
</svg>
