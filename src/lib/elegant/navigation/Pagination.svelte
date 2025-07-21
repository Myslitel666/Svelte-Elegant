<script lang="ts">
  import { themeStore } from "$lib/stores";
  import Chevron from "$icons-elegant/Chevron.svelte";

  export let bgColor = "";
  export let bgColorHover = "";
  export let count = 10;
  export let selectedPage = 1;
  export let typePage: "Circle" | "Square" = "Circle";
  export let visiblePages: number[] = [];
  export let maxVisibleCount = 7;

  let theme;
  let xBgColor = "";
  let xBgColorHover = "";
  $: xMaxVisibleCount = maxVisibleCount < 7 ? 7 : maxVisibleCount;

  $: if (selectedPage) {
    visiblePages = [];

    //Если умещаются все страницы
    if (count <= xMaxVisibleCount) {
      for (let i = 1; i <= count; i++) {
        visiblePages.push(i);
      }
    } else {
      //Если не умещаются страницы с правого края
      if (selectedPage < xMaxVisibleCount - 2) {
        for (let i = 1; i <= xMaxVisibleCount - 2; i++) {
          visiblePages.push(i);
        }
        visiblePages.push(count);
      }
      //Если страница из середины или с правого края
      else {
        let xxMaxVisibleCount = xMaxVisibleCount - 2; //Снижение максимального кол-ва видимых страниц из-за центральной SelectedPage
        const centeredPages = xxMaxVisibleCount - 2; //Центральные страницы = все - первая - последняя
        const leftPagesCount =
          (centeredPages - 1) % 2 === 0
            ? (centeredPages - 1) / 2
            : centeredPages / 2;
        const rightPagesCount =
          (centeredPages - 1) % 2 === 0
            ? leftPagesCount
            : (centeredPages - 2) / 2;

        //Если страница с середины
        if (selectedPage <= count - maxVisibleCount / 2) {
          visiblePages.push(1);

          for (let i = selectedPage - leftPagesCount; i <= selectedPage; i++) {
            visiblePages.push(i);
          }

          if (!visiblePages.includes(selectedPage))
            visiblePages.push(selectedPage);

          for (let i = 1; i <= rightPagesCount; i++) {
            visiblePages.push(selectedPage + i);
          }

          visiblePages.push(count);
        }
        //Если не умещаются страницы с левого края
        else {
          visiblePages.push(1);
          for (
            let i = count - leftPagesCount - rightPagesCount - 2;
            i <= count;
            i++
          ) {
            visiblePages.push(i);
          }
        }
      }
    }
  }

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    xBgColor = bgColor ? bgColor : theme.palette.primary;
    xBgColorHover = bgColorHover
      ? bgColorHover
      : theme.surface.solid.background;
  });
</script>

<nav class="pagination">
  <button
    style:background-color={selectedPage - 1 >= 1 ? "" : "transparent"}
    style:border-radius={typePage === "Square" ? "0.25rem" : "50%"}
    style:min-width="2rem"
    style:height="2rem"
    style:padding-right="0.33rem"
    style:--Xl-bgColorHover={xBgColorHover}
    onclick={() => {
      if (selectedPage - 1 >= 1) selectedPage--;
    }}
  >
    <Chevron
      fill={selectedPage - 1 >= 1 ? "" : theme.palette.text.disabledContrast}
    />
  </button>
  {#each visiblePages as page, i}
    {#if i === 1 && visiblePages[i] !== 2}
      <button style:cursor="default" style:width="2rem" style:height="2rem">
        ...
      </button>
    {/if}
    <button
      style:background-color={page === selectedPage ? xBgColor : ""}
      style:border-radius={typePage === "Square" ? "0.25rem" : "50%"}
      style:min-width="2rem"
      style:height="2rem"
      style:--Xl-bgColorHover={xBgColorHover}
      onclick={() => {
        selectedPage = page;
      }}
    >
      {page}
    </button>
    {#if i === visiblePages.length - 2 && visiblePages[i] !== count - 1}
      <button style:cursor="default" style:width="2rem" style:height="2rem">
        ...
      </button>
    {/if}
  {/each}
  <button
    style:background-color={selectedPage + 1 <= count ? "" : "transparent"}
    style:border-radius={typePage === "Square" ? "0.25rem" : "50%"}
    style:min-width="2rem"
    style:height="2rem"
    style:padding-left="0.33rem"
    style:--Xl-bgColorHover={xBgColorHover}
    onclick={() => {
      if (selectedPage + 1 <= count) selectedPage++;
    }}
  >
    <Chevron
      fill={selectedPage + 1 <= count
        ? ""
        : theme.palette.text.disabledContrast}
      rotate="180deg"
    />
  </button>
</nav>

<style>
  .pagination {
    display: flex;
    gap: 0.18rem;
  }

  button {
    font-size: 16px;
    padding: 0.25rem;
    transition: background-color 0.3s;
  }

  @media (hover: hover) {
    button:hover {
      background-color: var(--Xl-bgColorHover);
    }
  }
</style>
