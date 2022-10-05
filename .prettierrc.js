module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  semi: true,
  jsxSingleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
