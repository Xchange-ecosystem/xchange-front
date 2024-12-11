import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import {
  Meta,
  StoryObj,
  componentWrapperDecorator,
  moduleMetadata,
} from "@storybook/angular";
import { ButtonViewDirective } from "projects/ngx-xchange-ui/src/directives/button-view/button-view.directive";
@Component({
  selector: "adr-dummy",
  template: ` <img src="" alt="Icon" />
    <p [xcButtonView]="'button'">View</p>`,
})
class DummyComponent {}

const meta: Meta<DummyComponent> = {
  title: "xChange/ Button View directive",
  component: DummyComponent,
  decorators: [
    moduleMetadata({
      declarations: [DummyComponent, ButtonViewDirective],
      imports: [CommonModule],
    }),
    //componentWrapperDecorator(
    //  (story) => `<div style="margin: 3em">${story}</div>`
    //),
  ],
};

export default meta;
type Story = StoryObj<DummyComponent>;
export const Primary: Story = {};
