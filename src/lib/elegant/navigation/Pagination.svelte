<script>
  import Button from "$elegant/input/Button.svelte";

  export let count = 10;
  export let selectedPage = 1;
  export let visiblePagesRange = 7;

  $: console.log(selectedPage);
</script>

<nav class="pagination">
  {#each Array(count) as _, i}
    <Button
      variant={i + 1 === selectedPage ? "Contained" : "Text"}
      isPrimary={i + 1 === selectedPage}
      borderRadius="50%"
      width="1.75rem"
      height="1.75rem"
      onclick={() => {
        selectedPage = i + 1;
      }}
    >
      {i + 1}
    </Button>
  {/each}
</nav>

<style>
  .pagination {
    display: flex;
    gap: 0.12rem;
  }
</style>
