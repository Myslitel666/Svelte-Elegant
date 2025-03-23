import { get } from 'svelte/store';
import { themeStore } from '$lib/stores/ThemeStore.js';

//обновление CSS-переменных значениями из хранилища темы
export const initialBodyStyle = () => {
	const theme = get(themeStore);
	const style = document.body.style;

	style.backgroundColor = theme.palette.background;
	style.transition = theme.effectsTimeCode;
	style.color = theme.palette.text.contrast;

	style.setProperty('--Xl-textColorMain', theme.palette.text.main);
};
