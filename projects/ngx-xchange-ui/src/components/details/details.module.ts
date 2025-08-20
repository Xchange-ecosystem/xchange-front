import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { XcIconAngleDownComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    XcIconAngleDownComponent
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
