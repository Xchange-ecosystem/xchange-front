import { Component } from '@angular/core';
import { XcIconAmbulanceComponent, XcIconPlayComponent, XcIconRedoComponent } from '@indziaki/ngx-xchange-icons';
import { CopyStylesDirective, HeadlineStylesDirective, ProfileTagsDirective } from '@indziaki/ngx-xchange-ui';
import { FilterComponent } from './filter/filter.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeadlineStylesDirective,
    FilterComponent,
    XcIconRedoComponent,
    XcIconPlayComponent,
    ProfileTagsDirective,
    NgClass,
    NgFor
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  expandedRow: boolean = false;

  toggleExpand(index: number) {
    this.projects[index].expanded = !this.projects[index].expanded;
  }
  

  options1 = [
    {label:"test"},
    {label:"test"},
    {label:"test"}
  ]
  options2 = [
    {label:"test"},
    {label:"test"},
    {label:"test"}
  ]
  options3 = [
    {label:"test"},
    {label:"test"},
    {label:"test"}
  ]

  projects = [
    {
      title: 'NextGen LLL (old template)',
      tags: ['Education', 'UX', 'Development'],
      active: 12,
      completed: 1,
      collab: 0,
      proof: 0,
      quality: 0,
      expanded: false,
      subprojects: [
        {
          title: 'Finance',
          tags: ['Health', 'ONG', 'Entrepeneur'],
          active: 12,
          completed: 29,
          collab: 23,
          proof: 21,
          quality: 2
        },
        {
          title: 'Business',
          tags: ['Design', 'UX'],
          active: 8,
          completed: 10,
          collab: 5,
          proof: 3,
          quality: 1
        },
        {
          title: 'Tech Development',
          tags: ['Tech', 'Research', 'AI'],
          active: 18,
          completed: 9,
          collab: 14,
          proof: 6,
          quality: 0
        }
      ]
    },
    {
      title: 'Project Alpha',
      tags: ['Research', 'Science'],
      active: 5,
      completed: 15,
      collab: 2,
      proof: 7,
      quality: 3,
      expanded: false,
      subprojects: []
    }
  ];

  optionSelected(value:any){
    console.log("seleccion hecha",value)
  }
}
