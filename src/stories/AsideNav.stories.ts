import { AngularRenderer, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AsideNavButtonDirective, AsideNavComponent } from '../../projects/ngx-xchange-ui/src/public-api';
import {XcIconRocketComponent, XcIconCreateDashboardComponent, XcIconUserComponent} from '../../projects/ngx-xchange-icons/src/public-api';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
const meta: Meta<AsideNavComponent> = {
  title: 'Components/ Aside Nav',
  component: AsideNavComponent,
  tags: ['autodocs'],
  render: (args: any) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
    template: `
    <xc-aside-nav>
      <a href="projects">
        <img src="./assetsExample/icons/u_create-dashboard.svg" alt="Nav icon"/>
      </a>
      <a href="#">
        <img src="./assetsExample/icons/fi_users.svg" alt="Nav icon"/>
      </a>
    </xc-aside-nav>`
  }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, XcIconRocketComponent, XcIconCreateDashboardComponent, XcIconUserComponent],
    }),
  ],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<AsideNavComponent>;

export const Primary: Story = {
  args: { },
};
