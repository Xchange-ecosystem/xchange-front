import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavDirective } from './header-nav.directive';



@NgModule({
  declarations: [
    HeaderNavDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderNavDirective
  ]
})
export class HeaderNavModule { }
