import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveOptionsComponent } from './objective-options/objective-options.component';
import { XcIconAddComponent, XcIconCopyComponent, XcIconEditComponent, XcIconFileShareAltComponent, XcIconTrashComponent } from '@indziaki/ngx-xchange-icons';
import { MainHeadingModule } from '../../public-api';
import { XcIconBanComponent } from 'projects/ngx-xchange-icons/src/public-api';



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
