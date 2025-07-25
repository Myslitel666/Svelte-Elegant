<script>
  import { onMount, onDestroy } from "svelte";
  import "$styles/app.css";
  import "../../font.css";

  export let size = "25rem";
  export let height = "25rem";
  export let width = "25rem";
  export let srcImages = ["", ""];
  export let alt = "Timed Image Transition";

  let currentIndex = 0;
  let intervalId;
  let unsubscribe;

  onMount(() => {
    // Автоматическое переключение изображений
    if (srcImages.length > 1) {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % srcImages.length;
      }, 2000);
    }
  });

  onDestroy(() => {
    clearInterval(intervalId);
    unsubscribe?.();
  });
</script>

<div
  style:width={size || width}
  style:height={size || height}
  class="cross-fade-imager"
  role="region"
  aria-live="polite"
  aria-label="Image carousel"
>
  {#each srcImages as src, index}
    <div
      class="image-wrapper"
      style:opacity={index === currentIndex ? 1 : 0}
      aria-hidden={index !== currentIndex}
    >
      <img {src} {alt} />
    </div>
  {/each}
</div>

<style>
  .cross-fade-imager {
    position: relative;
    overflow: hidden;
  }

  .image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1.5s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
