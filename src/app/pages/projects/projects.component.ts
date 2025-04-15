import { ChangeDetectorRef, Component} from '@angular/core';
import { XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'src/app/pages/projects/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';
import { StepperComponent } from './stepper/stepper.component';
import { ClickOutsideDirective } from 'projects/ngx-xchange-ui/src/public-api';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
export interface ProjectInterface {
  image: string;
  title: string;
  tags: string[];
  objectivesInProject:number
  completed: number;
  open: number;
  suggested: number;
  description: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SortByComponent,
    Headline600Directive,
    ProjectsCardComponent,
    StepperComponent,
    ClickOutsideDirective,
    ProjectModalComponent,
    NgIf,
    NgClass,
    NgFor,
    XcIconPlusCircleComponent,
    HeadlineStylesDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isProjectOpen = false;
  isModalOpen = false;
  selectedProject: any = null;
  selectedButton: string = 'all';
  
  openProject(project: ProjectInterface): void {
    console.log('Proyecto seleccionado:', project);
    this.selectedProject = project;
  }

  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }

  selectButton(button: string): void {
    this.selectedButton = button;
  }

  public projects:ProjectInterface[] = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project A",
      completed: 20,
      open: 10,
      suggested: 2,
      objectivesInProject:26,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project B",
      completed: 50,
      open: 20,
      objectivesInProject:60,
      suggested: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project C",
      completed: 80,
      open: 30,
      suggested: 10,
      objectivesInProject:30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project C",
      completed: 80,
      open: 30,
      suggested: 10,
      objectivesInProject:30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project A",
      completed: 20,
      open: 10,
      suggested: 2,
      objectivesInProject:26,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project B",
      completed: 50,
      open: 20,
      objectivesInProject:60,
      suggested: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project C",
      completed: 80,
      open: 30,
      suggested: 10,
      objectivesInProject:30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project C",
      completed: 80,
      open: 30,
      suggested: 10,
      objectivesInProject:30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
  ]
}