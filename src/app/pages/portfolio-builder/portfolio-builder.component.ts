import { Component } from '@angular/core';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { NgFor } from '@angular/common';
import { PortfolioInterface } from './portfolio.interface';

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
  portfolios: PortfolioInterface[] = [
    {
      id: 1,
      title: 'NextGen LLL – Xchange Studio project',
      description: 'OneLife is the HealthTech Ecosphere of Xchange with a focus on holistic, self-determined individual health. The project is designed as a platform between individual users, healthcare professionals and third parties.',
      image: 'assets/img/user-modal-background.webp',
      tags: ['HealthTech', 'Platform', 'Healthcare'],
      completed: 12,
      open: 8,
      suggested: 9,
      objectivesInProject: 50,
      projectValue: 83814,
      collaborationValue: 83814,
      collaborators: 18,
      quality: 78,
      proof: 38
    },
    {
      id: 2,
      title: 'Smart City Solutions',
      description: 'Innovative urban development project focusing on sustainable infrastructure and smart technology integration for modern cities.',
      image: 'assets/img/user-modal-background.webp',
      tags: ['SmartCity', 'Infrastructure', 'Technology'],
      completed: 15,
      open: 5,
      suggested: 7,
      objectivesInProject: 45,
      projectValue: 75000,
      collaborationValue: 65000,
      collaborators: 15,
      quality: 85,
      proof: 25
    },
    {
      id: 3,
      title: 'Green Energy Initiative',
      description: 'Sustainable energy project aimed at reducing carbon footprint and promoting renewable energy sources in urban areas.',
      image: 'assets/img/user-modal-background.webp',
      tags: ['GreenEnergy', 'Sustainability', 'Renewable'],
      completed: 20,
      open: 10,
      suggested: 12,
      objectivesInProject: 60,
      projectValue: 92000,
      collaborationValue: 78000,
      collaborators: 22,
      quality: 92,
      proof: 45
    },
    {
      id: 4,
      title: 'Digital Education Platform',
      description: 'Revolutionary educational platform that combines AI and interactive learning to provide personalized education experiences.',
      image: 'assets/img/user-modal-background.webp',
      tags: ['Education', 'AI', 'Learning'],
      completed: 8,
      open: 4,
      suggested: 6,
      objectivesInProject: 30,
      projectValue: 65000,
      collaborationValue: 55000,
      collaborators: 12,
      quality: 75,
      proof: 20
    }
  ];
}
