module.exports = {
  "stories": [
    "../packages/**/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        implementation: require('sass'),
        rule: {
          test: /\.(scss|sass)/i,
        }
      }
    }
  ],
  "framework": "@storybook/vue"
}