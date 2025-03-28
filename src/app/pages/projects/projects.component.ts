import { Component } from '@angular/core';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SortByComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
