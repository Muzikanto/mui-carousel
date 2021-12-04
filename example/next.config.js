/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  basePath: "/mui-carousel",
  assetPrefix: '/mui-carousel/',

  webpack: (webpackConfig, options) => {
    webpackConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          ...options.defaultLoaders.babel,
          options: {
            ...options.defaultLoaders.babel.options,
          },
        },
      ],
      exclude: /node_modules/,
    });

    return webpackConfig;
  },
};
