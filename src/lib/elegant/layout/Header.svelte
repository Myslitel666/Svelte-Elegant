<script lang="ts">
	import type { IColorThemeStore } from '$lib/interfaces/color-theme/IColorThemeStore.js';
	import { themeStore } from '$lib/stores/ColorThemeStore.js';

	export let bgColor = '';
	export let gap = '0.5rem'; /* Расстояние между элементами */
	export let height = '2.75rem';
	export let padding = '0.5rem';

	let theme: IColorThemeStore | undefined;

	let bgColorFromUser = bgColor !== '';

	// Подписываемся на изменения темы
	themeStore.subscribe((value) => {
		theme = value; //Инициализация объекта темы

		// Устанавливаем значения цветов при смене темы
		bgColor = bgColorFromUser ? bgColor : theme.surface.header.background;
	});
</script>

<nav
	class="header"
	style:gap
	style:height
	style:padding
	style:background-color={bgColor}
	style:transition="all 0.3s ease"
>
	<slot />
</nav>

<style>
	.header {
		display: flex;
		align-items: center;
		position: fixed; /* Фиксируем на экране */
		width: 100%; /* Растягиваем на всю ширину */
		z-index: 100; /* Устанавливаем приоритет слоя */
	}
</style>
