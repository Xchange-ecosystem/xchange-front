import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectProgressBarComponent } from './project-progress-bar/project-progress-bar.component';

@NgModule({
  declarations: [
    ProjectProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectProgressBarComponent
  ]
})
export class ProjectProgressBarModule { }
