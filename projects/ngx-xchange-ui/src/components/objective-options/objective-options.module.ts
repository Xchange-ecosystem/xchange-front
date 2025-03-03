import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveOptionsComponent } from './objective-options/objective-options.component';
import { MainHeadingModule } from 'dist/ngx-xchange-ui/public-api';
import { XcIconAddComponent, XcIconCopyComponent, XcIconEditComponent, XcIconFileShareAltComponent, XcIconTrashComponent } from '@indziaki/ngx-xchange-icons';



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
