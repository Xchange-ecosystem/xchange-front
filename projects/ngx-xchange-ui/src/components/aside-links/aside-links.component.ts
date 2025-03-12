import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideLinkDirective } from '../../directives/aside-link/aside-link.directive';
import { XcIconRocketComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconWifiComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconUsersAltComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconChartBarComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconAngleRightComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconSettingComponent } from 'projects/ngx-xchange-icons/src/lib/setting.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
// apuntalos a  la libreria @indziadi
//corrres npm run build:icons

@Component({
  selector: 'xc-aside-links',
  standalone: true,
  imports: [
    RouterModule,
    XcIconChartBarComponent,
    XcIconRocketComponent,
    XcIconWifiComponent,
    XcIconUsersAltComponent,
    AsideLinkDirective,
    XcIconSettingComponent,
    XcIconAngleRightComponent,
    NgSwitch, 
    NgSwitchCase, 
    NgIf
  ],
  templateUrl: './aside-links.component.html',
  styleUrls: ['./aside-links.component.css']
})
export class AsideLinksComponent  {
  @Input() route: string = '/';
  @Input() iconName: string = '';
  @Input() label: string = 'default';
} 
