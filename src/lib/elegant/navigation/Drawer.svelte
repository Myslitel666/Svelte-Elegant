<script lang="ts">
  import * as shared from "$shared";
  import { themeMode } from "$stores/ColorThemeStore.js";
  import { onMount, onDestroy } from "svelte";

  export let isOpen = false;
  export let toggleButtonId = "drawer-toggle-button";

  let theme: shared.IColorThemeStore | undefined;
  export let bgColor = "";
  export let border = "";

  $: xBgColor = bgColor
    ? bgColor
    : $themeMode === "light"
      ? theme?.palette.background
      : theme?.surface.ghost.background;
  $: xBorder = border
    ? border
    : $themeMode === "light"
      ? `1px solid ${theme?.border.elegant.color}`
      : "";

  // Подписываемся на изменения темы
  shared.themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  // Функция для закрытия меню при клике вне его
  function close(event: MouseEvent) {
    const menu = document.querySelector(".drawer");
    const toggleButton = document.getElementById(toggleButtonId);

    if (
      isOpen &&
      menu &&
      toggleButton &&
      !menu.contains(event.target as Node) &&
      !toggleButton.contains(event.target as Node)
    ) {
      isOpen = false;
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("click", close);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      document.removeEventListener("click", close);
    }
  });
</script>

<!-- Drawer -->
<nav
  class="drawer {isOpen ? 'open' : ''}"
  style:background-color={xBgColor}
  style:border-right={xBorder}
>
  <slot />
</nav>

<style>
  * {
    box-sizing: border-box;
  }

  /* Сам Drawer */
  .drawer {
    position: fixed;
    top: 0;
    left: -250px; /* Скрыто за пределами экрана */
    width: 250px;
    height: 100%;
    transition: left 0.3s ease;
    z-index: 1000; /* Над всем остальным */
  }

  /* Меню в открытом состоянии */
  .drawer.open {
    left: 0; /* Выдвигается */
  }
</style>
