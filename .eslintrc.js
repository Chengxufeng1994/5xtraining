module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "prettier",
    "jsx-a11y",
  ],
  rules: {
    "jsx-a11y/href-no-hash": ["off"],
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": {
      "extensions": [".js", ".jsx"]
    },
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off"
  }
};