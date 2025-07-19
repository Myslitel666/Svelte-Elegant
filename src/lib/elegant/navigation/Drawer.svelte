<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { themeMode } from "../../stores/ThemeStore.js";
  import { onMount, onDestroy } from "svelte";
  import "$styles/app.css";
  import "../../font.css";

  export let isOpen = false;
  export let toggleButtonId = "drawer-toggle-button";

  let theme: any;
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
  themeStore.subscribe((value) => {
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
    z-index: 100000; /* Над всем остальным */
  }

  /* Меню в открытом состоянии */
  .drawer.open {
    left: 0; /* Выдвигается */
  }
</style>
