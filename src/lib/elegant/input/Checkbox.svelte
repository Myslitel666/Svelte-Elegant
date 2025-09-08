<script>
  import Box from "$elegant/layout/Box.svelte";
  import { themeStore } from "$lib/stores";

  let theme;

  export let borderColor = "";
  export let borderWidth = "1px";
  export let borderRadius = "4px";
  export let hoverColor = "";
  export let size = "15px";

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы

    borderColor = theme.border.disabled.color;
    hoverColor = theme.surface.ghost.background;
  });
</script>

<div
  class="checkbox"
  style:--Xl-hoverColor={hoverColor}
  style:width={size}
  style:height={size}
  style:border={`${borderWidth} solid ${borderColor}`}
  style:border-radius={borderRadius}
></div>

<style>
  .checkbox {
    background-color: transparent;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
  }

  .checkbox:hover {
    background-color: var(--Xl-hoverColor);
  }
</style>
