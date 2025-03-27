<script lang="ts">
  import { themeStore } from "$lib/stores";
  import { isMobile } from "$lib/utils/isMobile.js";
  import { createTouchEffects } from "$lib/utils/setHoverColor";
  import "$styles/app.css";
  import "../../font.css";

  export let bgColor = ""; /* Основной цвет */
  export let padding = "0.25rem";
  export let onClick = () => {};

  let theme: any;

  let isBgColorFromUser = bgColor !== "";

  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    if (!isBgColorFromUser) {
      bgColor = theme.surface.underSolid.background;
    }
  });

  const hoverStyles = [{ "--Xl-icon-bg-color": bgColor }];
  const resetStyles = [{ "--Xl-icon-bg-color": "transparent" }];
  const { handleTouchStart, handleTouchEnd } = createTouchEffects(
    hoverStyles,
    resetStyles
  );
</script>

<button
  class="btn-container"
  style:padding
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
  }

  .icon {
    pointer-events: none;
    display: flex;
    justify-content: center;
  }

  @media (hover: hover) {
    .btn-container:hover {
      background-color: var(--Xl-icon-hover);
    }
  }
</style>
