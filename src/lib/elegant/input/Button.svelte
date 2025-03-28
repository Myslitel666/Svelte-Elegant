<script lang="ts">
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { onMount } from "svelte";
  import { createTouchEffects } from "$lib/utils/setHoverColor";
  import { isMobile } from "$lib/utils/isMobile.js";
  import "$styles/app.css";
  import "../../font.css";

  export let id = ""; /* Уникальный идентификатор элемента */
  export let bgColor = ""; /* Основной цвет */
  export let bgColorHover = ""; /* Основной цвет */
  export let borderColor = ""; /* Цвет обводки */
  export let borderRadius = ""; /* Радиус скругления углов */
  export let boxShadow = ""; /* Тень */
  export let color = "";
  export let filter = "";
  export let fontSize = ""; /* Размер шрифта */
  export let height = ""; /* Высота поля */
  export let isPrimary = true;
  export let marginBottom = "";
  export let marginLeft = "";
  export let marginRight = "";
  export let marginTop = "";
  export let minWidth = ""; /* Минимальная ширина */
  export let onClick = () => {};
  export let textColor = ""; /* Цвет текста */
  export let variant = "Contained"; /* Тип кнопки */
  export let width = ""; /* Ширина кнопки */

  // Флаги для отслеживания, передал ли пользователь значение извне
  let isTextColorFromUser = textColor !== "";
  let isBgColorFromUser = bgColor !== "";
  let isBgColorHoverFromUser = bgColorHover !== "";
  let isFilterFromUser = filter !== "";

  let theme: any;
  let xFilter = "";

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    // Устанавливаем значения цветов при смене темы
    if (!isBgColorFromUser) {
      bgColor = isPrimary
        ? theme.palette.primary
        : theme.surface.ghost.background;
    }
    if (!isBgColorHoverFromUser) {
      bgColorHover = isPrimary ? bgColor : theme.surface.underSolid.background;
    }
    if (!isFilterFromUser) {
      xFilter = isPrimary ? theme.controls.button.filter : "";
    } else {
      xFilter = filter;
    }
    if (!isTextColorFromUser) {
      if (variant == "Contained") {
        if (isPrimary) textColor = theme.palette.text.contrast;
        else textColor = theme.palette.text.main;
      } else {
        textColor = theme.palette.primary;
      }
    }
  });

  onMount(() => {
    id ? "" : (id = `button-${generateIdElement()}`);
  });

  const hoverStyles = [
    { "--Xl-bgColor": bgColorHover },
    { "--Xl-filter": xFilter },
  ];
  const resetStyles = [{ "--Xl-bgColor": bgColor }, { "--Xl-filter": "" }];
  const { handleTouchStart, handleTouchEnd } = createTouchEffects(
    hoverStyles,
    resetStyles
  );
</script>

<div
  class="input-container"
  style:margin-left={marginLeft}
  style:margin-right={marginRight}
  style:margin-top={marginTop}
  style:margin-bottom={marginBottom}
  style:width={width || theme?.controls.width}
  style:height={height || theme?.controls.height.small}
>
  <button
    {id}
    placeholder=""
    style:border={variant === "Outlined" ? `1px solid ${bgColor}` : "none"}
    style:border-color={borderColor}
    style:border-radius={borderRadius || theme?.border.borderRadius.default}
    style:box-shadow={boxShadow}
    style:color
    style:height="100%"
    style:font-size={fontSize || theme?.typography.fontSize}
    style:min-width={minWidth}
    style:width="100%"
    style:--Xl-bgColor={variant === "Contained" ? bgColor : ""}
    style:--Xl-bgColorHover={bgColorHover}
    style:--Xl-effectsTimeCode={theme?.effectsTimeCode}
    style:--Xl-height={height || theme?.controls.height.small}
    style:--Xl-hoverBorderColor={textColor}
    style:--Xl-textColor={textColor}
    style:--Xl-filter={filter}
    style:--Xl-filterHover={xFilter}
    on:click={() => {
      if (!isMobile()) {
        onClick();
      }
    }}
    on:touchend={(e: Event) => {
      handleTouchEnd(e);
      onClick();
    }}
    on:touchstart={(e: Event) => {
      handleTouchStart(e);
    }}
    {...$$props}
  >
    <div class="content" style:pointer-events="none">
      <slot></slot>
    </div>
    <!-- Слот для содержимого кнопки -->
  </button>
</div>

<style>
  button {
    color: var(--Xl-textColor);
    background-color: var(--Xl-bgColor);
    filter: var(--Xl-filter);
    transition:
      outline-color var(--Xl-effectsTimeCode),
      background-color var(--Xl-effectsTimeCode),
      filter var(--Xl-effectsTimeCode);
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (hover: hover) {
    button:hover {
      background-color: var(--Xl-bgColorHover);
      filter: var(--Xl-filterHover);
    }
  }
</style>
