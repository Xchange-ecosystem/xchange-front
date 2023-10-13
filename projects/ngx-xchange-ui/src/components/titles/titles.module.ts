import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from './titles/titles.component';
import { MainHeadingModule } from '../../directives/main-heading/main-heading.module';



@NgModule({
  declarations: [
    TitlesComponent
  ],
  imports: [
    CommonModule,
    MainHeadingModule
  ],
  exports: [
    TitlesComponent
  ]
})
export class TitlesModule { }
