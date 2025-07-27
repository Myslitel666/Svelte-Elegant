<script>
  import AutoComplete from "$elegant/input/AutoComplete.svelte";
  import { languageStore } from "$stores/language";

  export let buttonMarginTop = "0.09rem";
  export let borderColor = "transparent";
  export let borderColorHover = "transparent";
  export let clearable = false;
  export let dropListWidth = "4rem";
  export let height = "1.75rem";
  export let hoverable = false;
  export let isSelect = true;
  export let label = "Lang";
  export let labelColor = "transparent";
  export let labelColorHover = "transparent";
  export let marginRight = "0";
  export let marginTop = "0";
  export let options = ["en", "ru"];
  export let paddingRight = "0rem";
  export let paddingBottom = "0rem";
  export let paddingTop = "0rem";
  export let primaryColor = "transparent";
  export let variant = "Standard";
  export let width = "2.5rem";

  let lg = $languageStore;

  $: if (lg) $languageStore = lg;
</script>

<AutoComplete
  bind:value={lg}
  {buttonMarginTop}
  {paddingTop}
  {paddingBottom}
  {borderColor}
  {borderColorHover}
  {clearable}
  {dropListWidth}
  {hoverable}
  {isSelect}
  {label}
  {labelColor}
  {labelColorHover}
  {options}
  {primaryColor}
  {marginRight}
  {marginTop}
  {variant}
  {paddingRight}
  {width}
  {height}
  {...$$props}
/>
