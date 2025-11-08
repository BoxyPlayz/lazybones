import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: "/lazybones/"
,	plugins: [preact()],
	build: {
		"outDir": "dist",
		"emitAssets": true,
	},
	resolve: {
		alias: {
			"@": "/src",
			"react": "preact/compat",
			"react-dom": "Preact/compat"
		}
	}
});
