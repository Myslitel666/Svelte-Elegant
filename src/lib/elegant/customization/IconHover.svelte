<script lang="ts">
  import { themeStore } from "$lib/stores";
  import { isMobile } from "$lib/utils/isMobile.js";
  import { setHoverColor } from "$lib/utils/setHoverColor.js";

  export let padding = "0.5rem";

  let theme: any;

  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  function eyeTouchStart(e: Event) {
    setHoverColor(e, "--Xl-eye-bg-color", theme.surface.underSolid.background);
  }

  function onEyeClick(e: Event) {
    //toggleType();
    setTimeout(() => {
      setHoverColor(e, "--Xl-eye-bg-color", "transparent");
    }, 258);
  }
</script>

<button
  on:touchend={(e: Event) => {
    onEyeClick(e);
  }}
  on:click={(e: Event) => {
    if (!isMobile()) {
      onEyeClick(e);
    }
  }}
  on:touchstart={(e: Event) => {
    eyeTouchStart(e);
  }}
  style:--Xl-eye-bg-color=""
  style:--Xl-eye-hover={theme.surface.underSolid.background}
  {...$$props}
>
  <div class="btn-container" style:padding>
    <div class="eye">
      <slot />
    </div>
  </div>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
  }

  .btn-container {
    background-color: var(--Xl-eye-bg-color);
    border-radius: 50%;
    transition: all 0.3s;
  }

  .eye {
    pointer-events: none;
    display: flex;
    justify-content: center;
  }

  @media (hover: hover) {
    .btn-container:hover {
      background-color: var(--Xl-eye-hover);
    }
  }
</style>
