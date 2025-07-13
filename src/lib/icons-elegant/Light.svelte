<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let stroke: string = "";
  export let size: string = "1.1rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  data-source="https://heroicons.com"
  data-license="MIT"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="size-6"
  width={size}
  height={size}
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    stroke={stroke || theme.palette.text.contrast}
  />
</svg>
