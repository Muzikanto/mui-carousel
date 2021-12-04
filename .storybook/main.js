const path = require('path');

module.exports = {
   stories: ['../examples/**/*.stories.tsx'],
   addons: ['@storybook/addon-storysource/register'],
   webpackFinal: async config => {
      config.module.rules.push({
         test: /\.(ts|tsx)$/,
         use: [
            {
               loader: require.resolve('babel-loader'),
               options: {
                  cwd: path.resolve(''),
                  presets: [['react-app', { flow: false, typescript: true }]],
               },
            },
            {
               loader: require.resolve('@storybook/source-loader'),
               options: { parser: 'typescript' },
            },
         ],
      });

      config.resolve.extensions.push('.ts', '.tsx');

      return config;
   },
};
