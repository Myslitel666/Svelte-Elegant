<svg 
    id = {id}
    width={size} height={size} 
    viewBox="0 0 16 16" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <path fill = {fill} d="M3 6h2v1h-2v-1z"></path>
    <path fill = {fill} d="M6 6h7v1h-7v-1z"></path>
    <path fill = {fill} d="M3 8h2v1h-2v-1z"></path>
    <path fill = {fill} d="M6 8h7v1h-7v-1z"></path>
    <path fill = {fill} d="M3 10h2v1h-2v-1z"></path>
    <path fill = {fill} d="M6 10h7v1h-7v-1z"></path>
    <path fill = {fill} d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path>
</svg>

<script lang='ts'>
    import { type IColorThemeStore } from "../interfaces/color-theme/IColorThemeStore.js";
    import { themeStore, themeMode } from "../stores/ColorThemeStore.js";
    export let id = '';
    export let stroke = '';
    export let size = '2rem';
    let fill = '';
    let hoverColor = ''

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; // Инициализация объекта темы
        fill = theme?.palette.primary
        hoverColor = theme?.palette.primary
    });
</script>

<style>
    svg {
        cursor: pointer
    }
</style>