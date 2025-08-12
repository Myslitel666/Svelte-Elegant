<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "$styles/app.css";
  import "../../font.css";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });

  export let alignItems = "center";
  export let bgColor = "";
  export let borderWidth = "";
  export let borderStyle = "";
  export let borderColor = "";
  export let borderRadius = theme?.border.borderRadius.balanced;
  export let borderSizing = "border-box";
  export let color = "";
  export let display = "flex";
  export let height = "";
  export let justifyContent = "center";
  export let marginBottom = "";
  export let maxWidth = "";
  export let padding = "0.5rem";
  export let paddingRight = "";
  export let textAlign = "";
  export let variant: "Default" | "Hoverable" | "Solid" = "Default";
  export let width = "";
</script>

<!-- Основной Box -->
<div
  class="box"
  style:align-items={alignItems}
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
  style:color
  style:cursor={variant === "Hoverable" ? "pointer" : ""}
  style:display
  style:justify-content={justifyContent}
  style:margin-bottom={marginBottom}
  style:max-width={maxWidth}
  style:overflow="hidden;"
  style:padding
  style:padding-right={paddingRight}
  style:text-align={textAlign}
  style:transition={`all ${theme?.effectsTimeCode}`}
  style:user-select={variant == "Hoverable" ? "none" : ""}
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
