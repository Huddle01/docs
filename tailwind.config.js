module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: '#272727',
        custom: {
          1: '#202328',
          2: '#101114',
          3: '#C9D1D9',
          4: '#9EA3AE',
          5: '#31363F',
          6: '#C7CAD1',
        },
        rgb: {
          1: 'rgba(32, 35, 40, 1)',
          2: 'rgba(199, 202, 209, 1)',
          3: 'rgba(32, 35, 40, 0.80)',
          4: 'rgba(32, 35, 40, 0.15)',
          5: 'rgba(32, 35, 40, 0.30)',
          6: 'rgba(201, 209, 217, 0.60)',
          7: 'rgba(201, 209, 217, 1)',
          8: 'rgba(201, 209, 217, 0.50)',
          9: ' rgba(36, 107, 253, 0.20)',
          10: 'rgba(201, 209, 217, 0.50)',
          11: 'rgba(36, 107, 253, 0.20)',
          12: 'rgba(73, 132, 253, 1)',
          13: 'rgba(6, 17, 20, 0.50)',
          14: 'rgba(201, 209, 217, 0.70)',
          15: 'rgba(201, 209, 217, 0.90)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};
