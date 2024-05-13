module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CSS DARK THEME PRIMARY COLORS
        'primary-100': '#03a9f4',
        'primary-200': '#4ab2f5',
        'primary-300': '#6abcf7',
        'primary-400': '#84c5f8',
        'primary-500': '#9bcefa',
        'primary-600': '#b1d8fb',

        // CSS DARK THEME SURFACE COLORS
        'surface-100': '#121212',
        'surface-200': '#282828',
        'surface-300': '#3f3f3f',
        'surface-400': '#575757',
        'surface-500': '#717171',
        'surface-600': '#8b8b8b',

        // CSS DARK THEME MIXED SURFACE COLORS
        'surface-mixed-100': '#275879',
        'surface-mixed-200': '#416987',
        'surface-mixed-300': '#597a95',
        'surface-mixed-400': '#718ca4',
        'surface-mixed-500': '#889eb3',
        'surface-mixed-600': '#9fb1c2',
      },
    },
  },
  plugins: [],
};
