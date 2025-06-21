
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1e40af',
					foreground: '#ffffff',
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
				secondary: {
					DEFAULT: '#1a1f2e',
					foreground: '#e2e8f0'
				},
				accent: {
					DEFAULT: '#0f1419',
					foreground: '#e2e8f0'
				},
				muted: {
					DEFAULT: '#1a1f2e',
					foreground: '#94a3b8'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				card: {
					DEFAULT: 'rgba(15, 20, 25, 0.8)',
					foreground: '#e2e8f0'
				},
				popover: {
					DEFAULT: 'rgba(15, 20, 25, 0.95)',
					foreground: '#e2e8f0'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tech: {
					dark: '#0a0a1a',
					darker: '#050509',
					blue: '#1e40af',
					lightBlue: '#3b82f6',
					glow: 'rgba(59, 130, 246, 0.2)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'tech-gradient': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
				'dark-tech': 'linear-gradient(135deg, #0a0a1a 0%, #0f1419 25%, #1a1f2e 50%, #0f1419 75%, #0a0a1a 100%)',
				'blue-glow': 'linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%)',
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'slide-up': 'slideUp 0.8s ease-out',
				'slide-down': 'slideDown 0.8s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out',
				'zoom-in': 'zoomIn 0.5s ease-out',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.8' }
				},
				glow: {
					'0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
					'100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }
				},
				slideUp: {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideDown: {
					'0%': { transform: 'translateY(-100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				zoomIn: {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
