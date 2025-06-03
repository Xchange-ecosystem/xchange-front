import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileTagsDirective } from '../../../../../projects/ngx-xchange-ui/src/directives/profile-tags/profile-tags.directive';
import { NgFor, NgIf } from '@angular/common';
import { CardStylesDirective } from '../../../../../projects/ngx-xchange-ui/src/directives/card-styles/card-styles.directive';
import { ProjectModalComponent } from 'src/app/pages/projects/project-modal/project-modal.component';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';
import { XcIconCloseSComponent } from 'projects/ngx-xchange-icons/src/public-api';
import { ProjectProgressBarModule } from 'projects/ngx-xchange-ui/src/public-api';
interface ProjectInterface {
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
  selector: 'xc-projects-card',
  standalone: true,
  imports: [
    ProfileTagsDirective, 
    ProjectProgressBarModule, 
    NgFor, 
    NgIf,
    ProjectModalComponent,
    XcIconCloseSComponent,
    HeadlineStylesDirective,
    CopyStylesDirective
  ],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
  @Input() project!: ProjectInterface;
  @Output() projectSelected = new EventEmitter<ProjectInterface>();

  selectedProject: any = null;

  selectProject(): void {
    this.projectSelected.emit(this.project);
  }

  openModal(project: any) {
    this.selectedProject = project;
  }

  onCloseModal() {
    this.selectedProject = null;
  }
}
