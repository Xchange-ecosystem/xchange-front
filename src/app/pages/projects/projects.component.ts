import { Component} from '@angular/core';
import { XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'projects/ngx-xchange-ui/src/components/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';
import { StepperComponent } from './stepper/stepper.component';
import { ClickOutsideDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SortByComponent,
    Headline600Directive,
    ProjectsCardComponent,
    XcIconPlusCircleComponent,
    StepperComponent,
    ClickOutsideDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }
}