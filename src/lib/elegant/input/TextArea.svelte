<script lang="ts">
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { onMount, tick } from "svelte";
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { isMobile } from "$lib/utils/isMobile.js";
  import "$styles/app.css";
  import "../../font.css";

  // Свойства для управления CSS-стилями
  export let activedborderWidth = ""; /* Толщина обводки в активном состоянии */
  export let bgColor = ""; /* Цвет заливки */
  export let borderColor = ""; /* Цвет обводки */
  export let borderRadius = ""; /* Радиус скругления углов */
  export let disabled: boolean = false;
  export let disabledborderWidth =
    ""; /* Толщина обводки в неактивном состоянии */
  export let fontSize = ""; /* Размер шрифта */
  export let height = ""; /* Высота поля */
  export let borderColorHover = "";
  export let id: string | null = null; /* Уникальный идентификатор элемента */
  export let label = "Text Field"; /* Надпись */
  export let labelColor = ""; /* Цвет надписи */
  export let labelColorHover = "";
  export let minWidth = ""; /* Минимальная ширина поля */
  export let padding = ""; /* Отступ */
  export let paddingBottom = "";
  export let paddingTop = ""; /* Отступ от верхней границы */
  export let paddingRight = "";
  export let primaryColor = ""; /* Основной цвет */
  export let readonly = false;
  export let color = ""; /* Цвет текста */
  export let variant: "Outlined" | "Filled" | "Standard" = "Outlined";
  export let value = ""; /* Значение поля */
  export let width = ""; /* Ширина поля */

  // Добавляем публичный метод focus
  export function focus() {
    inputElement?.focus();
  }

  let inputElement: HTMLTextAreaElement | null = null;

  let fill = bgColor;
  let isHovered = false;
  let isInitialized = false;
  let xBgColor = "";
  let xBorderColor = "";
  let xBorderColorHover = "";
  let xColor = "";
  let xLabelColor = "";
  let xLabelColorHover = "";
  let xPadding = "";
  let xPaddingBottom = "";
  let xPaddingTop = "";

  let theme: any;

  $: isFocused = inputElement && document.activeElement === inputElement; //Реактивное обновление фокуса (если пользователь активировал поле до ререндеринга)
  $: {
    if (inputElement) {
      inputElement.disabled = disabled;
      checkOrToggleDisabled();
    }
  }

  if (paddingBottom) {
    xPaddingBottom = paddingBottom;
  } else {
    xPaddingBottom = variant === "Outlined" ? "0.17rem" : "";
  }

  $: if (paddingTop) {
    xPaddingTop = paddingTop;
  } else {
    xPaddingTop =
      variant === "Outlined"
        ? "0.15rem"
        : variant === "Standard"
          ? "0.9rem"
          : "0.909rem";
  }

  function checkOrToggleDisabled() {
    // Устанавливаем значения цветов при смене темы
    if (!bgColor)
      xBgColor =
        variant === "Filled"
          ? theme.surface.filled.background
          : variant === "Outlined"
            ? theme.palette.background
            : "";
    else {
      xBgColor = bgColor;
    }
    if (!borderColor) {
      xBorderColor =
        variant === "Filled"
          ? theme.border.active.color
          : theme.border.focused.color;
    } else {
      xBorderColor = borderColor;
    }
    if (!bgColor)
      fill =
        variant === "Filled"
          ? theme.surface.solid.background
          : variant === "Outlined"
            ? theme.palette.background
            : "transparent";
    xBorderColorHover = borderColorHover || theme?.palette.text.contrast;
    xLabelColor = labelColor
      ? labelColor
      : variant != "Filled"
        ? theme?.palette.text.label
        : theme?.palette.text.labelBalanced;
    xLabelColorHover = labelColorHover || theme?.palette.text.labelContrast;
    xColor = color || theme?.palette.text.contrast;

    if (disabled) {
      fill = variant === "Filled" ? theme.surface.ghost.background : "";
      xBgColor =
        variant === "Filled"
          ? theme.surface.ghost.background
          : theme.palette.background;
      xBorderColor =
        variant == "Filled"
          ? theme.border.disabled.color
          : theme.border.elegant.color;
      xBorderColorHover = xBorderColor;
      xColor = theme.palette.text.label;
      xLabelColor = theme.palette.text.disabled;
      xLabelColorHover = xLabelColor;
    }
  }

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
    checkOrToggleDisabled();
  });

  //Устанавливаем значения стилей после инициализации темы с проверкой не передавал ли пользователь в компонент свои значения стилей
  if (theme) {
    if (!activedborderWidth) activedborderWidth = theme.border.active.width;
    if (!borderRadius) {
      borderRadius =
        variant === "Outlined"
          ? theme.border.borderRadius.default
          : `${theme.border.borderRadius.default} ${theme.border.borderRadius.default} 0 0`;
    } else {
      borderRadius =
        variant === "Outlined"
          ? borderRadius
          : `${borderRadius} ${borderRadius} 0 0`;
    }
    if (!height) height = "7.5rem";
    if (!padding) {
      xPadding = variant === "Standard" ? "0" : theme.padding.balanced;
    }
    if (!width) width = theme.controls.width;
    if (!fontSize) fontSize = theme.typography.fontSize;
  }

  onMount(() => {
    id ? "" : (id = `text-field-${generateIdElement()}`);

    tick(); // Ждём завершения первоначального рендеринга
    if (inputElement) {
      // Проверяем hover сразу после монтирования
      isHovered = inputElement.matches(":hover");
    }

    isInitialized = true;
  });

  export function handleBlur() {
    isFocused = false;
    //const inputElement = document.getElementById(id);
    //inputElement?.classList.remove("focused");
  }

  export function handleFocus() {
    isFocused = true;
    //const inputElement = document.getElementById(id);
    //inputElement?.classList.add("focused");
    //inputElement?.focus(); // Перенаправление фокуса на элемент input при вызове данного обработчика из других компонентов
  }

  export function handleMouseOver() {
    if (!isMobile()) isHovered = true;
  }

  export function handleMouseOut() {
    isHovered = false;
  }
