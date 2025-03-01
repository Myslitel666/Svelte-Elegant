import { writable, derived, type Writable, type Readable } from 'svelte/store';
import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore.js';
import { initialCSSVariables } from '../utils/initialCSSVariables.js';

// Начальный режим темы
const themeMode: Writable<string> = writable('light');

// Определение темы оформления пользовательского интерфейса
const theme: Readable<IColorThemeStore> = derived(
  themeMode,
  ($themeMode): IColorThemeStore => ({
    border: {
      elegant: {
        color: $themeMode === 'light' ? 'rgba(130, 130, 130, 0.19)' : 'rgba(0, 0, 0, 0.822)',
      },
      disabled: {
        color: $themeMode === 'light' ? 'rgba(130, 130, 130, 0.27)' : 'rgba(0, 0, 0, 0.625)',
        width: '1px',
      },
      focused: {
        color: $themeMode === 'light' ? 'rgba(130, 130, 130, 0.45)' : 'rgba(0, 0, 0, 0.75)',
      },
      active: {
        color: $themeMode === 'light' ? 'rgba(130, 130, 130, 0.85)' : 'rgba(0, 0, 0, 0.371)',
        width: '2px',
      },
      borderRadius: {
          default: '0.28rem',
          balanced: '0.425rem',
          extra: 'string',
          ultimate: 'string',
      },
    },
    palette: {
      primary: $themeMode === 'light' ? '#5bb056' : '#f41c1c',
      secondary: $themeMode === 'light' ? '#d06bcc' : '#ff35f8',
      background: $themeMode === 'light' ? 'white' : '#050505',
      text: {
        contrast: $themeMode === 'light' ? 'rgba(0, 0, 0, 0.935)' : 'rgba(0, 0, 0, 0.001)',
        main: $themeMode === 'light' ? 'rgba(0, 0, 0, 0.708)' : 'rgba(0, 0, 0, 0.178)',
        label: $themeMode === 'light' ? 'rgba(0, 0, 0, 0.297)' : 'rgba(0, 0, 0, 0.497)',
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
    icon: {
      color: {
        primary: $themeMode === 'light' ? 'rgba(0, 0, 0, 0.54)' : '#e0e0e0'
      }
    },
    surface: {
      header: {
        background: $themeMode === 'light' ? 'rgba(170, 170, 170, 0.0)' : 'rgba(0, 0, 0, 0.872)',
      },
      ghost: {
        background: $themeMode === 'light' ? 'rgba(170, 170, 170, 0.08)' : 'rgba(0, 0, 0, 0.908)',
      },
      filled: {
        background: $themeMode === 'light' ? 'rgba(131, 131, 131, 0.13)' : 'rgba(0, 0, 0, 0.815)',
      },
      solid: {
        background: $themeMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.71)',
      }
    },
    table: {
      palette: {
        background: $themeMode === 'light' ? 'rgba(131, 131, 131, 0.05)' : 'rgba(0, 0, 0, 0.935)',
        hover: $themeMode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(0, 0, 0, 0.897)'
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
