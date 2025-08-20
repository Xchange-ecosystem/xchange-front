import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconPlayComponent, XcIconStarComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { ProjectProgressBarModule } from '@xchange-ecosystem/ngx-xchange-ui';

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgIf,
    ProjectProgressBarModule,
    XcIconPlayComponent,
    XcIconStarComponent
  ],
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.scss'
})
export class ProjectDashboardComponent {
  section: string = 'Operations';
  
  sections = [
    'Operations', 
    'Value', 
    'Pitch',
  ];

  Indicators = [
    {
      title:"Bussines",
      subindicator:[
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        },
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        },
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        },
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        }
      ],
      expanded:false,
    },
    {
      title:"Market",
      subindicator:[
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        },
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        },
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        },
        {
          title:"Basic Stategy",
          open:25,
          completed:4,
          total:44,
          collaborations:12,
          proof:4,
        }
      ],
      expanded:false,
    },
  ]

  changeSection(section: string): void {
    this.section = section;
  }
}
