import { Component } from '@angular/core';
import { HeaderBackgroundComponent } from 'projects/ngx-xchange-ui/src/components/header-background/header-background.component';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [
    HeaderBackgroundComponent,
  ],
  templateUrl: './project-header.component.html',
  styleUrl: './project-header.component.scss'
})
export class ProjectHeaderComponent {

}
