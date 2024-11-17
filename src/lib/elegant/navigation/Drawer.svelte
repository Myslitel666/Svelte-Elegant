<script lang="ts">
    import type { IColorThemeStore } from "$lib/interfaces/color-theme/IColorThemeStore.js";
    import { themeMode, themeStore } from "$lib/stores/ColorThemeStore.js";
    import { onMount, onDestroy } from "svelte";

    export let isOpen = false;
    export let toggleButtonId = 'drawer-toggle-button'

    let theme: IColorThemeStore | undefined;
    let bg = ''
    let border = ''

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        bg = $themeMode === 'light' ? theme.colors.background : theme.action.hover;
        border = $themeMode === 'light' ? `1px solid ${theme.border.elegant.color}` : '';
    });

    // Функция для закрытия меню при клике вне его
    function close(event: MouseEvent) {
        const menu = document.querySelector('.drawer');
        const toggleButton = document.getElementById(toggleButtonId);
        
        if (
            isOpen && 
            menu && 
            !menu.contains(event.target as Node) && 
            toggleButton && 
            !toggleButton.contains(event.target as Node)
        ) {
            isOpen = false;
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', close);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            document.removeEventListener('click', close);
        }
    });
</script>

<style>
    * {
        box-sizing: border-box;
    }

    /* Сам Drawer */
    .drawer {
        position: fixed;
        top: 0;
        left: -250px; /* Скрыто за пределами экрана */
        width: 250px;
        height: 100%;
        transition: left 0.3s ease;
        z-index: 100; /* Над всем остальным */
    }

    /* Меню в открытом состоянии */
    .drawer.open {
        left: 0; /* Выдвигается */
    }
</style>

<!-- Drawer -->
<nav 
    class="drawer {isOpen ? 'open' : ''}"
    style:background-color = {bg}
    style:border-right={border}
>
    <slot/>
</nav>
