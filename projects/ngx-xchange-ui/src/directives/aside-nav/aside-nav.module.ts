import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavDirective } from './aside-nav.directive';



@NgModule({
  declarations: [
    AsideNavDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideNavDirective
  ]
})
export class AsideNavModule { }
