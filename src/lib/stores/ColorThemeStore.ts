import { writable, derived, type Writable, type Readable } from 'svelte/store';
import { type IColorThemeStore } from '$interfaces/color-theme/IColorThemeStore.js';
import { initialCSSVariables } from '$utils/initialCSSVariables.js';

// Начальный режим темы
const themeMode: Writable<string> = writable('light');

// Определение темы оформления пользовательского интерфейса
const theme: Readable<IColorThemeStore> = derived(
	themeMode,
	($themeMode): IColorThemeStore => ({
		border: {
			elegant: {
				color: $themeMode === 'light' ? '#E7E7E7' : '#2C2C2C'
			},
			disabled: {
				color: $themeMode === 'light' ? '#D6D6D6' : '#3D3D3D',
				width: '1px'
			},
			focused: {
				color: $themeMode === 'light' ? '#CACACA' : '#5C5C5C'
			},
			active: {
				color: $themeMode === 'light' ? '#959595' : '#A0A0A0',
				width: '2px'
			},
			borderRadius: {
				default: '0.28rem',
				balanced: '0.425rem',
				extra: 'string',
				ultimate: 'string'
			}
		},
		palette: {
			primary: $themeMode === 'light' ? '#5BB056' : '#F41C1C',
			secondary: $themeMode === 'light' ? '#D06BCC' : '#FF35F8',
			background: $themeMode === 'light' ? '#FFFFFF' : '#050505',
			text: {
				contrast: $themeMode === 'light' ? '#111111' : '#FEFEFE',
				main: $themeMode === 'light' ? '#4A4A4A' : '#D2D2D2',
				label: $themeMode === 'light' ? '#B4B4B4' : '#808080'
			}
		},
		controls: {
			button: {
				padding: '0.85rem',
				filter: $themeMode === 'light' ? 'brightness(108%)' : 'contrast(70%)'
			},
			textField: {
				padding: '0.85rem'
			},
			height: '3rem',
			width: '15rem'
		},
		icon: {
			color: {
				primary: $themeMode === 'light' ? '#757575' : '#E0E0E0'
			}
		},
		surface: {
			header: {
				background: $themeMode === 'light' ? '#FFFFFF' : '#212121'
			},
			ghost: {
				background: $themeMode === 'light' ? '#F7F7F7' : '#181818'
			},
			filled: {
				background: $themeMode === 'light' ? '#EEEEEE' : '#212121'
			},
			solid: {
				background: $themeMode === 'light' ? '#E2E2E2' : '#404040'
			}
		},
		typography: {
			font: 'Century Gothic',
			fontUrl: './fonts/century-gothic-original/century-gothic.ttf',
			fontSize: '16px',
			fontStyle: 'normal',
			fontWeight: '100',
			format: 'truetype',
			letterSpacing: '-0.02rem'
		},
		effectsTimeCode: '0.3s',
		themeMode: $themeMode // добавляем режим темы, чтобы отслеживать его изменения
	})
);

// Функция, которая возвращает противоположную тему
const getOppositeTheme = (theme: string): string => {
	return theme === 'light' ? 'dark' : 'light';
};

// Функция для переключения режима темы
const toggleThemeMode = (): void => {
	// Обновление значения themeMode
	themeMode.update((current) => {
		const newTheme = getOppositeTheme(current);
		return newTheme;
	});
	// Обновление глобальных CSS-переменных
	initialCSSVariables();
};

// Экспортируем все необходимые элементы
export { theme as themeStore, themeMode, toggleThemeMode };
