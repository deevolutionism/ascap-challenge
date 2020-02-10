module.exports = {
  // setup dir where storybook can find story files
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  // other webpack configs here.
  // in this case, storybook needs the sass style loader
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    });

    return config;
  }
};
