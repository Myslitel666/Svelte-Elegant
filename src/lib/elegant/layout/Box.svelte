<script lang="ts">
  import { themeStore } from "$lib/stores/ColorThemeStore.js";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });

  export let bgColor = "";
  export let borderWidth = "";
  export let borderStyle = "";
  export let borderColor = "";
  export let borderRadius = theme?.border.borderRadius.balanced;
  export let borderSizing = "border-box";
  export let height = "";
  export let justifyContent = "";
  export let padding = "0.5rem";
  export let variant: "Default" | "Hoverable" | "Solid" = "Default";
  export let width = "";
</script>

<!-- Основной Box -->
<div
  class="box"
  style:background-color={variant === "Solid"
    ? theme?.surface.ghost.background
    : ""}
  style:border-color={borderColor
    ? borderColor
    : variant === "Solid"
      ? theme?.border.disabled.color
      : ""}
  style:border-radius={borderRadius}
  style:border-style={borderStyle || "Solid"}
  style:border-width={borderWidth || theme?.border.disabled.width}
  style:box-sizing={borderSizing}
  style:color={theme.palette.text.contrast}
  style:cursor={variant === "Hoverable" ? "pointer" : ""}
  style:justify-content={justifyContent}
  style:overflow="hidden;"
  style:padding
  style:transition={`all ${theme?.effectsTimeCode}`}
  style:--Xl-bg-color={bgColor
    ? bgColor
    : variant === "Default"
      ? ""
      : theme?.surface.ghost.background}
  style:--Xl-elegant-border={theme?.border.elegant.color}
  style:--Xl-border-color={variant === "Default"
    ? theme?.border.elegant.color
    : theme?.border.disabled.color}
  style:--Xl-height={height}
  style:--Xl-width={width}
  {...$$props}
>
  <slot />
</div>

<style>
  .box {
    align-items: center;
    border-color: var(--Xl-elegant-border);
    display: flex;

    width: var(--Xl-width);
    height: var(--Xl-height);
  }

  .box:hover {
    background-color: var(--Xl-bg-color);
    border-color: var(--Xl-border-color);
  }
</style>
