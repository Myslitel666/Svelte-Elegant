// src/lib/sharedImports.js
import { type IColorThemeStore } from "$interfaces/color-theme/IColorThemeStore.js";
import { themeStore } from "$stores/ColorThemeStore.js";

export type { IColorThemeStore }; // Explicit type export
export { themeStore }; // Simple export for the Store