<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });

  export let fill = "";
  export let size = "3.5rem";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://heroicons.com"
  data-license="MIT"
  viewBox="0 0 24 24"
  fill="currentColor"
  class="size-6"
  width={size}
  height={size}
>
  <path
    fill-rule="evenodd"
    d="M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.53 9.22a.75.75 0 1 0-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L15.31 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"
    clip-rule="evenodd"
    fill={fill || theme.palette.text.main}
  />
</svg>
