<script lang="ts">
  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";
  import { setHoverColor } from "$lib/utils/setHoverColor";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });

  export let bgColor = "";
  export let borderRadius = theme?.border.borderRadius.extra;
  export let height = theme.controls.height.medium;
  export let isPrimary = false;
  export let marginBottom = "";
  export let marginLeft = "";
  export let marginRight = "";
  export let marginTop = "";
  export let value = "";
  export let width = "6rem";

  function handleTouchEnd(e: Event) {
    setTimeout(() => {
      setHoverColor(e, "--Xl-hover-bg-color", "var(--Xl-bg-color)");
      setHoverColor(e, "--Xl-filter", "");
    }, 201);
  }

  function handleTouchStart(e: Event) {
    setHoverColor(
      e,
      "--Xl-hover-bg-color",
      theme.surface.underSolid.background
    );
    setHoverColor(
      e,
      "--Xl-filter",
      isPrimary ? theme.controls.button.filter : ""
    );
  }
</script>

<!-- Основной Box -->
<button
  class="btn-box"
  style:background-color={isPrimary ? theme.palette.primary : ""}
  style:border-radius={borderRadius}
  style:color={theme.palette.text.main}
  style:cursor="pointer"
  style:font-size={theme.typography.maxSize}
  style:margin-bottom={marginBottom}
  style:margin-left={marginLeft}
  style:margin-right={marginRight}
  style:margin-top={marginTop}
  style:transition={`all ${theme?.effectsTimeCode}`}
  style:--Xl-bg-color={bgColor || $themeMode === "light"
    ? theme?.surface.ghost.background
    : theme?.surface.filled.background}
  style:--Xl-elegant-border={theme?.border.elegant.color}
  style:--Xl-filter={isPrimary ? theme.controls.button.filter : ""}
  style:--Xl-height={height}
  style:--Xl-hover-bg-color={theme?.surface.underSolid.background}
  style:--Xl-width={width}
  on:touchend={(e: Event) => {
    handleTouchEnd(e);
  }}
  on:touchstart={(e: Event) => {
    handleTouchStart(e);
  }}
  {...$$props}
>
  <div class="content">
    {value}
    <slot />
  </div>
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
    filter: var(--Xl-filter);
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
</style>
