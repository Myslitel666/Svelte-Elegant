<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "0.6rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://icons.getbootstrap.com/icons/caret-down-fill/"
  data-license="MIT"
  width={size}
  height={size}
  fill={fill || theme.icon.color.primary}
  class="bi bi-caret-down-fill"
  viewBox="0 0 16 16"
  style:margin-top="0.12rem"
>
  <path
    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
  />
</svg>
