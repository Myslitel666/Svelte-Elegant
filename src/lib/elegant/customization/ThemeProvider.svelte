<script lang="ts">
  import { themeStore } from "$lib/stores";
  import { onMount } from "svelte";
  import {
    initialBodyStyle,
    customizeScroll,
    initialRootStyle,
  } from "$lib/utils/initialBodyStyle.js";
  import "$styles/app.css";
  import "../../font.css";

  export const prerender = true;

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });

  onMount(() => {
    initialBodyStyle(); // Применяем тему при запуске приложения
    initialRootStyle();
    customizeScroll();
  });
</script>

<div class="app scrollbar">
  <main>
    <slot />
  </main>
</div>
