import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleDirective } from './tittle.directive';
@NgModule({
  declarations: [
    [TittleDirective]
  ],
  imports: [
    CommonModule
  ]
})
export class TittleModule { }
