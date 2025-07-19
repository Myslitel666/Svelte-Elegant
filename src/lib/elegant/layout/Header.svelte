<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "$styles/app.css";
  import "../../font.css";

  export let bgColor = "";
  export let gap = "0.5rem"; /* Расстояние между элементами */
  export let height = "2.75rem";
  export let padding = "0.5rem";

  let theme: any;

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
  style:transition="all 0.3s ease"
>
  <slot />
</nav>

<style>
  .header {
    display: flex;
    align-items: center;
    position: fixed; /* Фиксируем на экране */
    width: 100%; /* Растягиваем на всю ширину */
    z-index: 10000; /* Устанавливаем приоритет слоя */
  }
</style>
