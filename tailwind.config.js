/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wokka-orange': '#FF6B35',
        'wokka-yellow': '#FFB347',
        'wokka-light-orange': '#FFE5D4',
        'wokka-light-yellow': '#FFF3E0',
        'wokka-gray': '#F5F5F5',
        'wokka-dark-gray': '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 