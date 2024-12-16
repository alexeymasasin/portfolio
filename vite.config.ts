import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/portfolio',
	css: {
		modules: {
			generateScopedName: '[name]_[local]_[hash:base64:5]',
		},
	},
});
