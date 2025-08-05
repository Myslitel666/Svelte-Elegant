export const getBrowser = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const supportedBrowsers = ['opera','firefox','chrome','edge','yabrowser','mibrowser'];
	const words = userAgent.split(" ");
	let i = 1;
	let isBrowserInfoLoading = true;

	const parseKeyWord = (keyWord) => {
		if (!keyWord) return 'unknown'; // Защита от undefined/null

		if (keyWord.includes('opera') || keyWord.includes('opr')) {
			return 'opera';
		}
		else if (keyWord.includes('firefox')) {
			return 'firefox';
		}
		else if (keyWord.includes('chrome')) {
			return 'chrome';
		}
		else if (keyWord.includes('edg')) {
			return 'edge';
		}
		else if (keyWord.includes('yabrowser')) {
			return 'yabrowser';
		}
		else if (keyWord.includes('miuibrowser')) {
			return 'mibrowser';
		}

		return keyWord;
	}

	while (isBrowserInfoLoading) {
		const keyWord = words[words.length - i];
		const browser = parseKeyWord(keyWord);

		if (supportedBrowsers.includes(browser)) {
			return browser;
		}

		if (words.length >= i) {
			i++;
			continue;
		}
		else {
			isBrowserInfoLoading = false;
			return browser;
		}
	}
};