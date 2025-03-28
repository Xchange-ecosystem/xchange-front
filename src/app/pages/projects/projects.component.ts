import { Component } from '@angular/core';
import { ProjectsCardComponent } from 'projects/ngx-xchange-ui/src/components/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { FeedButtonDirective } from 'projects/ngx-xchange-ui/src/directives/feed-button/feed-button.directive';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';
import { ProfileHeaderDirective } from 'projects/ngx-xchange-ui/src/directives/profile-header/profile-header.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SortByComponent, FeedButtonDirective, Headline600Directive, ProjectsCardComponent,ProfileHeaderDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
