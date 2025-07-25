<script>
  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";
  import "$styles/app.css";
  import "../../font.css";

  let theme;
  export let size = "25rem";
  export let height = "25rem";
  export let width = "25rem";
  export let srcImages = ["", ""];

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });
</script>

<div
  style:width={size || width}
  style:height={size || height}
  class="cross-fade-imager"
>
  <div class="image-wrapper" style:opacity={$themeMode === "light" ? 1 : 0}>
    <img src={srcImages[0]} alt="light" />
  </div>
  <div class="image-wrapper" style:opacity={$themeMode === "dark" ? 1 : 0}>
    <img src={srcImages[1]} alt="dark" />
  </div>
</div>

<style>
  .cross-fade-imager {
    position: relative;
  }

  .image-wrapper {
    position: absolute;
    transition: opacity 1.5s ease;
  }

  img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }
</style>
