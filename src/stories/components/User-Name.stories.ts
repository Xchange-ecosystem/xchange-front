import type { Meta, StoryObj } from "@storybook/angular";
import { UserNameCardComponent } from "../../../projects/ngx-xchange-ui/src/public-api";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<UserNameCardComponent> = {
  title: "Xchange User Name",
  component: UserNameCardComponent,
  tags: ["autodocs"],
  render: (args: UserNameCardComponent) => ({
    props: {
      backgroundColor: "black",
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<UserNameCardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    name: "",
    lastname: "",
  },
};
