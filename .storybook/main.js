/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};

export default config;
