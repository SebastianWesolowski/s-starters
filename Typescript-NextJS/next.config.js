/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withTM = require('next-transpile-modules')(['@mui/material', '@mui/system']); // pass the modules you would like to see transpiled

module.exports = withBundleAnalyzer(
  withTM({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,

    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          and: [/\.(js|ts)x?$/],
        },
        use: ['@svgr/webpack'],
      });

      config.resolve.alias = {
        ...config.resolve.alias,
        '@mui/styled-engine': '@mui/styled-engine-sc',
      };

      return config;
    },
  })
);
