<script lang='ts'>
    import type { IColorThemeStore } from "$lib/interfaces/color-theme/IColorThemeStore.js";
    import { themeStore } from "$lib/stores/ColorThemeStore.js";

    let theme: IColorThemeStore | undefined;

    export let border = '';
    export let borderRadius = '';
    export let borderSizing = 'border-box'
    export let height = '';
    export let justifyContent = '';
    export let padding = '0.5rem';
    export let variant: 'Default' | 'Hoverable' | 'Solid' = 'Default';
    export let width = '';

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
    style:background-color = {variant === 'Solid' ? theme?.surface.box.background : ''}
    style:border={border}
    style:border-radius={borderRadius}
    style:box-sizing={borderSizing}
    style:cursor = {variant === 'Hoverable' ? 'pointer' : '' }
    style:justify-content={justifyContent}
    style:overflow = hidden;
    style:padding={padding}
    style:transition = {`all ${theme?.effectsTimeCode}`}
    style:--Xl-bg-color={variant === 'Default' ? '' : theme?.surface.box.background}
    style:--Xl-height={height}
    style:--Xl-width={width}
    
    {...$$props}
>
    <slot/>
</div>

<style>
    .box {
        display: flex;
        align-items: center;

        width: var(--Xl-width);
        height: var(--Xl-height);
    }

    .box:hover {
        background-color: var(--Xl-bg-color);
    }
</style>
