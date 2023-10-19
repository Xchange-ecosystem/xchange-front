import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagDirective } from './tag.directive';



@NgModule({
  declarations: [
    TagDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TagDirective
  ]
})
export class TagModule { }
