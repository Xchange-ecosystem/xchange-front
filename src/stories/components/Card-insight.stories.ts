import type { Meta, StoryObj } from '@storybook/angular';
import { CardInsightsComponent } from '../../../projects/ngx-xchange-ui/src/public-api';

const meta: Meta<CardInsightsComponent> = {
  title: 'xChange/CardInsightsComponent',
  component: CardInsightsComponent,
  tags: ['autodocs'],
  render: (args: CardInsightsComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<CardInsightsComponent>;

export const Primary: Story = {
  args: {
    value: 5,
    description: 'Just an example'
  },
};
