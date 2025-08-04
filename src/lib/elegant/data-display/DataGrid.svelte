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
  export let width = "";
  export let height = "";

  export let columns = [
    { field: "id", header: "Id", width: "35px" },
    {
      field: "phrase",
      header: "Phrase",
      width: "150px",
    },
    {
      field: "translate",
      header: "Translate",
      width: "150px",
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
  class="data-grid-width-border-mask"
  style:--Xl-border-color={borderColor || theme?.border.disabled.color}
  style:--Xl-border-radius={theme.border.borderRadius.default}
  style:--Xl-transition={`background-color ${theme.effectsTimeCode}, border-color ${theme.effectsTimeCode}`}
>
  <div
    class="data-grid border"
    style:color={theme.palette.text.contrast}
    style:width
    style:overflow-x="auto"
    style:overflow-y="auto"
    style:--Xl-background-color={rowBg || theme?.surface.ghost.background}
    style:--Xl-head-bg={headBg || theme?.surface.filled.background}
    style:height
  >
    <div class="header-container border over-border-clear">
      <div class="row">
        {#each columns as column}
          <div class="cell border" style:width={column.width}>
            <div class="cell-content">
              <p>{column.header}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div>
      <div class="row-container">
        {#each rows as row}
          <div class="row border over-border-clear">
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
    </div>
  </div>
  <div class="border-mask border" style:--Xl-mask-height="1.5rem"></div>
</div>

<style>
  .border {
    border: 1px solid; /* Толщина и цвет обводки таблицы */
    border-color: var(--Xl-border-color);
    transition: var(--Xl-transition);
  }

  .border-mask {
    border-bottom-left-radius: var(--Xl-border-radius);
    border-bottom-right-radius: var(--Xl-border-radius);
    background-color: transparent;
    border-top: none;
    box-sizing: border-box;
    height: var(--Xl-mask-height);
    margin-top: calc(-1 * var(--Xl-mask-height));
    position: absolute;
    pointer-events: none;
    width: 100%;
  }

  .data-grid {
    background-color: var(--Xl-background-color);
    border-bottom: none;
    border-radius: var(--Xl-border-radius);
  }

  .data-grid-width-border-mask {
    display: block;
    position: relative;
  }

  .header-container {
    display: inline-block; /* Растягиваем Header по содержимому (а не по ширине DataGrid, которая может быть меньше контена при горизонтальном скролинге) */
    background-color: var(--Xl-head-bg);
  }

  .over-border-clear {
    border-left: none;
    border-top: none;
    border-right: none;
  }

  .row-container {
    display: inline-block;
  }

  .row {
    min-height: 3rem;
    display: flex; /* Горизонтальная ориентация для ячеек */
  }

  .cell {
    border-top: none;
    border-left: none;
    border-bottom: none;
    display: flex; /* Используем Flexbox для выравнивания содержимого ячеек */
    align-items: stretch; /* Ячейки растягиваются равномерно */
    justify-content: center; /* Центрируем содержимое по горизонтали */
    min-width: 3.5rem;
    padding: 0.75rem;
    box-sizing: border-box;
  }

  .cell-content {
    display: flex;
    justify-content: center; /* Центрируем содержимое по горизонтали */
    flex-direction: column; /* Расположение элементов друг под другом */
  }

  .data-grid:hover {
    cursor: pointer;
  }

  .row:hover {
    background-color: var(--Xl-head-bg);
  }

  .row:first-child {
    border-left: none;
    border-right: none;
    border-top: none;
  }

  .cell:last-child {
    border-right: none;
  }
</style>
