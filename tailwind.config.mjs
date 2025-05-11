/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: '#ffffff',
			grey: '#555555',
			dark: '#000000',
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}