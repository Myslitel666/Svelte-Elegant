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
  }
  
  
  
  
