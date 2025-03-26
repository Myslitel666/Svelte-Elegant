<script lang="ts">
  //Контекст темы
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import "$styles/app.css";
  import "../../font.css";

  export let borderColor = "";
  export let borderRadius = "";
  export let borderWidth = "";
  export let contentHeight = "";
  export let contentMinHeight = "2.5rem";
  export let flexDirection = "column";
  export let gap = "0.22rem";
  export let headerPadding = "";
  export let titleHeight = "";
  export let padding = "";
  export let title = "Your Box Title";
  export let width = "20rem";

  let theme: any;

  let borderRadiusFromUser = borderRadius !== "";
  let paddingFromUser = padding !== "";
  let headerPaddingFromUser = padding !== "";

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; // Инициализация объекта темы

    // Устанавливаем значения свойтсв при смене темы, если они не были заданы пользователем
    borderRadius = borderRadiusFromUser
      ? borderRadius
      : theme.border.borderRadius.extra;
    padding = paddingFromUser ? padding : theme.padding.default;
    headerPadding = headerPaddingFromUser
      ? headerPadding
      : theme.padding.default;
  });
</script>

<div
  class="box-container border"
  style:width
  style:--Xl-border-color={borderColor || theme?.border.disabled.color}
  style:--Xl-borderWidth={borderWidth || theme?.border.disabled.width}
  style:border-radius={borderRadius}
  style:transition={`all ${theme?.effectsTimeCode}`}
>
  <div
    class="title border"
    style:align-items="center"
    style:height={titleHeight}
    style:border-top="none"
    style:border-left="none"
    style:border-right="none"
    style:display="flex"
    style:justify-content="center"
    style:padding={headerPadding}
    style:transition={`all ${theme?.effectsTimeCode}`}
  >
    <p style:color={theme?.palette.primary} style:font-weight="600">
      {title}
    </p>
  </div>
  <div
    class="content"
    style:color={theme.palette.text.contrast}
    style:display="flex"
    style:flex-direction={flexDirection}
    style:gap
    style:background-color={theme?.surface.ghost.background}
    style:box-sizing="border-box"
    style:border-radius={`0 0 ${borderRadius} ${borderRadius}`}
    style:height={contentHeight}
    style:min-height={contentMinHeight}
    style:padding
    style:transition={`all ${theme?.effectsTimeCode}`}
  >
    <slot />
  </div>
</div>

<style>
  .border {
    border-color: var(--Xl-border-color);
    border-style: solid;
    border-width: var(--Xl-borderWidth);
    box-sizing: border-box;
  }
</style>
