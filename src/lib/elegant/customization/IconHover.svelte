<script lang="ts">
  import { themeStore } from "$lib/stores";
  import { isMobile } from "$lib/utils/isMobile.js";
  import { setHoverColor } from "$lib/utils/setHoverColor.js";
  import "$styles/app.css";
  import "../../font.css";

  export let color = "";
  export let padding = "0.25rem";
  export let onClick = () => {};

  let theme: any;

  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  $: xColor = color || theme.surface.underSolid.background;

  function IconTouchStart(e: Event) {
    setHoverColor(e, "--Xl-icon-bg-color", xColor);
  }

  function onIconClick(e: Event) {
    onClick();
    setTimeout(() => {
      setHoverColor(e, "--Xl-icon-bg-color", "transparent");
    }, 170);
  }
</script>

<button
  class="btn-container"
  style:padding
  on:touchend={(e: Event) => {
    onIconClick(e);
  }}
  on:click={(e: Event) => {
    if (!isMobile()) {
      onIconClick(e);
    }
  }}
  on:touchstart={(e: Event) => {
    IconTouchStart(e);
  }}
  style:--Xl-icon-bg-color=""
  style:--Xl-icon-hover={xColor}
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
