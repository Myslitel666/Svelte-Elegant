<script lang="ts">
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { onMount, tick } from "svelte";
  import Arrow from "../../icons-elegant/TriangularArrowDown.svelte";
  import TextField from "./TextField.svelte";
  import "$styles/app.css";
  import "../../font.css";

  // Публичные свойства
  export let variant: "Outlined" | "Filled" | "Standard" = "Outlined";
  export let id = ""; /* Уникальный идентификатор элемента */
  export let backgroundColor = ""; /* Цвет заливки */
  export let borderColor = ""; /* Цвет обводки */
  export let isOpen = false; /* Состояние активации AutoComplete */
  export let borderRadius = ""; /* Радиус скругления углов */
  export let options: string[] = []; /* Состояние для передачи списков */
  export let width = ""; /* Ширина поля */

  // Приватные атрибуты
  let autoCompleteRef: HTMLElement;
  let textFieldRef: TextField;
  let filteredOptions: string[] = [];
  let isDropListBottom = true; // Определяет, следует ли отображать список снизу AutoComplete
  let dropListRef: HTMLElement;

  // Флаги для отслеживания, передал ли пользователь значение извне
  let isBackgroundColorFromUser = backgroundColor !== "";
  let isBorderColorFromUser = borderColor !== "";

  //Стили из контекста темы
  let triangleHover = false;

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  //Устанавливаем значения стилей после инициализации темы с проверкой не передавал ли пользователь в компонент свои значения стилей
  if (theme) {
    if (!borderRadius)
      borderRadius =
        variant === "Outlined"
          ? theme.border.borderRadius.default
          : `0 0 ${theme.border.borderRadius.default} ${theme.border.borderRadius.default}`;
    else {
      borderRadius =
        variant === "Outlined"
          ? borderRadius
          : `0 0 ${borderRadius} ${borderRadius}`;
    }
  }

  onMount(() => {
    id ? "" : (id = `auto-complete-${generateIdElement()}`);

    window.addEventListener("resize", updateDropListHeight); // При изменении высоты окна
    updateDropListHeight();
  });

  let dropListHeight: number;

  // Функция для переключения состояния компонента (открыт/закрыт)
  function toggleOpen() {
    isOpen = !isOpen;
    if (isOpen) {
      setDropPosition();
    }
  }

  // Функция, которая будет вызвана при клике вне AutoComplete
  function handleClickOutside(event: MouseEvent) {
    let node = event.target as Node;

    if (autoCompleteRef && !autoCompleteRef.contains(node)) {
      isOpen ? toggleOpen() : "";
      document.removeEventListener("mousedown", handleClickOutside); //Удаляем обработчик из root после утраты фокуса AutoComplete
    }
  }

  async function updateDropListHeight() {
    dropListHeight = window.innerHeight * 0.4;

    //Проверка на возможность помещения drop list'а под AutoComplete
    //await tick(); // Дождаться обновления DOM

    // console.log('window.innerHeight',  window.innerHeight);
    // if (autoCompleteRef) {
    //     let rect = autoCompleteRef.getClientRects();

    //     if (rect.length > 0) {
    //         const bottom = rect[0].bottom;
    //         console.log('autoCompleteRef.bottom',  bottom);
    //         console.log('dropListHeight',  dropListHeight);
    //     }
    // }
  }

  // Функция для определения положения drop-list
  async function setDropPosition() {
    await tick(); // Дождаться обновления DOM

    if (dropListRef) {
      const rect = dropListRef.getClientRects();

      if (rect.length > 0) {
        const bottom = rect[0].bottom;
        const spaceBelow = window.innerHeight - bottom;
        isDropListBottom = spaceBelow > 0;
      }
    }
  }
</script>

<div
  id="{id}-container"
  role="button"
  tabindex="0"
  bind:this={autoCompleteRef}
  class="auto-complete-container"
  style:width
  on:mousedown={() => {
    document.addEventListener("mousedown", handleClickOutside);
  }}
  on:keydown={() => {}}
>
  <TextField
    bind:this={textFieldRef}
    {id}
    onmousedown={() => {
      isOpen ? "" : toggleOpen();
    }}
    label="Auto Complete"
    {variant}
    {...$$props}
  />
  <button
    class="triangle-icon"
    on:mouseover={() => {
      textFieldRef.handleMouseOver();
      triangleHover = !triangleHover;
    }}
    on:mouseout={() => {
      textFieldRef.handleMouseOut();
      triangleHover = !triangleHover;
    }}
    on:mouseup={() => {
      toggleOpen();
    }}
    on:focus={() => {
      textFieldRef.handleFocus();
    }}
    on:blur={() => {}}
    style:width="1.75rem"
    style:height="1.75rem"
    style:border-radius="50%"
    style:right={variant === "Standard" ? "0rem" : "0.53rem"}
    style:transform={isOpen ? "rotate(180deg) translateY(50%)" : ""}
    style:transition="transform var(--Xl-effectsTimeCode)"
    style:background-color={triangleHover
      ? theme?.surface.ghost.background
      : ""}
  >
    <Arrow size="0.88rem" />
  </button>
  <div
    id="drop-list-id"
    class="drop-list {isOpen ? 'open' : ''} {isDropListBottom
      ? 'bottom'
      : 'top'}"
    bind:this={dropListRef}
    style:--Xl-dropListHeight="{dropListHeight}px"
  >
    {#if isOpen}
      <div>I'm Option</div>
    {/if}
  </div>
</div>

<style>
  .auto-complete-container {
    position: relative;
  }

  .triangle-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .drop-list {
    position: absolute;
    width: 100%; /* Или используйте фиксированную ширину, если нужно */
    background-color: #fff;
    border-radius: 6px;
    z-index: 1000; /* Убедитесь, что список отображается поверх других элементов */

    box-sizing: border-box;
  }

  .drop-list.open {
    border: 1px solid #ccc;
    height: var(--Xl-dropListHeight);
  }

  .drop-list.top {
    bottom: 100%; /* Отображение сверху */
  }

  .drop-list.bottom {
    top: 100%; /* Отображение снизу */
  }
</style>
