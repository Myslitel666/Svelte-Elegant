<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";

  export let borderRadius = "0.5rem";
  export let height = "10rem";
  export let isOpen = false;
  export let maxHeight = "80vh";
  export let maxWidth = "80%";
  export let onClose = () => {};
  export let padding = "1rem";
  export let width = "20rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });

  // Закрытие при клике вне контента
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
</script>

{#if isOpen}
  <button class="modal-backdrop" on:click={handleBackdropClick}>
    <div
      class="modal-content"
      style:background-color={theme.surface.header.background}
      style:border-radius={borderRadius}
      style:height
      style:max-height={maxHeight}
      style:max-width={maxWidth}
      style:padding
      style:width
    >
      <slot />
    </div>
  </button>
{/if}

<style>
  .modal-backdrop {
    background: rgba(0, 0, 0, 0.5);
    cursor: default;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    overflow: auto;
  }
</style>
