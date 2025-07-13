<script lang="ts">
  import { themeStore } from "$lib/stores";
  import { onMount } from "svelte";
  import { initialBodyStyle } from "$lib/utils/initialBodyStyle.js";
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
  });
</script>

<div class="app">
  <main>
    <slot />
  </main>
</div>
