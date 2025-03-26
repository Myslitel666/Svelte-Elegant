<script lang="ts">
  import { toggleThemeMode } from "$lib/stores/ThemeStore.js";
  import Switch from "../input/Switch.svelte";
  import ActiveIcon from "$icons-elegant/Dark.svelte";
  import DisabledIcon from "$icons-elegant/Light.svelte";
  import { onMount } from "svelte";
  import "$styles/app.css";
  import "../../font.css";

  let isChecked = false;

  onMount(() => {
    //В дальнейшем он должен подхватывать своё состояние
    if (isChecked) {
      isChecked = true;
    }
  });
</script>

<div>
  <Switch onClick={toggleThemeMode} bind:isChecked>
    <ActiveIcon slot="activeIcon" size="1.1rem" />
    <DisabledIcon slot="disabledIcon" size="1.1rem" />
  </Switch>
</div>
