import type { Meta, StoryObj } from '@storybook/angular';
import { CardInsightsComponent} from '../../projects/ngx-xchange-ui/src/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
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

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    insights:{
      activeObjectives:5,
      completedObjectives:6,
      involvedProjects:7,
      suggestedNextSteps: 8
    },
    imgSrc: '/assetsExample/img/card-insights-example.jpg'
  },
};
