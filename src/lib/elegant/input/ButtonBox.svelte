<script lang="ts">
  import { themeStore, themeMode } from "$lib/stores/ColorThemeStore.js";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });

  export let bgColor = "";
  export let borderRadius = theme?.border.borderRadius.extra;
  export let height = "6rem";
  export let margin = "";
  export let marginBottom = "";
  export let marginLeft = "";
  export let marginRight = "";
  export let marginTop = "";
  export let value = "";
  export let width = "6rem";
</script>

<!-- Основной Box -->
<button
  class="btn-box"
  style:border-radius={borderRadius}
  style:color={theme.palette.text.main}
  style:cursor="pointer"
  style:font-size={theme.typography.maxSize}
  style:margin
  style:margin-bottom={marginBottom}
  style:margin-left={marginLeft}
  style:margin-right={marginRight}
  style:margin-top={marginTop}
  style:transition={`all ${theme?.effectsTimeCode}`}
  style:--Xl-bg-color={bgColor || $themeMode === "light"
    ? theme?.surface.ghost.background
    : theme?.surface.filled.background}
  style:--Xl-elegant-border={theme?.border.elegant.color}
  style:--Xl-height={height}
  style:--Xl-hover-bg-color={theme?.surface.underSolid.background}
  style:--Xl-width={width}
  {...$$props}
>
  {value}
  <slot />
</button>

<style>
  .btn-box {
    align-items: center;
    background-color: var(--Xl-bg-color);
    border-color: var(--Xl-elegant-border);
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: var(--Xl-width);
    height: var(--Xl-height);
  }

  .btn-box:hover {
    background-color: var(--Xl-hover-bg-color);
    border-color: var(--Xl-border-color);
  }
</style>
