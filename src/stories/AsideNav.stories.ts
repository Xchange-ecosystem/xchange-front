import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AsideNavComponent } from '../../projects/ngx-xchange-ui/src/public-api';
import {XcIconRocketComponent, XcIconCreateDashboardComponent, XcIconUserComponent} from '../../projects/ngx-xchange-icons/src/public-api';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
const meta: Meta<AsideNavComponent> = {
  title: 'Components/ Aside Nav',
  component: AsideNavComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, XcIconRocketComponent, XcIconCreateDashboardComponent, XcIconUserComponent],
    }),
  ],
  argTypes: {
    theme: {control: 'text', options:['black', 'white']},
    isOpen: {control: 'boolean', options:[true, false]}
  },
};

export default meta;
type Story = StoryObj<AsideNavComponent>;

export const Primary: Story = {
  args: { 
    theme: 'black',
    isOpen: true,
  },
  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `
          <xc-aside-nav [theme]="theme" [isOpen]="isOpen">
        <!-- Aquí se proyectan los íconos usando ng-content -->
        <a href="projects">
          <xc-icon-rocket style="stroke: white"></xc-icon-rocket>
        </a>
        <a href="users">
          <xc-icon-user style="stroke: white"></xc-icon-user>
        </a>
      </xc-aside-nav>`
  }),
};
export const Secondary: Story = {
  args: { 
    theme: 'white',
    isOpen: false
  },
  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `
          <xc-aside-nav [theme]="theme" [isOpen]="isOpen">
        <!-- Aquí se proyectan los íconos usando ng-content -->
        <a href="projects">
          <xc-icon-rocket class="stroke-white"></xc-icon-rocket>
        </a>
        <a href="users">
          <xc-icon-user class="stroke-white"></xc-icon-user>
        </a>
      </xc-aside-nav>`
  }),
};
