import type { Meta, StoryObj } from "@storybook/angular";
import { CardParagraphComponent } from "projects/ngx-xchange-ui/src/public-api";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardParagraphComponent> = {
  title: "xChange/Card Paragraph Component",
  component: CardParagraphComponent,
  tags: ["autodocs"],
  render: (args: CardParagraphComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<CardParagraphComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    titleContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, doloremque commodi numquam, voluptas suscipit minima architecto totam quo deleniti molestias ab molestiae eveniet ullam fugit.",
  },
};
