import { Component } from '@angular/core';
import {
  XcIconArrowRightComponent,
  XcIconCopyComponent,
  XcIconSaveComponent,
} from '@indziaki/ngx-xchange-icons';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    UserHeaderComponent,
    XcIconSaveComponent,
    ProfileTagsDirective,
    XcIconArrowRightComponent,
    XcIconCopyComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  saveChanges() {
    alert('Changes saved');
  }
  closeDialog() {
    alert('Dialog closed');
  }
}
