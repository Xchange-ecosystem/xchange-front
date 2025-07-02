import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckRoundedButtonComponent } from './check-rounded-button/check-rounded-button.component';
import { XcIconCheckComponent } from '@indziaki/ngx-xchange-icons';



@NgModule({
  declarations: [
    CheckRoundedButtonComponent
  ],
  imports: [
    CommonModule,
    XcIconCheckComponent
  ],
  exports: [
    CheckRoundedButtonComponent
  ]
})
export class CheckRoundedButtonModule { }
