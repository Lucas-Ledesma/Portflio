/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {},
		keyframes: {
			blob: {
				'0%': {
					transform: 'translate(0px, 0px) scale(1)',
				},
				'33%': {
					transform: 'translate(30px, -50px) scale(1.1)',
				},
				'66%': {
					transform: 'translate(-20px, -20px) scale(0.9)',
				},
				'100%': {
					transform: 'translate(0px, 0px) scale(1)',
				},
			},
			gradient: {
				'0%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '50% 50%' },
				'100%': { backgroundPosition: '100% 50%' },
			},
			'accordion-down': {
				from: { height: '0' },
				to: {
					height: 'var(--radix-accordion-content-height)',
				},
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)',
				},
				to: { height: '0' },
			},
		},
		animation: {
			blob: 'blob 7s infinite',
			gradient: 'gradient 6s linear infinite',
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
		},
	},
	plugins: [],
}
