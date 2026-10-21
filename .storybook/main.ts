import type {StorybookConfig} from '@storybook/angular-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular-vite',
    options: {}
  }
};

export default config;
