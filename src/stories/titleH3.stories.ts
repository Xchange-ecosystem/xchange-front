import type { Meta, StoryObj } from '@storybook/angular';
import { TitleH3Component } from 'projects/ngx-xchange-ui/src/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TitleH3Component> = {
  title: 'xChange/Title H3 Component',
  component: TitleH3Component,
  tags: ['autodocs'],
  render: (args: TitleH3Component) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<TitleH3Component>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    titleContent: "Objective title"
  },
};
