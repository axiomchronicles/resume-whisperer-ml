import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'progress-fill': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--progress-width)' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'progress-fill': 'progress-fill 1s ease-out',
				'spin-slow': 'spin-slow 3s linear infinite',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite'
			}
		}
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						background: "#ffffff",
						foreground: "#11181C",
						primary: {
							50: "#e6fffa",
							100: "#b3f5e8",
							200: "#7fead5",
							300: "#4cdfbf",
							400: "#1dd4aa",
							500: "#16a085",
							600: "#12906f",
							700: "#0e7a5a",
							800: "#0a6344",
							900: "#064d2f",
							DEFAULT: "#16a085",
							foreground: "#ffffff",
						},
						secondary: {
							50: "#f0f9ff",
							100: "#e0f2fe",
							200: "#bae6fd",
							300: "#7dd3fc",
							400: "#38bdf8",
							500: "#0ea5e9",
							600: "#0284c7",
							700: "#0369a1",
							800: "#075985",
							900: "#0c4a6e",
							DEFAULT: "#0ea5e9",
							foreground: "#ffffff",
						},
						success: {
							50: "#f0fdf4",
							100: "#dcfce7",
							200: "#bbf7d0",
							300: "#86efac",
							400: "#4ade80",
							500: "#22c55e",
							600: "#16a34a",
							700: "#15803d",
							800: "#166534",
							900: "#14532d",
							DEFAULT: "#22c55e",
							foreground: "#ffffff",
						},
						warning: {
							50: "#fffbeb",
							100: "#fef3c7",
							200: "#fde68a",
							300: "#fcd34d",
							400: "#fbbf24",
							500: "#f59e0b",
							600: "#d97706",
							700: "#b45309",
							800: "#92400e",
							900: "#78350f",
							DEFAULT: "#f59e0b",
							foreground: "#ffffff",
						},
						danger: {
							50: "#fef2f2",
							100: "#fee2e2",
							200: "#fecaca",
							300: "#fca5a5",
							400: "#f87171",
							500: "#ef4444",
							600: "#dc2626",
							700: "#b91c1c",
							800: "#991b1b",
							900: "#7f1d1d",
							DEFAULT: "#ef4444",
							foreground: "#ffffff",
						},
					},
				},
				dark: {
					colors: {
						background: "#0a0a0a",
						foreground: "#ecedee",
						primary: {
							50: "#064d2f",
							100: "#0a6344",
							200: "#0e7a5a",
							300: "#12906f",
							400: "#16a085",
							500: "#1dd4aa",
							600: "#4cdfbf",
							700: "#7fead5",
							800: "#b3f5e8",
							900: "#e6fffa",
							DEFAULT: "#1dd4aa",
							foreground: "#000000",
						},
					},
				},
			},
		}),
	],
} satisfies Config;