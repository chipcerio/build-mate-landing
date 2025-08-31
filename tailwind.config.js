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
        'pickaxe-blue': '#006ED6',
        'pickaxe-pale-blue': '#AFD8FF',
        'pickaxe-light-orange': '#FFE5D4',
        'pickaxe-light-blue': '#F5FBFE',
        'pickaxe-gray': '#F8F9FA',
        'pickaxe-dark-gray': '#E5E5E5',
        'pickaxe-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
      },
    },
  },
  plugins: [],
};
