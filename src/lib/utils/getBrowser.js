export const getBrowser = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const words = userAgent.split(" ");
	const lastWord = words[words.length - 1];

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
    else if (lastWord.includes('firefox')) {
		return 'edge';
	}
    else if (lastWord.includes('firefox')) {
		return 'yandex';
	}

    return lastWord;
};