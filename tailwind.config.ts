import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'rl-blue': '#0066ff',
        'rl-green': '#00cc88',
        'rl-purple': '#7c3aed',
        'rl-amber': '#f59e0b',
        'rl-navy': '#0f172a',
        'rl-deep': '#0a0c14',
        'rl-red': '#ff6b6b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
