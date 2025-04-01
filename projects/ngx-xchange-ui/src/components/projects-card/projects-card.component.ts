import { Component, Input } from '@angular/core';
import { ProfileTagsDirective } from '../../directives/profile-tags/profile-tags.directive';
import { ProjectProgressBarModule } from '@indziaki/ngx-xchange-ui';
import { NgFor, NgIf } from '@angular/common';
import { CardStylesDirective } from '../../directives/card-styles/card-styles.directive';

@Component({
  selector: 'xc-projects-card',
  standalone: true,
  imports: [ProfileTagsDirective, ProjectProgressBarModule, NgFor, CardStylesDirective,NgIf],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
  @Input() metrics: boolean = true;
  @Input() objectives: boolean = true;
  public projects = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project A",
      completed: 20,
      open: 10,
      suggested: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project B",
      completed: 50,
      open: 20,
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project A",
      completed: 20,
      open: 10,
      suggested: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIuKHHeS7DE9kplbdGaHTZlQL92-_x8j4Bw&s",
      title: "Project B",
      completed: 50,
      open: 20,
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Health", "Entrepreneur"],
    }
  ]

  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }
  closeModal() {
    this.selectedProject = null;
  }
}
