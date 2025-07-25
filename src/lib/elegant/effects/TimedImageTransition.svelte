<script>
  import { onMount, onDestroy } from "svelte";
  import "$styles/app.css";
  import "../../font.css";

  export let alt = "Timed Image Transition";
  export let height = "25rem";
  export let interval = 2000;
  export let size = "25rem";
  export let srcImages = ["", ""];
  export let transitionSecons = "1.5";
  export let width = "25rem";

  let currentIndex = 0;
  let intervalId;

  onMount(() => {
    // Автоматическое переключение изображений
    if (srcImages.length > 1) {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % srcImages.length;
      }, interval);
    }
  });

  onDestroy(() => {
    clearInterval(intervalId);
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
      aria-hidden={index !== currentIndex}
      class="image-wrapper"
      style:transition={`opacity ${transitionSecons}s ease`}
      style:opacity={index === currentIndex ? 1 : 0}
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
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
