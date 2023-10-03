import type { Meta, StoryObj } from '@storybook/angular';
import { TagComponent } from '../../projects/ngx-xchange-ui/src/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TagComponent> = {
  title: 'xChange/TagComponent',
  component: TagComponent,
  tags: ['autodocs'],
  render: (args: TagComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<TagComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    insights:{
      activeObjectives:5,
      completedObjectives:6,
      involvedProjects:7,
      suggestedNextSteps: 8
    }
  },
};
