import type { Meta, StoryObj } from '@storybook/angular';
import { TagComponentComponent} from '../../../projects/ngx-xchange-ui/src/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TagComponentComponent> = {
  title: 'xChange/Tag Component',
  component: TagComponentComponent,
  tags: ['autodocs'],
  render: (args: TagComponentComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<TagComponentComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    tagContent: "Projects"
  },
};
