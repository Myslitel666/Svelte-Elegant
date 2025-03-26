<script lang="ts">
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { onMount } from "svelte";
  import { setHoverColor } from "$lib/utils/setHoverColor";

  export let variant = "Contained"; /* Тип кнопки */
  export let id = ""; /* Уникальный идентификатор элемента */
  export let isPrimary = true;
  export let borderColor = ""; /* Цвет обводки */
  export let borderRadius = ""; /* Радиус скругления углов */
  export let boxShadow = ""; /* Тень */
  export let fontSize = ""; /* Размер шрифта */
  export let height = ""; /* Высота поля */
  export let minWidth = ""; /* Минимальная ширина */
  export let primaryColor = ""; /* Основной цвет */
  export let textColor = ""; /* Цвет текста */
  export let width = ""; /* Ширина кнопки */

  // Флаги для отслеживания, передал ли пользователь значение извне
  let isTextColorFromUser = textColor !== "";
  let isPrimaryColorFromUser = primaryColor !== "";

  let filter = "";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    // Устанавливаем значения цветов при смене темы
    if (!isPrimaryColorFromUser) {
      primaryColor = isPrimary
        ? theme.palette.primary
        : theme.surface.ghost.background;
    }
    if (!isTextColorFromUser)
      textColor =
        variant === "Contained"
          ? theme.palette.text.contrast
          : theme.palette.primary;

    filter = theme.controls.button.filter;
  });

  onMount(() => {
    id ? "" : (id = `button-${generateIdElement()}`);
  });

  function handleTouchEnd(e: Event) {
    setTimeout(() => {
      setHoverColor(e, "--Xl-bgColorHover", "var(--Xl-bgColor)");
      setHoverColor(e, "--Xl-filter", "");
    }, 201);
  }

  function handleTouchStart(e: Event) {
    setHoverColor(e, "--Xl-bgColorHover", theme.surface.underSolid.background);
    setHoverColor(
      e,
      "--Xl-filter",
      isPrimary ? theme.controls.button.filter : ""
    );
  }
</script>

<div class="input-container" style:width={width || theme?.controls.width}>
  <button
    {id}
    placeholder=""
    style:background-color={isPrimary ? "var(--Xl-bgColor)" : ""}
    style:border={variant === "Outlined" ? `1px solid ${primaryColor}` : "none"}
    style:border-color={borderColor}
    style:border-radius={borderRadius || theme?.border.borderRadius.default}
    style:box-shadow={boxShadow}
    style:font-size={fontSize || theme?.typography.fontSize}
    style:min-width={minWidth}
    style:width="100%"
    style:--Xl-bgColor={variant === "Contained" ? primaryColor : ""}
    style:--Xl-effectsTimeCode={theme?.effectsTimeCode}
    style:--Xl-height={height || theme?.controls.height.small}
    style:--Xl-bgColorHover={theme?.surface.underSolid.background}
    style:--Xl-hoverBorderColor={textColor}
    style:--Xl-textColor={textColor}
    style:--Xl-filter={isPrimary ? filter : ""}
    on:touchend={(e: Event) => {
      handleTouchEnd(e);
    }}
    on:touchstart={(e: Event) => {
      handleTouchStart(e);
    }}
    {...$$props}
  >
    <slot></slot>
    <!-- Слот для содержимого кнопки -->
  </button>
</div>

<style>
  button {
    height: var(--Xl-height);
    color: var(--Xl-textColor);
    background-color: var(--Xl-bgColor);
    transition:
      outline-color var(--Xl-effectsTimeCode),
      background-color var(--Xl-effectsTimeCode),
      filter var(--Xl-effectsTimeCode);
  }

  .input-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  button:hover {
    background-color: var(--Xl-bgColorHover);
    filter: var(--Xl-filter);
  }
</style>
