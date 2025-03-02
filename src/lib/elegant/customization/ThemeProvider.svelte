<script lang="ts">
  import * as shared from "$shared";
  import { onMount } from "svelte";
  import { initialCSSVariables } from "$utils/initialCSSVariables.js";
  import "../../font.css";
  import "../../app.css";

  export const prerender = true;

  let theme: shared.IColorThemeStore;

  // Подписываемся на изменения темы
  shared.themeStore.subscribe((value) => {
    theme = value;
  });

  onMount(() => {
    initialCSSVariables(); // Применяем тему при запуске приложения
  });
</script>

<div class="app">
  <main>
    <slot />
  </main>
</div>
