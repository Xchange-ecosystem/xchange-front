import { Component } from '@angular/core';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { FeedButtonDirective } from 'projects/ngx-xchange-ui/src/directives/feed-button/feed-button.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SortByComponent,FeedButtonDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
