/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 32px -12px rgba(15, 23, 42, 0.16)',
        lift: '0 22px 50px -20px rgba(15, 23, 42, 0.28)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['Courier Prime', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(148,163,184,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.13) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
