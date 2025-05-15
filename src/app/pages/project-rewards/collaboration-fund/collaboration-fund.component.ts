import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconArrowToRightComponent, XcIconArrowUpRightComponent, XcIconFileUploadComponent, XcIconPaperclipComponent, XcIconSaveComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective, RoundedImageModule } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-collaboration-fund',
  standalone: true,
  imports: [
    NgIf,
    ProfileTagsDirective,
    XcIconFileUploadComponent,
    XcIconPaperclipComponent,
    XcIconTimesComponent,
    XcIconSaveComponent,
    XcIconArrowUpRightComponent,
    RoundedImageModule
  ],
  templateUrl: './collaboration-fund.component.html',
  styleUrl: './collaboration-fund.component.scss'
})
export class CollaborationFundComponent {
  isFundSet = true;
}
