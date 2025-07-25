<script>
  import { themeMode } from "$lib/stores/ThemeStore.js";
  import "$styles/app.css";
  import "../../font.css";

  export let height = "25rem";
  export let size = "25rem";
  export let srcImages = ["", ""];
  export let transitionSecons = "1.5";
  export let width = "25rem";
</script>

<div
  style:width={size || width}
  style:height={size || height}
  class="cross-fade-imager"
>
  <div
    class="image-wrapper"
    style:transition={`opacity ${transitionSecons}s ease`}
    style:opacity={$themeMode === "light" ? 1 : 0}
  >
    <img src={srcImages[0]} alt="light" />
  </div>
  <div
    class="image-wrapper"
    style:transition={`opacity ${transitionSecons}s ease`}
    style:opacity={$themeMode === "dark" ? 1 : 0}
  >
    <img src={srcImages[1]} alt="dark" />
  </div>
</div>

<style>
  .cross-fade-imager {
    position: relative;
  }

  .image-wrapper {
    position: absolute;
  }

  img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }
</style>
