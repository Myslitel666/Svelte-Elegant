<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "1.2rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://www.svgrepo.com/svg/446816/triangle-down"
  data-license="MIT"
  width={size}
  height={size}
  fill={fill || theme.icon.color.primary}
  version="1.1"
  id="Layer_1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 24 24"
  xml:space="preserve"
>
  <style type="text/css">
    .st0 {
      fill: none;
    }
  </style>
  <path d="M6.5,8.5l6,7l6-7H6.5z" />
  <rect class="st0" width="24" height="24" />
  <rect class="st0" width="24" height="24" />
</svg>
