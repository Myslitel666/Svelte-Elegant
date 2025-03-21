<script lang="ts">
  import { themeStore } from "$lib/stores/ColorThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "3rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M4 13L8 9M4 13L8 17"
    stroke={fill || theme.palette.text.main}
    stroke-width="2.75"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
