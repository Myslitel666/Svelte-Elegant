<script lang="ts">
  import { themeStore, themeMode } from "$lib/stores/ColorThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "3rem";
  export let stroke = "";

  let isStrokeFromUser = stroke !== "";

  let theme;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;

    if (!isStrokeFromUser)
      stroke = $themeMode === "light" ? "#151515" : "#fdfdfd";
  });
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 659 659"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <desc> Created with Pixso. </desc>
  <defs>
    <clipPath id="clip5_20">
      <rect id="Frame 4" width="659.000000" height="659.000000" />
    </clipPath>
  </defs>
  <g clip-path="url(#clip5_20)">
    <path
      id="Vector 2"
      d="M329.25 565.2L464.14 223.37L194.85 222.48L329.25 565.2Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M252.3 107.79L197.85 205.9L463.14 205.9L410.18 107.79L252.3 107.79Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M232.32 105.55L176.86 204.56L35.97 176.33L142.89 88.97L232.32 105.55Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M262.3 68.81L192.35 80.01L247.31 90.32L417.68 90.32L470.14 81.36L396.69 68.81L262.3 68.81Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M38.97 195.15L173.86 222.48L298.27 538.32L38.97 195.15Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M485.13 222.48L621.02 194.7L360.72 535.63L485.13 222.48Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M623.02 176.78L483.63 204.11L429.67 105.55L520.6 90.32L623.02 176.78Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M0 179.92L135.39 71.5L259.8 50L399.19 50L531.59 72.84L658 179.92L327.75 610L0 179.92ZM262.3 68.81L192.35 80.01L247.31 90.32L417.68 90.32L470.14 81.36L396.69 68.81L262.3 68.81ZM252.3 107.79L197.85 205.9L463.14 205.9L410.18 107.79L252.3 107.79ZM232.32 105.55L176.86 204.56L35.97 176.33L142.89 88.97L232.32 105.55ZM623.02 176.78L483.63 204.11L429.67 105.55L520.6 90.32L623.02 176.78ZM485.13 222.48L621.02 194.7L360.72 535.63L485.13 222.48ZM329.25 565.2L464.14 223.37L194.85 222.48L329.25 565.2ZM38.97 195.15L173.86 222.48L298.27 538.32L38.97 195.15Z"
      fill={stroke}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M330.24 565.2L465.14 223.37L195.85 222.48L330.24 565.2Z"
      fill={fill || theme?.palette.primary}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M253.3 107.79L198.84 205.9L464.14 205.9L411.18 107.79L253.3 107.79Z"
      fill={fill || theme?.palette.primary}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M233.32 105.55L177.86 204.56L36.97 176.33L143.89 88.97L233.32 105.55Z"
      fill={fill || theme?.palette.primary}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M263.29 68.81L193.35 80.01L248.31 90.32L418.68 90.32L471.14 81.36L397.69 68.81L263.29 68.81Z"
      fill={fill || theme?.palette.primary}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M39.96 195.15L174.86 222.48L299.27 538.32L39.96 195.15Z"
      fill={fill || theme?.palette.primary}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M486.13 222.48L622.02 194.7L361.72 535.63L486.13 222.48Z"
      fill={fill || theme?.palette.primary}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M624.02 176.78L484.63 204.11L430.67 105.55L521.6 90.32L624.02 176.78Z"
      fill={fill || theme?.palette.primary}
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector 2"
      d="M0 179.92L327.75 610L658 179.92L531.59 72.84L399.19 50L259.8 50L135.39 71.5L0 179.92ZM262.3 68.81L396.69 68.81L470.14 81.36L417.68 90.32L247.31 90.32L192.35 80.01L262.3 68.81ZM252.3 107.79L410.18 107.79L463.14 205.9L197.85 205.9L252.3 107.79ZM232.32 105.55L142.89 88.97L35.97 176.33L176.86 204.56L232.32 105.55ZM623.02 176.78L520.6 90.32L429.67 105.55L483.63 204.11L623.02 176.78ZM485.13 222.48L360.72 535.63L621.02 194.7L485.13 222.48ZM329.25 565.2L194.85 222.48L464.14 223.37L329.25 565.2ZM38.97 195.15L298.27 538.32L173.86 222.48L38.97 195.15ZM0.99 179.92L328.75 610L659 179.92L532.59 72.84L400.19 50L260.8 50L136.39 71.5L0.99 179.92ZM263.29 68.81L397.69 68.81L471.14 81.36L418.68 90.32L248.31 90.32L193.35 80.01L263.29 68.81ZM253.3 107.79L411.18 107.79L464.14 205.9L198.84 205.9L253.3 107.79ZM233.32 105.55L143.89 88.97L36.97 176.33L177.86 204.56L233.32 105.55ZM624.02 176.78L521.6 90.32L430.67 105.55L484.63 204.11L624.02 176.78ZM486.13 222.48L361.72 535.63L622.02 194.7L486.13 222.48ZM330.24 565.2L195.85 222.48L465.14 223.37L330.24 565.2ZM39.96 195.15L299.27 538.32L174.86 222.48L39.96 195.15Z"
      {stroke}
      stroke-opacity="1.000000"
      stroke-width="0.000000"
    />
  </g>
</svg>

<style>
  svg:hover {
    transform: scale(1.2);
  }
</style>
