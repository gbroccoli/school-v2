import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { splitVendorChunkPlugin } from 'vite'

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
	// define: {
	// 	'process.env': process.env
	// }
});
