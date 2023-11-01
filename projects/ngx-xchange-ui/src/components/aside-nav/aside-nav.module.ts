import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import {XcIconAngleRightBComponent, XcIconAngleLeftBComponent} from '@indziaki/ngx-xchange-icons'

@NgModule({
  declarations: [
    AsideNavComponent
  ],
  imports: [
    CommonModule,
    XcIconAngleRightBComponent,
    XcIconAngleLeftBComponent,
  ],
  exports:[AsideNavComponent]
})
export class AsideNavModule { }
