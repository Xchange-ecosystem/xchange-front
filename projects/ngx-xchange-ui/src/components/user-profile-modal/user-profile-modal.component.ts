import { Component, Input } from '@angular/core';
import { ProfileTagsDirective } from '../../directives/profile-tags/profile-tags.directive';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { NgFor } from '@angular/common';
import { ProfileHeaderDirective } from '../../directives/profile-header/profile-header.directive';
import { ClickOutsideDirective } from '../../directives/click-outside/click-outside.directive';
import { CardStylesDirective } from '../../directives/card-styles/card-styles.directive';
import { XcIconEnvelopeComponent, XcIconLinkedinComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'xc-user-profile-modal',
  standalone: true,
  imports: [
    ProfileTagsDirective,
    RoundedImageModule,
    NgFor,
    ProfileHeaderDirective,
    ClickOutsideDirective,
    CardStylesDirective,
    XcIconLinkedinComponent,
    XcIconEnvelopeComponent
  ],
  templateUrl: './user-profile-modal.component.html',
  styleUrl: './user-profile-modal.component.css',
})
export class UserProfileModalComponent {
  @Input() user: any;
}
