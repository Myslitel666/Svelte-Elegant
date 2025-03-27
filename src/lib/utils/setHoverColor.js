//обновление CSS-переменных значениями из хранилища темы
export const setHoverColor = (e, CSSPropName, CSSPropValue) => {
	const target = e.target;

	if (target instanceof HTMLElement) {
		target.style.setProperty(CSSPropName, CSSPropValue);
	}
};

export function createTouchEffects(setHoverColor, hoverStyles, resetStyles, duration = 185) {
	let touchEndTimer = null;
	let isTouchActive = false;
  
	function handleTouchStart(e) {
	  isTouchActive = true;
  
	  // Устанавливаем hover-стили
	  hoverStyles.forEach((styleObj) => {
		Object.entries(styleObj).forEach(([prop, value]) => {
		  setHoverColor(e, prop, value);
		});
	  });
  
	  if (touchEndTimer) {
		cancelAnimationFrame(touchEndTimer);
		touchEndTimer = null;
	  }
	}
  
	function handleTouchEnd(e) {
	  isTouchActive = false;
	  let start = performance.now();
  
	  function animateColorChange(timestamp) {
		let progress = (timestamp - start) / duration;
		if (progress < 1) {
		  touchEndTimer = requestAnimationFrame(animateColorChange);
		} else {
		  touchEndTimer = null;
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
  
	  touchEndTimer = requestAnimationFrame(animateColorChange);
	}
  
	return { handleTouchStart, handleTouchEnd };
  }
  
  
  
