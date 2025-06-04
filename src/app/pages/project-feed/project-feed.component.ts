import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconAngleDownComponent, XcIconCloseSComponent, XcIconEyeComponent, XcIconSaveComponent, XcIconSendComponent, XcIconTimesComponent, XcIconUserPlusComponent } from '@indziaki/ngx-xchange-icons';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-project-feed',
  standalone: true,
  imports: [
    NgIf,
    RoundedImageModule,
    XcIconTimesComponent,
    XcIconAngleDownComponent,
    XcIconUserPlusComponent,
    XcIconEyeComponent,
    XcIconSendComponent,
  ],
  templateUrl: './project-feed.component.html',
  styleUrl: './project-feed.component.scss'
})
export class ProjectFeedComponent {
  isDropdownOpen = false;
  isModalOpen = true;
  @Output() close = new EventEmitter<void>();

  closeDescriptionModal() {
    this.close.emit() ;
  }
}
