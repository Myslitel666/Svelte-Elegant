import { writable, get, type Writable } from 'svelte/store';

// Определяем тип для elementId как Writable<number>
const elementId: Writable<number> = writable(0);

// Сгенерировать id
const generateIdElement = (): number => {
	// Получаем текущее значение, увеличиваем на 1 и обновляем store
	elementId.update((n) => n + 1);

	// Получаем текущее значение с помощью get из svelte/store
	const currentId = get(elementId);

	return currentId;
};

// Экспортируем все необходимые элементы
export { elementId, generateIdElement };
