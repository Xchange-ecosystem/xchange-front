import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import { XcIconGrayStarComponent, XcIconYellowStarComponent, XcIconCustomStarComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@NgModule({
  declarations: [
    RateComponent
  ],
  imports: [
    CommonModule,
    XcIconYellowStarComponent,
    XcIconGrayStarComponent,
    XcIconCustomStarComponent,
  ],
  exports:[
    RateComponent
  ]
})
export class RateModule { }
