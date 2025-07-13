<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "1.75rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://heroicons.com"
  data-license="MIT"
  width={size}
  height={size}
  fill={fill || theme.palette.text.contrast}
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.93"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>
