/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Patrick Hand"', '"Caveat"', 'cursive'],
        sketch: ['"Caveat"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        desk: {
          dark: '#1c1815',
          wood: '#2c221c',
          mat: '#1e332d',
          grid: '#2f4f46',
          paper: '#f9f6ee',
          ink: '#181b22',
          stamp: '#b91c1c',
        },
      },
      boxShadow: {
        desk: '0 20px 35px -5px rgba(0, 0, 0, 0.4), 0 10px 15px -5px rgba(0, 0, 0, 0.25)',
        lifted: '0 25px 40px -10px rgba(0, 0, 0, 0.5), 0 15px 20px -8px rgba(0, 0, 0, 0.35)',
        gdd: '0 30px 60px -12px rgba(0, 0, 0, 0.65), 0 18px 36px -18px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
