import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconArrowRightComponent, XcIconCopyComponent, XcIconImagePlusComponent, XcIconSaveComponent, XcIconTrashComponent } from '@indziaki/ngx-xchange-icons';
import { ToggleComponent } from '@indziaki/ngx-xchange-ui';
import { SuspendModalComponent } from './suspend-modal/suspend-modal.component';
import { TagsModalComponent } from './tags-modal/tags-modal.component';

@Component({
  selector: 'app-apperance',
  standalone: true,
  imports: [
    NgIf,
    ToggleComponent,
    XcIconArrowRightComponent,
    XcIconImagePlusComponent,
    XcIconCopyComponent,
    XcIconTrashComponent,
    XcIconSaveComponent,
    SuspendModalComponent,
    TagsModalComponent
  ],
  templateUrl: './apperance.component.html',
  styleUrl: './apperance.component.scss'
})
export class ApperanceComponent {
  isTagsOpen = false;
  isSuspend = false;

  openTagsModal() {
    this.isTagsOpen = true;
  }
  openSuspendModal () {
    this.isSuspend = true;
  }

  handleSuspendModalClose() {
    this.isSuspend = false
  } 
  handleTagsModalClose() {
    this.isTagsOpen = false;
  }
}
