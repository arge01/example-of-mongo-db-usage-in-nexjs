module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fresh: 'var(--fresh)',
        vermillion: 'var(--vermillion)',
        sunshine: 'var(--sunshine)',
        clean: 'var(--clean)',
      },
      fontFamily: {
        quinto: ['Quintessential', 'Montserrat'],
      },
    },
  },
  plugins: [],
};
