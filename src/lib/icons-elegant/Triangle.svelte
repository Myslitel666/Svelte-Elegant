<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let fill = "";
  export let size = "55px";

  export let widthFactor = 1.0; // 1.0 = оригинал, 2.0 = в 2 раза шире

  $: leftX = 256 - 256 * widthFactor;
  $: rightX = 256 + 256 * widthFactor;

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg
  data-source="https://www.svgrepo.com/svg/327266/triangle-sharp"
  data-license="MIT"
  fill={fill || theme.palette.primary}
  height={size}
  width={size}
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
  ><title>ionicons-v5-s</title><polygon
    points="256 32 20 464 492 464 256 32"
  /></svg
>
