import { StoryObj, Meta } from "@storybook/angular";
import { CardsInsightsComponent } from "./cards-insights.component";


const meta: Meta<CardsInsightsComponent>= {
  title:"CardsInsightsComponent",
  component: CardsInsightsComponent,
  tags: ['autodocs'],
  render: (args: CardsInsightsComponent) => ({
    props: {
      ...args,
    }
  })
};

export default meta;
type Story = StoryObj<CardsInsightsComponent>;

export const Cards_Insights: Story = {
  args: {
    insights: {
      completedObjectives: 5,
      activeObjectives: 10,
      suggestedNextSteps: 3,
      involvedProjects: 7
    }
  }
}