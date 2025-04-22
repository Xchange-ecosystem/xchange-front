import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XcIconImageComponent, XcIconImagePlusComponent, XcIconSaveComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { ButtonsWrappersDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-edit-image',
  standalone: true,
  imports: [
    ButtonsWrappersDirective,
    NgIf,
    XcIconImageComponent,
    XcIconImagePlusComponent,
    XcIconTimesComponent,
    XcIconSaveComponent,
    CopyStylesDirective,
    HeadlineStylesDirective
  ],
  templateUrl: './edit-image.component.html',
  styleUrl: './edit-image.component.scss'
})

export class EditImageComponent {
  @Input() currentPage:string = 'profile'
  
  isImageOpen=false;

  onImageOpen() {
    this.isImageOpen = true
  }

  onImageClose() {
    this.isImageOpen = false
  }
}
