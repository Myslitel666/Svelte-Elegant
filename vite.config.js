import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', //ability to connect to the server from a mobile device
		port: 5174 // Укажите другой порт
	}
});