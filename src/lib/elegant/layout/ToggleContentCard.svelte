<script>
  import { themeStore } from "$stores";
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { onMount } from "svelte";
  import Box from "$elegant/layout/Box.svelte";
  import TriangularBracket from "$icons-elegant/TriangularBracket.svelte";
  import { activeCardId } from "$stores/contentCardStore";

  export let id = "";
  export let stockTitle = "Box";
  export let lotsQuantity = "6";
  export let lotValue = "7";
  export let comission = "6";
  export let price = "600";

  // Состояние для управления раскрытием
  let isOpen = false;

  let theme;

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
<Box variant="Hoverable" padding="1.5rem" width="35rem" onclick={toggleDetails}>
  <div class="box-content">
    <p>{stockTitle}</p>
    <p class="price" style:color={theme?.palette.primary}>
      Test: {price}
    </p>
  </div>
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
<div class="details" style:height={isOpen ? "4.25rem" : "0"}>
  <p><span style:font-weight="600">Random Text: </span> {lotsQuantity} шт.</p>
  <p>
    <span style:font-weight="600">Rand: </span>
    {lotValue.replace(".", ",")}
  </p>
  <p><span style:font-weight="600">Randdd: </span> {comission}</p>
</div>

<style>
  .box-content {
    margin-left: 1rem;
  }

  .box-content p {
    display: flex;
    justify-content: flex-start; /* Прижимаем содержимое к левому краю */
  }

  .stock-logo {
    width: 85px;
    height: 85px;
    border-radius: 50%; /* Делаем изображение круглым */
  }

  .price {
    font-weight: bold;
  }

  .details {
    font-size: 0.9rem;
    color: #555;
    padding-left: 1.5rem;
    overflow: hidden;
    transition: height 0.3s ease; /* Плавный переход */
  }

  .triangular-btn {
    margin-left: auto;
  }

  .details p {
    margin-bottom: 0.3rem;
  }

  .details p:last-child {
    margin-bottom: 0;
  }
</style>
