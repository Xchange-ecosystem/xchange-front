import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AsideLinkDirective } from '../../directives/aside-link/aside-link.directive';
import { XcIconSlidersVComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconAngleRightComponent } from '@indziaki/ngx-xchange-icons';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
// apuntalos a  la libreria @indziadi
//corrres npm run build:icons

@Component({
  selector: 'xc-aside-links',
  standalone: true,
  imports: [
    RouterModule,
    AsideLinkDirective,
    XcIconAngleRightComponent,
    NgSwitch, 
    NgSwitchCase, 
    NgIf,
    XcIconSlidersVComponent,
    RouterLink
  ],
  templateUrl: './aside-links.component.html',
  styleUrls: ['./aside-links.component.css']
})
export class AsideLinksComponent  {
  @Input() route: string = '/';
  @Input() iconName: string = '';
  @Input() label: string = 'default';
} 
