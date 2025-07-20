<script lang="ts">
  import { themeStore } from "$lib/stores";

  export let bgColor = "";
  export let bgColorHover = "";
  export let count = 11;
  export let selectedPage = 9;
  export let typePage: "Circle" | "Square" = "Circle";
  export let visiblePages: number[] = [];
  export let maxVisibleCount = 7;

  let theme;
  let xBgColor = "";
  let xBgColorHover = "";

  $: if (selectedPage) {
    visiblePages = [];

    //Если умещаются все страницы
    if (count <= maxVisibleCount) {
      for (let i = 1; i <= count; i++) {
        visiblePages.push(i);
      }
    } else {
      //Если не умещаются страницы с правого края
      if (selectedPage < maxVisibleCount - 2) {
        for (let i = 1; i <= maxVisibleCount - 2; i++) {
          visiblePages.push(i);
        }
        visiblePages.push(count);
      }
      //Если страница из середины или с правого края
      else {
        //Если страница с середины
        if (selectedPage < count - 3) {
          visiblePages.push(1);
          const centeredPages = count - 2; //Центральные страницы = все - первая - последняя
          const sidePages = centeredPages - maxVisibleCount;
          const leftPagesCount =
            sidePages % 2 === 0 ? sidePages / 2 : (sidePages - 1) / 2;

          for (let i = selectedPage - leftPagesCount; i <= selectedPage; i++) {
            visiblePages.push(i);
          }

          if (!visiblePages.includes(selectedPage))
            visiblePages.push(selectedPage);

          for (
            let i = selectedPage + 1;
            i <= selectedPage + leftPagesCount;
            i++
          ) {
            visiblePages.push(i);
          }

          if (!visiblePages.includes(count)) visiblePages.push(count);
        }
        //Если не умещаются страницы с левого края
        else {
          visiblePages.push(1);
          for (let i = count - 4; i <= count; i++) {
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
  {#each visiblePages as page, i}
    {#if i === 1 && visiblePages[i] !== 2}
      <button style:cursor="default" style:width="2rem" style:height="2rem">
        ...
      </button>
    {/if}
    <button
      style:background-color={page === selectedPage ? xBgColor : ""}
      style:border-radius={typePage === "Square" ? "0.25rem" : "50%"}
      style:width="2rem"
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
