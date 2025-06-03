import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import {ButtonsWrappersDirective, ProfileTagsDirective,ProjectProgressBarModule,} from 'projects/ngx-xchange-ui/src/public-api';
import { ProjectHeaderComponent } from '../project-header/project-header.component';
import { XcIconArrowRightComponent, XcIconCheckComponent, XcIconCloseSComponent } from 'projects/ngx-xchange-icons/src/public-api';
export interface ProjectInterface {
  image: string;
  title: string;
  tags: string[];
  objectivesInProject:number
  completed: number;
  open: number;
  suggested: number;
  description: string;
  proofs: number;
  collaborations: number;
  value: number;
}
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    HeadlineStylesDirective,
    XcIconArrowRightComponent,
    ProjectProgressBarModule,
    ProfileTagsDirective,
    NgIf,
    NgFor,
    XcIconCheckComponent,
    XcIconCloseSComponent,
    ProjectHeaderComponent,
    ButtonsWrappersDirective
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  @Input() project!: ProjectInterface;
  @Input() invitation: boolean = false;
  @Output() close:EventEmitter<void>=new EventEmitter<void> () 

  onCloseModal(): void {
    this.close.emit();
  }
}
