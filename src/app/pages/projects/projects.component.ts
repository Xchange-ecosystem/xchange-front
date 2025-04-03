import { ChangeDetectorRef, Component} from '@angular/core';
import { XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'projects/ngx-xchange-ui/src/components/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';
import { StepperComponent } from './stepper/stepper.component';
import { ClickOutsideDirective } from 'projects/ngx-xchange-ui/src/public-api';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SortByComponent,
    Headline600Directive,
    ProjectsCardComponent,
    XcIconPlusCircleComponent,
    StepperComponent,
    ClickOutsideDirective,
    ProjectModalComponent,
    NgIf,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isProjectOpen = false;
  isModalOpen = false;
  selectedProject: any = null;

  openProject(project:any): void {
    this.selectedProject = project;
  }

  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }
}