//обновление CSS-переменных значениями из хранилища темы
export const setHoverColor = (e, CSSPropName, CSSPropValue) => {
	const target = e.target;

	if (target instanceof HTMLElement) {
		target.style.setProperty(CSSPropName, CSSPropValue);
	}
};

export function createTouchEffects(hoverStyles, resetStyles, duration = 120) {
	// Храним таймеры для каждой кнопки по её id
	let timers = {};
  
	let isTouchActive = false;
  
	function handleTouchStart(e) {
	  const buttonId = e.target.id; // Получаем уникальный id кнопки
  
	  isTouchActive = true;
  
	  // Устанавливаем hover-стили
	  hoverStyles.forEach((styleObj) => {
		Object.entries(styleObj).forEach(([prop, value]) => {
		  setHoverColor(e, prop, value);
		});
	  });
  
	  // Если для этой кнопки уже был таймер, отменяем его
	  if (timers[buttonId]) {
		cancelAnimationFrame(timers[buttonId]);
		timers[buttonId] = null;
	  }
	}
  
	function handleTouchEnd(e) {
	  const buttonId = e.target.id; // Получаем уникальный id кнопки
	  isTouchActive = false;
  
	  let start = performance.now();
  
	  function animateColorChange(timestamp) {
		let progress = (timestamp - start) / duration;
  
		if (progress < 1) {
		  timers[buttonId] = requestAnimationFrame(animateColorChange); // Сохраняем таймер для этой кнопки
		} else {
		  timers[buttonId] = null;
		  if (!isTouchActive) {
			// Возвращаем стили в исходное состояние
			resetStyles.forEach((styleObj) => {
			  Object.entries(styleObj).forEach(([prop, value]) => {
				setHoverColor(e, prop, value);
			  });
			});
		  }
		}
	  }
  
	  timers[buttonId] = requestAnimationFrame(animateColorChange); // Запускаем таймер для этой кнопки
	}
  
	return { handleTouchStart, handleTouchEnd };
};

export function hexToRgba(hex, k = 0.12) {
	// Убираем #, если он есть
	hex = hex.replace(/^#/, "");
  
	// Если сокращенный HEX (например, #f00), удваиваем символы
	if (hex.length === 3) {
	  hex = hex.split("").map((char) => char + char).join("");
	}
  
	// Разбираем цвета
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);
  
	return `rgba(${r}, ${g}, ${b}, ${k})`;
};
  
  
  
  
