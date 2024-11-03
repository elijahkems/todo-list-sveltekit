import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: '#343541', // Main background
				secondaryBackground: '#40414F', // Container or card background
				lightShade: '#585a6b', // Lighter shade for secondary backgrounds
				primaryText: '#ECECF1', // Primary text
				secondaryText: '#A0A1A7', // Secondary text
				accent: '#10A37F', // Accent color for buttons
				error: '#F56565' // Error color
			}
		}
	},
	plugins: []
} as Config;
