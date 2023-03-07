import { Config } from 'tailwindcss';

const {fontFamily } = require('tailwindcss/defaultTheme');

const tailwindConfig: Config = {
	darkMode: 'class',
	content: [
		"./resources/**/*.blade.php",
		"./resources/**/*.ts",
		"./resources/**/*.js",
		"./resources/**/*.vue",
	],
	theme: {
		extend: {
			fontFamily: {
				'sans' : ['IBM\\Plex\\Sans', 'IBM\\Plex\\Sans\\Condensed', 'sans-serif', ...fontFamily.sans]
			}
		},
	},
	plugins: [],
};

export default tailwindConfig;
