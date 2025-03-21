/* This file allows you to implement a named import. */
/* For Example, import { ColorThemeProvider, Button } from 'svelte-elegant'; */

/* Customization Components */
export { default as ColorThemeSwitch } from './elegant/customization/ColorThemeSwitch.svelte';
export { default as ThemeProvider } from './elegant/customization/ThemeProvider.svelte';

/* Data Display Components */
export { default as DataGrid } from './elegant/data-display/DataGrid.svelte';

/* Input Components */
export { default as AutoComplete } from './elegant/input/AutoComplete.svelte';
export { default as Button } from './elegant/input/Button.svelte';
export { default as ButtonBox } from './elegant/input/ButtonBox.svelte';
export { default as Switch } from './elegant/input/Switch.svelte';
export { default as TextField } from './elegant/input/TextField.svelte';

/* Layout Components */
export { default as Box } from './elegant/layout/Box.svelte';
export { default as Header } from './elegant/layout/Header.svelte';
export { default as TitledBox } from './elegant/layout/TitledBox.svelte';

/* Navigation Components */
export { default as Drawer } from './elegant/navigation/Drawer.svelte';