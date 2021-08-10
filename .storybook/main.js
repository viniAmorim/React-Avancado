module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs'
  ]
}
