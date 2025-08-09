<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";

  export let fill = "";
  export let size = "2.5rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://icons.getbootstrap.com/icons/plus/"
  data-license="MIT"
  width={size}
  height={size}
  fill={fill || theme.palette.primary}
  class="bi bi-plus"
  viewBox="0 0 16 16"
>
  <path
    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
  />
</svg>
