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
    deadline: "2023-01-29T14:25:53.4393092+00:00",
    icon: "static/media/src/stories/assets/u_calendar-alt.svg"
  },
};
export const Secondary: Story = {
  args: {
    deadline: "2023-01-29T14:25:53.4393092+00:00",
    icon: "./assets/u_calendar-alt.svg"
  },
};
