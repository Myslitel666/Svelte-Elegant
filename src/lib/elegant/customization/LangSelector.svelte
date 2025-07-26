<script>
  import AutoComplete from "$elegant/input/AutoComplete.svelte";
  import { themeStore } from "$lib/stores";
  import { languageStore } from "../../stores/language";

  export let marginRight = "";
  export let marginTop = "";

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
  bind:value={lg}
  borderColor="transparent"
  borderColorHover="transparent"
  clearable={false}
  dropListWidth="4rem"
  hoverable={false}
  isSelect
  label="Lang"
  labelColor="transparent"
  labelColorHover="transparent"
  options={["en", "ru"]}
  primaryColor="transparent"
  {marginRight}
  {marginTop}
  variant="Standard"
  paddingRight="0rem"
  width="2.5rem"
/>
