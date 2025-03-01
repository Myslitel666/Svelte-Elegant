<script lang='ts'>
	//Контекст темы
	import type { IColorThemeStore } from "$lib/interfaces/color-theme/IColorThemeStore.js";
	import { themeStore } from "$lib/stores/ColorThemeStore.js";

	let theme: IColorThemeStore | undefined;

	export let border = '';
    export let borderRadius = '10px';
	export let contentHeight = '';
	export let contentMinHeight = '2.5rem';
	export let flexDirection = 'column';
	export let gap = '0.22rem';
    export let titleHeight = '';
    export let padding = '0.66rem';
	export let title = 'Your Box Title';
    export let width = '20rem';

	// Подписываемся на изменения темы
	themeStore.subscribe(value => {
		theme = value; //Инициализация объекта темы
	});

	let borderRadiusFromUser = borderRadius !== '';
    let borderFromUser = border !== '';

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; // Инициализация объекта темы

        // Устанавливаем значения свойтсв при смене темы, если они не были заданы пользователем
        border = borderFromUser ? border : `${theme.border.disabled.width} solid ${theme.border.focused.color}`;
        borderRadius = borderRadiusFromUser ? borderRadius : theme.border.borderRadius.extra;
    });
</script>

<div 
	class = 'box-container border'
	style:width = {width}
	style:--Xl-border-color = {theme?.border.disabled.color}
	style:--Xl-borderWidth = {theme?.border.disabled.width}

	style:border-radius = {borderRadius}
	style:transition = {`all ${theme?.effectsTimeCode}`}
>
	<div 
		class = 'title border'
		style:align-items = center
		style:height = {titleHeight}
		style:border-top = none
		style:border-left = none
		style:border-right = none
		style:display = flex
		style:justify-content = center
		style:padding = {padding}
		style:transition = {`all ${theme?.effectsTimeCode}`}
	>
		<p 	
			style:color = {theme?.palette.primary}
			style:font-weight = 600
		>
			{title}
		</p>
	</div>
	<div 
		class = 'content'
		style:display = flex
		style:flex-direction = {flexDirection}
		style:gap = {gap}
		style:background-color = {theme?.surface.ghost.background}
		style:box-sizing = border-box
		style:border-radius = {`0 0 ${borderRadius} ${borderRadius}`}
		style:height = {contentHeight}
		style:min-height = {contentMinHeight}
		style:padding = {padding}
		style:transition = {`all ${theme?.effectsTimeCode}`}
	>
		<slot />
	</div>
</div>

<style>
	.border {
		border-color: var(--Xl-border-color);
        border-style: solid;
        border-width: var(--Xl-borderWidth);
		box-sizing: border-box;
	}
</style>
