import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileTagsDirective } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-ecosystem-admin',
  standalone: true,
  imports: [
    ProfileTagsDirective,
    NgIf,
    NgClass,
    NgFor
  ],
  templateUrl: './ecosystem-admin.component.html',
  styleUrl: './ecosystem-admin.component.scss'
})
export class EcosystemAdminComponent {
  isNotification = false;

  sections = ['Apperance', 'Legal', 'Credits', 'Templates', 'Members'];

  section: string = 'Apperance';

  changeSection(section: string): void {
    this.section = section;
  }
}
