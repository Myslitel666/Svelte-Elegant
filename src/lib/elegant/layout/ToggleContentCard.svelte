<script>
  import { themeStore } from "$stores";
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { onMount } from "svelte";
  import Box from "$elegant/layout/Box.svelte";
  import TriangularBracket from "$icons-elegant/TriangularBracket.svelte";
  import { activeCardId } from "$stores/contentCardStore";
  import "$styles/app.css";
  import "../../font.css";

  export let id = "";
  export let width = "27rem";

  // Состояние для управления раскрытием
  let theme;
  let isOpen = false;
  let detailsSlot; // Ссылка на элемент слота
  let slotHeight = 0; // Высота содержимого

  // Обновляем высоту при изменении isOpen или содержимого слота
  $: if (isOpen && detailsSlot) {
    slotHeight = detailsSlot.clientHeight;
  }

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы
  });

  $: isOpen = $activeCardId === id;

  onMount(() => {
    id ? "" : (id = `toggle-content-card-${generateIdElement()}`);
  });

  // Функция для переключения состояния
  function toggleDetails() {
    if (isOpen === false) {
      activeCardId.set(id);
    } else {
      activeCardId.set("");
    }
  }
</script>

<!-- Основной Box -->
<div>
  <Box
    variant="Hoverable"
    padding="1.5rem"
    onclick={toggleDetails}
    {...$$props}
  >
    <slot name="content" />
    <div
      class="triangular-btn"
      style:rotate={isOpen ? "-90deg" : ""}
      style:transition="rotate 0.3s"
      style:margin-top="0.3rem"
    >
      <TriangularBracket />
    </div>
  </Box>

  <!-- Дополнительная информация под Box с плавным раскрытием -->
  <div class="details" style:height={isOpen ? `${slotHeight}px` : "0"}>
    <div bind:this={detailsSlot}>
      <slot name="detailes" />
    </div>
  </div>
</div>

<style>
  .details {
    padding-top: 0.5rem;
    padding-left: 1.66rem;
    overflow: hidden;
    transition: height 0.3s ease; /* Плавный переход */
  }

  .triangular-btn {
    margin-left: auto;
  }
</style>
