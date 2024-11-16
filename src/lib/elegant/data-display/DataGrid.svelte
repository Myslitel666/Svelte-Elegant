<div 
    class = 'data-grid border'
    style:background-color = {rowBg}
    style:--Xl-border-color = {borderColor}
    style:--Xl-head-bg = {headBg}
>
    <div 
        class = 'row border'
    >
        <div class = 'cell border'>
            <div class = 'cell-content'>
                <p>Id</p>
            </div>
        </div>
        <div class = 'cell border'>
            <div class = 'cell-content'>
                <p>Jargon</p>
            </div>
        </div>
        <div class = 'cell border'>
            <div class = 'cell-content'>
                <p>Translate</p>
            </div>
        </div>
        <div 
            class = 'cell border'
        >
            <div 
                class = 'cell-content'
            >
                <p>Example Of Use Translate</p>
            </div>
        </div>
    </div>
    <div 
        class = 'row border'
    >
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
    </div>
    <div 
        class = 'row border'
    >
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
    </div>
</div>

<script lang='ts'>
	import { type IColorThemeStore } from '../../interfaces/color-theme/IColorThemeStore.js';
    import { themeStore } from '../../stores/ColorThemeStore.js';

    // Свойства для управления CSS-стилями
    export let backgroundColor = '';                          /* Цвет заливки */
    export let borderColor = '';                              /* Цвет обводки */

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isBackgroundColorFromUser = backgroundColor !== '';
    let isBorderColorFromUser = borderColor !== '';

    // Приватные стили
    let rowBg = '';
    let headBg = '';

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        rowBg = theme.action.hover;
        headBg = theme.action.selected;
        if (!isBackgroundColorFromUser) backgroundColor = theme.disabled.touch;
        if (!isBorderColorFromUser) borderColor = theme.border.alegant.color;
    });

    //Устанавливаем значения стилей после инициализации темы с проверкой не передавал ли пользователь в компонент свои значения стилей
    if (theme) {
        
    }

</script>

<style>
    .border {
        border: 1px solid; /* Толщина и цвет обводки таблицы */
        border-color: var(--Xl-border-color);
        transition: border-color var(--Xl-effectsTimeCode), background-color var(--Xl-effectsTimeCode);
    }

    .data-grid {
        border-radius: 4px;
        width: 100%;
    }

    .row {
        height: 3rem;
        border-left: none;
        border-right: none;
        border-top: none;
        display: flex; /* Горизонтальная ориентация для ячеек */
    }

    .cell {
        border-top: none;
        border-bottom: none;
        border-left: none;
        flex: 1; /* Ячейки растягиваются на всю ширину строки */
        display: flex; /* Используем Flexbox для выравнивания содержимого ячеек */
        align-items: center; /* Центрируем содержимое по вертикали */
        justify-content: center; /* Центрируем содержимое по горизонтали */
    }

    .data-grid:hover {
        cursor: pointer;
    }

    .cell-content {
        padding: 0.75rem;
    }

    .row:hover, .row:first-child {
        background-color: var(--Xl-head-bg);
    }

    .row:last-child {
        border-bottom: none; /* Убираем нижнюю границу у последней строки */
    }

    .cell:last-child {
        border: none;
    }
</style>