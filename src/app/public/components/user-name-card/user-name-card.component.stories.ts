import { StoryObj, Meta } from "@storybook/angular";
import { UserNameCardComponent } from "./user-name-card.component";

const meta: Meta<UserNameCardComponent> = {
  title: "Example/UserNameCardComponent",
  component: UserNameCardComponent,
  tags: ["autodocs"],
  render: (args: UserNameCardComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<UserNameCardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const User_Card_Name: Story = {
  args: {
    name: "User",
    lastName: "Name",
  },
};
