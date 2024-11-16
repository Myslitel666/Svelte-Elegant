<div>
    <Switch 
        onClick = {toggleThemeMode}
        bind:isChecked
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

    let isChecked = false;

    onMount(() => {
        //В дальнейшем он должен подхватывать своё состояние 
        if (isChecked) {
            isChecked = true;
        }
    });
</script>