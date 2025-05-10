import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  XcIconBanComponent,
  XcIconEnvelopeComponent,
  XcIconEyeComponent,
} from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    NgFor,
    ProfileTagsDirective,
    XcIconEyeComponent,
    XcIconEnvelopeComponent,
    XcIconBanComponent,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent {
  users = [
    { name: 'Alice Johnson', roles: 'Admin', status: 'Accepted' },
    { name: 'Bob Smith', roles: 'Editor', status: 'Suspended' },
    { name: 'Carla Diaz', roles: 'Viewer', status: 'Pending' },
    { name: 'David Lee', roles: 'Admin', status: 'Accepted' },
    { name: 'Alice Johnson', roles: 'Admin', status: 'Accepted' },
    { name: 'Bob Smith', roles: 'Editor', status: 'Suspended' },
    { name: 'Carla Diaz', roles: 'Viewer', status: 'Pending' },
    { name: 'David Lee', roles: 'Admin', status: 'Accepted' },
  ];

  openModal(type: string, user: any) {
    console.log(`Open ${type} modal for`, user);
  }
}
