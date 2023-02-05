// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
//   },
// };

// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     "postcss-focus-visible": {
//       replaceWith: "[data-focus-visible-added]",
//     },
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
//   },
// };

//
module.exports = {
  plugins: [
    "postcss-import",
    // ["tailwindcss/nesting", { "postcss-nesting": {} }],
    "tailwindcss",
    "autoprefixer",
    // [
    //   "postcss-preset-env",
    //   {
    //     features: {
    //       "nesting-rules": false,
    //     },
    //   },
    // ],
    ["postcss-focus-visible", { replaceWith: "[data-focus-visible-added]" }],
    ["postcss-discard-comments", { removeAll: true }],
    "cssnano",
    // [
    //   "cssnano",
    //   {
    //     preset: ["default", { discardComments: { removeAll: true } }],
    //   },
    // ],
  ],
};

// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]
//
//
// module.exports = {
//   plugins:
//     process.env.NODE_ENV === "production"
//       ? [
//           "postcss-import",
//           "tailwindcss/nesting",
//           "tailwindcss",
//           "autoprefixer",
//           [
//             "postcss-preset-env",
//             {
//               autoprefixer: {
//                 flexbox: "no-2009",
//               },
//               stage: 3,
//               features: {
//                 "custom-properties": false,
//               },
//             },
//           ],
//           ["postcss-focus-visible", { replaceWith: "[data-focus-visible-added]" }],
//         ]
//       : [
//           "postcss-import",
//           "tailwindcss/nesting",
//           "tailwindcss",
//           "autoprefixer",
//           ["postcss-discard-comments", { removeAllButFirst: true }],
//           [
//             "postcss-preset-env",
//             {
//               autoprefixer: {
//                 flexbox: "no-2009",
//               },
//               stage: 3,
//               features: {
//                 "custom-properties": false,
//               },
//             },
//           ],
//           ["postcss-focus-visible", { replaceWith: "[data-focus-visible-added]" }],
//             [
//               "cssnano",
//               {
//                 preset: ["default", { discardComments: { removeAll: true } }],
//               },
//             ],
//         ],
// };

// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]
