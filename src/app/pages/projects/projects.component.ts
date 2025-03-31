import { Component } from '@angular/core';
import { XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { CreateProjectComponent } from 'projects/ngx-xchange-ui/src/components/create-project/create-project.component';
import { ProjectsCardComponent } from 'projects/ngx-xchange-ui/src/components/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SortByComponent, Headline600Directive, ProjectsCardComponent, XcIconPlusCircleComponent, CreateProjectComponent],
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
