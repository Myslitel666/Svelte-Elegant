import { get } from 'svelte/store';
import { themeStore } from '$stores/ColorThemeStore.js';

//обновление CSS-переменных значениями из хранилища темы
export const initialCSSVariables = () => {
	const theme = get(themeStore);

	const body = document.body.style;
	body.setProperty('--Xl-background-color', theme.palette.background);
	body.setProperty('--Xl-effectsTimeCode', theme.effectsTimeCode);

	body.setProperty('--Xl-font-family', theme.typography.font);
	body.setProperty('--Xl-font-size', theme.typography.fontSize);
	body.setProperty('--Xl-font-style', theme.typography.fontStyle);
	body.setProperty('--Xl-font-weight', theme.typography.fontWeight);
	body.setProperty('--Xl-letter-spacing', theme.typography.letterSpacing);
	body.setProperty('--Xl-textColorMain', theme.palette.text.main);
	body.setProperty('--Xl-textColorContrast', theme.palette.text.contrast);
	body.setProperty('--Xl-fontUrl', theme.typography.fontUrl);
	body.setProperty('--Xl-format', theme.typography.format);
};
