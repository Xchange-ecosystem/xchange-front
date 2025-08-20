import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveOptionsComponent } from './objective-options/objective-options.component';
import { XcIconAddComponent, XcIconCopyComponent, XcIconEditComponent, XcIconFileShareAltComponent, XcIconTrashComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { MainHeadingModule } from '../../directives/main-heading/main-heading.module';




@NgModule({
  declarations: [
    ObjectiveOptionsComponent
  ],
  imports: [
    CommonModule,
    MainHeadingModule,
    XcIconEditComponent,
    XcIconCopyComponent,
    XcIconFileShareAltComponent,
    XcIconTrashComponent,
    XcIconAddComponent
  ],
  exports: [
    ObjectiveOptionsComponent
  ]
})
export class ObjectiveOptionsModule { }
