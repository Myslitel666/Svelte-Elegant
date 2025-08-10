<script lang="ts">
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { onMount } from "svelte";
  import { createTouchEffects, hexToRgba } from "$lib/utils/setHoverColor";
  import { isMobile } from "$lib/utils/isMobile.js";
  import "$styles/app.css";
  import "../../font.css";

  export let id = ""; /* Уникальный идентификатор элемента */
  export let bgColor = ""; /* Основной цвет */
  export let bgColorHover = ""; /* Основной цвет */
  export let borderColor = ""; /* Цвет обводки */
  export let borderRadius = ""; /* Радиус скругления углов */
  export let boxShadow = ""; /* Тень */
  export let color = ""; /* Цвет текста */
  export let disabled: boolean = false;
  export let filter = "";
  export let fontSize = ""; /* Размер шрифта */
  export let height = ""; /* Высота поля */
  export let isPrimary = true;
  export let marginBottom = "";
  export let marginLeft = "";
  export let marginRight = "";
  export let marginTop = "";
  export let maxWidth = "";
  export let minWidth = ""; /* Минимальная ширина */
  export let onClick = () => {};
  export let padding = "";
  export let variant: "Contained" | "Outlined" | "Text" =
    "Contained"; /* Тип кнопки */
  export let width = ""; /* Ширина кнопки */

  // Флаги для отслеживания, передал ли пользователь значение извне
  let isTextColorFromUser = color !== "";

  let buttonElement: HTMLButtonElement | null = null;
  let filterHover = "";
  let handleTouchStart: (e: Event) => void;
  let handleTouchEnd: (e: Event) => void;
  let theme: any;
  let xBgColor = "";
  let xBgColorHover = "";
  let xBorderColor = "";
  let xFilter = "";
  let xHeight = "";
  let xPadding = "";
  let xWidth = "";

  $: {
    // Индикаторы, отслеживающие изменения свойств. Если удалить, ререндеринга в пагинации не будет (когда присваиваются не переменные, а, например, результаты сравнения)
    let isPrimaryIndicator = isPrimary;
    let varinatIndicator = variant;

    if (buttonElement) {
      buttonElement.disabled = disabled;
      checkOrToggleDisabled();
    }
  }

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    checkOrToggleDisabled();

    const hoverStyles = [
      { "--Xl-bgColor": xBgColorHover },
      { "--Xl-filter": filterHover },
    ];
    const resetStyles = [{ "--Xl-bgColor": xBgColor }, { "--Xl-filter": "" }];
    ({ handleTouchStart, handleTouchEnd } = createTouchEffects(
      hoverStyles,
      resetStyles
    ));
  });

  function dropFilter() {
    filterHover = ""; //Фильтр, который применяется при :hover
    xFilter = ""; //Фильтр, который применяется на постоянной основе, и изменяется при кликах
  }

  function checkOrToggleDisabled() {
    // Сброс перед вычислением
    xBgColor = "";
    xBgColorHover = "";
    dropFilter();

    // Устанавливаем значения цветов при смене темы
    if (!bgColor) {
      if (variant == "Contained") {
        xBgColor = isPrimary
          ? theme.palette.primary
          : theme.surface.ghost.background;
      }
    } else {
      xBgColor = bgColor;
    }

    if (disabled)
      xBgColor = variant == "Contained" ? theme.surface.ghost.background : "";

    xFilter = filter; //Чтобы не потерять prop filter при обнулении xFilter
    if (!bgColorHover && !filter) {
      if (variant == "Contained") {
        xBgColorHover = isPrimary
          ? xBgColor
          : theme.surface.underSolid.background;
        filterHover = isPrimary ? theme.controls.button.filter : "";
      } else {
        if (isPrimary) {
          xBgColorHover = hexToRgba(
            theme.palette.primary,
            theme.controls.kOpacity
          );
        } else {
          xBgColorHover = theme.surface.filled.background;
        }
      }
    } else if (bgColorHover && !filter) {
      xBgColorHover = bgColorHover;
      filterHover = "";
    } else if (!bgColorHover && filter) {
      xBgColorHover = xBgColor;
      if (variant == "Contained") {
        filterHover = filter; //Фильтр, который применяется при :hover
        xFilter = ""; //Фильтр, который применяется на постоянной основе, и изменяется при кликах
      }
    } else {
      xBgColorHover = bgColorHover;
      if (variant == "Contained") {
        dropFilter();
      }
    }

    if (!isTextColorFromUser) {
      if (variant == "Contained") {
        color = isPrimary
          ? theme.palette.text.contrast
          : theme.palette.text.main;
      } else {
        color = isPrimary ? theme.palette.primary : theme.palette.text.main;
      }
    }

    if (!borderColor) {
      if (variant == "Outlined") {
        xBorderColor = isPrimary
          ? theme.palette.primary
          : theme.border.focused.color;
      }
    } else {
      xBorderColor = borderColor;
    }

    if (disabled) {
      color =
        variant === "Contained"
          ? theme.palette.text.disabledContrast
          : theme.palette.text.disabled;
      xBorderColor = variant === "Outlined" ? theme.border.elegant.color : "";
      xBgColorHover = xBgColor;
      dropFilter();
    }
  }

  if (variant != "Text") {
    xHeight = height || theme?.controls.height.small;
    xWidth = width || theme?.controls.width;
    xPadding = "";
  } else {
    xHeight = height || "2.25rem";
    xWidth = "auto";
    xPadding = padding || "0.7rem";
  }

  onMount(() => {
    id ? "" : (id = `button-${generateIdElement()}`);
  });
