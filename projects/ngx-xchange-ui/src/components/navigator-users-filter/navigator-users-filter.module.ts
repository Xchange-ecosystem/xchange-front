import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorUsersFilterComponent } from './navigator-users-filter/navigator-users-filter.component';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { CheckRoundedButtonModule } from '../check-rounded-button/check-rounded-button.module';
import { XcIconCheckComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';



@NgModule({
  declarations: [
    NavigatorUsersFilterComponent
  ],
  imports: [
    CommonModule,
    RoundedImageModule,
    CheckRoundedButtonModule,
    XcIconTimesComponent,
    XcIconCheckComponent
  ],
  exports:[
    NavigatorUsersFilterComponent
  ]
})
export class NavigatorUsersFilterModule { }
