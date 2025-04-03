import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XcIconArrowRightComponent } from '@indziaki/ngx-xchange-icons';
import { CardStylesDirective, ProjectProgressBarModule } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CardStylesDirective,XcIconArrowRightComponent,ProjectProgressBarModule],
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
