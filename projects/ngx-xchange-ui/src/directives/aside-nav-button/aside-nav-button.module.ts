import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavButtonDirective } from './aside-nav-button.directive';



@NgModule({
  declarations: [
    AsideNavButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideNavButtonDirective
  ]
})
export class AsideNavButtonModule { }
