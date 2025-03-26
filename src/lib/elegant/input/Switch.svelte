<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";
  import { onMount } from "svelte";
  import { generateIdElement } from "../../stores/ElementIdStore.js";
  import "$styles/app.css";
  import "../../font.css";

  export let id = ""; /* Уникальный идентификатор элемента */
  export let color = ""; /* Цвет переключателя */
  export let isChecked = false; /* начальное состояние переключателя */
  export let onClick = () => {}; /* Обработчик нажатия */

  let height = "2rem"; // Высота Switch'а
  let width = "3.55rem";
  let borderRadius = "1rem"; // Радиус скругления углов

  // Флаги для отслеживания, передал ли пользователь значение извне
  let isColorFromUser = color !== "";

  function toggleSwitch() {
    isChecked = !isChecked; // изменение состояния при клике
  }

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;

    if (!isColorFromUser) color = theme.palette.primary;
  });

  onMount(() => {
    id ? "" : (id = `switch-${generateIdElement()}`);
  });
</script>

<div style:height style:width>
  <span
    class="track"
    style:height
    style:background-color={isChecked
      ? color
      : theme.surface.underSolid.background}
    style:transition={`all ${theme.effectsTimeCode} ease`}
    style:--Xl-border-radius={borderRadius}
  >
  </span>
  <span
    class="switch"
    style:transform={`translate(${isChecked ? "1.76rem" : "0.26rem"}, 0.26rem)`}
    style:transition={`all ${theme.effectsTimeCode} ease`}
    style:--Xl-background-color={theme.palette.background}
    style:--Xl-border-radius={borderRadius}
  >
    {#if isChecked}
      <slot name="activeIcon" />
      <!-- Компонент switch'а для активного состояния -->
    {:else}
      <slot name="disabledIcon" />
      <!-- Компонент switch'а для неактивного состояния -->
    {/if}
  </span>
  <input
    type="checkbox"
    {id}
    style:height
    style:width
    bind:checked={isChecked}
    on:click={() => {
      toggleSwitch();
      onClick();
    }}
    {...$$props}
  />
</div>

<style>
  input {
    opacity: 0;
    margin: 0;
    position: absolute;
    cursor: pointer;
  }
  .track {
    position: absolute;
    width: 3.55rem;
    border-radius: var(--Xl-border-radius);
  }
  .switch {
    position: absolute;
    background-color: var(--Xl-background-color);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--Xl-border-radius);
    display: flex; /* Используем Flexbox для центрирования */
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center; /* Центрируем по вертикали */
  }
</style>
