import { Component } from '@angular/core';
import { AsideLinksComponent } from 'projects/ngx-xchange-ui/src/components/aside-links/aside-links.component';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  XcIconChartComponent,
  XcIconCompassComponent,
  XcIconCrosshairComponent,
  XcIconQuestionCircleComponent,
  XcIconRocketComponent,
  XcIconSettingComponent,
  XcIconSignAltComponent,
  XcIconStarComponent,
  XcIconUsersAltComponent,
  XcIconWifiComponent,
} from '@indziaki/ngx-xchange-icons';
import { XcIconAngleRightComponent } from '@indziaki/ngx-xchange-icons';
import { XcLogOutIconComponent } from 'projects/ngx-xchange-icons/src/lib/log-out.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xc-new-aside-nav',
  standalone: true,
  imports: [
    AsideLinksComponent,
    RoundedImageModule,
    NgFor,
    XcIconQuestionCircleComponent,
    XcIconAngleRightComponent,
    NgClass,
    NgIf,
    XcIconCompassComponent,
    XcIconCrosshairComponent,
    XcIconStarComponent,
    XcIconSettingComponent,
    XcIconChartComponent,
    XcIconRocketComponent,
    XcIconWifiComponent,
    XcIconUsersAltComponent,
    XcLogOutIconComponent,
    RouterLink
  ],
  templateUrl: './new-aside-nav.component.html',
  styleUrl: './new-aside-nav.component.css',
})
export class NewAsideNavComponent {
  activeTab: string = 'ecosystem';
  public users = [
    {
      name: 'John Doe',
      imageUrl:
        'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b',
      tags: ['Healt', 'Entrepeneur', 'Lorem'],
      description: 'This is a small description of the user',
      collaborations: 2,
      email: 'tester@gmail.com',
      linkedin: 'https://www.linkedin.com/in/john-doe',
    },
  ];
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
