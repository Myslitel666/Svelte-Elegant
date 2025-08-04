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

export const initialRootStyle = () => {
	const theme = get(themeStore);
	const style = document.documentElement.style;

	style.setProperty('--Xl-scroll-color', theme.scroll.color);
	style.setProperty('--Xl-bg-color', theme.palette.background);
};

export const customizeScroll = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const words = userAgent.split(" ");
	const lastWord = words[words.length - 1];

	//Применяем thin scroll для всех, кроме Opera
	if(lastWord.includes('opera') || lastWord.includes('opr')) {
		const root = document.documentElement;
		root.classList.add('opera-scroll');
	}
};

