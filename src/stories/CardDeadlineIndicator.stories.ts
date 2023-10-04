import type { Meta, StoryObj } from '@storybook/angular';
import { CardDeadlineIndicatorComponent } from 'projects/ngx-xchange-ui/src/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardDeadlineIndicatorComponent> = {
  title: 'xChange/Card Deadline Indicator Component',
  component: CardDeadlineIndicatorComponent,
  tags: ['autodocs'],
  render: (args: CardDeadlineIndicatorComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<CardDeadlineIndicatorComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    deadline: new Date("2023/01/01")
  },
};
