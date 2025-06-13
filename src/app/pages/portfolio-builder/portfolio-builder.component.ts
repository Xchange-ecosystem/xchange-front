import { Component } from '@angular/core';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio-builder',
  standalone: true,
  imports: [
    PortfolioCardComponent,
    NgFor
  ],
  templateUrl: './portfolio-builder.component.html',
  styleUrl: './portfolio-builder.component.scss'
})
export class PortfolioBuilderComponent {
  portfolios = [
    {
      id: 1,
      title: 'NextGen LLL – Xchange Studio project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://via.placeholder.com/150',
      tags: ['Project Label', 'Project Label', 'Project Label'],
      completed: 12,
      open: 8,
      suggested: 9,
      objectivesInProject: 50,
    },
    {
      id: 2,
      title: 'NextGen LLL – Xchange Studio project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://via.placeholder.com/150',
      tags: ['Project Label', 'Project Label', 'Project Label'],
    },
    {
      id: 3,
      title: 'NextGen LLL – Xchange Studio project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://via.placeholder.com/150',
      tags: ['Project Label', 'Project Label', 'Project Label'],
    },
    {
      id: 4,
      title: 'NextGen LLL – Xchange Studio project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://via.placeholder.com/150',
      tags: ['Project Label', 'Project Label', 'Project Label'],
    },
  ];
}
