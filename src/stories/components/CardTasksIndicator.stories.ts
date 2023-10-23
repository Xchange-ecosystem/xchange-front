import type { Meta, StoryObj } from '@storybook/angular';
import { CardTasksIndicatorComponent } from 'projects/ngx-xchange-ui/src/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardTasksIndicatorComponent> = {
  title: 'xChange/Card Tasks Indicator Component',
  component: CardTasksIndicatorComponent,
  tags: ['autodocs'],
  render: (args: CardTasksIndicatorComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<CardTasksIndicatorComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    icon: "./assets/u_file-check-alt.svg",
    content: "4/5 complete"
  },
};
