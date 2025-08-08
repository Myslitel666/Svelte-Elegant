import { writable } from 'svelte/store';

// Хранилище для текущего активного href
export const activeCardId = writable('undefined');