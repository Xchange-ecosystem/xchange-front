import { Component } from '@angular/core';
import { XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'projects/ngx-xchange-ui/src/components/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Headline400Directive } from 'projects/ngx-xchange-ui/src/directives/headline-400/headline-400.directive';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SortByComponent, Headline600Directive, ProjectsCardComponent, XcIconPlusCircleComponent, Headline400Directive],
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
