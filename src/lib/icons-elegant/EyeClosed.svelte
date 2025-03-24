<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let marginTop = "";
  export let size = "1.45rem";

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
      d="M136.68 529.59L64.87 625.33M776.5 386C745.91 436.96 713.15 487.92 663.35 529.64C596.21 585.89 509.94 629.33 400 629.33C208.5 629.33 93.81 505.66 22 386M663.35 529.64L735.12 625.33M400 629.33L400 745M543.62 601.4L591.5 721.06M256.37 601.4L208.5 721.06"
      stroke={fill || theme.palette.text.main}
      stroke-opacity="1.000000"
      stroke-width="38.400002"
      style:marginTop
    />
  </g>
</svg>
