<div 
    class="input-container"
    style:width={width}
>
    <button 
        id = {id}
        placeholder = ''
        style:border = {variant === 'Outlined' ? `1px solid ${primaryColor}` : 'none'}
        style:border-radius = {borderRadius}
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
        style:min-width = {minWidth}
        style:width='100%'
        style:--Xl-color = {variant === 'Contained' ? primaryColor : ''}
        style:--Xl-height = {height}
        style:--Xl-secondaryColor = {secondaryColor}
        style:--Xl-hoverBorderColor = {textColor}
        style:--Xl-textColor = {textColor}
        style:--Xl-filter = {filter}
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
    export let fontSize = '';                            /* Размер шрифта */
    export let height = '';                              /* Высота поля */
    export let labelColor ='';                           /* Цвет надписи */
    export let minWidth = '';                            /* Минимальная ширина */
    export let outlineWidth ='';                         /* Толщина обводки */
    export let paddingLeft = '';                         /* Отступ от левой границы до курсора */
    export let paddingRight = '';                        /* Отступ от правой границы */
    export let primaryColor = '';                        /* Основной цвет */
    export let secondaryColor = '';                      /* Вторичный цвет */
    export let textColor = '';                           /* Цвет текста */
    export let width = '';                               /* Ширина кнопки */

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isTextColorFromUser = textColor !== '';
    let isBorderColorFromUser = borderColor !== '';
    let isLabelColorFromUser = labelColor !== '';
    let isPrimaryColorFromUser = primaryColor !== '';
    let isSecondaryColorFromUser = primaryColor !== '';

    let filter = '';

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        if (!isBorderColorFromUser) borderColor = theme.themeMode === 'light' ? theme.colors.text.primary : theme.colors.primary;
        if (!isLabelColorFromUser) labelColor = theme.colors.text.label;
        if (!isPrimaryColorFromUser) primaryColor = theme.colors.primary;
        if (!isSecondaryColorFromUser) secondaryColor = theme.colors.secondary;
        if (!isTextColorFromUser) textColor = variant === 'Contained' ? theme.colors.text.primary : theme.colors.primary;

        filter = theme.controls.button.filter;
    });

    //Устанавливаем значения стилей после инициализации темы
    if (theme) {
        if (!borderRadius) borderRadius = theme.border.borderRadius;
        if (!height) height = theme.controls.height;
        if (!outlineWidth) outlineWidth = theme.border.disabled.width;
        if (!paddingLeft) paddingLeft = theme.controls.textField.padding;
        if (!paddingRight) paddingRight = paddingLeft;
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