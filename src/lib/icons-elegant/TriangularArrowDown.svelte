<script lang="ts">
  import * as shared from "$shared";

  export let backgroundColor = "";
  export let fill = "";
  export let size = "1.1rem";

  let theme: shared.IColorThemeStore;

  // Подписываемся на изменения темы
  shared.themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<div style:background-color={backgroundColor} style:width={size}>
  <svg
    fill={fill !== "" ? fill : theme.icon.color.primary}
    viewBox="0 -3 24 24"
  >
    <path d="M6.5,8.5l6,7l6-7H6.5z" />
  </svg>
</div>
