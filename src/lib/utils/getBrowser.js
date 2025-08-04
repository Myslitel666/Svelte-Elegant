export const getBrowser = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const words = userAgent.split(" ");
	let lastWord = words[words.length - 1];

	if (lastWord.includes('safari') && words.length > 1) lastWord = words[words.length - 2];

	//Применяем thin scroll для всех, кроме Opera
	if (lastWord.includes('opera') || lastWord.includes('opr')) {
		return 'opera';
	}
	else if (lastWord.includes('firefox')) {
		return 'firefox';
	}
    else if (lastWord.includes('chrome')) {
		return 'chrome';
	}
    else if (lastWord.includes('edg')) {
		return 'edge';
	}
    else if (lastWord.includes('yabrowser')) {
		return 'yabrowser';
	}

    return lastWord;
};