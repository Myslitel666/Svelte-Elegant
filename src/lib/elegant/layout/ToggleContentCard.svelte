<script>
  import { themeStore } from "$stores";
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { onMount } from "svelte";
  import Box from "$elegant/layout/Box.svelte";
  import TriangularBracket from "$icons-elegant/TriangularBracket.svelte";
  import { activeCardId } from "$stores/contentCardStore";
  import "$styles/app.css";
  import "../../font.css";

  export let detailsShift = "3.5px";
  export let id = "";
  export let padding = "1rem";
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

<!-- vertical-align="top" удаляет отступ снизу карточек для inline-block -->
<div style:display="inline-block" style:vertical-align="top" style:width>
  <!-- Основной Box -->
  <div style:display="flex">
    <Box
      variant="Hoverable"
      height="5.33rem"
      onclick={toggleDetails}
      {padding}
      {width}
      {...$$props}
    >
      <div style:padding-right="0.75rem">
        <slot name="content" />
      </div>
      <div
        class="triangular-btn"
        style:rotate={isOpen ? "-90deg" : ""}
        style:transition="rotate 0.3s, transform 0.3s"
        style:margin-top="0.3rem"
      >
        <TriangularBracket />
      </div>
    </Box>
    <div class="flex-center">
      <slot name="actions" />
    </div>
  </div>

  <!-- Дополнительная информация под Box с плавным раскрытием -->
  <div style:transform={`translateY(${detailsShift})`}>
    <div
      class="details"
      style:height={isOpen ? `${slotHeight}px` : "0"}
      style:width
    >
      <div bind:this={detailsSlot}>
        <slot name="detailes" />
      </div>
    </div>
  </div>
</div>

<style>
  .details {
    box-sizing: border-box;
    overflow: hidden;
    padding-left: 1.1rem;
    padding-right: 0.75rem;
    text-align: justify;
    transition: height 0.3s ease; /* Плавный переход */
  }

  .triangular-btn {
    margin-left: auto;
    margin-right: -0.275rem;
  }
</style>
