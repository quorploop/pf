/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#7e22ce',
			secondary: '#a855f7',
			accent: '#3b82f6',
			white: '#fefefe',
			grey: '#555555',
			black: '#000000',
			dark: '#222222',
			lightgrey: '#aaaaaa',
		},
		fontFamily: {
			sans: ['Open Sans', 'sans'],
			serif: ['Playfair Display', 'serif'],
		},
		extend: {
			fontFamily: {
				mono: ['Reddit Mono', 'mono']
			},
			animation: {
				marquee: 'marquee 30s linear infinite',
				marquee2: 'marquee 30s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}