<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { onMount, onDestroy } from "svelte";
  import "$styles/app.css";
  import "../../font.css";
  import { browser } from "$app/environment"; //Позволяет определить, выполняется ли код на клиенте

  export let borderRadius = "0.5rem";
  export let isOpen = false;
  export let maxHeight = "100vh";
  export let maxWidth = "840px";
  export let minWidth = "19.5rem";
  export let outerPadding = "14px";
  export let padding = "1rem";
  export let width = "100vw";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });

  // Закрытие при клике вне контента
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      isOpen = false;
    }
  }

  // Обработчик нажатия клавиш
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      isOpen = false;
    }
  }

  // Обработчик нажатия на Escape
  onMount(() => {
    if (browser) {
      //Если код клиентский, обращаемся к window
      window.addEventListener("keydown", handleKeyDown);
    }
  });

  onDestroy(() => {
    if (browser) {
      //Если код клиентский, обращаемся к window
      window.removeEventListener("keydown", handleKeyDown);
    }
  });
</script>

{#if isOpen}
  <div
    class="modal-backdrop"
    style:padding={outerPadding}
    style:--Xl-width={width}
    on:mousedown={handleBackdropClick}
  >
    <div
      class="modal-content"
      style:background-color={theme.surface.header.background}
      style:border-radius={borderRadius}
      style:max-height={maxHeight}
      style:max-width={maxWidth}
      style:min-width={minWidth}
      style:padding
    >
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    box-sizing: border-box;
    cursor: default;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 11000;

    margin: 0;
    height: 100vh;
    width: 100vw;
  }

  .modal-content {
    overflow: auto;
    width: var(--Xl-width);
  }
</style>
