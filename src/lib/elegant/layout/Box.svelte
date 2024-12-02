<script lang='ts'>
    import type { IColorThemeStore } from "$lib/interfaces/color-theme/IColorThemeStore.js";
    import { themeStore, themeMode } from "$lib/stores/ColorThemeStore.js";

    let theme: IColorThemeStore | undefined;

    export let borderSizing = 'border-box'
    export let width = '';
    export let height = '';
    export let padding = '0.5rem';
    export let borderRadius = '';
    export let border = '';
    export let justifyContent = '';

    let borderRadiusFromUser = borderRadius !== '';
    let borderFromUser = border !== '';

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; // Инициализация объекта темы

        // Устанавливаем значения свойтсв при смене темы, если они не были заданы пользователем
        border = borderFromUser ? border : `${theme.border.disabled.width} solid ${theme.border.light.color}`;
        borderRadius = borderRadiusFromUser ? borderRadius : theme.border.borderRadius;
    });
</script>

<!-- Основной Box -->
<div 
    class="box"
    style:border={border}
    style:padding={padding}
    style:border-radius={borderRadius}
    style:justify-content={justifyContent}
    style:overflow = hidden;
    style:box-sizing={borderSizing}
    style:transition = {`all ${theme?.effectsTimeCode}`}
    style:--bg-color={theme?.surface.box.background}
    style:--width={width}
    style:--height={height}
    
    {...$$props}
>
    <slot/>
</div>

<style>
    .box {
        display: flex;
        align-items: center;

        width: var(--width);
        height: var(--height);
    }

    .box:hover {
        cursor: pointer;
        background-color: var(--bg-color);
    }
</style>
