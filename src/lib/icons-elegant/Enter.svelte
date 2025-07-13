<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "3.275rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  data-source="https://icons.getbootstrap.com/icons/brilliance/"
  data-license="MIT"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  class="size-6"
  width={size}
  height={size}
>
  <path
    fill-rule="evenodd"
    d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
    clip-rule="evenodd"
    fill={fill || theme.palette.text.main}
  />
</svg>
