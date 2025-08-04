import { get } from 'svelte/store';
import { themeStore } from '$lib/stores/ThemeStore.js';
import { getBrowser } from './getBrowser';

//обновление CSS-переменных значениями из хранилища темы
export const initialBodyStyle = () => {
	const theme = get(themeStore);
	const style = document.body.style;

	style.backgroundColor = theme.palette.background;
	style.transition = theme.effectsTimeCode;
	style.color = theme.palette.text.contrast;

	style.setProperty('--Xl-textColorMain', theme.palette.text.main);
};

export const initialRootStyle = () => {
	const theme = get(themeStore);
	const style = document.documentElement.style;

	style.setProperty('--Xl-scroll-color', theme.scroll.color);
	style.setProperty('--Xl-bg-color', theme.palette.background);
};

export const customizeScroll = () => {
	const style = document.documentElement.style;

	//Применяем thin scroll для всех, кроме Opera
	if(getBrowser() === 'opera') {
		style.setProperty('--Xl-scroll-width', 'auto')
	}
	else {
		style.setProperty('--Xl-scroll-width', 'thin')
	}
};

