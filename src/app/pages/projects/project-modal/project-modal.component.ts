import { Component } from '@angular/core';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [UserHeaderComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {

}
