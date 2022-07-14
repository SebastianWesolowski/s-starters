module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: ["feat", "fix", "clean", "style", "refactor", "perf", "ci", "config", "chore", "docs", "test", "breaking"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "scope", "subject", "lerna"],
  scopes: [],
  types: {
    chore: {
      description: "Build process or auxiliary tool changes",
      emoji: "🔧",
      value: "chore",
    },
    ci: {
      description: "CI related changes",
      emoji: "🎡",
      value: "ci",
    },
    clean: {
      description: "Sorting or cleaning out the code",
      emoji: "🧹",
      value: "clean",
    },
    docs: {
      description: "Documentation only changes",
      emoji: "📚️",
      value: "docs",
    },
    feat: {
      description: "A new feature",
      emoji: "✨",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "A code change that improves performance",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      emoji: "♻️",
      value: "refactor",
    },
    release: {
      description: "Create a release commit",
      emoji: "🚀",
      value: "release",
    },
    style: {
      description: "Markup, white-space, formatting, missing semi-colons...",
      emoji: "🎨",
      value: "style",
    },
    test: {
      description: "Adding missing tests",
      emoji: "🚨",
      value: "test",
    },
    breaking: {
      description: "Introducing breaking changes.",
      emoji: "💥",
      value: "breaking",
    },
    config: {
      description: "Changing configuration files.",
      emoji: "⚙️",
      value: "config",
    },
  },
};
