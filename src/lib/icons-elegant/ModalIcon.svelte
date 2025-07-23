<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let id = "";
  export let size = "2.5rem";

  let fill = "";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });
</script>

<svg
  {id}
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://heroicons.com"
  data-license="MIT"
  width={size}
  height={size}
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke={fill || theme?.palette.primary}
  class="size-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
  />
</svg>

<style>
  svg {
    cursor: pointer;
  }
</style>
