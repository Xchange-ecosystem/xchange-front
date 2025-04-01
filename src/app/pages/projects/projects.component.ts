import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'projects/ngx-xchange-ui/src/components/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { FeedButtonDirective } from 'projects/ngx-xchange-ui/src/directives/feed-button/feed-button.directive';
import { Headline400Directive } from 'projects/ngx-xchange-ui/src/directives/headline-400/headline-400.directive';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';
import { ClickOutsideDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SortByComponent,
    Headline600Directive,
    ProjectsCardComponent,
    XcIconPlusCircleComponent,
    Headline400Directive,
    FeedButtonDirective,
    ClickOutsideDirective,
    NgClass,
    NgFor,
    NgTemplateOutlet
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() steps: number = 3;
  isModalOpen = false;
  

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  changeStep(): void {
    if (this.steps < 3) {
      this.steps++;
      console.log('pasos', this.steps);
    } else {
      console.log('Pasos terminados');
    }
  }

  previousStep(): void {
    if (this.steps > 1) {
      this.steps--;
      console.log('Paso anterior:', this.steps);
    } else {
      console.log('Ya estás en el primer paso');
    }
  }

}