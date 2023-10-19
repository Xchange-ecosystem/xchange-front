import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponentComponent } from './tag-component/tag-component.component';
import { TagModule } from '../../directives/tag/tag.module';



@NgModule({
  declarations: [
    TagComponentComponent
  ],
  imports: [
    CommonModule,
    TagModule
  ], 
  exports: [
    TagComponentComponent
  ]
})
export class TagComponentModule { }
