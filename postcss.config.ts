import { Plugin } from 'postcss';

module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
} as {
	plugins: {
		tailwindcss: Plugin;
		autoprefixer: Plugin;
	};
	[key: string]: any;
};
