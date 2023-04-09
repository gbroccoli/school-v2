import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from "path";
import { Plugin } from 'vite';

// @ts-ignore
export default defineConfig({
	plugins: <Plugin[]>[
		laravel({
			input: ['resources/ts/app.ts', "resources/scss/app.scss"],
			refresh: true,
			ssr: 'resources/ts/app.ts'
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
		}),
		{
			name: 'html',
			// настройки плагина html
			transformIndexHtml: true,
			// настройки вставки атрибутов
			attrs: {
				// Добавляем атрибут defer для скрипта с именем app
				script: 'defer',
			},
		},
	],
	resolve: {
		alias: {
			"@image": path.resolve(__dirname, "./storage/"),
			"@": path.resolve(__dirname, "./resources/ts/"),
			"@style": path.resolve(__dirname, "./resources/scss/")
		}
	},
});
