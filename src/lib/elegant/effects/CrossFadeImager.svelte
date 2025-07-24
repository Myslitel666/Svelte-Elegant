<script>
  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";
  import "$styles/app.css";
  import "../../font.css";

  let theme;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });
</script>

<div style:width="25rem" style:height="25rem" class="cross-fade-imager">
  <div class="image-wrapper" style:opacity={$themeMode === "light" ? 1 : 0}>
    <slot name="light" />
  </div>
  <div class="image-wrapper" style:opacity={$themeMode === "dark" ? 1 : 0}>
    <slot name="dark" />
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
</style>
