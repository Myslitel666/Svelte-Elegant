<script>
  import { themeStore, themeMode } from "$stores/ThemeStore.js";

  export let fontSize = "";
  export let isVisible = true;
  export let marginBottom = "10px";
  export let marginLeft = "";
  export let marginRight = "";
  export let marginTop = "";
  export let color = "";
  export let isError = true;

  $: xColor = color
    ? color
    : $themeMode === "light"
      ? isError
        ? "#da0000"
        : $themeStore.palette.primary
      : isError
        ? $themeStore.palette.primary
        : "#10e942";
</script>

{#if isVisible}
  <p
    class="message"
    style:font-size={fontSize}
    style:margin-bottom={marginBottom}
    style:margin-left={marginLeft}
    style:margin-right={marginRight}
    style:margin-top={marginTop}
    style:color={xColor}
  >
    {#if isError}✘{:else}✔{/if}
    <slot />
  </p>
{/if}

<style>
  .message {
    transition: color 0.3s;
  }
</style>