</script>

<div
  class="input-container"
  style:height={xHeight}
  style:margin-left={marginLeft}
  style:margin-right={marginRight}
  style:margin-top={marginTop}
  style:margin-bottom={marginBottom}
  style:max-width={maxWidth}
  style:width={xWidth}
>
  <button
    bind:this={buttonElement}
    {id}
    {disabled}
    placeholder=""
    style:border={variant === "Outlined" ? `1px solid ${xBgColor}` : "none"}
    style:border-color={xBorderColor}
    style:border-radius={borderRadius || theme?.border.borderRadius.default}
    style:box-shadow={boxShadow}
    style:font-size={fontSize || theme?.typography.fontSize}
    style:height="100%"
    style:min-width={minWidth}
    style:padding-left={xPadding}
    style:padding-right={xPadding}
    style:width="100%"
    style:--Xl-bgColor={variant === "Contained" ? xBgColor : ""}
    style:--Xl-bgColorHover={xBgColorHover}
    style:--Xl-effectsTimeCode={theme?.effectsTimeCode}
    style:--Xl-height={height || theme?.controls.height.small}
    style:--Xl-hoverBorderColor={color}
    style:--Xl-color={color}
    style:--Xl-filter={xFilter}
    style:--Xl-filterHover={filterHover}
    on:click={() => {
      if (!isMobile() && !disabled) {
        onClick();
      }
    }}
    on:touchend={(e: Event) => {
      if (!disabled) {
        handleTouchEnd(e);
        onClick();
      }
    }}
    on:touchstart={(e: Event) => {
      if (!disabled) {
        handleTouchStart(e);
      }
    }}
    {...$$props}
  >
    <div class="content" style:pointer-events="none" style:color>
      <slot></slot>
    </div>
    <!-- Слот для содержимого кнопки -->
  </button>
</div>

<style>
  button {
    color: var(--Xl-color);
    background-color: var(--Xl-bgColor);
    filter: var(--Xl-filter);
    transition: all var(--Xl-effectsTimeCode);
  }

  button:disabled {
    cursor: default;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all var(--Xl-effectsTimeCode);
  }

  @media (hover: hover) {
    button:hover {
      background-color: var(--Xl-bgColorHover);
      filter: var(--Xl-filterHover);
    }
  }
</style>
