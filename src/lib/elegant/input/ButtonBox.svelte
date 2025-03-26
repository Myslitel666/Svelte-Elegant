<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import Button from "./Button.svelte";
  import "$styles/app.css";
  import "../../font.css";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });

  export let borderRadius = theme?.border.borderRadius.extra;
  export let fontSize = theme.typography.maxSize;
  export let height = theme.controls.height.medium;
  export let isPrimary = false;
  export let value = "";
  export let width = theme.controls.height.medium;
</script>

<!-- Основной Box -->
<Button {isPrimary} {borderRadius} {fontSize} {height} {width} {...$$props}>
  {value}
  <slot />
</Button>
