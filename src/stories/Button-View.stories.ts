import type { Meta, StoryObj } from '@storybook/angular';
import { CardButtonViewComponent } from 'projects/ngx-xchange-ui/src/components/car-button-view/card-button-view/card-button-view.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardButtonViewComponent> = {
  title: 'xChange/Card Button Porbe',
  component: CardButtonViewComponent,
  tags: ['autodocs'],
  render: (args: CardButtonViewComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<CardButtonViewComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    icon: "./assets/Right_4.svg"
  },
};
