import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  XcIconBanComponent,
  XcIconEnvelopeComponent,
  XcIconEyeComponent,
} from '@xchange-ecosystem/ngx-xchange-icons';
import { ProfileTagsDirective } from '@xchange-ecosystem/ngx-xchange-ui';
import { SuspendModalComponent } from './suspend-modal/suspend-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ProfileTagsDirective,
    XcIconEyeComponent,
    XcIconEnvelopeComponent,
    XcIconBanComponent,
    SuspendModalComponent,
    MessageModalComponent
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent {
  isSuspend = false;
  isMesssage = false;
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

  openMessageModal() {
    this.isMesssage = true
  }
  handleMessageModalClose () {
    this.isMesssage = false
  }

  openSuspendModal () {
    this.isSuspend = true;
  }
  handleSuspendModalClose () {
    this.isSuspend = false
  }

}
