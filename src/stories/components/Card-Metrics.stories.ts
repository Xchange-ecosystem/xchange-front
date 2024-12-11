import type { Meta, StoryObj } from "@storybook/angular";
import { CardMetricsComponent } from "projects/ngx-xchange-ui/src/public-api";

const meta: Meta<CardMetricsComponent> = {
  title: "xChange/MetricsComponent",
  component: CardMetricsComponent,
  tags: ["autodocs"],
  render: (args: CardMetricsComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<CardMetricsComponent>;

export const Primary: Story = {
  args: {
    value: 5,
    description: "Just",
    symbol: "€",
    width: "150",
  },
};
