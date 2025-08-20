import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconArrowRightComponent, XcIconCloseSComponent, XcIconSaveComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { ToggleComponent } from '@xchange-ecosystem/ngx-xchange-ui';
import { TagsModalComponent } from './tags-modal/tags-modal.component';

@Component({
  selector: 'app-apperance',
  standalone: true,
  imports: [
    ToggleComponent,
    XcIconArrowRightComponent,
    XcIconSaveComponent,
    TagsModalComponent,
    NgIf
  ],
  templateUrl: './apperance.component.html',
  styleUrl: './apperance.component.scss'
})
export class ApperanceComponent {
  isTags = false;

  openTagsModal() {
    this.isTags = true;
  }
  closeTagsModal() {
    this.isTags = false;
  }
}
