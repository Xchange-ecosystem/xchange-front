import { Component } from '@angular/core';
import {
  XcIconArrowRightComponent,
  XcIconCopyComponent,
  XcIconSaveComponent,
} from '@indziaki/ngx-xchange-icons';
import { ToggleComponent } from 'projects/ngx-xchange-ui/src/components/toggle/toggle.component';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { Copy300Directive } from 'projects/ngx-xchange-ui/src/directives/copy-300/copy-300.directive';
import { Headline300Directive } from 'projects/ngx-xchange-ui/src/directives/headline-300/headline-300.directive';
import { ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    UserHeaderComponent,
    XcIconSaveComponent,
    ProfileTagsDirective,
    XcIconArrowRightComponent,
    XcIconCopyComponent,
    Headline300Directive,
    ToggleComponent,
    Copy300Directive
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
