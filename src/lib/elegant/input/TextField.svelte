<script lang="ts">
  import { EyeClosed, EyeOpened } from "$icons-elegant";
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import { onMount } from "svelte";
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import IconHover from "$elegant/customization/IconHover.svelte";
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
  export let type = ""; /* Тип ввода */
  export let padding = ""; /* Отступ */
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

  let inputElement: HTMLInputElement | null = null;

  let fill = bgColor;
  let xBgColor = "";
  let xBorderColor = "";
  let xBorderColorHover = "";
  let xColor = "";
  let xLabelColor = "";
  let xLabelColorHover = "";

  let theme: any;

  $: xType = inputElement?.type;
  $: {
    if (inputElement) {
      inputElement.disabled = disabled;
      checkOrToggleDisabled();
    }
  }

  function checkOrToggleDisabled() {
    // Устанавливаем значения цветов при смене темы
    if (!bgColor)
      xBgColor =
        variant === "Filled"
          ? theme.surface.filled.background
          : theme.palette.background;
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
          : theme.palette.background;
    xBorderColorHover = borderColorHover || theme?.palette.text.contrast;
    xLabelColor =
      labelColor || variant != "Filled"
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
    if (!height) height = theme.controls.height.small;
    if (!padding) {
      padding = variant === "Standard" ? "0" : theme.padding.balanced;
    }
    if (!paddingTop) paddingTop = variant !== "Outlined" ? "1rem" : "0.15rem";
    if (!width) width = theme.controls.width;
    if (!fontSize) fontSize = theme.typography.fontSize;
  }

  onMount(() => {
    id ? "" : (id = `text-field-${generateIdElement()}`);
  });

  export function handleBlur() {
    const inputElement = document.getElementById(id);
    inputElement?.classList.remove("focused");
  }

  export function handleFocus() {
    const inputElement = document.getElementById(id);
    inputElement?.classList.add("focused");
    inputElement?.focus(); // Перенаправление фокуса на элемент input при вызове данного обработчика из других компонентов
  }

  export function handleMouseOver() {
    const inputElement = document.getElementById(id);
    inputElement?.classList.add("hovered");
  }

  export function handleMouseOut() {
    const inputElement = document.getElementById(id);
    inputElement?.classList.remove("hovered");
  }

  function toggleType() {
    if (inputElement) {
      inputElement.type =
        inputElement.type === "password" ? "text" : "password";
    }
  }
</script>

<div
  class="input-container"
  style:width
  style:--Xl-activeborderWidth={activedborderWidth}
  style:--Xl-background-color={xBgColor}
  style:--Xl-color={primaryColor || theme?.palette.primary}
  style:--Xl-effectsTimeCode={theme?.effectsTimeCode}
  style:--Xl-fill={fill}
>
  <input
    bind:this={inputElement}
    bind:value
    autocomplete="off"
    {id}
    {type}
    {readonly}
    placeholder="fictitious"
    style:border-left={variant !== "Outlined" ? "none" : ""}
    style:border-right={variant !== "Outlined" ? "none" : ""}
    style:border-top={variant !== "Outlined" ? "none" : ""}
    style:border-radius={borderRadius}
    style:font-size={fontSize}
    style:font-width="0.5rem"
    style:min-width={minWidth}
    style:outline="none"
    style:padding-left={padding}
    style:padding-right={paddingRight
      ? paddingRight
      : type === "" || type === "text"
        ? padding
        : type === "password"
          ? variant == "Standard"
            ? `calc(1.15 * (2 * ${theme.padding.min} + 1.45rem))`
            : `calc(0.9 * (2 * ${padding} + 1.45rem))`
          : ""}
    style:padding-top={paddingTop}
    style:width="100%"
    style:--Xl-border-color={xBorderColor}
    style:--Xl-height={height}
    style:--Xl-disabledborderWidth={disabledborderWidth ||
      theme?.border.disabled.width}
    style:--Xl-hoverBorderColor={xBorderColorHover}
    style:--Xl-textColor={xColor}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={handleFocus}
    on:blur={handleBlur}
    {...$$props}
  />
  <label
    for={id}
    style:position="absolute"
    style:margin-left={padding}
    style:background-color={variant === "Filled" ? "transparent" : ""}
    style:--Xl-font-size={fontSize}
    style:--Xl-labelColor={xLabelColor}
    style:--Xl-labelColorHover={xLabelColorHover}
    style:--Xl-liftingHeight={variant === "Outlined"
      ? `${height}/2 + 0.45*var(--Xl-activeborderWidth)`
      : variant === "Standard"
        ? `${height}/2 + 0.65rem`
        : `${height}/2 + 0.82rem`}
  >
    {label}
  </label>
  {#if type == "password" && !disabled}
    <div
      class="eye"
      style:right={variant == "Standard" ? theme.padding.min : padding}
    >
      <IconHover
        onClick={toggleType}
        color={variant === "Filled" ? theme.surface.solid.background : ""}
      >
        {#if xType == "password" || xType == null}
          <EyeOpened />
        {:else if xType == "text"}
          <EyeClosed />
        {/if}
      </IconHover>
    </div>
  {/if}
</div>

<style>
  input {
    background-color: var(--Xl-background-color);
    color: var(--Xl-textColor);
    height: var(--Xl-height);
    border-color: var(--Xl-border-color);
    border-style: solid;
    border-width: var(--Xl-disabledborderWidth);
    transition:
      border-color var(--Xl-effectsTimeCode),
      background-color var(--Xl-effectsTimeCode);
    box-sizing: border-box; /* Включаем border и padding в размеры элемента */
  }

  label {
    background-color: var(--Xl-background-color);
    pointer-events: none; /* Нажатие на label не перекрывает не припятствует активации input */
    font-size: var(--Xl-font-size);
    color: var(--Xl-labelColor);
    transition: var(--Xl-effectsTimeCode);

    /* Перекрытие верхней границы поля */
    height: calc(var(--Xl-activeborderWidth) + 1px);
    display: flex;
    align-items: center;
  }

  .eye {
    position: absolute;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .hovered {
    background-color: var(--Xl-fill);
    border-color: var(--Xl-hoverBorderColor);
  }

  input.hovered + label {
    background-color: var(--Xl-fill);
    color: var(--Xl-labelColorHover);
  }

  input.focused {
    border-color: var(--Xl-color);
    border-width: var(--Xl-activeborderWidth);
  }

  input.focused + label {
    color: var(--Xl-color); /* Изменяем цвет на основной */
  }

  input.focused + label,
  input:not(:placeholder-shown) + label {
    transform: translate(
      -0.26rem,
      calc(-1 * var(--Xl-liftingHeight))
    ); /* Сдвигаем метку влево и вверх */
    font-size: 13px; /* Уменьшаем размер шрифта */
    background-color: var(--Xl-background-color);
    padding: 0 0.26rem 0 0.26rem;
    transition: all var(--Xl-effectsTimeCode);
  }

  input.focused,
  input:not(:placeholder-shown) {
    background-color: var(--Xl-background-color);
  }

  input::placeholder {
    opacity: 0;
  }
</style>
