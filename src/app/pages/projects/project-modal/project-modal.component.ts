import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XcIconArrowRightComponent } from '@indziaki/ngx-xchange-icons';
import { Headline300Directive } from 'projects/ngx-xchange-ui/src/directives/headline-300/headline-300.directive';
import { Headline500Directive } from 'projects/ngx-xchange-ui/src/directives/headline-500/headline-500.directive';
import { ProfileTagsDirective, ProjectProgressBarModule } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [Headline300Directive,XcIconArrowRightComponent,ProjectProgressBarModule,ProfileTagsDirective,Headline500Directive],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() project: any;
  @Output() projectClick = new EventEmitter<any>();

  onProjectClick(project: any): void {
    this.projectClick.emit(project);
  }
}
