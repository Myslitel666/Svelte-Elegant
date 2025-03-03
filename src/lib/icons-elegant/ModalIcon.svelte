<script lang="ts">
  import * as shared from "$shared";
  export let id = "";
  export let size = "2rem";
  let fill = "";

  let theme: shared.IColorThemeStore | undefined;

  // Подписываемся на изменения темы
  shared.themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });
</script>

<svg
  {id}
  width={size}
  height={size}
  viewBox="0 0 16 16"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <path fill={fill || theme?.palette.primary} d="M3 6h2v1h-2v-1z"></path>
  <path fill={fill || theme?.palette.primary} d="M6 6h7v1h-7v-1z"></path>
  <path fill={fill || theme?.palette.primary} d="M3 8h2v1h-2v-1z"></path>
  <path fill={fill || theme?.palette.primary} d="M6 8h7v1h-7v-1z"></path>
  <path fill={fill || theme?.palette.primary} d="M3 10h2v1h-2v-1z"></path>
  <path fill={fill || theme?.palette.primary} d="M6 10h7v1h-7v-1z"></path>
  <path
    fill={fill || theme?.palette.primary}
    d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"
  ></path>
</svg>

<style>
  svg {
    cursor: pointer;
  }
</style>
