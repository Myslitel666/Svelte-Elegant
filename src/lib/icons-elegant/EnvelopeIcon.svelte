<script lang="ts">
  import { text } from "@sveltejs/kit";
  import { type IColorThemeStore } from "$interfaces/color-theme/IColorThemeStore.js";
  import { themeStore } from "$stores/ColorThemeStore.js";
  import "./style/icons.css";

  let theme: IColorThemeStore;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });

  export let fill = "";
  export let size = "3rem";
  export let stroke = "";
  export let strokeWidth = "18.000000";
  export let borderRadius = "16.000000";
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 320 225"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <clipPath id="clip10_1">
      <rect
        id="Frame 1"
        rx={borderRadius}
        width="320.000000"
        height="225.000000"
        fill="white"
        fill-opacity="0"
      />
    </clipPath>
  </defs>
  <rect
    id="Frame 1"
    rx={borderRadius}
    width="320.000000"
    height="225.000000"
    fill={fill !== "" ? fill : theme.palette.background}
    fill-opacity="1.000000"
  />
  <g clip-path="url(#clip10_1)">
    <line
      id="Line 4"
      x1="12.000000"
      y1="213.480103"
      x2="111.000000"
      y2="112.480110"
      stroke={stroke !== "" ? stroke : theme.palette.text.contrast}
      stroke-opacity="1.000000"
      stroke-width={strokeWidth}
    />
    <line
      id="Line 5"
      x1="210.000000"
      y1="112.480103"
      x2="306.000000"
      y2="213.480103"
      stroke={stroke !== "" ? stroke : theme.palette.text.contrast}
      stroke-opacity="1.000000"
      stroke-width={strokeWidth}
    />
    <path
      id="Line 3"
      d=""
      fill="#FFFFFF"
      fill-opacity="1.000000"
      fill-rule="nonzero"
    />
    <path
      id="Line 3"
      d="M12.86 12.1L137.11 139.16C143.21 145.39 151.55 148.9 160.26 148.91C168.91 148.92 177.2 145.47 183.29 139.33L309.35 12.34"
      stroke={stroke !== "" ? stroke : theme.palette.text.contrast}
      stroke-opacity="1.000000"
      stroke-width={strokeWidth}
    />
    <path
      id="Line 2"
      d="M8.99 215.43L310.99 215.43L310.99 8.93L8.99 8.93L8.99 215.43Z"
      stroke={stroke !== "" ? stroke : theme.palette.text.contrast}
      stroke-opacity="1.000000"
      stroke-width={strokeWidth}
    />
  </g>
</svg>
