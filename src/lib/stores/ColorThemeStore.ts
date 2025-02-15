import { writable, derived, type Writable, type Readable } from 'svelte/store';
import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore.js';
import { initialCSSVariables } from '../utils/initialCSSVariables.js';

// Начальный режим темы
const themeMode: Writable<string> = writable('light');

// Определение темы оформления пользовательского интерфейса
const theme: Readable<IColorThemeStore> = derived(
  themeMode,
  ($themeMode): IColorThemeStore => ({
    action: {
      hover: $themeMode === 'light' ? '#fafafa' : '#111',
      selected: $themeMode === 'light' ? '#f5f5f5' : '#1a1a1a',
    },
    border: {
      active: {
        color: $themeMode === 'light' ? '#959595' : '#a0a0a0',
        width: '2px',
      },
      disabled: {
        color: $themeMode === 'light' ? '#bebebe' : '#606060',
        width: '1px',
      },
      focused: {
        color: $themeMode === 'light' ? '#cdcdcd' : '#484848',
      },
      table: {
        color: $themeMode === 'light' ? '#ddd' : '#505050',
      },
      elegant: {
        color: $themeMode === 'light' ? '#e7e7e7' : '#2d2d2d',
      },
      borderRadius: {
          default: '0.28rem',
          balanced: '0.425rem',
          extra: 'string',
          ultimate: 'string',
      }
    },
    colors: {
      primary: $themeMode === 'light' ? '#5bb056' : '#f41c1c',
      secondary: $themeMode === 'light' ? '#d06bcc' : '#ff35f8',
      background: $themeMode === 'light' ? 'white' : '#050505',
      text: {
        primary: $themeMode === 'light' ? '#111' : '#fefefe',
        label: $themeMode === 'light' ? '#b3b3b3' : '#808080',
      }
    },
    controls: {
      button: {
        padding: '0.85rem',
        filter: $themeMode === 'light' ? 'brightness(108%)' : 'contrast(70%)',
      },
      textField: {
        padding: '0.85rem',
      },
      height: '3rem',
      width: '15rem',
    },
    disabled: {
      expressed: $themeMode === 'light' ? '#757575' : '#e0e0e0',
      fill: $themeMode === 'light' ? '#e5e5e5' : '#4a4a4a',
      touch: $themeMode === 'light' ? '#efefef' : '#2f2f2f',
      elegant: $themeMode === 'light' ? '#f5f5f5' : '#2f2f2f',
    },
    surface: {
      header: {
        background: $themeMode === 'light' ? 'white' : '#212121',
      },
      hoverable: {
        background: $themeMode === 'light' ? '#f8f8f8' : '#101010',
      },
      solid: {
        background: $themeMode === 'light' ? '#f6f6f6' : '#171717',
      }
    },
    typography: {
      font: 'Century Gothic',
      fontUrl: './fonts/century-gothic-original/century-gothic.ttf',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '100',
      format: 'truetype',
      letterSpacing: '-0.02rem',
    },
    effectsTimeCode: '0.3s',
    themeMode: $themeMode, // добавляем режим темы, чтобы отслеживать его изменения
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
