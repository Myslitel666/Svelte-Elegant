<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "2rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg width={size} height={size} viewBox="0 0 800 514">
  <defs />
  <path
    id="path"
    d="M64.59 257C131.62 362.26 237.08 458.92 400 458.92C562.91 458.92 668.38 362.26 735.4 257C668.38 151.74 562.91 55.07 400 55.07C237.08 55.07 131.62 151.74 64.59 257ZM8.51 242.83C79.97 123.95 202.37 0 400 0C597.62 0 720.02 123.95 791.48 242.83L800 257L791.48 271.16C720.02 390.04 597.62 514 400 514C202.37 514 79.97 390.04 8.51 271.16L0 257L8.51 242.83ZM400 114.73C321.28 114.73 257.46 178.42 257.46 257C257.46 335.57 321.28 399.26 400 399.26C478.72 399.26 542.53 335.57 542.53 257C542.53 178.42 478.72 114.73 400 114.73Z"
    fill={fill || theme.palette.text.main}
    fill-opacity="1.000000"
    fill-rule="evenodd"
  />
</svg>
