<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let backgroundColor = "";
  export let fill = "";
  export let size = "1.1rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<div style:background-color={backgroundColor} style:width={size}>
  <svg fill={fill || theme.icon.color.primary} viewBox="0 -3 24 24">
    <path d="M6.5,8.5l6,7l6-7H6.5z" />
  </svg>
</div>
