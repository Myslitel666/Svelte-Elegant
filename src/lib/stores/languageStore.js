import { writable } from 'svelte/store';

// Инициализируем хранилище с начальным значением 'en'
export const languageStore = writable('en');