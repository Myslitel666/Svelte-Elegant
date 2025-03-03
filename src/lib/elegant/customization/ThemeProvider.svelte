<script lang="ts">
  import { themeStore } from "$lib/stores";
  import "../../font.css";
  import "../../app.css";

  export const prerender = true;

  let theme;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<div class="app">
  <main>
    <slot />
  </main>
</div>
