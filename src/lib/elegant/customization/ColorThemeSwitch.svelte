<div>
    <Switch 
        onClick = {toggleThemeMode}
        bind:isChecked = {isChecked}
        {...$$props}
    >
        <ActiveIcon slot="activeIcon" size="1.1rem" />
        <DisabledIcon slot="disabledIcon" size="1.1rem" />
    </Switch>
</div>

<script lang='ts'>
    import { toggleThemeMode } from '../../stores/ColorThemeStore.js';
    import Switch from "../input/Switch.svelte";
    import ActiveIcon from '../../icons-elegant/Dark.svelte';
    import DisabledIcon from '../../icons-elegant/Light.svelte';
    import { onMount } from 'svelte';
    import { themeStore } from '../../stores/ColorThemeStore.js';

    export let isChecked = false;

    onMount(() => {
        if (isChecked) {
            toggleThemeMode();
        }
    });
</script>