<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "48px";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<div
  style:height={size}
  style:width={size}
  style:background-color={fill || theme.palette.primary}
  style:border-radius="50%"
  style:transition="all 0.3s ease"
></div>
