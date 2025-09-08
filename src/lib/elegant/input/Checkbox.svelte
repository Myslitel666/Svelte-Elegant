<script>
  import CheckMark from "$icons-elegant/CheckMark.svelte";
  import { themeStore } from "$lib/stores";

  let theme;

  export let backgroundColor = "";
  export let borderColor = "";
  export let borderWidth = "1px";
  export let borderRadius = "4px";
  export let hoverColor = "";
  export let isActive = false;
  export let size = "20px";

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы

    hoverColor = theme.surface.ghost.background;
  });

  $: {
    backgroundColor = isActive ? theme.palette.primary : "";
    borderColor = isActive
      ? theme.palette.primary
      : theme.border.disabled.color;
  }

  function toggleActive() {
    isActive = !isActive;
  }
</script>

<div
  class="checkbox"
  on:click={toggleActive}
  style:--Xl-hoverColor={hoverColor}
  style:width={size}
  style:height={size}
  style:background-color={backgroundColor}
  style:border={`${borderWidth} solid ${borderColor}`}
  style:border-radius={borderRadius}
>
  <div style:opacity={isActive ? 1 : 0} style:transition="opacity 0.3s">
    <CheckMark fill={theme.palette.text.main} size="12px" />
  </div>
</div>

<style>
  .checkbox {
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
  }

  .checkbox:hover {
    background-color: var(--Xl-hoverColor);
  }
</style>
