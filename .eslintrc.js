module.exports = {
  extends: ["airbnb-base", "prettier"],
  rules: {
    // Use double quotes
    quotes: ["error", "double"],
    // Force semicolons
    semi: ["error", "always"],
    // Use 2 spaces to indent our code
    indent: ["error", 2],
    // Avoid unnecessary spaces
    "no-trailing-spaces": ["error"],
  },
};
