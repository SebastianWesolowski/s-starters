const browsersList = require("./tools/transform-browser-list/index")("./.browserslistrc");

module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-tailwindcss",
    "stylelint-prettier/recommended",
    "stylelint-config-rational-order",
  ],
  plugins: ["stylelint-scss", "stylelint-no-unresolved-module", "stylelint-no-unsupported-browser-features"],
  rules: {
    "plugin/no-unresolved-module": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer", "variants", "responsive", "screen"],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer", "variants", "responsive", "screen"],
      },
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        browsers: browsersList,
        ignorePartialSupport: true,
      },
    ],
  },
};
