<script lang="ts">
  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "2rem";
  export let stroke = "";

  let isStrokeFromUser = stroke !== "";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;

    if (!isStrokeFromUser)
      stroke = $themeMode === "light" ? "#151515" : "#fdfdfd";
  });
</script>

<svg
  data-source="https://icons.getbootstrap.com/icons/brilliance/"
  data-license="MIT"
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={fill || theme.palette.primary}
  class="bi bi-brilliance"
  viewBox="0 0 16 16"
>
  <path
    d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7"
  />
</svg>

<style>
  svg:hover {
    transform: scale(1.2);
  }
</style>
