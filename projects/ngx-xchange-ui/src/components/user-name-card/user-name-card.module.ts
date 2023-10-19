import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNameCardComponent } from './user-name-card/user-name-card.component';



@NgModule({
  declarations: [
    UserNameCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserNameCardComponent
  ]
})
export class UserNameCardModule { }
