<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "1.45rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://icons.getbootstrap.com/icons/eye-fill/"
  data-license="MIT"
  width={size}
  height={size}
  class="bi bi-eye-fill"
  viewBox="0 0 16 16"
>
  <path
    d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    fill={fill || theme.palette.text.main}
  />
  <path
    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
    fill={fill || theme.icon.color.primary}
  />
</svg>
