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

<svg width={size} height={size} viewBox="0 0 800 800" fill="none">
  <g clip-path="url(#clip38_101)">
    <path id="path" d="" fill="#000000" fill-opacity="0" fill-rule="nonzero" />
    <path
      id="path"
      d="M137.68 364.6L65.87 460.33M784 221C753.41 271.96 714.15 322.92 664.35 364.64C597.21 420.89 510.94 460.33 401 460.33C209.5 460.33 89.81 340.66 18 221M664.35 364.64L736.12 460.33M401 460.33L401 580M544.62 436.4L592.5 556.06M257.37 436.4L209.5 556.06"
      stroke={fill || theme.palette.text.main}
      stroke-opacity="1.000000"
      stroke-width="38.400002"
    />
  </g>
</svg>
