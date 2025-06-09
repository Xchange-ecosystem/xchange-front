import { ChangeDetectorRef, Component} from '@angular/core';
import { ProjectsCardComponent } from 'src/app/pages/projects/projects-card/projects-card.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';
import { StepperComponent } from './stepper/stepper.component';
import { ButtonsWrappersDirective, ClickOutsideDirective } from 'projects/ngx-xchange-ui/src/public-api';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { NgFor, NgIf } from '@angular/common';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { SectionTabComponent } from 'projects/ngx-xchange-ui/src/components/section-tab/section-tab.component';
import { XcIconPlusCircleComponent, XcIconCloseSComponent } from 'projects/ngx-xchange-icons/src/public-api';
interface ProjectInterface {
  image: string;
  title: string;
  tags: string[];
  objectivesInProject:number
  completed: number;
  open: number;
  suggested: number;
  description: string;
  proofs: number;
  collaborations: number;
  value: number;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ButtonsWrappersDirective,
    HeadlineStylesDirective,
    SortByComponent,
    Headline600Directive,
    ProjectsCardComponent,
    StepperComponent,
    ClickOutsideDirective,
    ProjectModalComponent,
    NgIf,
    NgFor,
    XcIconPlusCircleComponent,
    SectionTabComponent,
    XcIconCloseSComponent,
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
    this.selectedProject = project;
    this.isProjectOpen = true;
  }

  closeProjectModal(): void {
    this.isProjectOpen = false;
    this.selectedProject = null;
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

  onSectionSelected(section: string): void {
    // Aplicar el filtro para los proyectos que bajen de API
  }
  
  sections = [
    { name: 'All projects', hasNotifications: false },
    { name: 'My projects', hasNotifications: false },
    { name: 'Collaborations', hasNotifications: false },
  ];
  public projects:ProjectInterface[] = [
    {
      image: "https://static.igem.org/mediawiki/2015/2/26/Amoy-MenuBar-bg.jpg",
      title: "Health Revolution",
      completed: 15,
      open: 5,
      suggested: 3,
      objectivesInProject: 23,
      description: "Transformando el bienestar a través de la innovación tecnológica.",
      proofs: 40,
      collaborations: 8,
      value: 180000,
      tags: ["Health", "Innovation"]
    },
    {
      image: "https://static.igem.org/mediawiki/2015/2/26/Amoy-MenuBar-bg.jpg",
      title: "Green Energy Hub",
      completed: 18,
      open: 12,
      suggested: 5,
      objectivesInProject: 30,
      description: "Un centro para el desarrollo de energías limpias y sostenibles.",
      proofs: 78,
      collaborations: 10,
      value: 245000,
      tags: ["Sustainability", "Energy"]
    },
    {
      image: "https://static.igem.org/mediawiki/2015/2/26/Amoy-MenuBar-bg.jpg",
      title: "Mindful App",
      completed: 25,
      open: 4,
      suggested: 1,
      objectivesInProject: 28,
      description: "Aplicación móvil para la meditación guiada y seguimiento de emociones.",
      proofs: 95,
      collaborations: 5,
      value: 172000,
      tags: ["Health", "Mobile", "Wellness"]
    },
    {
      image: "https://static.igem.org/mediawiki/2015/2/26/Amoy-MenuBar-bg.jpg",
      title: "NextGen Learning",
      completed: 30,
      open: 2,
      suggested: 3,
      objectivesInProject: 35,
      description: "Plataforma de aprendizaje personalizado para escuelas primarias.",
      proofs: 60,
      collaborations: 7,
      value: 199000,
      tags: ["Education", "Tech"]
    },
    {
      image: "https://static.igem.org/mediawiki/2015/2/26/Amoy-MenuBar-bg.jpg",
      title: "Wallet Pro",
      completed: 12,
      open: 8,
      suggested: 2,
      objectivesInProject: 20,
      description: "Gestión de finanzas personales con IA integrada.",
      proofs: 40,
      collaborations: 4,
      value: 90000,
      tags: ["Finance", "AI"]
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BjPBNcMii0YFSF0jaPgjXlocjdqfkutl6L2FGAWtieYW5frcsnXEQtkkrQKy7qRwZi8&usqp=CAU",
      title: "CollabSpace",
      completed: 27,
      open: 6,
      suggested: 2,
      objectivesInProject: 33,
      description: "Plataforma para colaboración remota entre equipos distribuidos.",
      proofs: 87,
      collaborations: 12,
      value: 312000,
      tags: ["Collaboration", "Remote Work"]
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BjPBNcMii0YFSF0jaPgjXlocjdqfkutl6L2FGAWtieYW5frcsnXEQtkkrQKy7qRwZi8&usqp=CAU",
      title: "Urban Farming Lab",
      completed: 10,
      open: 14,
      suggested: 5,
      objectivesInProject: 29,
      description: "Laboratorio urbano para cultivar alimentos en espacios reducidos.",
      proofs: 54,
      collaborations: 3,
      value: 134000,
      tags: ["Agriculture", "Urban", "Sustainability"]
    },
    {
      image: "https://img.freepik.com/free-vector/abstract-blue-background_698452-2913.jpg",
      title: "RoboTutor",
      completed: 14,
      open: 9,
      suggested: 4,
      objectivesInProject: 24,
      description: "Tutor robótico para apoyar a niños con TDAH.",
      proofs: 38,
      collaborations: 6,
      value: 158000,
      tags: ["Education", "AI", "Robotics"]
    },
    {
      image: "https://img.freepik.com/free-vector/abstract-blue-background_698452-2913.jpg",
      title: "TeleMed Platform",
      completed: 22,
      open: 3,
      suggested: 1,
      objectivesInProject: 20,
      description: "Atención médica remota para comunidades rurales.",
      proofs: 72,
      collaborations: 9,
      value: 210000,
      tags: ["Health", "Telemedicine"]
    },
    {
      image: "https://img.freepik.com/free-vector/abstract-blue-background_698452-2913.jpg",
      title: "Neural Market",
      completed: 13,
      open: 11,
      suggested: 3,
      objectivesInProject: 26,
      description: "Predicción de mercados financieros usando redes neuronales.",
      proofs: 66,
      collaborations: 5,
      value: 288000,
      tags: ["Finance", "AI"]
    },
    {
      image: "https://img.freepik.com/free-vector/abstract-blue-background_698452-2913.jpg",
      title: "FitZen",
      completed: 20,
      open: 6,
      suggested: 2,
      objectivesInProject: 27,
      description: "Bienestar físico y mental para oficinas remotas.",
      proofs: 58,
      collaborations: 6,
      value: 176000,
      tags: ["Fitness", "Remote", "Health"]
    },
    {
      image: "https://kappanonline.org/wp-content/uploads/2024/03/PDK_104_2_Feat_Wolk.png",
      title: "BeatHive",
      completed: 8,
      open: 14,
      suggested: 6,
      objectivesInProject: 22,
      description: "Colaboración musical online entre artistas.",
      proofs: 47,
      collaborations: 11,
      value: 123000,
      tags: ["Music", "Art", "Tech"]
    },
    {
      image: "https://kappanonline.org/wp-content/uploads/2024/03/PDK_104_2_Feat_Wolk.png",
      title: "EcoWear",
      completed: 16,
      open: 8,
      suggested: 1,
      objectivesInProject: 25,
      description: "Moda sostenible y reciclable con tecnología RFID.",
      proofs: 50,
      collaborations: 7,
      value: 198000,
      tags: ["Fashion", "Sustainability"]
    },
    {
      image: "https://wallpapers.com/images/hd/black-solid-background-1920-x-1200-5oxf28vjuy02zl9k.jpg",
      title: "BrainTrain",
      completed: 19,
      open: 4,
      suggested: 2,
      objectivesInProject: 21,
      description: "Videojuegos educativos para mejorar la memoria.",
      proofs: 42,
      collaborations: 4,
      value: 167000,
      tags: ["Games", "Education"]
    },
    {
      image: "https://kappanonline.org/wp-content/uploads/2024/03/PDK_104_2_Feat_Wolk.png",
      title: "SmartBuild",
      completed: 23,
      open: 5,
      suggested: 1,
      objectivesInProject: 28,
      description: "Construcción inteligente con sensores IoT.",
      proofs: 74,
      collaborations: 10,
      value: 295000,
      tags: ["Architecture", "IoT"]
    },
    {
      image: "https://wallpapers.com/images/hd/black-solid-background-1920-x-1200-5oxf28vjuy02zl9k.jpg",
      title: "ChainVote",
      completed: 12,
      open: 7,
      suggested: 2,
      objectivesInProject: 19,
      description: "Sistema de votación descentralizado con blockchain.",
      proofs: 48,
      collaborations: 5,
      value: 186000,
      tags: ["Blockchain", "Politics"]
    },
    {
      image: "https://wallpapers.com/images/hd/black-solid-background-1920-x-1200-5oxf28vjuy02zl9k.jpg",
      title: "CareCircle",
      completed: 26,
      open: 3,
      suggested: 2,
      objectivesInProject: 30,
      description: "Red de apoyo emocional comunitaria.",
      proofs: 88,
      collaborations: 12,
      value: 225000,
      tags: ["Health", "Community"]
    },
    {
      image: "https://wallpapers.com/images/hd/black-solid-background-1920-x-1200-5oxf28vjuy02zl9k.jpg",
      title: "SmartFoodie",
      completed: 10,
      open: 6,
      suggested: 4,
      objectivesInProject: 18,
      description: "App que recomienda menús según tus objetivos de salud.",
      proofs: 35,
      collaborations: 3,
      value: 101000,
      tags: ["Food", "AI", "Health"]
    },
    {
      image: "https://wallpapers.com/images/hd/black-solid-background-1920-x-1200-5oxf28vjuy02zl9k.jpg",
      title: "Wanderlust App",
      completed: 21,
      open: 7,
      suggested: 1,
      objectivesInProject: 25,
      description: "Planificación de viajes con experiencias locales.",
      proofs: 63,
      collaborations: 8,
      value: 194000,
      tags: ["Travel", "Lifestyle"]
    },
    {
      image: "https://wallpapers.com/images/hd/black-solid-background-1920-x-1200-5oxf28vjuy02zl9k.jpg",
      title: "PetBuddy",
      completed: 17,
      open: 5,
      suggested: 3,
      objectivesInProject: 24,
      description: "App para el cuidado de mascotas y conexión con veterinarios.",
      proofs: 51,
      collaborations: 5,
      value: 143000,
      tags: ["Pets", "Health", "Service"]
    }
  ];
}