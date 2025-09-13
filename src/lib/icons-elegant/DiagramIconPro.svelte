<script lang="ts">
  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let lightThemeFills = [
    "#3fae0f",
    "#34c60c",
    "#93d62e",
    "#fff700",
    "#d3d600",
  ];
  export let darkThemeFills = ["#660606", "#ff0000", "#d10000", "#ff4d4d"];
  export let size = "60px";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg
  version="1.1"
  data-source="https://www.svgrepo.com/svg/413652/chart"
  data-license="CC0"
  id="Uploaded to svgrepo.com"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width={size}
  height={size}
  viewBox="0 0 32 32"
  xml:space="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0" />

  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <g id="SVGRepo_iconCarrier">
    <g>
      <path
        class="isometric_negen"
        fill={lightThemeFills[0]}
        d="M7.567,17.033c-2.318-1.338-3.493-3.083-3.534-4.831C4.015,13.619,4,18.612,4.043,19.3 c0.107,1.689,1.282,3.362,3.524,4.656c5.304,3.062,14.195,2.647,18.423-1.002V16.03C21.756,19.685,12.864,20.091,7.567,17.033z"
      />
      <path
        class="isometric_acht"
        fill={lightThemeFills[1]}
        d="M16.217,12.091l8.356-4.765c-0.032-0.019-0.059-0.04-0.092-0.059 c-4.7-2.714-12.297-2.727-16.967-0.031s-4.647,7.083,0.053,9.796c5.34,3.083,14.304,2.637,18.498-1.062L16.217,12.091z"
      />
      <path
        class="isometric_tien"
        fill={lightThemeFills[2]}
        d="M24.573,7.326l-8.356,4.765h11.776C27.951,10.37,26.824,8.655,24.573,7.326z"
      />
      <path
        class="isometric_twaalf"
        fill={lightThemeFills[3]}
        d="M16.217,12.091L16.217,12.091l9.848,3.88c1.181-1.041,1.824-2.227,1.929-3.428 c0.013-0.15,0.004-0.301,0-0.451H16.217z"
      />
      <path
        class="isometric_dertien"
        fill={lightThemeFills[4]}
        d="M27.993,12.091c0.039,1.559-0.764,2.852-1.929,3.88c-0.023,0.02-0.051,0.039-0.075,0.059v6.923 c0.023-0.02,0.052-0.039,0.075-0.059c1.181-1.041,1.824-2.227,1.928-3.428C28.006,19.316,27.997,12.242,27.993,12.091z"
      />
    </g>
  </g>
</svg>
