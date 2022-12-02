module.exports = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  trailingComma: "es5",
  overrides: [
    {
      files: [".eslintrc.js", ".prettierrc.js", "*.json"],
      options: { printWidth: 80 },
    },
  ],
};
