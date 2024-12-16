import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from '../../../projects/ngx-xchange-ui/src/public-api'

const meta: Meta<ChipComponent> = {
  title: 'xChange/ChipComponent',
  component: ChipComponent,
  tags: ['autodocs'],
  render: (args: any) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<ChipComponent>;

export const Primary: Story = {
  args: {
    dataset: [
      {
        key: '01',
        value: 'Orange',
      },
      {
        key: '02',
        value: 'banana',
      },
      {
        key: '03',
        value: 'Apple',
      },
      {
        key: '04',
        value: 'melon',
      },
      {
        key: '11',
        value: 'Apple',
      },
      {
        key: '07',
        value: 'Melon',
      },
      {
        key: '08',
        value: 'apple',
      },
      {
        key: '09',
        value: 'melon',
      }
    ],
    label: 'Just an example',
    placeholder: 'edit tags',
    chosen: [
      {
        key: '05',
        value: 'kiwi',
      }
    ]
  },
};
