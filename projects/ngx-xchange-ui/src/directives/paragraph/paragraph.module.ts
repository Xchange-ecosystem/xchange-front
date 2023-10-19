import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphDirective } from './paragraph.directive';



@NgModule({
  declarations: [
    ParagraphDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParagraphDirective
  ]
})
export class ParagraphModule { }
