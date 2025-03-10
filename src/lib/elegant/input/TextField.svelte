<script lang="ts">
  import * as shared from "$shared";
  import { generateIdElement } from "$stores/ElementIdStore.js";
  import { onMount } from "svelte";
  import { valueExtractors as extractors } from "$utils/valueExtractors.js";

  // Свойства для управления CSS-стилями
  export let id = ""; /* Уникальный идентификатор элемента */
  export let variant: "Outlined" | "Filled" | "Standard" = "Outlined";
  export let value = ""; /* Значение поля */
  export let activedborderWidth = ""; /* Толщина обводки в активном состоянии */
  export let backgroundColor = ""; /* Цвет заливки */
  export let borderColor = ""; /* Цвет обводки */
  export let borderRadius = ""; /* Радиус скругления углов */
  export let disabledborderWidth =
    ""; /* Толщина обводки в неактивном состоянии */
  export let fontSize = ""; /* Размер шрифта */
  export let height = ""; /* Высота поля */
  export let label = "Text Field"; /* Надпись */
  export let labelColor = ""; /* Цвет надписи */
  export let minWidth = ""; /* Минимальная ширина поля */
  export let padding = ""; /* Отступ */
  export let paddingTop = ""; /* Отступ от верхней границы */
  export let primaryColor = ""; /* Основной цвет */
  export let textColor = ""; /* Цвет текста */
  export let width = ""; /* Ширина поля */

  // Флаги для отслеживания, передал ли пользователь значение извне
  let isBackgroundColorFromUser = backgroundColor !== "";
  let isBorderColorFromUser = borderColor !== "";

  //Стили из контекста темы
  let fill = backgroundColor;

  let theme: shared.IColorThemeStore | undefined;

  // Подписываемся на изменения темы
  shared.themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    // Устанавливаем значения цветов при смене темы
    if (!isBackgroundColorFromUser)
      backgroundColor =
        variant === "Filled"
          ? theme.surface.filled.background
          : theme.palette.background;
    if (!isBorderColorFromUser)
      borderColor =
        variant === "Filled"
          ? theme.border.active.color
          : theme.border.focused.color;
    if (!isBackgroundColorFromUser)
      fill =
        variant === "Filled"
          ? theme.surface.solid.background
          : theme.palette.background;
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
    if (!height) height = theme.controls.height;
    if (!padding)
      padding = variant === "Standard" ? "0" : theme.padding.balanced;
    if (!paddingTop) paddingTop = variant !== "Outlined" ? "1rem" : "0";
    if (!width) width = theme.controls.width;
    if (!fontSize) fontSize = theme.typography.fontSize;
  }

  onMount(() => {
    id ? "" : (id = `text-field-${generateIdElement()}`);
  });

  export function handleBlur() {
    const inputElement = extractors.getElementById(id);
    inputElement.classList.remove("focused");
  }

  export function handleFocus() {
    const inputElement = extractors.getElementById(id);
    inputElement.classList.add("focused");
    inputElement.focus(); // Перенаправление фокуса на элемент input при вызове данного обработчика из других компонентов
  }

  export function handleMouseOver() {
    const inputElement = extractors.getElementById(id);
    inputElement.classList.add("hovered");
  }

  export function handleMouseOut() {
    const inputElement = extractors.getElementById(id);
    inputElement.classList.remove("hovered");
  }
</script>

<div
  role="button"
  tabindex="0"
  class="input-container"
  style:width
  style:--Xl-activeborderWidth={activedborderWidth}
  style:--Xl-background-color={backgroundColor}
  style:--Xl-effectsTimeCode={theme?.effectsTimeCode}
  style:--Xl-fill={fill}
>
  <input
    bind:value
    autocomplete="off"
    {id}
    placeholder="fictitious"
    type="text"
    style:border-left={variant !== "Outlined" ? "none" : ""}
    style:border-right={variant !== "Outlined" ? "none" : ""}
    style:border-top={variant !== "Outlined" ? "none" : ""}
    style:border-radius={borderRadius}
    style:font-size={fontSize}
    style:font-width="0.5rem"
    style:min-width={minWidth}
    style:outline="none"
    style:padding-left={padding}
    style:padding-right={padding}
    style:padding-top={paddingTop}
    style:width="100%"
    style:--Xl-border-color={borderColor}
    style:--Xl-color={primaryColor || theme?.palette.primary}
    style:--Xl-height={height}
    style:--Xl-disabledborderWidth={disabledborderWidth ||
      theme?.border.disabled.width}
    style:--Xl-hoverBorderColor={textColor || theme?.palette.text.contrast}
    style:--Xl-textColor={textColor || theme?.palette.text.contrast}
    {...$$props}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={handleFocus}
    on:blur={handleBlur}
  />
  <label
    for={id}
    style:position="absolute"
    style:margin-left={padding}
    style:background-color={variant === "Filled" ? "transparent" : ""}
    style:--Xl-color={primaryColor}
    style:--Xl-font-size={fontSize}
    style:--Xl-labelColor={labelColor || theme?.palette.text.label}
    style:--Xl-liftingHeight={variant === "Outlined"
      ? `${height}/2 + 0.45*var(--Xl-activeborderWidth)`
      : variant === "Standard"
        ? `${height}/2 + 0.65rem`
        : `${height}/2 + 0.82rem`}
  >
    {label}
  </label>
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

  .input-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .hovered {
    background-color: var(--Xl-fill);
    border-color: var(--Xl-hoverBorderColor);
  }

  input.hovered + label {
    background-color: var(--Xl-fill);
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
