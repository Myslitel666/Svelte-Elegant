<script lang="ts">
  import { themeStore } from "$lib/stores";
  import { isMobile } from "$lib/utils/isMobile.js";
  import { setHoverColor } from "$lib/utils/setHoverColor.js";

  export let padding = "0.25rem";

  let theme: any;

  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  function IconTouchStart(e: Event) {
    setHoverColor(e, "--Xl-icon-bg-color", theme.surface.underSolid.background);
  }

  function onIconClick(e: Event) {
    //toggleType();
    setTimeout(() => {
      setHoverColor(e, "--Xl-icon-bg-color", "transparent");
    }, 258);
  }
</script>

<button
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
  style:--Xl-icon-hover={theme.surface.underSolid.background}
  {...$$props}
>
  <div class="btn-container" style:padding>
    <div class="Icon">
      <slot />
    </div>
  </div>
</button>

<style>
  button {
    background-color: transparent;
  }

  .btn-container {
    background-color: var(--Xl-icon-bg-color);
    border-radius: 50%;
    transition: all 0.3s;
  }

  .Icon {
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
