import type { Meta, StoryObj } from '@storybook/angular';
import { TitlesComponent } from '../../../projects/ngx-xchange-ui/src/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TitlesComponent> = {
  title: 'xChange/Titles',
  component: TitlesComponent,
  tags: ['autodocs'],
  render: (args: TitlesComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<TitlesComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    title:"Welcome to Xscale",
    type:"mainHeading"
  },
};
export const Secondary: Story = {
  args: {
    title:"Welcome to Xscale",
    type:"secondaryHeading"
  },
};
export const Tertiary: Story = {
  args: {
    title:"Welcome to Xscale",
    type:"tertiaryHeading"
  },
};
export const fourth: Story = {
  args: {
    title:"Welcome to Xscale",
    type:"fourthHeading"
  },
};
