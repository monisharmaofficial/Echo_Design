/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montreal': ['"Neue Montreal Regular"', 'sans-serif'],
        'founders': ['"Test Founders Gtsk X-Cond Smb"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}