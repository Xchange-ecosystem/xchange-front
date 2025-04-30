import { Component } from '@angular/core';
import { XcIconAmbulanceComponent, XcIconAngleDownComponent, XcIconPlayComponent, XcIconRedoComponent } from '@indziaki/ngx-xchange-icons';
import { CopyStylesDirective, HeadlineStylesDirective, ProfileTagsDirective } from '@indziaki/ngx-xchange-ui';
import { FilterComponent } from './filter/filter.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeadlineStylesDirective,
    FilterComponent,
    XcIconRedoComponent,
    XcIconPlayComponent,
    ProfileTagsDirective,
    XcIconAngleDownComponent,
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isFilterOpen = false
  expandedRow: boolean = false;

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
    },
    {
      title: 'Green Earth Initiative',
      tags: ['Environment', 'NGO'],
      active: 9,
      completed: 18,
      collab: 3,
      proof: 4,
      quality: 5,
      expanded: false,
      subprojects: [
        {
          title: 'Urban Gardens',
          tags: ['Sustainability', 'Community'],
          active: 4,
          completed: 12,
          collab: 6,
          proof: 4,
          quality: 2
        }
      ]
    },
    {
      title: 'AI Optimization Suite',
      tags: ['AI', 'Big Data', 'SaaS'],
      active: 25,
      completed: 40,
      collab: 19,
      proof: 15,
      quality: 4,
      expanded: false,
      subprojects: [
        {
          title: 'Predictive Models',
          tags: ['ML', 'Analytics'],
          active: 10,
          completed: 20,
          collab: 8,
          proof: 9,
          quality: 3
        },
        {
          title: 'Automation Tools',
          tags: ['DevOps', 'Productivity'],
          active: 7,
          completed: 15,
          collab: 4,
          proof: 3,
          quality: 1
        }
      ]
    },
    {
      title: 'Healthcare Platform 2.0',
      tags: ['HealthTech', 'UX'],
      active: 17,
      completed: 30,
      collab: 12,
      proof: 10,
      quality: 3,
      expanded: false,
      subprojects: [
        {
          title: 'Patient Dashboard',
          tags: ['UI', 'Medical'],
          active: 6,
          completed: 14,
          collab: 3,
          proof: 2,
          quality: 1
        }
      ]
    },
    {
      title: 'E-learning Portal',
      tags: ['Education', 'eLearning'],
      active: 14,
      completed: 23,
      collab: 6,
      proof: 5,
      quality: 2,
      expanded: false,
      subprojects: []
    },
    {
      title: 'Startup Incubator',
      tags: ['Business', 'Startup', 'Funding'],
      active: 20,
      completed: 11,
      collab: 10,
      proof: 7,
      quality: 1,
      expanded: false,
      subprojects: [
        {
          title: 'Pitch Coaching',
          tags: ['Mentorship', 'Public Speaking'],
          active: 5,
          completed: 6,
          collab: 2,
          proof: 1,
          quality: 1
        },
        {
          title: 'MVP Development',
          tags: ['Prototyping', 'Agile'],
          active: 8,
          completed: 3,
          collab: 4,
          proof: 2,
          quality: 0
        }
      ]
    }
  ];
  

  optionSelected(value:any){
    console.log("seleccion hecha",value)
  }
  
  toggleExpand(index: number) {
    this.projects[index].expanded = !this.projects[index].expanded;
  }
  
  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }
}
