import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { TittleDirective } from 'projects/ngx-xchange-ui/src/directives/tittle/tittle.directive';
@Component({
  selector: 'adr-dummy',
  template: `
      <p xcTittle >Click</p>`
})
class DummyComponent {
}

const meta: Meta<DummyComponent> = {
  title: 'xChange/HeaderComponent',
  component: DummyComponent,
  decorators: [
    moduleMetadata({
      declarations: [DummyComponent, TittleDirective],
      imports: [CommonModule],
    }),
    //componentWrapperDecorator(
    //  (story) => `<div style="margin: 3em">${story}</div>`
    //),
  ],
};

export default meta;
type Story = StoryObj<DummyComponent>;
export const Primary: Story = {
}
