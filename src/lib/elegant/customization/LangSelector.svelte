<script>
  import AutoComplete from "$elegant/input/AutoComplete.svelte";
  import { themeStore } from "$lib/stores";
  import { languageStore } from "../../stores/language";

  export let marginRight = "";

  let lg = $languageStore;
  let theme;

  $: if (lg) $languageStore = lg;
  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<AutoComplete
  variant="Standard"
  options={["en", "ru"]}
  bind:value={lg}
  label="Lang"
  isSelect
  {marginRight}
  width="3.6rem"
/>
