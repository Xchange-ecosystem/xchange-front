import { Component } from '@angular/core';
import { XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'projects/ngx-xchange-ui/src/components/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { CardStylesDirective } from 'projects/ngx-xchange-ui/src/directives/card-styles/card-styles.directive';
import { FeedButtonDirective } from 'projects/ngx-xchange-ui/src/directives/feed-button/feed-button.directive';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SortByComponent, Headline600Directive, ProjectsCardComponent,CardStylesDirective,XcIconPlusCircleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
