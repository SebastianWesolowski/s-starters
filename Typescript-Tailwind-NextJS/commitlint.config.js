module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    "type-enum": [
      2,
      "always",
      [
        "test",
        "feat",
        "fix",
        "clean",
        "chore",
        "docs",
        "refactor",
        "style",
        "ci",
        "perf",
        "breaking",
        "config",
        "revert",
        "vercel",
      ],
    ],
  },
};
