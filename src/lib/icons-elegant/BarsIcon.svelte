<script lang="ts">
  import * as shared from "$shared";

  export let fill = "";
  export let size = "2rem";

  let theme: shared.IColorThemeStore;

  // Подписываемся на изменения темы
  shared.themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 113 113"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <desc> Created with Pixso. </desc>
  <defs>
    <clipPath id="clip3_2">
      <rect
        id="Frame 2"
        width="113.000000"
        height="113.000000"
        fill-opacity="0"
      />
    </clipPath>
  </defs>
  <g clip-path="url(#clip3_2)">
    <rect
      id="Rectangle 1"
      y="19.000000"
      rx="6.500000"
      width="113.000000"
      height="13.000000"
      fill={fill || theme.palette.text.contrast}
      fill-opacity="1.000000"
    />
    <rect
      id="Rectangle 1"
      y="19.000000"
      rx="6.500000"
      width="113.000000"
      height="13.000000"
      fill={fill || theme.palette.text.contrast}
      fill-opacity="1.000000"
    />
    <rect
      id="Rectangle 2"
      y="50.000000"
      rx="6.500000"
      width="113.000000"
      height="13.000000"
      fill={fill || theme.palette.text.contrast}
      fill-opacity="1.000000"
    />
    <rect
      id="Rectangle 2"
      y="50.000000"
      rx="6.500000"
      width="113.000000"
      height="13.000000"
      fill={fill || theme.palette.text.contrast}
      fill-opacity="1.000000"
    />
    <rect
      id="Rectangle 3"
      y="81.000000"
      rx="6.500000"
      width="113.000000"
      height="13.000000"
      fill={fill || theme.palette.text.contrast}
      fill-opacity="1.000000"
    />
    <rect
      id="Rectangle 3"
      y="81.000000"
      rx="6.500000"
      width="113.000000"
      height="13.000000"
      fill={fill || theme.palette.text.contrast}
      fill-opacity="1.000000"
    />
  </g>
</svg>
