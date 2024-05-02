import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
		// https://github.com/hannoeru/vite-plugin-node

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VueDevTools(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
