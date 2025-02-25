<div 
    class="input-container"
    style:width={width}
>
    <button 
        id = {id}
        placeholder = ''
        style:border = {variant === 'Outlined' ? `1px solid ${primaryColor}` : 'none'}
        style:border-color = {borderColor}
        style:border-radius = {borderRadius}
        style:box-shadow = {boxShadow}
        style:padding-left = {padding}
        style:padding-right = {padding}
        style:font-size = {fontSize}
        style:min-width = {minWidth}
        style:width=100%
        style:--Xl-color = {variant === 'Contained' ? primaryColor : ''}
        style:--Xl-height = {height}
        style:--Xl-secondaryColor = {secondaryColor}
        style:--Xl-hoverBorderColor = {textColor}
        style:--Xl-textColor = {textColor}
        style:--Xl-filter = {filter}
        {...$$props}
    >
        <slot></slot> <!-- Слот для содержимого кнопки -->
    </button>
</div>

<script lang='ts'>
	import { generateIdElement } from '../../stores/ElementIdStore.js';
	import { type IColorThemeStore } from '../../interfaces/color-theme/IColorThemeStore.js';
    import { themeStore } from '../../stores/ColorThemeStore.js';
    import { onMount } from 'svelte';

    export let variant = 'Contained';                    /* Тип кнопки */
    export let id = ''                                   /* Уникальный идентификатор элемента */
    export let borderColor = '';                         /* Цвет обводки */
    export let borderRadius = '';                        /* Радиус скругления углов */
    export let boxShadow = '';                           /* Тень */
    export let fontSize = '';                            /* Размер шрифта */
    export let height = '';                              /* Высота поля */
    export let labelColor ='';                           /* Цвет надписи */
    export let minWidth = '';                            /* Минимальная ширина */
    export let outlineWidth ='';                         /* Толщина обводки */
    export let padding = '';                             /* Отступ */
    export let primaryColor = '';                        /* Основной цвет */
    export let secondaryColor = '';                      /* Вторичный цвет */
    export let textColor = '';                           /* Цвет текста */
    export let width = '';                               /* Ширина кнопки */

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isTextColorFromUser = textColor !== '';
    let isLabelColorFromUser = labelColor !== '';
    let isPrimaryColorFromUser = primaryColor !== '';
    let isSecondaryColorFromUser = primaryColor !== '';

    let filter = '';

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        if (!isLabelColorFromUser) labelColor = theme.palette.text.label;
        if (!isPrimaryColorFromUser) primaryColor = theme.palette.primary;
        if (!isSecondaryColorFromUser) secondaryColor = theme.palette.secondary;
        if (!isTextColorFromUser) textColor = variant === 'Contained' ? theme.palette.text.contrast : theme.palette.primary;

        filter = theme.controls.button.filter;
    });

    //Устанавливаем значения стилей после инициализации темы
    if (theme) {
        if (!borderRadius) borderRadius = theme.border.borderRadius.default;
        if (!height) height = theme.controls.height;
        if (!outlineWidth) outlineWidth = theme.border.disabled.width;
        if (!padding) padding = theme.controls.textField.padding;
        if (!width) width = theme.controls.width;
        if (!fontSize) fontSize = theme.typography.fontSize;
    }

    onMount(() => {
        id ? '' : id = `button-${generateIdElement()}`;
    });
</script>

<style>
    button {
        height: var(--Xl-height);
        color: var(--Xl-textColor);
        background-color: var(--Xl-color);
        transition: outline-color var(--Xl-effectsTimeCode), background-color var(--Xl-effectsTimeCode), filter var(--Xl-effectsTimeCode);
    }

    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    button:hover {
        cursor: pointer;
        filter: var(--Xl-filter);
    }
</style>