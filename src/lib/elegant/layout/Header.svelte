<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { headerHeight } from "$lib/stores/headerStore.js";
  import "$styles/app.css";
  import "../../font.css";

  export let bgColor = "";
  export let border = "";
  export let gap = "0.5rem"; /* Расстояние между элементами */
  export let height = "3.25rem";
  export let padding = "0.5rem";

  let theme: any;

  // Обновляем хранилище при изменении высоты
  $: $headerHeight = height;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });
</script>

<nav
  class="header"
  style:gap
  style:height
  style:padding
  style:background-color={bgColor || theme.surface.header.background}
  style:border
>
  <slot />
</nav>
<div style:box-sizing="border-box" style:height style:padding></div>

<style>
  .header {
    display: flex;
    align-items: center;
    border-left: none;
    border-right: none;
    border-top: none;
    box-sizing: border-box;
    position: fixed; /* Фиксируем на экране */
    transition: all 0.3s ease;
    width: 100vw; /* Растягиваем на всю ширину */
    z-index: 10000; /* Устанавливаем приоритет слоя */
  }
</style>
