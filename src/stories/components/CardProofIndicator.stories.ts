import type { Meta, StoryObj } from "@storybook/angular";
import { CardProofsIndicatorComponent } from "projects/ngx-xchange-ui/src/public-api";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardProofsIndicatorComponent> = {
  title: "xChange/Card Proof Indicator Component",
  component: CardProofsIndicatorComponent,
  tags: ["autodocs"],
  render: (args: CardProofsIndicatorComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<CardProofsIndicatorComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    proofsCount: 2,
  },
};
