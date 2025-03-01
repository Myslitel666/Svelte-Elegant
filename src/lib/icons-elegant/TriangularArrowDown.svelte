<script lang="ts">
	import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore.js';
	import { themeStore } from '../stores/ColorThemeStore.js';

	export let backgroundColor = '';
	export let fill = '';
	export let size = '1.1rem';

	let theme: IColorThemeStore;

	// Подписываемся на изменения темы
	themeStore.subscribe((value) => {
		theme = value;
	});
</script>

<div style:background-color={backgroundColor} style:width={size}>
	<svg fill={fill !== '' ? fill : theme.icon.color.primary} viewBox="0 -3 24 24">
		<path d="M6.5,8.5l6,7l6-7H6.5z" />
	</svg>
</div>
