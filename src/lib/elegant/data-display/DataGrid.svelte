<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "$styles/app.css";
  import "../../font.css";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  // Свойства для управления CSS-стилями
  export let borderColor = ""; /* Цвет обводки */
  export let headBg = "";
  export let rowBg = "";

  export let columns = [
    { field: "id", header: "Id", width: "3.5rem" },
    {
      field: "phrase",
      header: "Phrase",
      width: "15rem",
    },
    {
      field: "translate",
      header: "Translate",
      width: "15rem",
    },
  ];

  export let rows: { [key: string]: any }[] = [
    { id: 1, phrase: "It is your table!", translate: "Это Ваша таблица!" },
    {
      id: 2,
      phrase: "Don't forget to give her your data",
      translate: "Не забудьте передать ей свои данные",
    },
  ];
</script>

<div
  class="data-grid border"
  style:background-color={rowBg || theme?.surface.ghost.background}
  style:color={theme.palette.text.contrast}
  style:--Xl-border-color={borderColor || theme?.border.disabled.color}
  style:--Xl-head-bg={headBg || theme?.surface.filled.background}
  style:--Xl-transition={`background-color ${theme.effectsTimeCode}, border-color ${theme.effectsTimeCode}`}
>
  <!-- Заголовок таблицы -->
  <div class="row border">
    {#each columns as column}
      <div class="cell border" style:width={column.width}>
        <div class="cell-content">
          <p>{column.header}</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Пример строки данных -->
  {#each rows as row}
    <div class="row border">
      {#each columns as column}
        <div class="cell border" style:width={column.width}>
          <div class="cell-content">
            <p>{row[column.field]}</p>
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .border {
    border: 1px solid; /* Толщина и цвет обводки таблицы */
    border-color: var(--Xl-border-color);
    transition: var(--Xl-transition);
  }

  .data-grid {
    border-radius: 4px;
  }

  .row {
    min-height: 3rem;
    border-left: none;
    border-right: none;
    border-top: none;
    display: flex; /* Горизонтальная ориентация для ячеек */
    align-items: stretch; /* Ячейки растягиваются равномерно */
  }

  .cell {
    border-top: none;
    border-bottom: none;
    border-left: none;
    display: flex; /* Используем Flexbox для выравнивания содержимого ячеек */
    align-items: stretch; /* Ячейки растягиваются равномерно */
    justify-content: center; /* Центрируем содержимое по горизонтали */
    min-width: 3.5rem;
  }

  .cell-content {
    padding: 0.75rem;
    display: flex;
    justify-content: center; /* Центрируем содержимое по горизонтали */
    flex-direction: column; /* Расположение элементов друг под другом */
  }

  .data-grid:hover {
    cursor: pointer;
  }

  .row:hover,
  .row:first-child {
    background-color: var(--Xl-head-bg);
  }

  .row:last-child {
    border-bottom: none; /* Убираем нижнюю границу у последней строки */
  }

  .cell:last-child {
    border: none;
  }
</style>
