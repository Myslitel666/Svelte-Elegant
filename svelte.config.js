import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		alias: {
			//Folder Paths
			'$elegant': 'src/lib/elegant',
			'$fonts': 'src/lib/fonts',
			'$icons-elegant': 'src/lib/icons-elegant',
			'$interfaces': 'src/lib/interfaces',
			'$lib': 'src/lib',
			'$stores': 'src/lib/stores',
			'$styles': 'src/lib/styles',
			'$utils': 'src/lib/utils',
			//Files Paths
			'$shared': 'src/lib/sharedImports.js'
		}
	},
};

export default config;
