import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {},
  staticDirs:[
    {from:'../projects/ngx-xchange-ui/src/assets/icons/unicons', to: 'assets/' },
    {from:'../src/assets', to: 'assetsExample/' }
  ],
};
export default config;
