<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "47px";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg
  data-source="https://www.svgrepo.com/svg/221197/cube"
  data-license="CC0"
  fill={fill || theme.palette.primary}
  width={size}
  height={size}
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512"
  xml:space="preserve"
>
  <g>
    <g>
      <g>
        <path
          d="M0,501.333C0,507.221,4.779,512,10.667,512h330.667V170.667H0V501.333z"
        />
        <path
          d="M160,0c-2.837,0-5.547,1.131-7.552,3.115L6.229,149.333h341.355L496.917,0H160z"
        />
        <path
          d="M362.667,164.416v341.333l146.219-146.219c1.984-1.984,3.115-4.693,3.115-7.531V15.083L362.667,164.416z"
        />
      </g>
    </g>
  </g>
</svg>
