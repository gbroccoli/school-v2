import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from "path";
import { Plugin } from 'vite';

export default defineConfig({
	plugins: <Plugin[]>[
		laravel({
			input: ['resources/ts/app.ts'],
			refresh: true,
		}),
		vue({
			template: {
				transformAssetUrls: {
					base: null,
					includeAbsolute: false,
				},
				compilerOptions: {
					isCustomElement: (tag: string) => ['md-linedivider'].includes(tag),
				}
			}
		})
	],
	resolve: {
		alias: {
			"@image": path.resolve(__dirname, "./storage/"),
			"@": path.resolve(__dirname, "./resources/ts/"),
			"@style": path.resolve(__dirname, "./resources/scss/")
		}
	},
});
