import { defineConfig, splitVendorChunkPlugin } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from "path";

export default defineConfig({
    plugins: [
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
					isCustomElement: (tag) => ['md-linedivider'].includes(tag),
				}
            }
        }),
		splitVendorChunkPlugin()
    ],

	resolve: {
		alias: {
			"@image": path.resolve(__dirname, "./storage/"),
			"@": path.resolve(__dirname, "./resources/ts/")
		}
	}
});
