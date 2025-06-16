import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  XcIconBanComponent,
  XcIconEditComponent,
  XcIconEnvelopeComponent,
  XcIconPadlockComponent,
  XcIconSearchComponent,
  XcIconTimesComponent,
} from '@indziaki/ngx-xchange-icons';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { SuspendMemberComponent } from './suspend-member/suspend-member.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { SendMessageComponent } from './send-message/send-message.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    XcIconSearchComponent,
    XcIconEditComponent,
    XcIconEnvelopeComponent,
    XcIconPadlockComponent,
    XcIconBanComponent,
    EditMemberComponent,
    SuspendMemberComponent,
    SetPasswordComponent,
    SendMessageComponent,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent {
  isEditMemeber = false;
  isSuspendMember = false;
  isSendMessage = false;
  isSetNewPassword = false;

  openEditModal() {
    this.isEditMemeber = true;
  }
  closeEditModal() {
    this.isEditMemeber = false;
  }

  openSuspendModal() {
    this.isSuspendMember = true;
  }
  closeSuspendModal() {
    this.isSuspendMember = false;
  }

  openEmailModal() {
    this.isSendMessage = true;
  }
  closeEmailModal() {
    this.isSendMessage = false;
  }

  openPasswordModal() {
    this.isSetNewPassword = true;
  }
  closePasswordModal() {
    this.isSetNewPassword = false;
  }

  members = [
    { email: 'jose.jimenez@gmail.com', firstName: 'Jose', lastName: 'Jimenez' },
    { email: 'maria.lopez@example.com', firstName: 'Maria', lastName: 'Lopez' },
    {
      email: 'carlos.garcia@example.com',
      firstName: 'Carlos',
      lastName: 'Garcia',
    },
    {
      email: 'ana.martinez@example.com',
      firstName: 'Ana',
      lastName: 'Martinez',
    },
    {
      email: 'luis.hernandez@example.com',
      firstName: 'Luis',
      lastName: 'Hernandez',
    },
    { email: 'laura.perez@example.com', firstName: 'Laura', lastName: 'Perez' },
    {
      email: 'fernando.ruiz@example.com',
      firstName: 'Fernando',
      lastName: 'Ruiz',
    },
    {
      email: 'sofia.navarro@example.com',
      firstName: 'Sofia',
      lastName: 'Navarro',
    },
    {
      email: 'pedro.mendoza@example.com',
      firstName: 'Pedro',
      lastName: 'Mendoza',
    },
    {
      email: 'valeria.torres@example.com',
      firstName: 'Valeria',
      lastName: 'Torres',
    },
    {
      email: 'valeria.torres@example.com',
      firstName: 'Valeria',
      lastName: 'Torres',
    },
    {
      email: 'valeria.torres@example.com',
      firstName: 'Valeria',
      lastName: 'Torres',
    },
    {
      email: 'valeria.torres@example.com',
      firstName: 'Valeria',
      lastName: 'Torres',
    },
    {
      email: 'valeria.torres@example.com',
      firstName: 'Valeria',
      lastName: 'Torres',
    },
    {
      email: 'valeria.torres@example.com',
      firstName: 'Valeria',
      lastName: 'Torres',
    },
  ];
}
