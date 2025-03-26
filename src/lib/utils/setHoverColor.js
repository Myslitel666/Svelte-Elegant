import { get } from 'svelte/store';
import { themeStore } from '$lib/stores/ThemeStore.js';

//обновление CSS-переменных значениями из хранилища темы
export const setHoverColor = (e, CSSPropName, CSSPropValue) => {
	const target = e.target;

	if (target instanceof HTMLElement) {
		target.style.setProperty(CSSPropName, CSSPropValue);
	}
};
