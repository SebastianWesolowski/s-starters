const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const nextConfiguration = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/privacy-policy': { page: '/privacy-policy' },
    };
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false, path: false };
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|md)x?$/],
      },
      use: ['@svgr/webpack'],
    });

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }

    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  ...nextConfiguration,
});

module.exports = withBundleAnalyzer({});
