import { writable, get } from 'svelte/store';

// Определяем тип для elementId как Writable<number>
const elementId = writable(0);

// Сгенерировать id
const generateIdElement = () => {
	// Получаем текущее значение, увеличиваем на 1 и обновляем store
	elementId.update((n) => n + 1);

	// Получаем текущее значение с помощью get из svelte/store
	const currentId = get(elementId);

	return currentId;
};

// Экспортируем все необходимые элементы
export { elementId, generateIdElement };
