import { NgFor, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { XcIconQuestionCircleComponent, XcIconAngleRightComponent, XcIconCompassComponent, XcIconCrosshairComponent, XcIconStarComponent, XcIconSettingComponent, XcIconChartComponent, XcIconRocketComponent, XcIconWifiComponent, XcIconUsersAltComponent, XcLogOutIconComponent } from '@indziaki/ngx-xchange-icons';
import { AsideLinksComponent, RoundedImageModule } from '@indziaki/ngx-xchange-ui';

type BottomMenuType = 'profile' | 'support' | 'logout' | '';

@Component({
  selector: 'xc-burger-menu',
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
    RouterLink,
    XcLogOutIconComponent
  ],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent {
  @Output() menuToggle = new EventEmitter<void>();
  activeTab: string = 'ecosystem';
  selectedMenu: BottomMenuType = '';
  isOpen = false;

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
    this.selectedMenu = '';
    this.activeTab = tab;
  }

  selectMenu(menu: BottomMenuType): void {
    this.selectedMenu = menu;
    this.activeTab = 'ecosystem';
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }
}