</script>

<div
  class="input-container"
  class:focused={isFocused}
  class:hovered={isHovered}
  style:border="none"
  style:border-radius={borderRadius}
  style:height
  style:position="relative"
  style:width
  style:--Xl-activeborderWidth={activedborderWidth}
  style:--Xl-background-color={xBgColor}
  style:--Xl-border-color={xBorderColor}
  style:--Xl-color={primaryColor || theme?.palette.primary}
  style:--Xl-disabledborderWidth={disabledborderWidth ||
    theme?.border.disabled.width}
  style:--Xl-effectsTimeCode={theme?.effectsTimeCode}
  style:--Xl-fill={fill}
  style:--Xl-label-fill={variant === "Outlined" ? fill : ""}
  style:--Xl-height={height}
  style:--Xl-hoverBorderColor={xBorderColorHover}
  on:focus={handleFocus}
>
  <textarea
    class:has-value={value}
    bind:this={inputElement}
    bind:value
    autocomplete="off"
    {id}
    {readonly}
    placeholder="fictitious"
    style:border="none"
    style:font-size={fontSize}
    style:font-width="0.5rem"
    style:margin-top={variant === "Filled" ? "0.9rem" : ""}
    style:min-width={minWidth}
    style:outline="none"
    style:padding-bottom={xPaddingBottom}
    style:padding-left={xPadding}
    style:padding-right={paddingRight ? paddingRight : xPadding}
    style:padding-top={xPaddingTop}
    style:position="absolute"
    style:width="100%"
    style:--Xl-textColor={xColor}
    on:click={focus}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={handleFocus}
    on:blur={handleBlur}
    {...$$props}
  >
  </textarea>
  <div
    class="input-border"
    style:position="absolute"
    style:border-left={variant !== "Outlined" ? "none" : ""}
    style:border-right={variant !== "Outlined" ? "none" : ""}
    style:border-top={variant !== "Outlined" ? "none" : ""}
    style:border-radius={borderRadius}
  ></div>
  <label
    for={id}
    style:position="absolute"
    style:margin-left={xPadding}
    style:margin-top={variant === "Outlined"
      ? `1.12rem`
      : variant === "Standard"
        ? `2rem`
        : `1.25rem`}
    style:top="0"
    style:--Xl-font-size={fontSize}
    style:--Xl-labelColor={xLabelColor}
    style:--Xl-labelColorHover={xLabelColorHover}
    style:--Xl-liftingHeight={variant === "Outlined"
      ? `1.17rem`
      : variant === "Standard"
        ? `2rem`
        : `0.6rem`}
  >
    {label}
  </label>
</div>

<style>
  textarea {
    resize: none;
    background-color: transparent;
    color: var(--Xl-textColor);
    height: calc(var(--Xl-height) - 1.25rem);
    box-sizing: border-box; /* Включаем border и padding в размеры элемента */
  }

  label {
    background-color: var(--Xl-label-fill);
    pointer-events: none; /* Нажатие на label не перекрывает не припятствует активации input */
    font-size: var(--Xl-font-size);
    color: var(--Xl-labelColor);
    transition: var(--Xl-effectsTimeCode);

    /* Перекрытие верхней границы поля */
    height: calc(var(--Xl-activeborderWidth) + 0.75px);
    display: flex;
    align-items: center;
  }

  .input-border {
    height: 100%;
    width: 100%;
    background-color: transparent;
    pointer-events: none;

    border-color: var(--Xl-border-color);
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box; /* Включаем border и padding в размеры элемента */

    transition:
      border-color var(--Xl-effectsTimeCode),
      background-color var(--Xl-effectsTimeCode);
  }

  .input-container {
    background-color: var(--Xl-background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    transition:
      border-color var(--Xl-effectsTimeCode),
      background-color var(--Xl-effectsTimeCode);
  }

  .input-container.hovered {
    background-color: var(--Xl-fill);
  }

  .hovered .input-border {
    border-color: var(--Xl-hoverBorderColor);
  }

  .input-container.hovered label {
    background-color: var(--Xl-label-fill);
    color: var(--Xl-labelColorHover);
  }

  .input-container.focused label {
    background-color: var(--Xl-label-fill);
  }

  .input-container.focused .input-border {
    border-color: var(--Xl-color);
    border-width: 2px;
  }

  .input-container:hover label {
    background-color: var(--Xl-label-fill);
    color: var(--Xl-labelColorHover);
  }

  .input-container.focused label {
    color: var(--Xl-color); /* Изменяем цвет на основной */
  }

  .input-container.focused label {
    color: var(--Xl-color); /* Изменяем цвет на основной */
  }

  .input-container.focused label,
  .input-container:has(textarea.has-value) label {
    transform: translate(
      -0.26rem,
      calc(-1 * var(--Xl-liftingHeight))
    ); /* Сдвигаем метку влево и вверх */
    font-size: 13px; /* Уменьшаем размер шрифта */
    padding: 0 0.26rem 0 0.26rem;
    transition: all var(--Xl-effectsTimeCode);
  }

  .input-container.focused,
  .input-container:has(textarea:not(:placeholder-shown)) {
    background-color: var(--Xl-background-color);
  }

  textarea::placeholder {
    opacity: 0;
  }
</style>
