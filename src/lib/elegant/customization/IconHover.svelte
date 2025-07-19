<script lang="ts">
  import { themeStore } from "$lib/stores";
  import { isMobile } from "$lib/utils/isMobile.js";
  import { createTouchEffects } from "$lib/utils/setHoverColor";
  import "$styles/app.css";
  import "../../font.css";

  export let bgColor = ""; /* Основной цвет */
  export let height = "";
  export let marginRight = "";
  export let marginTop = "";
  export let padding = "0.25rem";
  export let right = "";
  export let width = "";

  export let onClick = () => {};

  let theme: any;

  let isBgColorFromUser = bgColor !== "";

  let handleTouchStart: (e: Event) => void;
  let handleTouchEnd: (e: Event) => void;
  let hoverStyles: { [key: string]: string }[] = [];
  let resetStyles: { [key: string]: string }[] = [];

  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    if (!isBgColorFromUser) {
      bgColor = theme.icon.color.hover;
    }

    hoverStyles = [{ "--Xl-icon-bg-color": bgColor }];
    resetStyles = [{ "--Xl-icon-bg-color": "transparent" }];
    ({ handleTouchStart, handleTouchEnd } = createTouchEffects(
      hoverStyles,
      resetStyles
    ));
  });
</script>

<button
  class="btn-container"
  style:height
  style:margin-right={marginRight}
  style:margin-top={marginTop}
  style:padding
  style:right
  style:width
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
  style:--Xl-icon-bg-color=""
  style:--Xl-icon-hover={bgColor}
  {...$$props}
>
  <div class="icon">
    <slot />
  </div>
</button>

<style>
  .btn-container {
    background-color: var(--Xl-icon-bg-color);
    border-radius: 50%;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (hover: hover) {
    .btn-container:hover {
      background-color: var(--Xl-icon-hover);
    }
  }
</style>
