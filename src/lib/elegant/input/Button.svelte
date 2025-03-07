<script lang="ts">
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { themeStore } from "$lib/stores/ColorThemeStore.js";
  import { onMount } from "svelte";

  export let variant = "Contained"; /* Тип кнопки */
  export let id = ""; /* Уникальный идентификатор элемента */
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
    if (!isPrimaryColorFromUser) primaryColor = theme.palette.primary;
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
</script>

<div class="input-container" style:width={width || theme?.controls.width}>
  <button
    {id}
    placeholder=""
    style:border={variant === "Outlined" ? `1px solid ${primaryColor}` : "none"}
    style:border-color={borderColor}
    style:border-radius={borderRadius || theme?.border.borderRadius.default}
    style:box-shadow={boxShadow}
    style:font-size={fontSize || theme?.typography.fontSize}
    style:min-width={minWidth}
    style:width="100%"
    style:--Xl-color={variant === "Contained" ? primaryColor : ""}
    style:--Xl-effectsTimeCode={theme?.effectsTimeCode}
    style:--Xl-height={height || theme?.controls.height}
    style:--Xl-hoverBorderColor={textColor}
    style:--Xl-textColor={textColor}
    style:--Xl-filter={filter}
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
    background-color: var(--Xl-color);
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
    cursor: pointer;
    filter: var(--Xl-filter);
  }
</style>
