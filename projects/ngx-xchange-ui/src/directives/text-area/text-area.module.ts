  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaDirective } from './text-area.directive';



@NgModule({
  declarations: [
    TextAreaDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TextAreaDirective
  ]
})
export class TextAreaModule { }
