<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let rotate = "";
  export let size = "1.05rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  style:rotate
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://heroicons.com"
  data-license="MIT"
  width={size}
  height={size}
  stroke={fill || theme.palette.text.main}
  viewBox="0 0 24 24"
  stroke-width="1.66"
  fill="none"
  class="size-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M15.75 19.5 8.25 12l7.5-7.5"
  />
</svg>
