/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'fira-sans':['Fira Sans Condensed', 'sans-serif'],
				'Fraunces':['Fraunces Variable','serif'],
			}
		},
	},
	plugins: [],
}
