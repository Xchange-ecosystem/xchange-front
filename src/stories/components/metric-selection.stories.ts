import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MetricsSelectionComponent } from 'projects/ngx-xchange-ui/src/public-api';
import { ChangeDetectorRef } from '@angular/core';

const meta: Meta<MetricsSelectionComponent> = {
  title: 'xChange/Metrics Selection',
  component: MetricsSelectionComponent,
  decorators: [
    moduleMetadata({
      // Mocking ChangeDetectorRef or other dependencies
      providers: [
        {
          provide: ChangeDetectorRef,
          useValue: {
            markForCheck: () => {},
            detectChanges: () => {},
            detach: () => {},
            reattach: () => {},
            checkNoChanges: () => {},
          },
        },
      ],
    }),
  ],
  render: (args) => ({
    props: {
      ...args,
      selection: args.selection || 'rating',
      setValue: args.setValue,
      showMode: args.showMode,
      unitValue: args.unitValue,
      blockElement: args.blockElement
    },
  }),
  argTypes: {
    selection: { control: 'text', options: ['metric', 'rating', 'select'] },
    setValue: { control: 'text' },
    showMode: { control: 'text' },
    unitValue: { control: 'number'},
    blockElement: { control: 'boolean' }
  },
};

export default meta;
type Story = StoryObj<MetricsSelectionComponent>;

export const Primary: Story = {
  args: {
    selection: 'metric',
    setValue: 'Select a value',
    unitValue: 500
  },
};
export const Secondary: Story = {
  args: {
    selection: 'select',
    setValue: 'Select a value',
  },
};
export const Tertiary: Story = {
  args: {
    selection: 'rating',
    setValue: 'Select a value',
  },
};